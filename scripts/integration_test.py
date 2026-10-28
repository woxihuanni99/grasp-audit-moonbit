#!/usr/bin/env python3
"""Integration + independent randomized oracle checks. No third-party modules."""
import csv
import io
import json
import random
import subprocess
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BINARY = ROOT / '_build/js/release/build/cmd/grasp-audit/grasp-audit.js'
HEADER = 'trial,policy,time_ms,held,perturbation\n'


def cli(*args, stdin=None):
    return subprocess.run(['node', str(BINARY), *args], input=stdin,
                          capture_output=True, cwd=ROOT)


def oracle(samples, horizon=1000, dwell=200, max_gap=250):
    """Independent specification implementation for already-valid trials."""
    event_i = next(i for i, (_, _, marker) in enumerate(samples) if marker)
    event = samples[event_i][0]
    end = event + horizon
    if event - samples[event_i - 1][0] > max_gap:
        return 'censored', None, 'baseline_gap'
    if samples[-1][0] < end:
        return 'censored', None, 'incomplete_horizon'
    relevant = samples[event_i:]
    if any(b[0] - a[0] > max_gap for a, b in zip(relevant, relevant[1:]) if a[0] < end):
        return 'censored', None, 'sample_gap'
    window = [(time, held) for time, held, _ in relevant if time <= end]
    if all(held for _, held in window):
        return 'retained', None, 'held_through_horizon'
    if window[-1][1]:
        start = len(window) - 1
        while start > 0 and window[start - 1][1]:
            start -= 1
        if end - window[start][0] >= dwell:
            return 'recovered', window[start][0] - event, 'final_run_meets_dwell'
    return 'unrecovered', None, 'no_sustained_final_recovery'


class CLIIntegration(unittest.TestCase):
    def test_help_and_version(self):
        self.assertIn(b'GraspAudit', cli('--help').stdout)
        self.assertEqual(cli('--version').stdout, b'grasp-audit 0.1.0\n')

    def test_golden_json(self):
        result = cli('examples/synthetic.csv', '--format', 'json')
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(json.loads(result.stdout), json.loads((ROOT / 'examples/expected-report.json').read_text()))
        self.assertEqual(json.loads(result.stdout)['policies'][0]['complete'], 3)

    def test_golden_markdown(self):
        result = cli('examples/synthetic.csv')
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(result.stdout.decode(), (ROOT / 'examples/expected-report.md').read_text())

    def test_csv_rows(self):
        result = cli('examples/synthetic.csv', '--format', 'csv')
        rows = list(csv.DictReader(io.StringIO(result.stdout.decode())))
        self.assertEqual(len(rows), 8)
        self.assertEqual(rows[0]['recovery_ms'], '')
        self.assertEqual(rows[2]['recovery_ms'], '600')

    def test_stdin(self):
        result = cli('-', '--format', 'json', stdin=(ROOT / 'examples/synthetic.csv').read_bytes())
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(len(json.loads(result.stdout)['trials']), 8)

    def test_errors_exit_two_without_report(self):
        cases = [('--horizon-ms',), ('--format', 'xml'), ('--unknown',),
                 ('missing-file.csv',), ('a', 'b'), ('--format', 'json'),
                 ('examples/synthetic.csv', '--dwell-ms', '1001'),
                 ('examples/synthetic.csv', '--horizon-ms', '0'),
                 ('examples/synthetic.csv', '--max-gap-ms', 'NaN')]
        for args in cases:
            with self.subTest(args=args):
                result = cli(*args)
                self.assertEqual(result.returncode, 2)
                self.assertEqual(result.stdout, b'')
                self.assertIn(b'grasp-audit:', result.stderr)

    def test_invalid_utf8_rejected(self):
        result = cli('-', stdin=b'\xff\xfe\xff')
        self.assertEqual(result.returncode, 2)
        self.assertEqual(result.stdout, b'')

    def test_censored_denominators_are_null(self):
        result = cli('-', '--format', 'json', stdin=(HEADER + 'x,p,0,1,0\nx,p,100,1,1\nx,p,200,1,0\n').encode())
        p = json.loads(result.stdout)['policies'][0]
        for field in ['stable_rate', 'retention_rate', 'conditional_recovery_rate', 'median_recovery_ms']:
            self.assertIsNone(p[field])

    def test_one_ms_short_dwell_and_future_bracketing(self):
        text = HEADER + 'x,p,0,1,0\nx,p,100,0,1\nx,p,300,0,0\nx,p,500,0,0\nx,p,700,0,0\nx,p,900,0,0\nx,p,901,1,0\nx,p,1100,1,0\n'
        result = cli('-', '--format', 'json', stdin=text.encode())
        self.assertEqual(json.loads(result.stdout)['trials'][0]['outcome'], 'unrecovered')

    def test_500_seeded_random_traces_against_independent_oracle(self):
        rng = random.Random(20261028)
        rows = [HEADER.rstrip()]
        expected = {}
        for n in range(500):
            samples = [(0, 1, 0), (rng.choice([100, 100, 300]), rng.randrange(2), 1)]
            for _ in range(rng.randrange(2, 17)):
                samples.append((samples[-1][0] + rng.choice([50, 100, 199, 200, 250, 251, 300]), rng.randrange(2), 0))
            trial = f'random_{n}'
            expected[trial] = oracle(samples)
            rows += [f'{trial},p,{time},{held},{marker}' for time, held, marker in samples]
        result = cli('-', '--format', 'json', stdin=('\n'.join(rows) + '\n').encode())
        self.assertEqual(result.returncode, 0, result.stderr)
        actual = json.loads(result.stdout)['trials']
        self.assertEqual(len(actual), len(expected))
        for trial in actual:
            self.assertEqual((trial['outcome'], trial['recovery_ms'], trial['reason']), expected[trial['trial']], trial)


if __name__ == '__main__':
    if not BINARY.exists():
        raise SystemExit('Run moon build --target js --release first')
    unittest.main(verbosity=2)
