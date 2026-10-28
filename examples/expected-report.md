# GraspAudit report

Horizon: **1000 ms** · Final stable dwell: **200 ms** · Maximum sample gap: **250 ms**

| Policy | Trials | Complete | Retained | Recovered | Unrecovered | Censored | Stable rate | Retention | Recovery given loss | Median recovery (ms) |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| baseline | 4 | 3 | 1 | 1 | 1 | 1 | 66.7% | 33.3% | 50.0% | 600 |
| feedback | 4 | 3 | 1 | 2 | 0 | 1 | 100.0% | 33.3% | 100.0% | 550 |

Stable rate = (retained + recovered) / complete trials. Recovery given loss excludes retained trials. Censored trials are excluded from all rates; exclusions may bias comparisons.

## Trial audit trail

| Trial | Policy | Outcome | Recovery (ms) | Lost (ms) | Final held (ms) | Reason |
|---|---|---|---:|---:|---:|---|
| b_keep | baseline | retained | N/A | 0 | 1000 | held_through_horizon |
| b_fail | baseline | unrecovered | N/A | 1000 | 0 | no_sustained_final_recovery |
| b_recover | baseline | recovered | 600 | 600 | 400 | final_run_meets_dwell |
| b_short | baseline | censored | N/A | N/A | N/A | incomplete_horizon |
| f_keep | feedback | retained | N/A | 0 | 1000 | held_through_horizon |
| f_recover | feedback | recovered | 300 | 300 | 700 | final_run_meets_dwell |
| f_late | feedback | recovered | 800 | 800 | 200 | final_run_meets_dwell |
| f_gap | feedback | censored | N/A | N/A | N/A | sample_gap |

**Interpretation:** observed binary-state retention and sustained final-window recovery under sample-and-hold, not continuous physical guarantees, force closure, causal effects, or robot task success. Recovery latency starts at the perturbation, not at the loss. Compare matched protocols, thresholds, objects, and sampling rates.
