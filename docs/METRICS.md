# Metric specification (JSON schema v2)

This is a trace-auditing specification, not a validated robotics benchmark.

Let t₀ be the perturbation sample, H the horizon, D the final stable dwell,
and G the maximum admissible adjacent sampling gap. Require 0 < D ≤ H and G > 0.
Each trial has exactly one perturbation and a preceding held=1 sample. Multiple
perturbations must be separated into scientifically justified trials; do not
pretend correlated events become independent by renaming them.

## Observation model

The state at each timestamp applies until the next sample (zero-order hold).
The evaluation interval is **closed [t₀, t₀ + H]**. A sample exactly at the endpoint
is included. A sample after it may bracket the endpoint but its state is not
propagated backward. No state is extrapolated past the final observation.

The immediately preceding baseline must be no more than G ms old. A stale
baseline yields `censored / baseline_gap`. If the final observation is earlier
than t₀+H, return `censored / incomplete_horizon`. Otherwise an adjacent gap > G
needed to reconstruct the window yields `censored / sample_gap`. Gaps wholly
after an exact endpoint sample do not matter. This is deliberately conservative:
a long gap crossing the endpoint is censored even if only part lies in the window.
If several defects apply, reasons are reported in the order above.

## Outcomes for complete, adequately sampled windows

1. **retained**: every observed state inside the evaluation interval is held=1.
2. **recovered**: at least one observed held=0 occurred, the endpoint state is
   held=1, and the final uninterrupted held run lasts at least D ms to the endpoint.
3. **unrecovered**: neither condition above is satisfied.

Recovery latency is `start(final held run) − t₀`; it is defined only for recovered
trials. A run lasting exactly D qualifies. A loss exactly at the endpoint fails.
A temporary recovery followed by another loss is not the final recovery. Because
states are sampled, these are observed/approximated outcomes, not guarantees of
continuous physical retention.

## Policy summaries

- complete = retained + recovered + unrecovered.
- stable_rate = (retained + recovered) / complete.
- retention_rate = retained / complete.
- conditional_recovery_rate = recovered / (recovered + unrecovered).
- median_recovery_ms: ordinary median of recovered trials only; for even counts,
  mean of the middle two. Censored and retained trials have no recovery latency.

Censored trials are excluded from all rates, but always counted beside them.
Undefined quantities are JSON `null` / Markdown `N/A`, never zero. JSON rates are
fractions; Markdown shows percentages rounded to one decimal. Rates and medians
are descriptive, not inferential statistics; no confidence interval or significance
claim is made. Reporting only complete cases can be biased by informative censoring.

## Examples

At event-relative times 0,100,…,1000 ms, with H=1000, D=200:

- all held=1: retained.
- held=0 through 200, then held=1 from 300: recovered, latency 300.
- held=1 only from 800: recovered, latency 800 (exact dwell boundary).
- held=1 only from 801: unrecovered (199 ms is too short).
- recover at 300, lose again at 600, finally hold from 800: recovered, latency 800.
- all held=1 but recording ends at 900: censored, not retained.

Recommended real-data protocol: pre-register the held rule, H/D/G, perturbation,
object set, trial count and exclusion criteria; retain per-trial outputs and
report censoring. Do not tune the thresholds after seeing which policy wins.

## Per-trial diagnostics

JSON schema v2 adds `held_ms`, `lost_ms`, `first_loss_ms`, and `final_stable_ms`.
The CSV export appends these columns after the original columns. All durations
use clipped sample-and-hold intervals; `held_ms + lost_ms = H` for complete trials.
`first_loss_ms` is the event-relative time of the first observed loss, or null
when no loss was observed. `final_stable_ms` is the final held run's duration to
the horizon, including when too short to qualify as recovery; it is zero if the
endpoint is not held. All four diagnostics are null for censored trials so a
partial recording cannot be mistaken for full-window evidence.

A loss exactly at the endpoint makes the outcome unrecovered but contributes
zero to the duration integral: `lost_ms=0`, `first_loss_ms=H`, `final_stable_ms=0`.
These are intentionally different statements, not inconsistent rounding.
