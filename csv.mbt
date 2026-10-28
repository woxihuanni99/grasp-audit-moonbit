///| Deliberately small, strict CSV dialect: no quotes or multiline fields.

///|
/// This keeps identifiers safe in Markdown, terminal and CSV exports.
fn valid_id(value : String) -> Bool {
  if value.length() == 0 || value.length() > 80 {
    return false
  }
  for c in value {
    match c {
      'a'..<='z' | 'A'..<='Z' | '0'..<='9' | '_' | '-' | '.' => ()
      _ => return false
    }
  }
  true
}

///|
/// Decimal only; bounds prevent timestamp arithmetic overflow.
pub fn parse_nonnegative(value : String) -> Result[Int32, String] {
  if value.length() == 0 || value.length() > 10 {
    return Err("expected a decimal integer between 0 and 1000000000")
  }
  for c in value {
    if c < '0' || c > '9' {
      return Err("expected an unsigned decimal integer, not '\{value}'")
    }
  }
  let parsed : Int32 = @string.parse_int(value) catch {
    _ => return Err("integer out of range: '\{value}'")
  }
  if parsed > 1000000000 {
    return Err("integer exceeds 1000000000: '\{value}'")
  }
  Ok(parsed)
}

///| Parse and validate structure. Time ordering is checked per trial, even if

///|
/// trials are interleaved; input rows are not silently sorted or deduplicated.
pub fn parse_csv(text : String) -> Result[Array[Trial], String] {
  let lines = text.split("\n").collect()
  let trials : Array[Trial] = []
  let index : Map[String, Int32] = Map([])
  let mut saw_header = false
  let mut rows = 0
  for line_no, raw in lines.iter2() {
    let line = raw.to_owned().trim().to_owned()
    if line == "" {
      continue
    }
    if !saw_header {
      if line != "trial,policy,time_ms,held,perturbation" {
        return Err(
          "line \{line_no + 1}: expected header trial,policy,time_ms,held,perturbation",
        )
      }
      saw_header = true
      continue
    }
    rows = rows + 1
    if rows > 200000 {
      return Err("input exceeds 200000 sample rows")
    }
    let fields = line.split(",").map(fn(x) { x.to_owned() }).collect()
    if fields.length() != 5 {
      return Err("line \{line_no + 1}: expected exactly 5 unquoted fields")
    }
    let id = fields[0]
    let policy = fields[1]
    if !valid_id(id) || !valid_id(policy) {
      return Err(
        "line \{line_no + 1}: trial/policy must be 1-80 ASCII letters, digits, _, - or .",
      )
    }
    let time_ms = match parse_nonnegative(fields[2]) {
      Ok(value) => value
      Err(message) => return Err("line \{line_no + 1}: \{message}")
    }
    if (fields[3] != "0" && fields[3] != "1") ||
      (fields[4] != "0" && fields[4] != "1") {
      return Err("line \{line_no + 1}: held and perturbation must be 0 or 1")
    }
    let sample : Sample = {
      time_ms,
      held: fields[3] == "1",
      perturbation: fields[4] == "1",
    }
    match index.get(id) {
      Some(i) => {
        let trial = trials[i]
        if trial.policy != policy {
          return Err("line \{line_no + 1}: policy changed within trial '\{id}'")
        }
        if time_ms <= trial.samples[trial.samples.length() - 1].time_ms {
          return Err(
            "line \{line_no + 1}: timestamps must increase strictly within trial '\{id}'",
          )
        }
        trial.samples.push(sample)
      }
      None => {
        index.set(id, trials.length())
        trials.push({ id, policy, samples: [sample], })
      }
    }
  }
  if trials.length() == 0 {
    return Err("input contains no sample rows")
  }
  Ok(trials)
}
