# Validation record

Executed locally in the development cloud environment on **2026-10-28**:

- `moon 0.1.20261023 (3778465 2026-10-23)`
- `moonc v0.10.17+d971670cd (2026-10-23)`
- `moonrun 0.1.20261023`
- Node.js `v24.22.1`
- Official MoonBit Linux binaries: all 17 published SHA-256 checks passed.

| Check | Result |
|---|---|
| `moon fmt --check` | Pass |
| `moon check --target js --deny-warn` | Pass, no warnings |
| `moon test --target js` | 32/32 |
| `moon test --target wasm-gc` | 32/32 |
| `moon build --target js --release` | Pass |
| `python3 scripts/integration_test.py` | 16/16 |
| Randomized reference comparison | 500/500 seeded traces agree |
| Example Markdown + JSON report generation | Ran; golden outputs match |

The 32 tests are the same cases exercised on two compiler backends, not 64 unique
tests. The 500 generated traces are software test cases, not robot experiments.
The Python oracle exists only for verification; the production algorithm is MoonBit.

Coverage includes exact dwell and endpoint boundaries, transient versus final
recovery, truncation, excessive gaps, stale baselines, no future-state leakage,
invalid inputs, malformed flags, duplicate/decreasing timestamps, stdin, JSON
null semantics, UTF-8 failure, and CLI error status. Re-run everything with:

```bash
bash scripts/verify.sh
```

No real robot, physics simulator, force-closure model, Windows/macOS execution, or
remote GitHub Actions run was tested. The generated CLI was run on Linux/Node.
CI installs the official current stable toolchain, so future language changes may
require updates; the concrete tested version is recorded above.

Diagnostic regression checks additionally cover duration conservation, zero-duration endpoint loss, censored nulls, and clipped intervals. The 500-trace oracle now checks all four diagnostic fields as well as outcomes.

## Follow-on feature validation

- Trial diagnostics: added 5 unit tests and extended the independent 500-trace
  oracle to check all diagnostic fields. The feature commit passed 24 tests on
  each backend plus 10 integration tests.
- Quality gates: added 8 unit tests and 6 CLI integration tests covering inclusive
  boundaries, exact rather than rounded rates, each policy independently, all
  failure messages, undefined rates, disabled gates, invalid parameters, and
  report preservation with exit code 1. Final version is 0.2.0, JSON schema v2.
