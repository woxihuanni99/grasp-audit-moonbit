///|
/// One observed sample. `held` must come from a documented measurement rule.
pub(all) struct Sample {
  time_ms : Int32
  held : Bool
  perturbation : Bool
}

///|
/// Exactly one perturbation per trial; never treats correlated events as trials.
pub(all) struct Trial {
  id : String
  policy : String
  samples : Array[Sample]
}

///|
/// All thresholds are milliseconds; options are validated before analysis.
pub(all) struct Options {
  horizon_ms : Int32
  dwell_ms : Int32
  max_gap_ms : Int32
}

///|
pub fn default_options() -> Options {
  { horizon_ms: 1000, dwell_ms: 200, max_gap_ms: 250, }
}

///|
/// An incomplete trace is never silently counted as a failure or a success.
pub(all) enum Outcome {
  Retained
  Recovered
  Unrecovered
  Censored
} derive(Eq, Debug)

///|
pub extend Outcome with Eq::{equal, not_equal}

///|
pub extend Outcome with Debug::{to_repr}

///|
pub(all) struct TrialResult {
  trial : String
  policy : String
  event_ms : Int32
  outcome : Outcome
  recovery_ms : Int32?
  reason : String
}

///|
pub(all) struct PolicySummary {
  policy : String
  total : Int32
  retained : Int32
  recovered : Int32
  unrecovered : Int32
  censored : Int32
  median_recovery_ms : Double?
}

///|
pub(all) struct Report {
  options : Options
  trials : Array[TrialResult]
  policies : Array[PolicySummary]
}

///|
pub fn outcome_name(outcome : Outcome) -> String {
  match outcome {
    Retained => "retained"
    Recovered => "recovered"
    Unrecovered => "unrecovered"
    Censored => "censored"
  }
}
