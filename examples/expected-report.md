# GraspAudit report

Horizon: **1000 ms** · Final stable dwell: **200 ms** · Maximum sample gap: **250 ms**

| Policy | Trials | Complete | Retained | Recovered | Unrecovered | Censored | Stable rate | Retention | Recovery given loss | Median recovery (ms) |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| baseline | 4 | 3 | 1 | 1 | 1 | 1 | 66.7% | 33.3% | 50.0% | 600 |
| feedback | 4 | 3 | 1 | 2 | 0 | 1 | 100.0% | 33.3% | 100.0% | 550 |

Stable rate = (retained + recovered) / complete trials. Recovery given loss excludes retained trials. Censored trials are excluded from all rates; exclusions may bias comparisons.

## Trial audit trail

| Trial | Policy | Outcome | Recovery (ms) | Reason |
|---|---|---|---:|---|
| b_keep | baseline | retained | N/A | held_through_horizon |
| b_fail | baseline | unrecovered | N/A | no_sustained_final_recovery |
| b_recover | baseline | recovered | 600 | final_run_meets_dwell |
| b_short | baseline | censored | N/A | incomplete_horizon |
| f_keep | feedback | retained | N/A | held_through_horizon |
| f_recover | feedback | recovered | 300 | final_run_meets_dwell |
| f_late | feedback | recovered | 800 | final_run_meets_dwell |
| f_gap | feedback | censored | N/A | sample_gap |

**Interpretation:** observed binary-state retention and sustained final-window recovery under sample-and-hold, not continuous physical guarantees, force closure, causal effects, or robot task success. Recovery latency starts at the perturbation, not at the loss. Compare matched protocols, thresholds, objects, and sampling rates.
