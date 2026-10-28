///|
fn validate_options(options : Options) -> Result[Unit, String] {
  if options.horizon_ms <= 0 || options.horizon_ms > 1000000000 {
    return Err("horizon-ms must be between 1 and 1000000000")
  }
  if options.dwell_ms <= 0 || options.dwell_ms > options.horizon_ms {
    return Err("dwell-ms must be positive and no greater than horizon-ms")
  }
  if options.max_gap_ms <= 0 || options.max_gap_ms > 1000000000 {
    return Err("max-gap-ms must be between 1 and 1000000000")
  }
  Ok(())
}

///| Fixed-horizon retention and sustained final recovery under zero-order hold.

///|
/// The final sample is an observation, not an assumed extra interval.
pub fn analyze_trial(
  trial : Trial,
  options : Options,
) -> Result[TrialResult, String] {
  match validate_options(options) {
    Err(message) => return Err(message)
    Ok(_) => ()
  }
  let samples = trial.samples
  if samples.length() < 2 {
    return Err("trial '\{trial.id}': needs at least two samples")
  }
  let mut event_index = -1
  for i, sample in samples.iter2() {
    if sample.time_ms < 0 || sample.time_ms > 1000000000 {
      return Err("trial '\{trial.id}': timestamp outside 0..1000000000")
    }
    if i > 0 && sample.time_ms <= samples[i - 1].time_ms {
      return Err("trial '\{trial.id}': timestamps must increase strictly")
    }
    if sample.perturbation {
      if event_index >= 0 {
        return Err(
          "trial '\{trial.id}': expected exactly one perturbation; split repeated perturbations into separate trials",
        )
      }
      event_index = i
    }
  }
  if event_index < 1 {
    return Err(
      "trial '\{trial.id}': needs one perturbation with a preceding baseline sample",
    )
  }
  if !samples[event_index - 1].held {
    return Err(
      "trial '\{trial.id}': the preceding baseline sample must have held=1",
    )
  }
  let event_ms = samples[event_index].time_ms
  let deadline = event_ms + options.horizon_ms
  let base : TrialResult = {
    trial: trial.id,
    policy: trial.policy,
    event_ms,
    outcome: Censored,
    recovery_ms: None,
    reason: "",
  }
  if samples[event_index].time_ms - samples[event_index - 1].time_ms >
    options.max_gap_ms {
    return Ok({ ..base, reason: "baseline_gap", })
  }
  if samples[samples.length() - 1].time_ms < deadline {
    return Ok({ ..base, reason: "incomplete_horizon", })
  }
  // Check intervals needed to reconstruct the event window. A later observation
  // brackets the deadline, but its held state must never leak backward in time.
  for i = event_index; i < samples.length() - 1; i = i + 1 {
    if samples[i].time_ms >= deadline {
      break
    }
    if samples[i + 1].time_ms - samples[i].time_ms > options.max_gap_ms {
      return Ok({ ..base, reason: "sample_gap", })
    }
  }
  let mut any_loss = false
  let mut was_held = false
  let mut stable_start = event_ms
  for i = event_index; i < samples.length(); i = i + 1 {
    let sample = samples[i]
    if sample.time_ms > deadline {
      break
    }
    if sample.held {
      if !was_held {
        stable_start = sample.time_ms
      }
    } else {
      any_loss = true
    }
    was_held = sample.held
  }
  if !any_loss {
    Ok({ ..base, outcome: Retained, reason: "held_through_horizon", })
  } else if was_held && deadline - stable_start >= options.dwell_ms {
    Ok({
      ..base,
      outcome: Recovered,
      recovery_ms: Some(stable_start - event_ms),
      reason: "final_run_meets_dwell",
    })
  } else {
    Ok({ ..base, outcome: Unrecovered, reason: "no_sustained_final_recovery", })
  }
}

///|
fn median(values : Array[Int32]) -> Double? {
  if values.length() == 0 {
    return None
  }
  values.sort()
  let mid = values.length() / 2
  if values.length() % 2 == 1 {
    Some(values[mid].to_double())
  } else {
    Some((values[mid - 1].to_double() + values[mid].to_double()) / 2.0)
  }
}

///|
pub fn summarize(results : Array[TrialResult]) -> Array[PolicySummary] {
  let policies : Array[String] = []
  let groups : Map[String, Array[TrialResult]] = Map([])
  for result in results {
    match groups.get(result.policy) {
      Some(group) => group.push(result)
      None => {
        policies.push(result.policy)
        groups.set(result.policy, [result])
      }
    }
  }
  let summaries : Array[PolicySummary] = []
  for policy in policies {
    let group = match groups.get(policy) {
      Some(value) => value
      None => []
    }
    let mut retained = 0
    let mut recovered = 0
    let mut unrecovered = 0
    let mut censored = 0
    let latencies : Array[Int32] = []
    for trial in group {
      match trial.outcome {
        Retained => retained = retained + 1
        Recovered => {
          recovered = recovered + 1
          match trial.recovery_ms {
            Some(ms) => latencies.push(ms)
            None => ()
          }
        }
        Unrecovered => unrecovered = unrecovered + 1
        Censored => censored = censored + 1
      }
    }
    summaries.push({
      policy,
      total: group.length(),
      retained,
      recovered,
      unrecovered,
      censored,
      median_recovery_ms: median(latencies),
    })
  }
  summaries
}

///|
pub fn analyze_csv(text : String, options : Options) -> Result[Report, String] {
  match validate_options(options) {
    Err(message) => return Err(message)
    Ok(_) => ()
  }
  let trials = match parse_csv(text) {
    Ok(value) => value
    Err(message) => return Err(message)
  }
  let results : Array[TrialResult] = []
  for trial in trials {
    match analyze_trial(trial, options) {
      Ok(result) => results.push(result)
      Err(message) => return Err(message)
    }
  }
  Ok({ options, trials: results, policies: summarize(results), })
}
