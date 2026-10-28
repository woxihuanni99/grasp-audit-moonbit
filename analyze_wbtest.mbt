///|
fn fixture(states : Array[Bool]) -> Trial {
  let samples : Array[Sample] = [
    { time_ms: 0, held: true, perturbation: false, },
  ]
  for i, held in states.iter2() {
    samples.push({ time_ms: (i + 1) * 100, held, perturbation: i == 0, })
  }
  { id: "trial", policy: "policy", samples, }
}

///|
fn evaluate(trial : Trial) -> TrialResult raise {
  match analyze_trial(trial, default_options()) {
    Ok(result) => result
    Err(message) => fail(message)
  }
}

///|
fn expect_bad(text : String) -> Unit raise {
  assert_true(
    match analyze_csv(text, default_options()) {
      Err(_) => true
      Ok(_) => false
    },
  )
}

///|
test "retained over full horizon" {
  let result = evaluate(
    fixture([true, true, true, true, true, true, true, true, true, true, true]),
  )
  assert_eq(outcome_name(result.outcome), "retained")
  assert_eq(result.recovery_ms, None)
}

///|
test "recovery latency is relative to perturbation" {
  let result = evaluate(
    fixture([
      false, false, false, true, true, true, true, true, true, true, true,
    ]),
  )
  assert_eq(outcome_name(result.outcome), "recovered")
  assert_eq(result.recovery_ms, Some(300))
}

///|
test "exact dwell boundary qualifies" {
  let result = evaluate(
    fixture([
      false, false, false, false, false, false, false, false, true, true, true,
    ]),
  )
  assert_eq(outcome_name(result.outcome), "recovered")
  assert_eq(result.recovery_ms, Some(800))
}

///|
test "too short final run is unrecovered" {
  let result = evaluate(
    fixture([
      false, false, false, false, false, false, false, false, false, true, true,
    ]),
  )
  assert_eq(outcome_name(result.outcome), "unrecovered")
}

///|
test "drop exactly at endpoint defeats retention" {
  let result = evaluate(
    fixture([true, true, true, true, true, true, true, true, true, true, false]),
  )
  assert_eq(outcome_name(result.outcome), "unrecovered")
}

///|
test "final recovery not transient first recovery" {
  let result = evaluate(
    fixture([
      false, false, false, true, true, true, false, false, true, true, true,
    ]),
  )
  assert_eq(result.recovery_ms, Some(800))
}

///|
test "short recording is censored even if held" {
  let result = evaluate(
    fixture([true, true, true, true, true, true, true, true, true, true]),
  )
  assert_eq(outcome_name(result.outcome), "censored")
  assert_eq(result.reason, "incomplete_horizon")
}

///|
test "sample gap at threshold accepted" {
  let samples : Array[Sample] = [
    { time_ms: 0, held: true, perturbation: false, },
  ]
  for i = 0; i <= 4; i = i + 1 {
    samples.push({ time_ms: 100 + 250 * i, held: true, perturbation: i == 0, })
  }
  let result = evaluate({ id: "t", policy: "p", samples, })
  assert_eq(outcome_name(result.outcome), "retained")
}

///|
test "oversized sample gap censored" {
  let trial = fixture([
    true, true, true, true, true, true, true, true, true, true, true,
  ])
  let filtered : Array[Sample] = []
  for sample in trial.samples {
    if sample.time_ms != 300 && sample.time_ms != 400 {
      filtered.push(sample)
    }
  }
  let result = evaluate({ ..trial, samples: filtered, })
  assert_eq(result.reason, "sample_gap")
}

///|
test "gap after endpoint ignored" {
  let trial = fixture([
    true, true, true, true, true, true, true, true, true, true, true,
  ])
  trial.samples.push({ time_ms: 5000, held: false, perturbation: false, })
  assert_eq(outcome_name(evaluate(trial).outcome), "retained")
}

///|
test "sample after endpoint brackets without leaking future state" {
  let trial = fixture([
    true, true, true, true, true, true, true, true, true, true,
  ])
  trial.samples.push({ time_ms: 1150, held: false, perturbation: false, })
  assert_eq(outcome_name(evaluate(trial).outcome), "retained")
}

///|
test "stale baseline censored" {
  let trial = fixture([
    true, true, true, true, true, true, true, true, true, true, true,
  ])
  let shifted = trial.samples.map(fn(sample) {
    if sample.time_ms == 0 {
      sample
    } else {
      { ..sample, time_ms: sample.time_ms + 500, }
    }
  })
  assert_eq(evaluate({ ..trial, samples: shifted, }).reason, "baseline_gap")
}

///|
test "reject bad option ranges" {
  let trial = fixture([true, true])
  for
    options in [
      { horizon_ms: 0, dwell_ms: 200, max_gap_ms: 250, },
      { horizon_ms: 100, dwell_ms: 200, max_gap_ms: 250, },
      { horizon_ms: 1000, dwell_ms: 0, max_gap_ms: 250, },
      { horizon_ms: 1000, dwell_ms: 200, max_gap_ms: 0, },
    ] {
    assert_true(
      match analyze_trial(trial, options) {
        Err(_) => true
        Ok(_) => false
      },
    )
  }
}

///|
test "strict CSV rejects invalid data instead of silently repairing" {
  let header = "trial,policy,time_ms,held,perturbation\n"
  for
    rows in [
      "t,p,0,1,0\nt,p,0,1,1\n", "t,p,100,1,0\nt,p,0,1,1\n", "t,p,0,1,0\nt,q,100,1,1\n",
      "t,p,0,yes,0\n", "t,p,-1,1,0\n", "t,p,1e2,1,0\n", "t,p,1000000001,1,0\n", "t,p,0,1,0,extra\n",
      "=SUM,p,0,1,0\n", "t,p,0,1,0\nt,p,100,1,0\n", "t,p,0,1,1\nt,p,100,1,0\n", "t,p,0,0,0\nt,p,100,1,1\n",
      "t,p,0,1,0\nt,p,100,1,1\nt,p,200,1,1\n",
    ] {
    expect_bad(header + rows)
  }
  expect_bad("")
  expect_bad("trial,policy,time_ms,held,perturbation\n")
  expect_bad("wrong,header\n")
}

///|
test "CRLF and blank lines parse" {
  let result = parse_csv(
    "trial,policy,time_ms,held,perturbation\r\n\r\nt,p,0,1,0\r\nt,p,100,0,1\r\n",
  )
  match result {
    Ok(trials) => assert_eq(trials[0].samples.length(), 2)
    Err(message) => fail(message)
  }
}

///|
test "interleaved trials retain per-trial order" {
  match
    parse_csv(
      "trial,policy,time_ms,held,perturbation\na,p,0,1,0\nb,q,0,1,0\na,p,100,0,1\nb,q,100,1,1\n",
    ) {
    Ok(trials) => {
      assert_eq(trials.length(), 2)
      assert_eq(trials[0].samples.length(), 2)
    }
    Err(message) => fail(message)
  }
}

///|
test "median handles odd even empty" {
  assert_eq(median([]), None)
  assert_eq(median([300, 100]), Some(200.0))
  assert_eq(median([500, 100, 300]), Some(300.0))
}

///|
test "undefined rates remain distinct from zero" {
  assert_eq(percent(0, 0), "N/A")
  assert_eq(rate(0, 0), "null")
  assert_eq(percent(0, 5), "0.0%")
  assert_eq(percent(3, 4), "75.0%")
  assert_eq(percent(2, 3), "66.7%")
}

///|
test "summary counts match actual outcomes" {
  let samples = [
    [true, true, true, true, true, true, true, true, true, true, true],
    [false, false, false, true, true, true, true, true, true, true, true],
    [
      false, false, false, false, false, false, false, false, false, false, false,
    ],
    [true, true],
  ]
  let results : Array[TrialResult] = []
  for states in samples {
    results.push(evaluate(fixture(states)))
  }
  let summary = summarize(results)[0]
  assert_eq(summary.total, 4)
  assert_eq(summary.retained, 1)
  assert_eq(summary.recovered, 1)
  assert_eq(summary.unrecovered, 1)
  assert_eq(summary.censored, 1)
  assert_eq(summary.median_recovery_ms, Some(300.0))
}
