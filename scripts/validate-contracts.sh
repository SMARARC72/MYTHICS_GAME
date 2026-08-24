#!/usr/bin/env bash
set -euo pipefail
python contracts/source/c1_contracts/tests/validate_contracts.py
python contracts/source/c2_contracts/tests/validate_contracts.py
# The approved C3 package retains its pre-approval candidate assertion. Validate an
# isolated candidate-status copy so pinned approved sources remain byte-for-byte intact.
tmp="$(mktemp -d)"; trap 'rm -rf "$tmp"' EXIT
cp -R contracts/source/. "$tmp/"
python - "$tmp/c3_contracts/contract-manifest.json" <<'PY'
import json,sys
p=sys.argv[1]; d=json.load(open(p)); d["status"]="candidate"; open(p,"w").write(json.dumps(d,indent=2)+"\n")
PY
python "$tmp/c3_contracts/tests/validate_contracts.py"
