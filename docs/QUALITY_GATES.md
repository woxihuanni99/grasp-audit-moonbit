# Quality gates / 质量门禁

Use optional gates when an automated experiment pipeline needs a reproducible
acceptance decision as well as a report:

```bash
node dist/grasp-audit.cjs traces.csv --format json \
  --min-stable-rate 80 --max-censored-rate 10 > report.json
```

The CLI does not upload, modify, or delete the input or decide a robot action.
Thresholds are user-selected engineering rules, **not statistical evidence**.

## Contract

- `--min-stable-rate N`: each policy must have `(retained + recovered) / complete`
  at least N percent. An undefined rate (no complete trials) fails, even for N=0.
- `--max-censored-rate N`: each policy must have `censored / total` at most N
  percent. This denominator intentionally includes incomplete trials.
- N must be an integer in [0,100]. Either gate may be omitted; both are off by default.
- Threshold boundaries are inclusive. Comparisons use exact count ratios, not
  the rounded one-decimal report display. For example, 2/3 fails a 67% minimum.
- Every policy is checked independently; a strong policy cannot hide a weak one
  through pooled totals. All failures are returned rather than stopping at the first.
- An empty report fails an enabled library gate. The CLI already rejects empty input.

| Exit code | Meaning | stdout | stderr |
|---|---|---|---|
| 0 | Analysis succeeded; enabled gates passed | Full report | Empty |
| 1 | Analysis succeeded; at least one quality gate failed | **Full report** | All failed gates |
| 2 | Input, file access, or argument error | Empty | Error explanation |

This makes gate failure distinguishable from a broken evaluator and lets CI retain
an auditable report. With a shell using `set -e`, capture status explicitly if a
later step must upload the report even after failure:

```bash
status=0
node dist/grasp-audit.cjs traces.csv --min-stable-rate 80 --format json > report.json || status=$?
# Archive/report inspection may happen here; it should not change this status.
exit "$status"
```

## Library API

`check_gates(report, { min_stable_percent: Some(80), max_censored_percent: Some(10) })`
returns `Ok(Array[String])` with zero or more failure messages. Invalid thresholds
return `Err(String)`. It has no I/O or process-exit side effects.

## Synthetic demonstration

With `examples/synthetic.csv`, minimum stable rate 66 and maximum censoring rate
25 pass. A minimum of 67 fails `baseline`; maximum censoring of 24 fails both
policies. These are software examples only, not recommended physical-grasp targets.
