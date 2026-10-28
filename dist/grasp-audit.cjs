function _M0TP213grasp_2daudit13grasp_2daudit7Options(param0, param1, param2) {
  this.horizon_ms = param0;
  this.dwell_ms = param1;
  this.max_gap_ms = param2;
}
function _M0DTPC16result6ResultGusE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGusE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGusE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGusE2Ok.prototype.$tag = 1;
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGisE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGisE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGisE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGisE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit5TrialEsE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit5TrialEsE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit5TrialEsE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit5TrialEsE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGssE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGssE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGssE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGssE2Ok.prototype.$tag = 1;
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGRPC16string10StringViewE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $oob() {
  throw new Error("Index out of bounds");
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0TPB4IterGUiRP213grasp_2daudit13grasp_2daudit13PolicySummaryEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
  this.val = param0;
}
function _M0TPB3MapGsiE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsiE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE4Some.prototype.$tag = 1;
function _M0TPB12MutArrayViewGiE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGRP213grasp_2daudit13grasp_2daudit13PolicySummaryE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGlRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGlRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGlRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGlRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsiEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP213grasp_2daudit13grasp_2daudit6Sample(param0, param1, param2) {
  this.time_ms = param0;
  this.held = param1;
  this.perturbation = param2;
}
function _M0TP213grasp_2daudit13grasp_2daudit5Trial(param0, param1, param2) {
  this.id = param0;
  this.policy = param1;
  this.samples = param2;
}
function _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit11TrialResultsE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit11TrialResultsE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit11TrialResultsE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit11TrialResultsE2Ok.prototype.$tag = 1;
function _M0TP213grasp_2daudit13grasp_2daudit11TrialResult(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  this.trial = param0;
  this.policy = param1;
  this.event_ms = param2;
  this.outcome = param3;
  this.recovery_ms = param4;
  this.held_ms = param5;
  this.lost_ms = param6;
  this.first_loss_ms = param7;
  this.final_stable_ms = param8;
  this.reason = param9;
}
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP213grasp_2daudit13grasp_2daudit13PolicySummary(param0, param1, param2, param3, param4, param5, param6) {
  this.policy = param0;
  this.total = param1;
  this.retained = param2;
  this.recovered = param3;
  this.unrecovered = param4;
  this.censored = param5;
  this.median_recovery_ms = param6;
}
function _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit6ReportsE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit6ReportsE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit6ReportsE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit6ReportsE2Ok.prototype.$tag = 1;
function _M0TP213grasp_2daudit13grasp_2daudit6Report(param0, param1, param2) {
  this.options = param0;
  this.trials = param1;
  this.policies = param2;
}
const _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit4args = () => process.argv.slice(2);
const _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit11read__input = (path) => {
  try {
    const fs = require('node:fs');
    if (path !== '-' && fs.statSync(path).size > 16 * 1024 * 1024) throw new Error('input exceeds 16 MiB');
    const bytes = fs.readFileSync(path === '-' ? 0 : path);
    if (bytes.length > 16 * 1024 * 1024) throw new Error('input exceeds 16 MiB');
    return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  } catch (error) {
    process.stderr.write('grasp-audit: ' + error.message + '\n');
    process.exit(2);
  }
};
const _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit6stdout = (text) => { process.stdout.write(text); };
const _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit11error__exit = (message) => { process.stderr.write('grasp-audit: ' + message + '\n'); process.exitCode = 2; };
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0MPB4Iter4nextN6constrS68GUiRP213grasp_2daudit13grasp_2daudit13PolicySummaryEE = 0;
const _M0MPB4Iter4nextN6constrS69GUiRP213grasp_2daudit13grasp_2daudit13PolicySummaryEE = 0;
const _M0MPB4Iter4nextN6constrS116GcE = 0;
const _M0MPB4Iter4nextN6constrS117GcE = 0;
const _M0MPB4Iter3newN6constrS126GRPC16string10StringViewE = 0;
const _M0MPB4Iter3newN6constrS132GcE = 0;
const _M0MPB5Iter23newN6constrS169GiRP213grasp_2daudit13grasp_2daudit13PolicySummaryE = 0;
const _M0FPC28internal7strconv14base__err__str = "invalid base";
const _M0FPC28internal7strconv15range__err__str = "value out of range";
const _M0FPC28internal7strconv16syntax__err__str = "invalid syntax";
const _M0FP213grasp_2daudit13grasp_2daudit16default__optionsN6recordS894 = new _M0TP213grasp_2daudit13grasp_2daudit7Options(1000, 200, 250);
const _M0FP213grasp_2daudit13grasp_2daudit17validate__optionsN6constrS1037 = new _M0DTPC16result6ResultGusE3Err("horizon-ms must be between 1 and 1000000000");
const _M0FP213grasp_2daudit13grasp_2daudit17validate__optionsN6constrS1038 = new _M0DTPC16result6ResultGusE3Err("dwell-ms must be positive and no greater than horizon-ms");
const _M0FP213grasp_2daudit13grasp_2daudit17validate__optionsN6constrS1039 = new _M0DTPC16result6ResultGusE3Err("max-gap-ms must be between 1 and 1000000000");
const _M0FPB4seed = _M0FPB12random__seed();
const _M0MPC16string6String4trimN6recordS442 = new _M0TPC16string10StringView("\t\n\r ", 0, 4);
const _M0FPC28internal7strconv20parse__int64_2einnerN6recordS849 = new _M0TPC16string10StringView("", 0, 0);
const _M0FP213grasp_2daudit13grasp_2daudit18parse__nonnegativeN6constrS981 = new _M0DTPC16result6ResultGisE3Err("expected a decimal integer between 0 and 1000000000");
const _M0MPC16string10StringView4findN6constrS307 = 0;
const _M0FP213grasp_2daudit13grasp_2daudit10parse__csvN6recordS997 = new _M0TPC16string10StringView("\n", 0, 1);
const _M0FP213grasp_2daudit13grasp_2daudit10parse__csvN6constrS998 = new _M0DTPC16result6ResultGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit5TrialEsE3Err("input exceeds 200000 sample rows");
const _M0FP213grasp_2daudit13grasp_2daudit10parse__csvN6recordS999 = new _M0TPC16string10StringView(",", 0, 1);
const _M0FP213grasp_2daudit13grasp_2daudit10parse__csvN6constrS1000 = new _M0DTPC16result6ResultGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit5TrialEsE3Err("input contains no sample rows");
const _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit3runN6constrS1131 = new _M0DTPC16result6ResultGssE2Ok("grasp-audit 0.1.0\n");
const _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit3runN6constrS1132 = new _M0DTPC16result6ResultGssE3Err("format must be markdown, json, or csv");
const _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit3runN6recordS1133 = new _M0TPC16string10StringView("--", 0, 2);
const _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit3runN6constrS1134 = new _M0DTPC16result6ResultGssE3Err("expected one input file");
const _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit3runN6constrS1135 = new _M0DTPC16result6ResultGssE3Err("missing input file; use --help");
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (c1 >= 55296 && c1 <= 56319) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return c1;
  }
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0))) {
    return new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
  return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String21clamped__view_2einner(self, start, end) {
  const len = self.length;
  let lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    hi = _e < 0 ? 0 : _e > len ? len : _e;
  }
  let _tmp;
  if (lo > 0) {
    let _tmp$2;
    if (lo < len) {
      let _tmp$3;
      const _p = self.charCodeAt(lo);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(lo - 1 | 0);
        _tmp$3 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$3 = false;
      }
      _tmp$2 = _tmp$3;
    } else {
      _tmp$2 = false;
    }
    _tmp = _tmp$2;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    lo = lo + 1 | 0;
  }
  let _tmp$2;
  if (hi > 0) {
    let _tmp$3;
    if (hi < len) {
      let _tmp$4;
      const _p = self.charCodeAt(hi);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(hi - 1 | 0);
        _tmp$4 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$4 = false;
      }
      _tmp$3 = _tmp$4;
    } else {
      _tmp$3 = false;
    }
    _tmp$2 = _tmp$3;
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    hi = hi - 1 | 0;
  }
  return lo >= hi ? new _M0TPC16string10StringView(self, lo, lo) : new _M0TPC16string10StringView(self, lo, hi);
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String21clamped__view_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, self);
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0MPB4Iter4nextGUiRP213grasp_2daudit13grasp_2daudit13PolicySummaryEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS69GUiRP213grasp_2daudit13grasp_2daudit13PolicySummaryEE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS68GUiRP213grasp_2daudit13grasp_2daudit13PolicySummaryEE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS117GcE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS116GcE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGRPC16string10StringViewE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS126GRPC16string10StringViewE;
  }
  return new _M0TPB4IterGRPC16string10StringViewE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS132GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPC16string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPB8MutLocalGiE(start);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (c1 >= 55296 && c1 <= 56319 && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          index.val = index.val + 2 | 0;
          return _M0FPB32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPB5Iter23newGiRP213grasp_2daudit13grasp_2daudit13PolicySummaryE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB5Iter23newN6constrS169GiRP213grasp_2daudit13grasp_2daudit13PolicySummaryE;
  }
  return new _M0TPB4IterGUiRP213grasp_2daudit13grasp_2daudit13PolicySummaryEE(f, size_hint$2);
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      const _p = self.charCodeAt(self_off + i | 0);
      const _p$2 = other.charCodeAt(other_off + i | 0);
      if (_p === _p$2) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, other.str, other.start, len);
  } else {
    return false;
  }
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (c >= 56320 && c <= 57343) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (c >= 55296 && c <= 56319) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return $panic();
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length)) {
    return new _M0TPC16string10StringView(self, start_offset, end_offset$2);
  } else {
    return $panic();
  }
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0FPB19kmp__failure__table(pattern) {
  const m = pattern.end - pattern.start | 0;
  const table = $make_array_len_and_init(m, 0);
  let k = 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < m) {
      const c = pattern.str.charCodeAt(pattern.start + i | 0);
      while (true) {
        let _tmp$2;
        if (k > 0) {
          const _p = pattern.str.charCodeAt(pattern.start + k | 0);
          _tmp$2 = c !== _p;
        } else {
          _tmp$2 = false;
        }
        if (_tmp$2) {
          const _tmp$3 = k - 1 | 0;
          k = _tmp$3 >>> 0 < table.length ? table[_tmp$3] : $oob();
          continue;
        } else {
          break;
        }
      }
      const _p = pattern.str.charCodeAt(pattern.start + k | 0);
      if (c === _p) {
        k = k + 1 | 0;
      }
      if (i >>> 0 < table.length) {
        table[i] = k;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return table;
}
function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
  const n = target.end - target.start | 0;
  const m = pattern.end - pattern.start | 0;
  const table = _M0FPB19kmp__failure__table(pattern);
  let k = 0;
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const c = target.str.charCodeAt(target.start + i | 0);
      while (true) {
        let _tmp$2;
        if (k > 0) {
          const _p = pattern.str.charCodeAt(pattern.start + k | 0);
          _tmp$2 = c !== _p;
        } else {
          _tmp$2 = false;
        }
        if (_tmp$2) {
          const _tmp$3 = k - 1 | 0;
          k = _tmp$3 >>> 0 < table.length ? table[_tmp$3] : $oob();
          continue;
        } else {
          break;
        }
      }
      const _p = pattern.str.charCodeAt(pattern.start + k | 0);
      if (c === _p) {
        k = k + 1 | 0;
      }
      if (k === m) {
        return (i - m | 0) + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < candidate_end) {
      let _tmp$2;
      const _p = data.charCodeAt(pos);
      if (_p === first) {
        const _p$2 = data.charCodeAt(pos + last_offset | 0);
        _tmp$2 = _p$2 === last;
      } else {
        _tmp$2 = false;
      }
      if (_tmp$2) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < length) {
      const _p = left.charCodeAt(left_start + i | 0);
      const _p$2 = right.charCodeAt(right_start + i | 0);
      if (_p !== _p$2) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FPB22find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = target.start;
  const pattern_start = pattern.start;
  const last_offset = pattern_len - 1 | 0;
  const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  let _tmp = target_start;
  let _tmp$2 = 0;
  while (true) {
    const pos = _tmp;
    const failures = _tmp$2;
    if (pos < candidate_end) {
      const found = _M0FPB42find__two__anchor__candidate__from__string(target.str, pos, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(target.str, found + 1 | 0, pattern.str, pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const failures$2 = failures + 1 | 0;
      const scanned = found - target_start | 0;
      if (failures$2 > 64 || failures$2 > (4 + (scanned / 8 | 0) | 0)) {
        return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
      }
      _tmp = found + 1 | 0;
      _tmp$2 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB24find__code__unit__scalar(data, start, end, code) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end) {
      const _p = data.charCodeAt(pos);
      if (_p === code) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB30find__code__unit__from__string(data, start, end, code) {
  return _M0FPB24find__code__unit__scalar(data, start, end, code);
}
function _M0FPB28find__code__unit__from__view(target, start, end, code) {
  const target_start = target.start;
  const found = _M0FPB30find__code__unit__from__string(target.str, target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView4find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return _M0MPC16string10StringView4findN6constrS307;
    }
    case 1: {
      const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
    }
  }
}
function _M0MPC16string10StringView11has__prefix(self, str) {
  const str_len = str.end - str.start | 0;
  if (str_len <= (self.end - self.start | 0)) {
    let _tmp;
    if (str_len === 0) {
      _tmp = true;
    } else {
      const _p = self.str.charCodeAt(self.start);
      const _p$2 = str.str.charCodeAt(str.start);
      _tmp = _p === _p$2;
    }
    if (_tmp) {
      return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, str.str, str.start, str_len);
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__prefix(self, str) {
  return _M0MPC16string10StringView11has__prefix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC15array5Array4pushGRP213grasp_2daudit13grasp_2daudit11TrialResultE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      const _p = str.charCodeAt(i);
      if (_p === code) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind = chars.str;
  const _bind$2 = chars.start;
  const _bind$3 = chars.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$4;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$4;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      const code = _decoded_char;
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$4 = code >>> 5 | 0;
        switch (_bind$4) {
          case 0: {
            bits0 = bits0 | bit;
            break;
          }
          case 1: {
            bits1 = bits1 | bit;
            break;
          }
          case 2: {
            bits2 = bits2 | bit;
            break;
          }
          default: {
            bits3 = bits3 | bit;
          }
        }
      } else {
        return undefined;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return { _0: bits0, _1: bits1, _2: bits2, _3: bits3 };
}
function _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, code) {
  if (code >>> 0 < 128 >>> 0) {
    const bit = 1 << (code & 31);
    const _bind = code >>> 5 | 0;
    switch (_bind) {
      case 0: {
        return (bits0 & bit) !== 0;
      }
      case 1: {
        return (bits1 & bit) !== 0;
      }
      case 2: {
        return (bits2 & bit) !== 0;
      }
      default: {
        return (bits3 & bit) !== 0;
      }
    }
  } else {
    return false;
  }
}
function _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    let _tmp$2;
    if (pos < end) {
      const _p = str.charCodeAt(pos);
      _tmp$2 = _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _p);
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = end;
  while (true) {
    const pos = _tmp;
    let _tmp$2;
    if (pos > start) {
      const _p = str.charCodeAt(pos - 1 | 0);
      _tmp$2 = _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _p);
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      _tmp = pos - 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB26string__trim__start__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0FPB24string__trim__end__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp = 0;
            while (true) {
              const i = _tmp;
              if (i < (len - 1 | 0)) {
                const _p = self.str.charCodeAt(self.start + i | 0);
                if (_p === high$2) {
                  const _p$2 = self.str.charCodeAt(self.start + (i + 1 | 0) | 0);
                  if (_p$2 === low) {
                    return true;
                  }
                  _tmp = i + 2 | 0;
                  continue;
                }
                _tmp = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView24trim__start__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$2 = x.str;
      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$3;
      if (_bind === undefined) {
        _tmp$3 = x.end;
      } else {
        const _Some = _bind;
        _tmp$3 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$2, _tmp$3, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind = _M0FPB23build__ascii__char__set(chars);
  if (_bind === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    const end = _M0FPB24string__trim__end__ascii(self.str, start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, end);
  }
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = _M0MPC16string6String4trimN6recordS442;
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPB4Iter3mapGRPC16string10StringViewsE(self, f) {
  return new _M0TPB4IterGsE(() => {
    const _bind = _M0MPB4Iter4nextGUiRP213grasp_2daudit13grasp_2daudit13PolicySummaryEE(self);
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0MPB4Iter3mapGcRPC16string10StringViewE(self, f) {
  return new _M0TPB4IterGRPC16string10StringViewE(() => {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC16string10StringView5split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    return _M0MPB4Iter3mapGcRPC16string10StringViewE(_M0MPC16string10StringView4iter(self), (c) => _M0MPC16string6String12view_2einner(_M0IPC14char4CharPB4Show10to__string(c), 0, undefined));
  }
  const remaining = new _M0TPB8MutLocalGORPC16string10StringViewE(self);
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    const _bind = remaining.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _view = _Some;
      const _bind$2 = _M0MPC16string10StringView4find(_view, sep);
      if (_bind$2 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$2;
        const _end = _Some$2;
        remaining.val = _M0MPC16string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
        return _M0MPC16string10StringView12view_2einner(_view, 0, _end);
      }
    }
  }, undefined);
}
function _M0MPC16string6String5split(self, sep) {
  return _M0MPC16string10StringView5split(new _M0TPC16string10StringView(self, 0, self.length), sep);
}
function _M0MPB4Iter9to__arrayGRPC16string10StringViewE(self) {
  const _bind = self.size_hint;
  let result;
  if (_bind === undefined) {
    result = [];
  } else {
    result = [];
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGUiRP213grasp_2daudit13grasp_2daudit13PolicySummaryEE(self);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGRP213grasp_2daudit13grasp_2daudit11TrialResultE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView5iter2GRP213grasp_2daudit13grasp_2daudit13PolicySummaryE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB5Iter23newGiRP213grasp_2daudit13grasp_2daudit13PolicySummaryE(() => {
    if (i.val < len) {
      const result = { _0: i.val, _1: self.buf[self.start + i.val | 0] };
      i.val = i.val + 1 | 0;
      return result;
    } else {
      return undefined;
    }
  }, len);
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsiE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsiE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    const _p = _bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob();
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsiE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsiE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsiE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsiE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsiE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsiE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsiE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsiE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsiE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsiE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsiE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsiE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsiE(self, key, value) {
  _M0MPB3Map15set__with__hashGsiE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsiE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsiE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsiE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGsiE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE4None__;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB5Iter24nextGiRP213grasp_2daudit13grasp_2daudit13PolicySummaryE(self) {
  return _M0MPB4Iter4nextGUiRP213grasp_2daudit13grasp_2daudit13PolicySummaryEE(self);
}
function _M0MPB5Iter24nextGiRP213grasp_2daudit13grasp_2daudit11TrialResultE(self) {
  return _M0MPB4Iter4nextGUiRP213grasp_2daudit13grasp_2daudit13PolicySummaryEE(self);
}
function _M0MPB5Iter24nextGiRPC16string10StringViewE(self) {
  return _M0MPB4Iter4nextGUiRP213grasp_2daudit13grasp_2daudit13PolicySummaryEE(self);
}
function _M0MPB5Iter24nextGiRP213grasp_2daudit13grasp_2daudit6SampleE(self) {
  return _M0MPB4Iter4nextGUiRP213grasp_2daudit13grasp_2daudit13PolicySummaryEE(self);
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0MPC15array5Array2atGsE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGiE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array12MutArrayView4swapGiE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView5sliceGiE(arr, start, end) {
  const _bind = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGiE(arr.buf, start + arr.start | 0, end + arr.start | 0);
}
function _M0MPC15array12MutArrayView14rev__in__placeGiE(arr) {
  const len = arr.end - arr.start | 0;
  const mid_len = len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let _tmp = len;
  let _tmp$2 = 0;
  while (true) {
    const len$2 = _tmp;
    const limit = _tmp$2;
    if (len$2 > 0) {
      _tmp = len$2 / 2 | 0;
      _tmp$2 = limit + 1 | 0;
      continue;
    } else {
      return limit;
    }
  }
}
function _M0FPB19fixed__bubble__sortGiE(arr) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__choose__pivotN7sort__2S731GiE(_env, a, b) {
  const arr = _env._1;
  const swaps = _env._0;
  if (arr.buf[arr.start + a | 0] > arr.buf[arr.start + b | 0]) {
    _M0MPC15array12MutArrayView4swapGiE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB20fixed__choose__pivotN7sort__3S732GiE(_env, a, b, c) {
  _M0FPB20fixed__choose__pivotN7sort__2S731GiE(_env, a, b);
  _M0FPB20fixed__choose__pivotN7sort__2S731GiE(_env, b, c);
  _M0FPB20fixed__choose__pivotN7sort__2S731GiE(_env, a, b);
}
function _M0FPB20fixed__choose__pivotGiE(arr) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: swaps, _1: arr };
    if (len > 50) {
      _M0FPB20fixed__choose__pivotN7sort__3S732GiE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S732GiE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S732GiE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB20fixed__choose__pivotN7sort__3S732GiE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGiE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB17fixed__sift__downGiE(arr, index) {
  const len = arr.end - arr.start | 0;
  let _tmp = index;
  let _tmp$2 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp;
    const child = _tmp$2;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && arr.buf[arr.start + child | 0] < arr.buf[arr.start + (child + 1 | 0) | 0] ? child + 1 | 0 : child;
      if (arr.buf[arr.start + index$2 | 0] >= arr.buf[arr.start + child$2 | 0]) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGiE(arr, index$2, child$2);
      _tmp = child$2;
      _tmp$2 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__heap__sortGiE(arr) {
  const len = arr.end - arr.start | 0;
  const _bind = len / 2 | 0;
  let _tmp = _bind - 1 | 0;
  let _tmp$2 = _bind > 0;
  while (true) {
    const i = _tmp;
    const _more = _tmp$2;
    if (_more) {
      _M0FPB17fixed__sift__downGiE(arr, i);
      _tmp = i - 1 | 0;
      _tmp$2 = i > 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$3 = len - 1 | 0;
  let _tmp$4 = len > 1;
  while (true) {
    const i = _tmp$3;
    const _more = _tmp$4;
    if (_more) {
      _M0MPC15array12MutArrayView4swapGiE(arr, 0, i);
      _M0FPB17fixed__sift__downGiE(_M0MPC15array12MutArrayView5sliceGiE(arr, 0, i), 0);
      _tmp$3 = i - 1 | 0;
      _tmp$4 = i > 1;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB16fixed__partitionGiE(arr, pivot_index) {
  _M0MPC15array12MutArrayView4swapGiE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp = 0;
  let _tmp$2 = 0;
  let _tmp$3 = true;
  while (true) {
    const j = _tmp;
    const i = _tmp$2;
    const partitioned = _tmp$3;
    if (j < _bind) {
      if (arr.buf[arr.start + j | 0] < pivot) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGiE(arr, i, j);
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          _tmp$3 = false;
          continue;
        } else {
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGiE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB24fixed__try__bubble__sortGiE(arr) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp;
    const tries = _tmp$2;
    if (i < _bind) {
      let sorted;
      let _tmp$3 = i;
      let _tmp$4 = true;
      while (true) {
        const j = _tmp$3;
        const sorted$2 = _tmp$4;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp = i + 1 | 0;
        _tmp$2 = tries$2;
        continue;
      } else {
        _tmp = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB18fixed__quick__sortGiE(arr, pred, limit) {
  let _tmp = limit;
  let _tmp$2 = arr;
  let _tmp$3 = pred;
  let _tmp$4 = true;
  let _tmp$5 = true;
  while (true) {
    const limit$2 = _tmp;
    const arr$2 = _tmp$2;
    const pred$2 = _tmp$3;
    const was_partitioned = _tmp$4;
    const balanced = _tmp$5;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB19fixed__bubble__sortGiE(arr$2);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB17fixed__heap__sortGiE(arr$2);
      return undefined;
    }
    const _bind = _M0FPB20fixed__choose__pivotGiE(arr$2);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB24fixed__try__bubble__sortGiE(arr$2)) {
        return undefined;
      }
    }
    const _bind$2 = _M0FPB16fixed__partitionGiE(arr$2, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
    const _p = len - _pivot | 0;
    const balanced$2 = (_pivot > _p ? _p : _pivot) >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p$2 = _Some;
      if (_p$2 === arr$2.buf[arr$2.start + _pivot | 0]) {
        let i;
        let _tmp$6 = _pivot;
        while (true) {
          const i$2 = _tmp$6;
          if (i$2 < len && _p$2 === arr$2.buf[arr$2.start + i$2 | 0]) {
            _tmp$6 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp = limit$3;
        _tmp$2 = _M0MPC15array12MutArrayView5sliceGiE(arr$2, i, len);
        _tmp$4 = _partitioned;
        _tmp$5 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGiE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGiE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB18fixed__quick__sortGiE(left, pred$2, limit$3);
      _tmp = limit$3;
      _tmp$2 = right;
      _tmp$3 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    } else {
      _M0FPB18fixed__quick__sortGiE(right, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp = limit$3;
      _tmp$2 = left;
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView4sortGiE(self) {
  _M0FPB18fixed__quick__sortGiE(self, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array4sortGiE(self) {
  const _bind = self.length;
  _M0MPC15array12MutArrayView4sortGiE(new _M0TPB12MutArrayViewGiE(self, 0, _bind));
}
function _M0MPC15array5Array5iter2GRP213grasp_2daudit13grasp_2daudit13PolicySummaryE(self) {
  return _M0MPC15array9ArrayView5iter2GRP213grasp_2daudit13grasp_2daudit13PolicySummaryE(new _M0TPB9ArrayViewGRP213grasp_2daudit13grasp_2daudit13PolicySummaryE(self, 0, self.length));
}
function _M0FPC28internal7strconv9base__errGUiRPC16string10StringViewbEE() {
  return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv14base__err__str));
}
function _M0FPC28internal7strconv25check__and__consume__base(view, base) {
  if (base === 0) {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if ((view.end - view.start | 0) >= 2) {
              const _x = view.str.charCodeAt(view.start);
              if (_x === 48) {
                const _x$2 = view.str.charCodeAt(view.start + 1 | 0);
                switch (_x$2) {
                  case 120: {
                    const _x$3 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest$3 = _x$3;
                    break _L$4;
                  }
                  case 88: {
                    const _x$4 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest$3 = _x$4;
                    break _L$4;
                  }
                  case 111: {
                    const _x$5 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest$2 = _x$5;
                    break _L$3;
                  }
                  case 79: {
                    const _x$6 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest$2 = _x$6;
                    break _L$3;
                  }
                  case 98: {
                    const _x$7 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest = _x$7;
                    break _L$2;
                  }
                  case 66: {
                    const _x$8 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest = _x$8;
                    break _L$2;
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 16, _1: rest$3, _2: true });
        }
        return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 8, _1: rest$2, _2: true });
      }
      return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 2, _1: rest, _2: true });
    }
    return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 10, _1: view, _2: false });
  } else {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if ((view.end - view.start | 0) >= 2) {
              const _x = view.str.charCodeAt(view.start);
              if (_x === 48) {
                const _x$2 = view.str.charCodeAt(view.start + 1 | 0);
                switch (_x$2) {
                  case 120: {
                    const _x$3 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 16) {
                      rest$3 = _x$3;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 88: {
                    const _x$4 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 16) {
                      rest$3 = _x$4;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 111: {
                    const _x$5 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 8) {
                      rest$2 = _x$5;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 79: {
                    const _x$6 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 8) {
                      rest$2 = _x$6;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 98: {
                    const _x$7 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 2) {
                      rest = _x$7;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  case 66: {
                    const _x$8 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 2) {
                      rest = _x$8;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 16, _1: rest$3, _2: true });
        }
        return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 8, _1: rest$2, _2: true });
      }
      return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 2, _1: rest, _2: true });
    }
    return base >= 2 && base <= 36 ? new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: base, _1: view, _2: false }) : _M0FPC28internal7strconv9base__errGUiRPC16string10StringViewbEE();
  }
}
function _M0FPC28internal7strconv10range__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv15range__err__str));
}
function _M0FPC28internal7strconv11syntax__errGiE() {
  return new _M0DTPC16result6ResultGiRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGlE() {
  return new _M0DTPC16result6ResultGlRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv19overflow__threshold(base, neg) {
  if (!neg) {
    if (base === 10) {
      return 922337203685477581n;
    } else {
      if (base === 16) {
        return 576460752303423488n;
      } else {
        const _tmp = BigInt.asUintN(64, BigInt(base));
        if (_tmp === 0n) {
          $panic();
        }
        return BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asIntN(64, 9223372036854775807n) / BigInt.asIntN(64, _tmp)) + 1n);
      }
    }
  } else {
    if (base === 10) {
      return 17524406870024074036n;
    } else {
      if (base === 16) {
        return 17870283321406128128n;
      } else {
        const _tmp = BigInt.asUintN(64, BigInt(base));
        if (_tmp === 0n) {
          $panic();
        }
        return BigInt.asUintN(64, BigInt.asIntN(64, 9223372036854775808n) / BigInt.asIntN(64, _tmp));
      }
    }
  }
}
function _M0FPC28internal7strconv20parse__int64_2einner(str, base) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(str, _M0FPC28internal7strconv20parse__int64_2einnerN6recordS849)) {
    let neg;
    let rest;
    _L: {
      let rest$2;
      _L$2: {
        if ((str.end - str.start | 0) >= 1) {
          const _x = str.str.charCodeAt(str.start);
          switch (_x) {
            case 43: {
              const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
              neg = false;
              rest = _x$2;
              break _L;
            }
            case 45: {
              const _x$3 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
              neg = true;
              rest = _x$3;
              break _L;
            }
            default: {
              rest$2 = str;
              break _L$2;
            }
          }
        } else {
          rest$2 = str;
          break _L$2;
        }
      }
      neg = false;
      rest = rest$2;
      break _L;
    }
    const _bind = _M0FPC28internal7strconv25check__and__consume__base(rest, base);
    let _bind$2;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _bind$2 = _ok._0;
    } else {
      return _bind;
    }
    const _num_base = _bind$2._0;
    const _rest = _bind$2._1;
    const _allow_underscore = _bind$2._2;
    const overflow_threshold = _M0FPC28internal7strconv19overflow__threshold(_num_base, neg);
    let has_digit;
    if ((_rest.end - _rest.start | 0) >= 1) {
      const _x = _rest.str.charCodeAt(_rest.start);
      if (_x >= 48 && _x <= 57) {
        has_digit = true;
      } else {
        if (_x >= 97 && _x <= 122) {
          has_digit = true;
        } else {
          if (_x >= 65 && _x <= 90) {
            has_digit = true;
          } else {
            if ((_rest.end - _rest.start | 0) >= 2) {
              if (_x === 95) {
                const _x$2 = _rest.str.charCodeAt(_rest.start + 1 | 0);
                has_digit = _x$2 >= 48 && _x$2 <= 57 ? true : _x$2 >= 97 && _x$2 <= 122 ? true : _x$2 >= 65 && _x$2 <= 90;
              } else {
                has_digit = false;
              }
            } else {
              has_digit = false;
            }
          }
        }
      }
    } else {
      has_digit = false;
    }
    if (has_digit) {
      let _break_value;
      _L$2: {
        let _tmp = _rest;
        let _tmp$2 = 0n;
        let _tmp$3 = _allow_underscore;
        while (true) {
          const rest$2 = _tmp;
          const acc = _tmp$2;
          const allow_underscore = _tmp$3;
          let acc$2;
          let rest$3;
          let c;
          _L$3: {
            _L$4: {
              if ((rest$2.end - rest$2.start | 0) === 1) {
                const _x = rest$2.str.charCodeAt(rest$2.start);
                if (_x === 95) {
                  const _bind$3 = _M0FPC28internal7strconv11syntax__errGuE();
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _ok._0;
                  } else {
                    return _bind$3;
                  }
                } else {
                  const _c = _M0MPC16string6String16unsafe__char__at(rest$2.str, _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 0, rest$2.start, rest$2.end));
                  const _tmp$4 = rest$2.str;
                  const _bind$3 = _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 1, rest$2.start, rest$2.end);
                  let _tmp$5;
                  if (_bind$3 === undefined) {
                    _tmp$5 = rest$2.end;
                  } else {
                    const _Some = _bind$3;
                    _tmp$5 = _Some;
                  }
                  const _x$2 = new _M0TPC16string10StringView(_tmp$4, _tmp$5, rest$2.end);
                  acc$2 = acc;
                  rest$3 = _x$2;
                  c = _c;
                  break _L$4;
                }
              } else {
                if ((rest$2.end - rest$2.start | 0) >= 1) {
                  const _x = rest$2.str.charCodeAt(rest$2.start);
                  if (_x === 95) {
                    if (allow_underscore === false) {
                      const _bind$3 = _M0FPC28internal7strconv11syntax__errGuE();
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _ok._0;
                      } else {
                        return _bind$3;
                      }
                    } else {
                      const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
                      _tmp = _x$2;
                      _tmp$3 = false;
                      continue;
                    }
                  } else {
                    const _c = _M0MPC16string6String16unsafe__char__at(rest$2.str, _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 0, rest$2.start, rest$2.end));
                    const _tmp$4 = rest$2.str;
                    const _bind$3 = _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 1, rest$2.start, rest$2.end);
                    let _tmp$5;
                    if (_bind$3 === undefined) {
                      _tmp$5 = rest$2.end;
                    } else {
                      const _Some = _bind$3;
                      _tmp$5 = _Some;
                    }
                    const _x$2 = new _M0TPC16string10StringView(_tmp$4, _tmp$5, rest$2.end);
                    acc$2 = acc;
                    rest$3 = _x$2;
                    c = _c;
                    break _L$4;
                  }
                } else {
                  _break_value = acc;
                  break _L$2;
                }
              }
              break _L$3;
            }
            const c$2 = c;
            let d;
            if (c$2 >= 48 && c$2 <= 57) {
              d = c$2 - 48 | 0;
            } else {
              if (c$2 >= 97 && c$2 <= 122) {
                d = c$2 + -87 | 0;
              } else {
                if (c$2 >= 65 && c$2 <= 90) {
                  d = c$2 + -55 | 0;
                } else {
                  const _bind$3 = _M0FPC28internal7strconv11syntax__errGiE();
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    d = _ok._0;
                  } else {
                    return _bind$3;
                  }
                }
              }
            }
            if (d < _num_base) {
              if (neg) {
                if (BigInt.asIntN(64, acc$2) >= BigInt.asIntN(64, overflow_threshold)) {
                  const next_acc = BigInt.asUintN(64, BigInt.asUintN(64, acc$2 * BigInt.asUintN(64, BigInt(_num_base))) - BigInt.asUintN(64, BigInt(d)));
                  if (BigInt.asIntN(64, next_acc) <= BigInt.asIntN(64, acc$2)) {
                    _tmp = rest$3;
                    _tmp$2 = next_acc;
                    _tmp$3 = true;
                    continue;
                  } else {
                    const _bind$3 = _M0FPC28internal7strconv10range__errGuE();
                    if (_bind$3.$tag === 1) {
                      const _ok = _bind$3;
                      _ok._0;
                    } else {
                      return _bind$3;
                    }
                  }
                } else {
                  const _bind$3 = _M0FPC28internal7strconv10range__errGuE();
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _ok._0;
                  } else {
                    return _bind$3;
                  }
                }
              } else {
                if (BigInt.asIntN(64, acc$2) < BigInt.asIntN(64, overflow_threshold)) {
                  const next_acc = BigInt.asUintN(64, BigInt.asUintN(64, acc$2 * BigInt.asUintN(64, BigInt(_num_base))) + BigInt.asUintN(64, BigInt(d)));
                  if (BigInt.asIntN(64, next_acc) >= BigInt.asIntN(64, acc$2)) {
                    _tmp = rest$3;
                    _tmp$2 = next_acc;
                    _tmp$3 = true;
                    continue;
                  } else {
                    const _bind$3 = _M0FPC28internal7strconv10range__errGuE();
                    if (_bind$3.$tag === 1) {
                      const _ok = _bind$3;
                      _ok._0;
                    } else {
                      return _bind$3;
                    }
                  }
                } else {
                  const _bind$3 = _M0FPC28internal7strconv10range__errGuE();
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _ok._0;
                  } else {
                    return _bind$3;
                  }
                }
              }
            } else {
              const _bind$3 = _M0FPC28internal7strconv11syntax__errGuE();
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
            }
          }
          continue;
        }
      }
      return new _M0DTPC16result6ResultGlRPC15error5ErrorE2Ok(_break_value);
    } else {
      return _M0FPC28internal7strconv11syntax__errGlE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGlE();
  }
}
function _M0FPC28internal7strconv18parse__int_2einner(str, base) {
  const _bind = _M0FPC28internal7strconv20parse__int64_2einner(str, base);
  let n;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    n = _ok._0;
  } else {
    return _bind;
  }
  if (BigInt.asIntN(64, n) < BigInt.asIntN(64, 18446744071562067968n) || BigInt.asIntN(64, n) > BigInt.asIntN(64, 2147483647n)) {
    const _bind$2 = _M0FPC28internal7strconv10range__errGuE();
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  return new _M0DTPC16result6ResultGiRPC15error5ErrorE2Ok(Number(BigInt.asIntN(32, n)) | 0);
}
function _M0FP213grasp_2daudit13grasp_2daudit13outcome__name(outcome) {
  switch (outcome) {
    case 0: {
      return "retained";
    }
    case 1: {
      return "recovered";
    }
    case 2: {
      return "unrecovered";
    }
    default: {
      return "censored";
    }
  }
}
function _M0FP213grasp_2daudit13grasp_2daudit12optional__ms(value, missing) {
  if (value === undefined) {
    return missing;
  } else {
    const _Some = value;
    const _ms = _Some;
    return _M0MPC13int3Int18to__string_2einner(_ms, 10);
  }
}
function _M0FP213grasp_2daudit13grasp_2daudit7percent(numerator, denominator) {
  if (denominator === 0) {
    return "N/A";
  }
  const tenths = _M0MPC16double6Double7to__int((numerator + 0) * 1000 / (denominator + 0) + 0.5);
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, tenths / 10 | 0);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, tenths % 10 | 0);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "%");
  return _string_builder.val;
}
function _M0FP213grasp_2daudit13grasp_2daudit16optional__number(value) {
  if (value.$tag === 1) {
    const _Some = value;
    const _number = _Some._0;
    return String(_number);
  } else {
    return "null";
  }
}
function _M0FP213grasp_2daudit13grasp_2daudit4rate(numerator, denominator) {
  return denominator === 0 ? "null" : String((numerator + 0) / (denominator + 0));
}
function _M0FP213grasp_2daudit13grasp_2daudit12render__json(report) {
  const o = report.options;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(84);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{\"schema_version\":2,\"options\":{\"horizon_ms\":");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, o.horizon_ms);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"dwell_ms\":");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, o.dwell_ms);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"max_gap_ms\":");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, o.max_gap_ms);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "},\"policies\":[");
  let output = _string_builder.val;
  const _it = _M0MPC15array5Array5iter2GRP213grasp_2daudit13grasp_2daudit13PolicySummaryE(report.policies);
  while (true) {
    const _bind = _M0MPB5Iter24nextGiRP213grasp_2daudit13grasp_2daudit13PolicySummaryE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _i = _x._0;
      const _summary = _x._1;
      if (_i > 0) {
        output = `${output},`;
      }
      const complete = _summary.total - _summary.censored | 0;
      const stable = _summary.retained + _summary.recovered | 0;
      const _tmp = output;
      const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(170);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "{\"policy\":\"");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _summary.policy);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\",\"total\":");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _summary.total);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"complete\":");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, complete);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"retained\":");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _summary.retained);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"recovered\":");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _summary.recovered);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"unrecovered\":");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _summary.unrecovered);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"censored\":");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _summary.censored);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"stable_rate\":");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP213grasp_2daudit13grasp_2daudit4rate(stable, complete));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"retention_rate\":");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP213grasp_2daudit13grasp_2daudit4rate(_summary.retained, complete));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"conditional_recovery_rate\":");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP213grasp_2daudit13grasp_2daudit4rate(_summary.recovered, _summary.recovered + _summary.unrecovered | 0));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"median_recovery_ms\":");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP213grasp_2daudit13grasp_2daudit16optional__number(_summary.median_recovery_ms));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "}");
      output = `${_tmp}${_string_builder$2.val}`;
      continue;
    }
  }
  output = `${output}],\"trials\":[`;
  const _it$2 = _M0MPC15array5Array5iter2GRP213grasp_2daudit13grasp_2daudit13PolicySummaryE(report.trials);
  while (true) {
    const _bind = _M0MPB5Iter24nextGiRP213grasp_2daudit13grasp_2daudit11TrialResultE(_it$2);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _i = _x._0;
      const _trial = _x._1;
      if (_i > 0) {
        output = `${output},`;
      }
      const _bind$2 = _trial.recovery_ms;
      let latency;
      if (_bind$2 === undefined) {
        latency = "null";
      } else {
        const _Some$2 = _bind$2;
        const _ms = _Some$2;
        latency = _M0MPC13int3Int18to__string_2einner(_ms, 10);
      }
      const _tmp = output;
      const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(134);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "{\"trial\":\"");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _trial.trial);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\",\"policy\":\"");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _trial.policy);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\",\"event_ms\":");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, _trial.event_ms);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"outcome\":\"");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP213grasp_2daudit13grasp_2daudit13outcome__name(_trial.outcome));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\",\"recovery_ms\":");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, latency);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"held_ms\":");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP213grasp_2daudit13grasp_2daudit12optional__ms(_trial.held_ms, "null"));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"lost_ms\":");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP213grasp_2daudit13grasp_2daudit12optional__ms(_trial.lost_ms, "null"));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"first_loss_ms\":");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP213grasp_2daudit13grasp_2daudit12optional__ms(_trial.first_loss_ms, "null"));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"final_stable_ms\":");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP213grasp_2daudit13grasp_2daudit12optional__ms(_trial.final_stable_ms, "null"));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ",\"reason\":\"");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _trial.reason);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\"}");
      output = `${_tmp}${_string_builder$2.val}`;
      continue;
    }
  }
  return `${output}]}\n`;
}
function _M0FP213grasp_2daudit13grasp_2daudit11render__csv(report) {
  let output = "trial,policy,event_ms,outcome,recovery_ms,reason,held_ms,lost_ms,first_loss_ms,final_stable_ms\n";
  const _bind = report.trials;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const trial = _bind[_];
      const _bind$3 = trial.recovery_ms;
      let latency;
      if (_bind$3 === undefined) {
        latency = "";
      } else {
        const _Some = _bind$3;
        const _ms = _Some;
        latency = _M0MPC13int3Int18to__string_2einner(_ms, 10);
      }
      const _tmp$2 = output;
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(10);
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, trial.trial);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, trial.policy);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, trial.event_ms);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP213grasp_2daudit13grasp_2daudit13outcome__name(trial.outcome));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, latency);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, trial.reason);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP213grasp_2daudit13grasp_2daudit12optional__ms(trial.held_ms, ""));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP213grasp_2daudit13grasp_2daudit12optional__ms(trial.lost_ms, ""));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP213grasp_2daudit13grasp_2daudit12optional__ms(trial.first_loss_ms, ""));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP213grasp_2daudit13grasp_2daudit12optional__ms(trial.final_stable_ms, ""));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\n");
      output = `${_tmp$2}${_string_builder.val}`;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return output;
}
function _M0FP213grasp_2daudit13grasp_2daudit16render__markdown(report) {
  const o = report.options;
  let output = "# GraspAudit report\n\n";
  const _tmp = output;
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(80);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Horizon: **");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, o.horizon_ms);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " ms** · Final stable dwell: **");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, o.dwell_ms);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " ms** · Maximum sample gap: **");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, o.max_gap_ms);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " ms**\n\n");
  output = `${_tmp}${_string_builder.val}`;
  output = `${output}| Policy | Trials | Complete | Retained | Recovered | Unrecovered | Censored | Stable rate | Retention | Recovery given loss | Median recovery (ms) |\n`;
  output = `${output}|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|\n`;
  const _bind = report.policies;
  const _bind$2 = _bind.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$2) {
      const summary = _bind[_];
      const complete = summary.total - summary.censored | 0;
      const _bind$3 = summary.median_recovery_ms;
      let latency;
      if (_bind$3.$tag === 1) {
        const _Some = _bind$3;
        const _ms = _Some._0;
        latency = String(_ms);
      } else {
        latency = "N/A";
      }
      const _tmp$3 = output;
      const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(35);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "| ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, summary.policy);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, summary.total);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, complete);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, summary.retained);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, summary.recovered);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, summary.unrecovered);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, summary.censored);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP213grasp_2daudit13grasp_2daudit7percent(summary.retained + summary.recovered | 0, complete));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP213grasp_2daudit13grasp_2daudit7percent(summary.retained, complete));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP213grasp_2daudit13grasp_2daudit7percent(summary.recovered, summary.recovered + summary.unrecovered | 0));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, latency);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " |\n");
      output = `${_tmp$3}${_string_builder$2.val}`;
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  output = `${output}\nStable rate = (retained + recovered) / complete trials. Recovery given loss excludes retained trials. Censored trials are excluded from all rates; exclusions may bias comparisons.\n\n`;
  output = `${output}## Trial audit trail\n\n| Trial | Policy | Outcome | Recovery (ms) | Lost (ms) | Final held (ms) | Reason |\n|---|---|---|---:|---:|---:|---|\n`;
  const _bind$3 = report.trials;
  const _bind$4 = _bind$3.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$4) {
      const trial = _bind$3[_];
      const _bind$5 = trial.recovery_ms;
      let latency;
      if (_bind$5 === undefined) {
        latency = "N/A";
      } else {
        const _Some = _bind$5;
        const _ms = _Some;
        latency = _M0MPC13int3Int18to__string_2einner(_ms, 10);
      }
      const _tmp$4 = output;
      const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(23);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "| ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, trial.trial);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, trial.policy);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP213grasp_2daudit13grasp_2daudit13outcome__name(trial.outcome));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, latency);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP213grasp_2daudit13grasp_2daudit12optional__ms(trial.lost_ms, "N/A"));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FP213grasp_2daudit13grasp_2daudit12optional__ms(trial.final_stable_ms, "N/A"));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " | ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, trial.reason);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, " |\n");
      output = `${_tmp$4}${_string_builder$2.val}`;
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return `${output}\n**Interpretation:** observed binary-state retention and sustained final-window recovery under sample-and-hold, not continuous physical guarantees, force closure, causal effects, or robot task success. Recovery latency starts at the perturbation, not at the loss. Compare matched protocols, thresholds, objects, and sampling rates.\n`;
}
function _M0FP213grasp_2daudit13grasp_2daudit9valid__id(value) {
  if (value.length === 0 || value.length > 80) {
    return false;
  }
  const _bind = value.length;
  let _tmp = 0;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$2 = value.charCodeAt(_string_index);
        if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
          const _bind$3 = value.charCodeAt(_string_index + 1 | 0);
          if (_bind$3 >= 56320 && _bind$3 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$2;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$2;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      if (_decoded_char >= 97 && _decoded_char <= 122) {
      } else {
        if (_decoded_char >= 65 && _decoded_char <= 90) {
        } else {
          if (_decoded_char >= 48 && _decoded_char <= 57) {
          } else {
            if (_decoded_char === 95) {
            } else {
              if (_decoded_char === 45) {
              } else {
                if (_decoded_char === 46) {
                } else {
                  return false;
                }
              }
            }
          }
        }
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FP213grasp_2daudit13grasp_2daudit18parse__nonnegative(value) {
  if (value.length === 0 || value.length > 10) {
    return _M0FP213grasp_2daudit13grasp_2daudit18parse__nonnegativeN6constrS981;
  }
  const _bind = value.length;
  let _tmp = 0;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$2 = value.charCodeAt(_string_index);
        if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
          const _bind$3 = value.charCodeAt(_string_index + 1 | 0);
          if (_bind$3 >= 56320 && _bind$3 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$2;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$2;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      if (_decoded_char < 48 || _decoded_char > 57) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(44);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "expected an unsigned decimal integer, not '");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, value);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "'");
        return new _M0DTPC16result6ResultGisE3Err(_string_builder.val);
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  let parsed;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$2 = _M0FPC28internal7strconv18parse__int_2einner(new _M0TPC16string10StringView(value, 0, value.length), 0);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        parsed = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(24);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "integer out of range: '");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, value);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "'");
    return new _M0DTPC16result6ResultGisE3Err(_string_builder.val);
  }
  if (parsed > 1000000000) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(30);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "integer exceeds 1000000000: '");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, value);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "'");
    return new _M0DTPC16result6ResultGisE3Err(_string_builder.val);
  }
  return new _M0DTPC16result6ResultGisE2Ok(parsed);
}
function _M0FP213grasp_2daudit13grasp_2daudit10parse__csv(text) {
  const lines = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(text, _M0FP213grasp_2daudit13grasp_2daudit10parse__csvN6recordS997));
  const trials = [];
  const _bind = [];
  const index = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind, 0, 0), undefined);
  let saw_header = false;
  let rows = 0;
  const _it = _M0MPC15array5Array5iter2GRP213grasp_2daudit13grasp_2daudit13PolicySummaryE(lines);
  while (true) {
    const _bind$2 = _M0MPB5Iter24nextGiRPC16string10StringViewE(_it);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _line_no = _x._0;
      const _raw = _x._1;
      const line = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0MPC16string10StringView9to__owned(_raw), undefined));
      if (line === "") {
        continue;
      }
      if (!saw_header) {
        const _p = "trial,policy,time_ms,held,perturbation";
        if (!(line === _p)) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(61);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "line ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, _line_no + 1 | 0);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": expected header trial,policy,time_ms,held,perturbation");
          return new _M0DTPC16result6ResultGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit5TrialEsE3Err(_string_builder.val);
        }
        saw_header = true;
        continue;
      }
      rows = rows + 1 | 0;
      if (rows > 200000) {
        return _M0FP213grasp_2daudit13grasp_2daudit10parse__csvN6constrS998;
      }
      const fields = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(line, _M0FP213grasp_2daudit13grasp_2daudit10parse__csvN6recordS999), (x) => _M0MPC16string10StringView9to__owned(x)));
      if (fields.length !== 5) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(41);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "line ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, _line_no + 1 | 0);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": expected exactly 5 unquoted fields");
        return new _M0DTPC16result6ResultGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit5TrialEsE3Err(_string_builder.val);
      }
      const id = _M0MPC15array5Array2atGsE(fields, 0);
      const policy = _M0MPC15array5Array2atGsE(fields, 1);
      if (!_M0FP213grasp_2daudit13grasp_2daudit9valid__id(id) || !_M0FP213grasp_2daudit13grasp_2daudit9valid__id(policy)) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(65);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "line ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, _line_no + 1 | 0);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": trial/policy must be 1-80 ASCII letters, digits, _, - or .");
        return new _M0DTPC16result6ResultGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit5TrialEsE3Err(_string_builder.val);
      }
      const _bind$3 = _M0FP213grasp_2daudit13grasp_2daudit18parse__nonnegative(_M0MPC15array5Array2atGsE(fields, 2));
      let time_ms;
      if (_bind$3.$tag === 1) {
        const _Ok = _bind$3;
        time_ms = _Ok._0;
      } else {
        const _Err = _bind$3;
        const _message = _Err._0;
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "line ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, _line_no + 1 | 0);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": ");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, _message);
        return new _M0DTPC16result6ResultGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit5TrialEsE3Err(_string_builder.val);
      }
      let _tmp;
      let _tmp$2;
      const _p = _M0MPC15array5Array2atGsE(fields, 3);
      const _p$2 = "0";
      if (!(_p === _p$2)) {
        const _p$3 = _M0MPC15array5Array2atGsE(fields, 3);
        const _p$4 = "1";
        _tmp$2 = !(_p$3 === _p$4);
      } else {
        _tmp$2 = false;
      }
      if (_tmp$2) {
        _tmp = true;
      } else {
        let _tmp$3;
        const _p$3 = _M0MPC15array5Array2atGsE(fields, 4);
        const _p$4 = "0";
        if (!(_p$3 === _p$4)) {
          const _p$5 = _M0MPC15array5Array2atGsE(fields, 4);
          const _p$6 = "1";
          _tmp$3 = !(_p$5 === _p$6);
        } else {
          _tmp$3 = false;
        }
        _tmp = _tmp$3;
      }
      if (_tmp) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(43);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "line ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, _line_no + 1 | 0);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": held and perturbation must be 0 or 1");
        return new _M0DTPC16result6ResultGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit5TrialEsE3Err(_string_builder.val);
      }
      const sample = new _M0TP213grasp_2daudit13grasp_2daudit6Sample(time_ms, _M0MPC15array5Array2atGsE(fields, 3) === "1", _M0MPC15array5Array2atGsE(fields, 4) === "1");
      const _bind$4 = _M0MPB3Map3getGsiE(index, id);
      if (_bind$4 === undefined) {
        _M0MPB3Map3setGsiE(index, id, trials.length);
        _M0MPC15array5Array4pushGRP213grasp_2daudit13grasp_2daudit11TrialResultE(trials, new _M0TP213grasp_2daudit13grasp_2daudit5Trial(id, policy, [sample]));
      } else {
        const _Some$2 = _bind$4;
        const _i = _Some$2;
        const trial = _M0MPC15array5Array2atGsE(trials, _i);
        const _p$3 = trial.policy;
        if (!(_p$3 === policy)) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(37);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "line ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, _line_no + 1 | 0);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": policy changed within trial '");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, id);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "'");
          return new _M0DTPC16result6ResultGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit5TrialEsE3Err(_string_builder.val);
        }
        if (time_ms <= _M0MPC15array5Array2atGsE(trial.samples, trial.samples.length - 1 | 0).time_ms) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(56);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "line ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, _line_no + 1 | 0);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": timestamps must increase strictly within trial '");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, id);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "'");
          return new _M0DTPC16result6ResultGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit5TrialEsE3Err(_string_builder.val);
        }
        _M0MPC15array5Array4pushGRP213grasp_2daudit13grasp_2daudit11TrialResultE(trial.samples, sample);
      }
      continue;
    }
  }
  if (trials.length === 0) {
    return _M0FP213grasp_2daudit13grasp_2daudit10parse__csvN6constrS1000;
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP213grasp_2daudit13grasp_2daudit5TrialEsE2Ok(trials);
}
function _M0FP213grasp_2daudit13grasp_2daudit17validate__options(options) {
  if (options.horizon_ms <= 0 || options.horizon_ms > 1000000000) {
    return _M0FP213grasp_2daudit13grasp_2daudit17validate__optionsN6constrS1037;
  }
  if (options.dwell_ms <= 0 || options.dwell_ms > options.horizon_ms) {
    return _M0FP213grasp_2daudit13grasp_2daudit17validate__optionsN6constrS1038;
  }
  if (options.max_gap_ms <= 0 || options.max_gap_ms > 1000000000) {
    return _M0FP213grasp_2daudit13grasp_2daudit17validate__optionsN6constrS1039;
  }
  return new _M0DTPC16result6ResultGusE2Ok(undefined);
}
function _M0FP213grasp_2daudit13grasp_2daudit14analyze__trial(trial, options) {
  const _bind = _M0FP213grasp_2daudit13grasp_2daudit17validate__options(options);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _message = _Err._0;
    return new _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit11TrialResultsE3Err(_message);
  }
  const samples = trial.samples;
  if (samples.length < 2) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(36);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "trial '");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, trial.id);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "': needs at least two samples");
    return new _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit11TrialResultsE3Err(_string_builder.val);
  }
  let event_index = -1;
  const _it = _M0MPC15array5Array5iter2GRP213grasp_2daudit13grasp_2daudit13PolicySummaryE(samples);
  while (true) {
    const _bind$2 = _M0MPB5Iter24nextGiRP213grasp_2daudit13grasp_2daudit6SampleE(_it);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _i = _x._0;
      const _sample = _x._1;
      if (_sample.time_ms < 0 || _sample.time_ms > 1000000000) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(41);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "trial '");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, trial.id);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "': timestamp outside 0..1000000000");
        return new _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit11TrialResultsE3Err(_string_builder.val);
      }
      if (_i > 0 && _sample.time_ms <= _M0MPC15array5Array2atGsE(samples, _i - 1 | 0).time_ms) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(43);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "trial '");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, trial.id);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "': timestamps must increase strictly");
        return new _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit11TrialResultsE3Err(_string_builder.val);
      }
      if (_sample.perturbation) {
        if (event_index >= 0) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(94);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "trial '");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, trial.id);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "': expected exactly one perturbation; split repeated perturbations into separate trials");
          return new _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit11TrialResultsE3Err(_string_builder.val);
        }
        event_index = _i;
      }
      continue;
    }
  }
  if (event_index < 1) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(65);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "trial '");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, trial.id);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "': needs one perturbation with a preceding baseline sample");
    return new _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit11TrialResultsE3Err(_string_builder.val);
  }
  if (!_M0MPC15array5Array2atGsE(samples, event_index - 1 | 0).held) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(56);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "trial '");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, trial.id);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "': the preceding baseline sample must have held=1");
    return new _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit11TrialResultsE3Err(_string_builder.val);
  }
  const event_ms = _M0MPC15array5Array2atGsE(samples, event_index).time_ms;
  const deadline = event_ms + options.horizon_ms | 0;
  const base = new _M0TP213grasp_2daudit13grasp_2daudit11TrialResult(trial.id, trial.policy, event_ms, 3, undefined, undefined, undefined, undefined, undefined, "");
  if ((_M0MPC15array5Array2atGsE(samples, event_index).time_ms - _M0MPC15array5Array2atGsE(samples, event_index - 1 | 0).time_ms | 0) > options.max_gap_ms) {
    return new _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit11TrialResultsE2Ok(new _M0TP213grasp_2daudit13grasp_2daudit11TrialResult(base.trial, base.policy, base.event_ms, base.outcome, base.recovery_ms, base.held_ms, base.lost_ms, base.first_loss_ms, base.final_stable_ms, "baseline_gap"));
  }
  if (_M0MPC15array5Array2atGsE(samples, samples.length - 1 | 0).time_ms < deadline) {
    return new _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit11TrialResultsE2Ok(new _M0TP213grasp_2daudit13grasp_2daudit11TrialResult(base.trial, base.policy, base.event_ms, base.outcome, base.recovery_ms, base.held_ms, base.lost_ms, base.first_loss_ms, base.final_stable_ms, "incomplete_horizon"));
  }
  let _tmp = event_index;
  while (true) {
    const i = _tmp;
    if (i < (samples.length - 1 | 0)) {
      if (_M0MPC15array5Array2atGsE(samples, i).time_ms >= deadline) {
        break;
      }
      if ((_M0MPC15array5Array2atGsE(samples, i + 1 | 0).time_ms - _M0MPC15array5Array2atGsE(samples, i).time_ms | 0) > options.max_gap_ms) {
        return new _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit11TrialResultsE2Ok(new _M0TP213grasp_2daudit13grasp_2daudit11TrialResult(base.trial, base.policy, base.event_ms, base.outcome, base.recovery_ms, base.held_ms, base.lost_ms, base.first_loss_ms, base.final_stable_ms, "sample_gap"));
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let held_ms = 0;
  let first_loss_ms = undefined;
  let any_loss = false;
  let was_held = false;
  let stable_start = event_ms;
  let _tmp$2 = event_index;
  while (true) {
    const i = _tmp$2;
    if (i < samples.length) {
      const sample = _M0MPC15array5Array2atGsE(samples, i);
      if (sample.time_ms > deadline) {
        break;
      }
      if (sample.time_ms < deadline && sample.held) {
        const next_time = _M0MPC15array5Array2atGsE(samples, i + 1 | 0).time_ms;
        const interval_end = next_time < deadline ? next_time : deadline;
        held_ms = (held_ms + interval_end | 0) - sample.time_ms | 0;
      }
      if (sample.held) {
        if (!was_held) {
          stable_start = sample.time_ms;
        }
      } else {
        if (!any_loss) {
          first_loss_ms = sample.time_ms - event_ms | 0;
        }
        any_loss = true;
      }
      was_held = sample.held;
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const diagnosed = new _M0TP213grasp_2daudit13grasp_2daudit11TrialResult(base.trial, base.policy, base.event_ms, base.outcome, base.recovery_ms, held_ms, options.horizon_ms - held_ms | 0, first_loss_ms, was_held ? deadline - stable_start | 0 : 0, base.reason);
  return !any_loss ? new _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit11TrialResultsE2Ok(new _M0TP213grasp_2daudit13grasp_2daudit11TrialResult(diagnosed.trial, diagnosed.policy, diagnosed.event_ms, 0, diagnosed.recovery_ms, diagnosed.held_ms, diagnosed.lost_ms, diagnosed.first_loss_ms, diagnosed.final_stable_ms, "held_through_horizon")) : was_held && (deadline - stable_start | 0) >= options.dwell_ms ? new _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit11TrialResultsE2Ok(new _M0TP213grasp_2daudit13grasp_2daudit11TrialResult(diagnosed.trial, diagnosed.policy, diagnosed.event_ms, 1, stable_start - event_ms | 0, diagnosed.held_ms, diagnosed.lost_ms, diagnosed.first_loss_ms, diagnosed.final_stable_ms, "final_run_meets_dwell")) : new _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit11TrialResultsE2Ok(new _M0TP213grasp_2daudit13grasp_2daudit11TrialResult(diagnosed.trial, diagnosed.policy, diagnosed.event_ms, 2, diagnosed.recovery_ms, diagnosed.held_ms, diagnosed.lost_ms, diagnosed.first_loss_ms, diagnosed.final_stable_ms, "no_sustained_final_recovery"));
}
function _M0FP213grasp_2daudit13grasp_2daudit6median(values) {
  if (values.length === 0) {
    return _M0DTPC16option6OptionGdE4None__;
  }
  _M0MPC15array5Array4sortGiE(values);
  const mid = values.length / 2 | 0;
  return (values.length % 2 | 0) === 1 ? new _M0DTPC16option6OptionGdE4Some(_M0MPC15array5Array2atGiE(values, mid) + 0) : new _M0DTPC16option6OptionGdE4Some((_M0MPC15array5Array2atGiE(values, mid - 1 | 0) + 0 + (_M0MPC15array5Array2atGiE(values, mid) + 0)) / 2);
}
function _M0FP213grasp_2daudit13grasp_2daudit9summarize(results) {
  const policies = [];
  const _bind = [];
  const groups = _M0MPB3Map3MapGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(new _M0TPB9ArrayViewGUsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEEE(_bind, 0, 0), undefined);
  const _bind$2 = results.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const result = results[_];
      const _bind$3 = _M0MPB3Map3getGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(groups, result.policy);
      if (_bind$3.$tag === 1) {
        const _Some = _bind$3;
        const _group = _Some._0;
        _M0MPC15array5Array4pushGRP213grasp_2daudit13grasp_2daudit11TrialResultE(_group, result);
      } else {
        _M0MPC15array5Array4pushGRP213grasp_2daudit13grasp_2daudit11TrialResultE(policies, result.policy);
        _M0MPB3Map3setGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(groups, result.policy, [result]);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const summaries = [];
  const _bind$3 = policies.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const policy = policies[_];
      const _bind$4 = _M0MPB3Map3getGsRPB5ArrayGRP213grasp_2daudit13grasp_2daudit11TrialResultEE(groups, policy);
      let group;
      if (_bind$4.$tag === 1) {
        const _Some = _bind$4;
        group = _Some._0;
      } else {
        group = [];
      }
      let retained = 0;
      let recovered = 0;
      let unrecovered = 0;
      let censored = 0;
      const latencies = [];
      const _bind$5 = group.length;
      let _tmp$3 = 0;
      while (true) {
        const _$2 = _tmp$3;
        if (_$2 < _bind$5) {
          const trial = group[_$2];
          const _bind$6 = trial.outcome;
          switch (_bind$6) {
            case 0: {
              retained = retained + 1 | 0;
              break;
            }
            case 1: {
              recovered = recovered + 1 | 0;
              const _bind$7 = trial.recovery_ms;
              if (_bind$7 === undefined) {
              } else {
                const _Some = _bind$7;
                const _ms = _Some;
                _M0MPC15array5Array4pushGiE(latencies, _ms);
              }
              break;
            }
            case 2: {
              unrecovered = unrecovered + 1 | 0;
              break;
            }
            default: {
              censored = censored + 1 | 0;
            }
          }
          _tmp$3 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRP213grasp_2daudit13grasp_2daudit11TrialResultE(summaries, new _M0TP213grasp_2daudit13grasp_2daudit13PolicySummary(policy, group.length, retained, recovered, unrecovered, censored, _M0FP213grasp_2daudit13grasp_2daudit6median(latencies)));
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return summaries;
}
function _M0FP213grasp_2daudit13grasp_2daudit12analyze__csv(text, options) {
  const _bind = _M0FP213grasp_2daudit13grasp_2daudit17validate__options(options);
  if (_bind.$tag === 0) {
    const _Err = _bind;
    const _message = _Err._0;
    return new _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit6ReportsE3Err(_message);
  }
  const _bind$2 = _M0FP213grasp_2daudit13grasp_2daudit10parse__csv(text);
  let trials;
  if (_bind$2.$tag === 1) {
    const _Ok = _bind$2;
    trials = _Ok._0;
  } else {
    const _Err = _bind$2;
    const _message = _Err._0;
    return new _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit6ReportsE3Err(_message);
  }
  const results = [];
  const _bind$3 = trials.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$3) {
      const trial = trials[_];
      const _bind$4 = _M0FP213grasp_2daudit13grasp_2daudit14analyze__trial(trial, options);
      if (_bind$4.$tag === 1) {
        const _Ok = _bind$4;
        const _result = _Ok._0;
        _M0MPC15array5Array4pushGRP213grasp_2daudit13grasp_2daudit11TrialResultE(results, _result);
      } else {
        const _Err = _bind$4;
        const _message = _Err._0;
        return new _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit6ReportsE3Err(_message);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP213grasp_2daudit13grasp_2daudit6ReportsE2Ok(new _M0TP213grasp_2daudit13grasp_2daudit6Report(options, results, _M0FP213grasp_2daudit13grasp_2daudit9summarize(results)));
}
function _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit3run() {
  const argv = _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit4args();
  if (argv.length === 0) {
    return new _M0DTPC16result6ResultGssE2Ok("GraspAudit 0.1.0 - offline dexterous-grasp trace evaluation\n\nUsage: moon run --target js cmd/grasp-audit -- INPUT.csv [OPTIONS]\n       INPUT.csv may be - for stdin.\n\n  --format markdown|json|csv   Output format (default: markdown)\n  --horizon-ms N               Evaluation horizon (default: 1000)\n  --dwell-ms N                 Sustained final hold (default: 200)\n  --max-gap-ms N               Maximum sampling gap (default: 250)\n  --help                       Show this help\n  --version                    Show version\n\nCSV header: trial,policy,time_ms,held,perturbation\nIdentifiers: ASCII letters/digits/underscore/hyphen/dot, no quoting.\nFlags: 0 or 1. One perturbation per trial; held baseline required.\nNothing is uploaded. No robot control, network calls, or model training.\n");
  }
  let input = undefined;
  let format = "markdown";
  let options = _M0FP213grasp_2daudit13grasp_2daudit16default__optionsN6recordS894;
  let i = 0;
  while (true) {
    if (i < argv.length) {
      const _tmp = i;
      const arg = _tmp >>> 0 < argv.length ? argv[_tmp] : $oob();
      if (arg === "--help" || arg === "-h") {
        return new _M0DTPC16result6ResultGssE2Ok("GraspAudit 0.1.0 - offline dexterous-grasp trace evaluation\n\nUsage: moon run --target js cmd/grasp-audit -- INPUT.csv [OPTIONS]\n       INPUT.csv may be - for stdin.\n\n  --format markdown|json|csv   Output format (default: markdown)\n  --horizon-ms N               Evaluation horizon (default: 1000)\n  --dwell-ms N                 Sustained final hold (default: 200)\n  --max-gap-ms N               Maximum sampling gap (default: 250)\n  --help                       Show this help\n  --version                    Show version\n\nCSV header: trial,policy,time_ms,held,perturbation\nIdentifiers: ASCII letters/digits/underscore/hyphen/dot, no quoting.\nFlags: 0 or 1. One perturbation per trial; held baseline required.\nNothing is uploaded. No robot control, network calls, or model training.\n");
      }
      if (arg === "--version") {
        return _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit3runN6constrS1131;
      }
      if (arg === "--format" || (arg === "--horizon-ms" || (arg === "--dwell-ms" || arg === "--max-gap-ms"))) {
        if ((i + 1 | 0) >= argv.length) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(18);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "missing value for ");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, arg);
          return new _M0DTPC16result6ResultGssE3Err(_string_builder.val);
        }
        const _tmp$2 = i + 1 | 0;
        const value = _tmp$2 >>> 0 < argv.length ? argv[_tmp$2] : $oob();
        if (arg === "--format") {
          let _tmp$3;
          const _p = "markdown";
          if (!(value === _p)) {
            let _tmp$4;
            const _p$2 = "json";
            if (!(value === _p$2)) {
              const _p$3 = "csv";
              _tmp$4 = !(value === _p$3);
            } else {
              _tmp$4 = false;
            }
            _tmp$3 = _tmp$4;
          } else {
            _tmp$3 = false;
          }
          if (_tmp$3) {
            return _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit3runN6constrS1132;
          }
          format = value;
        } else {
          const _bind = _M0FP213grasp_2daudit13grasp_2daudit18parse__nonnegative(value);
          let number;
          if (_bind.$tag === 1) {
            const _Ok = _bind;
            number = _Ok._0;
          } else {
            const _Err = _bind;
            const _message = _Err._0;
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, arg);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": ");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, _message);
            return new _M0DTPC16result6ResultGssE3Err(_string_builder.val);
          }
          let _tmp$3;
          switch (arg) {
            case "--horizon-ms": {
              const _bind$2 = options;
              _tmp$3 = new _M0TP213grasp_2daudit13grasp_2daudit7Options(number, _bind$2.dwell_ms, _bind$2.max_gap_ms);
              break;
            }
            case "--dwell-ms": {
              const _bind$3 = options;
              _tmp$3 = new _M0TP213grasp_2daudit13grasp_2daudit7Options(_bind$3.horizon_ms, number, _bind$3.max_gap_ms);
              break;
            }
            default: {
              const _bind$4 = options;
              _tmp$3 = new _M0TP213grasp_2daudit13grasp_2daudit7Options(_bind$4.horizon_ms, _bind$4.dwell_ms, number);
            }
          }
          options = _tmp$3;
        }
        i = i + 2 | 0;
      } else {
        if (_M0MPC16string6String11has__prefix(arg, _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit3runN6recordS1133)) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(16);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "unknown option: ");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, arg);
          return new _M0DTPC16result6ResultGssE3Err(_string_builder.val);
        }
        const _bind = input;
        if (_bind === undefined) {
          input = arg;
        } else {
          return _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit3runN6constrS1134;
        }
        i = i + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  const _bind = input;
  let path;
  if (_bind === undefined) {
    return _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit3runN6constrS1135;
  } else {
    const _Some = _bind;
    path = _Some;
  }
  const text = _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit11read__input(path);
  const _bind$2 = _M0FP213grasp_2daudit13grasp_2daudit12analyze__csv(text, options);
  if (_bind$2.$tag === 0) {
    const _Err = _bind$2;
    const _message = _Err._0;
    return new _M0DTPC16result6ResultGssE3Err(_message);
  } else {
    const _Ok = _bind$2;
    const _report = _Ok._0;
    const _bind$3 = format;
    let _tmp;
    switch (_bind$3) {
      case "json": {
        _tmp = _M0FP213grasp_2daudit13grasp_2daudit12render__json(_report);
        break;
      }
      case "csv": {
        _tmp = _M0FP213grasp_2daudit13grasp_2daudit11render__csv(_report);
        break;
      }
      default: {
        _tmp = _M0FP213grasp_2daudit13grasp_2daudit16render__markdown(_report);
      }
    }
    return new _M0DTPC16result6ResultGssE2Ok(_tmp);
  }
}
(() => {
  const _bind = _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit3run();
  if (_bind.$tag === 1) {
    const _Ok = _bind;
    const _output = _Ok._0;
    _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit6stdout(_output);
    return;
  } else {
    const _Err = _bind;
    const _message = _Err._0;
    _M0FP413grasp_2daudit13grasp_2daudit3cmd13grasp_2daudit11error__exit(_message);
    return;
  }
})();
