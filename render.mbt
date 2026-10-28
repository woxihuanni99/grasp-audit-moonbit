///|
/// Shared rendering for nullable integer diagnostics.
fn optional_ms(value : Int32?, missing : String) -> String {
  match value {
    Some(ms) => ms.to_string()
    None => missing
  }
}

///|
/// Percent displayed to one decimal; N/A is different from zero percent.
fn percent(numerator : Int32, denominator : Int32) -> String {
  if denominator == 0 {
    return "N/A"
  }
  let tenths = (numerator.to_double() * 1000.0 / denominator.to_double() + 0.5).to_int()
  "\{tenths / 10}.\{tenths % 10}%"
}

///|
fn optional_number(value : Double?) -> String {
  match value {
    Some(number) => number.to_string()
    None => "null"
  }
}

///|
fn rate(numerator : Int32, denominator : Int32) -> String {
  if denominator == 0 {
    "null"
  } else {
    (numerator.to_double() / denominator.to_double()).to_string()
  }
}

///|
/// JSON uses null for undefined rates/latencies, never NaN or a fabricated 0.
pub fn render_json(report : Report) -> String {
  let o = report.options
  let mut output = "{\"schema_version\":2,\"options\":{\"horizon_ms\":\{o.horizon_ms},\"dwell_ms\":\{o.dwell_ms},\"max_gap_ms\":\{o.max_gap_ms}},\"policies\":["
  for i, summary in report.policies.iter2() {
    if i > 0 {
      output = output + ","
    }
    let complete = summary.total - summary.censored
    let stable = summary.retained + summary.recovered
    output = output +
      "{\"policy\":\"\{summary.policy}\",\"total\":\{summary.total},\"complete\":\{complete},\"retained\":\{summary.retained},\"recovered\":\{summary.recovered},\"unrecovered\":\{summary.unrecovered},\"censored\":\{summary.censored},\"stable_rate\":\{rate(stable, complete)},\"retention_rate\":\{rate(summary.retained, complete)},\"conditional_recovery_rate\":\{rate(summary.recovered, summary.recovered + summary.unrecovered)},\"median_recovery_ms\":\{optional_number(summary.median_recovery_ms)}}"
  }
  output = output + "],\"trials\":["
  for i, trial in report.trials.iter2() {
    if i > 0 {
      output = output + ","
    }
    let latency = match trial.recovery_ms {
      Some(ms) => ms.to_string()
      None => "null"
    }
    output = output +
      "{\"trial\":\"\{trial.trial}\",\"policy\":\"\{trial.policy}\",\"event_ms\":\{trial.event_ms},\"outcome\":\"\{outcome_name(trial.outcome)}\",\"recovery_ms\":\{latency},\"held_ms\":\{optional_ms(trial.held_ms, "null")},\"lost_ms\":\{optional_ms(trial.lost_ms, "null")},\"first_loss_ms\":\{optional_ms(trial.first_loss_ms, "null")},\"final_stable_ms\":\{optional_ms(trial.final_stable_ms, "null")},\"reason\":\"\{trial.reason}\"}"
  }
  output + "]}\n"
}

///|
/// Per-trial machine-readable results, with empty latency when not applicable.
pub fn render_csv(report : Report) -> String {
  let mut output = "trial,policy,event_ms,outcome,recovery_ms,reason,held_ms,lost_ms,first_loss_ms,final_stable_ms\n"
  for trial in report.trials {
    let latency = match trial.recovery_ms {
      Some(ms) => ms.to_string()
      None => ""
    }
    output = output +
      "\{trial.trial},\{trial.policy},\{trial.event_ms},\{outcome_name(trial.outcome)},\{latency},\{trial.reason},\{optional_ms(trial.held_ms, "")},\{optional_ms(trial.lost_ms, "")},\{optional_ms(trial.first_loss_ms, "")},\{optional_ms(trial.final_stable_ms, "")}\n"
  }
  output
}

///|
pub fn render_markdown(report : Report) -> String {
  let o = report.options
  let mut output = "# GraspAudit report\n\n"
  output = output +
    "Horizon: **\{o.horizon_ms} ms** · Final stable dwell: **\{o.dwell_ms} ms** · Maximum sample gap: **\{o.max_gap_ms} ms**\n\n"
  output = output +
    "| Policy | Trials | Complete | Retained | Recovered | Unrecovered | Censored | Stable rate | Retention | Recovery given loss | Median recovery (ms) |\n"
  output = output + "|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|\n"
  for summary in report.policies {
    let complete = summary.total - summary.censored
    let latency = match summary.median_recovery_ms {
      Some(ms) => ms.to_string()
      None => "N/A"
    }
    output = output +
      "| \{summary.policy} | \{summary.total} | \{complete} | \{summary.retained} | \{summary.recovered} | \{summary.unrecovered} | \{summary.censored} | \{percent(summary.retained + summary.recovered, complete)} | \{percent(summary.retained, complete)} | \{percent(summary.recovered, summary.recovered + summary.unrecovered)} | \{latency} |\n"
  }
  output = output +
    "\nStable rate = (retained + recovered) / complete trials. Recovery given loss excludes retained trials. Censored trials are excluded from all rates; exclusions may bias comparisons.\n\n"
  output = output +
    "## Trial audit trail\n\n| Trial | Policy | Outcome | Recovery (ms) | Lost (ms) | Final held (ms) | Reason |\n|---|---|---|---:|---:|---:|---|\n"
  for trial in report.trials {
    let latency = match trial.recovery_ms {
      Some(ms) => ms.to_string()
      None => "N/A"
    }
    output = output +
      "| \{trial.trial} | \{trial.policy} | \{outcome_name(trial.outcome)} | \{latency} | \{optional_ms(trial.lost_ms, "N/A")} | \{optional_ms(trial.final_stable_ms, "N/A")} | \{trial.reason} |\n"
  }
  output +
  "\n**Interpretation:** observed binary-state retention and sustained final-window recovery under sample-and-hold, not continuous physical guarantees, force closure, causal effects, or robot task success. Recovery latency starts at the perturbation, not at the loss. Compare matched protocols, thresholds, objects, and sampling rates.\n"
}
