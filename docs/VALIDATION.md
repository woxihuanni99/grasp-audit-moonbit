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
| `moon test --target js` | 24/24 |
| `moon test --target wasm-gc` | 24/24 |
| `moon build --target js --release` | Pass |
| `python3 scripts/integration_test.py` | 10/10 |
| Randomized reference comparison | 500/500 seeded traces agree |
| Example Markdown + JSON report generation | Ran; golden outputs match |

The 24 tests are the same cases exercised on two compiler backends, not 48 unique
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
