///|
fn gate_report() -> Report {
  {
    options: default_options(),
    trials: [],
    policies: [
      {
        policy: "p",
        total: 5,
        retained: 2,
        recovered: 1,
        unrecovered: 1,
        censored: 1,
        median_recovery_ms: Some(300.0),
      },
    ],
  }
}

///|
fn gate_messages(report : Report, gates : Gates) -> Array[String] raise {
  match check_gates(report, gates) {
    Ok(messages) => messages
    Err(error) => fail(error)
  }
}

///|
test "gates accept inclusive stable and censoring boundaries" {
  assert_eq(
    gate_messages(gate_report(), {
      min_stable_percent: Some(75),
      max_censored_percent: Some(20),
    }).length(),
    0,
  )
}

///|
test "gates report both failures instead of short circuiting" {
  let failures = gate_messages(gate_report(), {
    min_stable_percent: Some(76),
    max_censored_percent: Some(19),
  })
  assert_eq(failures.length(), 2)
  assert_true(failures[0].contains("stable rate"))
  assert_true(failures[1].contains("censoring rate"))
}

///|
test "gates compare exact fractions not rounded display values" {
  let report = gate_report()
  let group = {
    ..report.policies[0],
    total: 3,
    retained: 1,
    recovered: 1,
    unrecovered: 1,
    censored: 0,
  }
  let failures = gate_messages({ ..report, policies: [group], }, {
    min_stable_percent: Some(67),
    max_censored_percent: None,
  })
  assert_eq(failures.length(), 1)
}

///|
test "undefined stable rate fails even a zero minimum" {
  let report = gate_report()
  let group = {
    ..report.policies[0],
    total: 1,
    retained: 0,
    recovered: 0,
    unrecovered: 0,
    censored: 1,
  }
  let failures = gate_messages({ ..report, policies: [group], }, {
    min_stable_percent: Some(0),
    max_censored_percent: Some(100),
  })
  assert_eq(failures.length(), 1)
  assert_true(failures[0].contains("undefined"))
}

///|
test "gates inspect each policy not pooled totals" {
  let report = gate_report()
  let weak = {
    ..report.policies[0],
    policy: "weak",
    total: 2,
    retained: 0,
    recovered: 0,
    unrecovered: 2,
    censored: 0,
  }
  let failures = gate_messages(
    { ..report, policies: [report.policies[0], weak], },
    { min_stable_percent: Some(50), max_censored_percent: None, },
  )
  assert_eq(failures.length(), 1)
  assert_true(failures[0].contains("weak"))
}

///|
test "disabled gates never impose implicit acceptance rules" {
  assert_eq(
    gate_messages({ ..gate_report(), policies: [], }, {
      min_stable_percent: None,
      max_censored_percent: None,
    }).length(),
    0,
  )
}

///|
test "enabled gates reject an empty report" {
  assert_eq(
    gate_messages({ ..gate_report(), policies: [], }, {
      min_stable_percent: None,
      max_censored_percent: Some(100),
    }).length(),
    1,
  )
}

///|
test "gate percentages outside zero through hundred are errors" {
  for
    gates in [
      { min_stable_percent: Some(-1), max_censored_percent: None, },
      { min_stable_percent: None, max_censored_percent: Some(101), },
    ] {
    assert_true(
      match check_gates(gate_report(), gates) {
        Err(_) => true
        Ok(_) => false
      },
    )
  }
}
