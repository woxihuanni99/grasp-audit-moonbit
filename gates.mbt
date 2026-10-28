///| Optional descriptive quality thresholds, checked independently per policy.

///|
/// Percentages are integers in 0..100; omitted gates are disabled.
pub(all) struct Gates {
  min_stable_percent : Int32?
  max_censored_percent : Int32?
}

///| Return every failing gate without discarding the full evaluation report.

///|
/// This is an engineering acceptance rule, not a significance test.
pub fn check_gates(
  report : Report,
  gates : Gates,
) -> Result[Array[String], String] {
  for threshold in [gates.min_stable_percent, gates.max_censored_percent] {
    match threshold {
      Some(value) if value < 0 || value > 100 =>
        return Err("quality gate percentages must be integers from 0 to 100")
      _ => ()
    }
  }
  let failures : Array[String] = []
  if gates.min_stable_percent == None && gates.max_censored_percent == None {
    return Ok(failures)
  }
  if report.policies.length() == 0 {
    failures.push("no policies to evaluate")
    return Ok(failures)
  }
  for summary in report.policies {
    let complete = summary.total - summary.censored
    let stable = summary.retained + summary.recovered
    match gates.min_stable_percent {
      Some(minimum) =>
        if complete <= 0 {
          failures.push(
            "policy '\{summary.policy}': stable rate is undefined (no complete trials)",
          )
        } else if stable.to_double() * 100.0 <
          minimum.to_double() * complete.to_double() {
          failures.push(
            "policy '\{summary.policy}': stable rate \{percent(stable, complete)} is below minimum \{minimum}%",
          )
        }
      None => ()
    }
    match gates.max_censored_percent {
      Some(maximum) =>
        if summary.total <= 0 {
          failures.push(
            "policy '\{summary.policy}': censoring rate is undefined (no trials)",
          )
        } else if summary.censored.to_double() * 100.0 >
          maximum.to_double() * summary.total.to_double() {
          failures.push(
            "policy '\{summary.policy}': censoring rate \{percent(summary.censored, summary.total)} exceeds maximum \{maximum}%",
          )
        }
      None => ()
    }
  }
  Ok(failures)
}
