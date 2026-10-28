///|
/// The only host bindings: argv, local UTF-8 input, output, and exit status.
extern "js" fn args() -> FixedArray[String] =
  #|() => process.argv.slice(2)

///|
extern "js" fn read_input(path : String) -> String =
  #|(path) => {
  #|  try {
  #|    const fs = require('node:fs');
  #|    if (path !== '-' && fs.statSync(path).size > 16 * 1024 * 1024) throw new Error('input exceeds 16 MiB');
  #|    const bytes = fs.readFileSync(path === '-' ? 0 : path);
  #|    if (bytes.length > 16 * 1024 * 1024) throw new Error('input exceeds 16 MiB');
  #|    return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  #|  } catch (error) {
  #|    process.stderr.write('grasp-audit: ' + error.message + '\n');
  #|    process.exit(2);
  #|  }
  #|}

///|
extern "js" fn stdout(text : String) -> Unit =
  #|(text) => { process.stdout.write(text); }

///|
extern "js" fn error_exit(message : String) -> Unit =
  #|(message) => { process.stderr.write('grasp-audit: ' + message + '\n'); process.exitCode = 2; }

///|
extern "js" fn gate_failure(message : String) -> Unit =
  #|(message) => { process.stderr.write('grasp-audit: quality gate: ' + message + '\n'); process.exitCode = 1; }

///|
fn help() -> String {
  let text =
    #|GraspAudit 0.2.0 - offline dexterous-grasp trace evaluation
    #|
    #|Usage: moon run --target js cmd/grasp-audit -- INPUT.csv [OPTIONS]
    #|       INPUT.csv may be - for stdin.
    #|
    #|  --format markdown|json|csv   Output format (default: markdown)
    #|  --horizon-ms N               Evaluation horizon (default: 1000)
    #|  --dwell-ms N                 Sustained final hold (default: 200)
    #|  --max-gap-ms N               Maximum sampling gap (default: 250)
    #|  --min-stable-rate N          Require each policy's stable rate >= N percent
    #|  --max-censored-rate N        Require each policy's censoring rate <= N percent
    #|                               Gate percentages: integers 0..100; omitted=off
    #|  --help                       Show this help
    #|  --version                    Show version
    #|
    #|CSV header: trial,policy,time_ms,held,perturbation
    #|Identifiers: ASCII letters/digits/underscore/hyphen/dot, no quoting.
    #|Flags: 0 or 1. One perturbation per trial; held baseline required.
    #|Exit codes: 0 success, 1 quality gate failed (report still printed), 2 input/usage error.
    #|Nothing is uploaded. No robot control, network calls, or model training.
    #|
  text
}

///|
fn run() -> Result[String, String] {
  let argv = args()
  if argv.length() == 0 {
    return Ok(help())
  }
  let mut input : String? = None
  let mut format = "markdown"
  let mut options = @audit.default_options()
  let mut gates : @audit.Gates = {
    min_stable_percent: None,
    max_censored_percent: None,
  }
  let mut i = 0
  while i < argv.length() {
    let arg = argv[i]
    if arg == "--help" || arg == "-h" {
      return Ok(help())
    }
    if arg == "--version" {
      return Ok("grasp-audit 0.2.0\n")
    }
    if arg == "--format" ||
      arg == "--horizon-ms" ||
      arg == "--dwell-ms" ||
      arg == "--max-gap-ms" ||
      arg == "--min-stable-rate" ||
      arg == "--max-censored-rate" {
      if i + 1 >= argv.length() {
        return Err("missing value for \{arg}")
      }
      let value = argv[i + 1]
      if arg == "--format" {
        if value != "markdown" && value != "json" && value != "csv" {
          return Err("format must be markdown, json, or csv")
        }
        format = value
      } else {
        let number = match @audit.parse_nonnegative(value) {
          Ok(n) => n
          Err(message) => return Err("\{arg}: \{message}")
        }
        if arg == "--min-stable-rate" || arg == "--max-censored-rate" {
          if number > 100 {
            return Err("\{arg}: percentage must be between 0 and 100")
          }
          gates = if arg == "--min-stable-rate" {
            { ..gates, min_stable_percent: Some(number), }
          } else {
            { ..gates, max_censored_percent: Some(number), }
          }
        } else {
          options = match arg {
            "--horizon-ms" => { ..options, horizon_ms: number, }
            "--dwell-ms" => { ..options, dwell_ms: number, }
            _ => { ..options, max_gap_ms: number, }
          }
        }
      }
      i = i + 2
    } else {
      if arg.has_prefix("--") {
        return Err("unknown option: \{arg}")
      }
      match input {
        Some(_) => return Err("expected one input file")
        None => input = Some(arg)
      }
      i = i + 1
    }
  }
  let path = match input {
    Some(path) => path
    None => return Err("missing input file; use --help")
  }
  let text = read_input(path)
  match @audit.analyze_csv(text, options) {
    Err(message) => Err(message)
    Ok(report) => {
      match @audit.check_gates(report, gates) {
        Err(message) => return Err(message)
        Ok(failures) =>
          for failure in failures {
            gate_failure(failure)
          }
      }
      Ok(
        match format {
          "json" => @audit.render_json(report)
          "csv" => @audit.render_csv(report)
          _ => @audit.render_markdown(report)
        },
      )
    }
  }
}

///|
fn main {
  match run() {
    Ok(output) => stdout(output)
    Err(message) => error_exit(message)
  }
}
