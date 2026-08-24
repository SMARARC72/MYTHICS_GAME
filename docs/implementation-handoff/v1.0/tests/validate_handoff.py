from __future__ import annotations

import hashlib
import json
import zipfile
from pathlib import Path


WORKSPACE = Path("/workspace/scratch/0299d32e143a")
ROOT = WORKSPACE / "outputs/ux_ui_handoff/mythic_rpg_codex_handoff_v1_0"
OUTPUT_ROOT = ROOT.parent


def load(relative: str):
    return json.loads((ROOT / relative).read_text())


manifest = load("artifact-manifest.json")
index = load("artifact-index.json")
audit = load("05_READINESS_AND_RUNBOOK/readiness-audit.json")
authorization = load("05_READINESS_AND_RUNBOOK/implementation-authorization.json")
stops = load("05_READINESS_AND_RUNBOOK/stop-conditions.json")
runbook = load("05_READINESS_AND_RUNBOOK/execution-runbook.json")
acceptance = (OUTPUT_ROOT / "Mythic_RPG_Preimplementation_Readiness_and_Codex_Execution_Handoff_v1.0.md").read_text()
prompt = (ROOT / "00_START_HERE/CODEX_EXECUTION_PROMPT.md").read_text()
precedence = (ROOT / "SOURCE_PRECEDENCE.md").read_text()

assert manifest["package"] == "mythic-rpg-preimplementation-codex-handoff"
assert manifest["status"] == "ready-for-explicit-implementation-authorization"
assert index["entrypoint"] == "00_START_HERE/CODEX_EXECUTION_PROMPT.md"
assert audit["result"] == "READY_FOR_EXPLICIT_IMPLEMENTATION_AUTHORIZATION"
assert audit["distinction"] == {
    "preimplementation_readiness": True,
    "production_release_readiness": False,
    "reason": "Planning and product definition are closed; code construction, integration, human QA and release evidence have not yet occurred.",
}
assert {item["checkpoint"] for item in audit["approved_checkpoints"]} == {"C1","C2","C3","C4","UI-01","UI-02","UI-03","UI-04"}
assert {item["status"] for item in audit["approved_checkpoints"]} == {"approved"}
assert {item["implementation_authorized"] for item in audit["approved_checkpoints"]} == {False}
assert audit["counts"] == {
    "approved_contract_checkpoints":4,"approved_ui_checkpoints":4,"pre_engineering_specs":6,"fixture_expectations":127,
    "routes":14,"components":40,"scenarios":17,"operations":60,"ports":16,"ci_release_gates":15,"execution_packets":16,"unresolved_product_decisions":0,
}
assert authorization["current_decision"] == "AWAITING_EXPLICIT_USER_AUTHORIZATION"
assert authorization["recommended_authorization_phrase"] == "Authorize the clean-session Codex implementation run."
assert len(runbook["packets"]) == 16 and [item["packet_id"] for item in runbook["packets"]] == [f"EP-{i:02d}" for i in range(16)]
assert {item["production_status"] for item in runbook["packets"]} == {"not started; requires explicit authorization"}
assert "Use Figma" not in prompt and "Figma is prohibited" in prompt
assert "never a chatbot skin" in prompt
assert "Unknown commit status must be resolved before retry" in prompt
assert "Production construction:** **NOT STARTED" in acceptance
assert "Production release authorization:** **CLOSED" in acceptance
assert "World Constitution" in precedence and "UI-01 through UI-04" in precedence
assert "Use Figma" in " ".join(stops["never_do"])

manifest_paths = {item["path"] for item in manifest["artifacts"]}
assert "artifact-checksums.sha256" in manifest_paths and "artifact-index.json" in manifest_paths
for item in manifest["artifacts"]:
    target = ROOT / item["path"]
    assert target.exists() and target.stat().st_size == item["bytes"]
    assert hashlib.sha256(target.read_bytes()).hexdigest() == item["sha256"]

checksum_lines = (ROOT / "artifact-checksums.sha256").read_text().strip().splitlines()
assert len(checksum_lines) == len(manifest["artifacts"]) - 1
for line in checksum_lines:
    digest, relative = line.split("  ", 1)
    assert hashlib.sha256((ROOT / relative).read_bytes()).hexdigest() == digest

zip_paths = sorted(ROOT.rglob("*.zip"))
assert len(zip_paths) == 8
for archive in zip_paths:
    with zipfile.ZipFile(archive) as zipped:
        assert zipped.testzip() is None

report = {
    "package":"mythic-rpg-preimplementation-codex-handoff",
    "status":"ready-for-explicit-implementation-authorization",
    "artifact_count":len(manifest["artifacts"]),
    "embedded_zip_count":len(zip_paths),
    "approved_checkpoint_coverage":"8/8",
    "pre_engineering_spec_coverage":"6/6",
    "fixture_count":127,
    "route_component_scenario_coverage":"14/14 · 40/40 · 17/17",
    "operation_port_coverage":"60/60 · 16",
    "ci_gate_coverage":"15/15 defined",
    "execution_packet_coverage":"16/16",
    "unresolved_product_decision_count":0,
    "production_construction":"NOT STARTED",
    "production_release":"CLOSED",
    "failed_gate_count":0,
}
assert load("validation-report.json") == report
print(json.dumps(report,indent=2))
