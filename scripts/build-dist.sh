#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
moon build --target js --release
mkdir -p dist
cp _build/js/release/build/cmd/grasp-audit/grasp-audit.js dist/grasp-audit.cjs
node dist/grasp-audit.cjs --version
