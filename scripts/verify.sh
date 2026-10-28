#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
command -v moon >/dev/null || { echo 'Install the official MoonBit toolchain first (see README).' >&2; exit 1; }
command -v node >/dev/null
command -v python3 >/dev/null
moon version --all
moon fmt --check
moon check --target js --deny-warn
moon test --target js
moon test --target wasm-gc
moon build --target js --release
python3 scripts/integration_test.py
