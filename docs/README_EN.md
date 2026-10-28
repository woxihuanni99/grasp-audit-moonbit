# GraspAudit

An offline **MoonBit** CLI and reusable library for auditing dexterous-grasp
perturbation traces. It distinguishes observed retention, sustained final-window
recovery, unrecovered trials, and incomplete/missing observations.

```bash
node dist/grasp-audit.cjs examples/synthetic.csv
node dist/grasp-audit.cjs examples/synthetic.csv --format json
moon run --target js cmd/grasp-audit -- examples/synthetic.csv
bash scripts/verify.sh
```

Use Node.js 22+ (tested with 24). Building requires the official MoonBit toolchain;
the full tests additionally need Python 3. There are no third-party application
packages, API keys, or runtime network requests. The included JS bundle was
actually compiled from these MoonBit sources.

Input header: `trial,policy,time_ms,held,perturbation`. One perturbation per trial,
strictly increasing integer millisecond timestamps, binary flags, and a preceding
held baseline are required. IDs are 1–80 ASCII letters/digits/underscore/hyphen/dot;
quoted CSV fields are deliberately unsupported. Max input: 16 MiB / 200,000 rows.

Options: `--horizon-ms` (1000), `--dwell-ms` (200), `--max-gap-ms` (250),
`--format markdown|json|csv`. Input `-` reads stdin. Errors exit 2 with no report.

[Exact metric definitions](METRICS.md) · [Validation](VALIDATION.md).

**The sample data and policy labels are synthetic fixtures, not real robot
measurements or implemented controllers.** No real-world performance claim,
training result, causal effect, or competition eligibility claim is made. Missing
trials are excluded from rates and counted explicitly; exclusion can bias results.

The core evaluator, CSV parser, and report rendering are MoonBit. Small JS FFI
bindings only provide local host I/O. This project was AI-assisted and should be
reviewed and disclosed by a submitter in accordance with event requirements.

MIT for the application; Apache-2.0 notices for the compiled standard library are
preserved under `third_party/`.
