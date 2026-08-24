#!/usr/bin/env python3
"""Dependency-free C2 validator for the deterministic JSON Schema subset used here."""

import datetime as dt
import json
import pathlib
import re
import sys
from urllib.parse import urldefrag


HERE = pathlib.Path(__file__).resolve()
ROOT = HERE.parents[1] if (HERE.parents[1] / "contract-manifest.json").exists() else HERE.parents[1] / "outputs/ux_ui_phase6/c2_contracts"
C1_ROOT = ROOT.parent / "c1_contracts"
FORBIDDEN_KEYS = {
    "hidden_truth",
    "exact_dc",
    "private_motive",
    "private_actor_motive",
    "secret_drive",
    "raw_validator",
    "chain_of_thought",
    "exact_canonical_coordinates",
    "private_validator_diagnostic",
    "exact_bond",
    "obedience_score",
    "secret_front_clock",
    "hidden_feature_count",
    "hidden_immunity",
}


def load_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def walk_keys(value):
    if isinstance(value, dict):
        for key, child in value.items():
            yield key
            yield from walk_keys(child)
    elif isinstance(value, list):
        for child in value:
            yield from walk_keys(child)


def json_pointer(document, fragment):
    if not fragment:
        return document
    current = document
    for token in fragment.lstrip("/").split("/"):
        token = token.replace("~1", "/").replace("~0", "~")
        current = current[token]
    return current


def type_matches(value, expected):
    mapping = {
        "object": lambda v: isinstance(v, dict),
        "array": lambda v: isinstance(v, list),
        "string": lambda v: isinstance(v, str),
        "boolean": lambda v: isinstance(v, bool),
        "integer": lambda v: isinstance(v, int) and not isinstance(v, bool),
        "number": lambda v: isinstance(v, (int, float)) and not isinstance(v, bool),
        "null": lambda v: v is None,
    }
    return mapping[expected](value)


def validate(instance, schema, store, current_root, path="$", seen=None):
    if schema is True:
        return []
    if schema is False:
        return [f"{path}: forbidden by schema"]
    seen = seen or set()
    errors = []

    if "$ref" in schema:
        reference = schema["$ref"]
        base, fragment = urldefrag(reference)
        target_root = current_root if not base else store.get(base)
        if target_root is None:
            return [f"{path}: unresolved schema reference {reference}"]
        target = json_pointer(target_root, fragment)
        guard = (reference, id(instance))
        if guard not in seen:
            errors.extend(validate(instance, target, store, target_root, path, seen | {guard}))

    for child in schema.get("allOf", []):
        errors.extend(validate(instance, child, store, current_root, path, seen))

    if "oneOf" in schema:
        match_count = 0
        for child in schema["oneOf"]:
            if not validate(instance, child, store, current_root, path, seen):
                match_count += 1
        if match_count != 1:
            errors.append(f"{path}: expected exactly one oneOf match, found {match_count}")

    if "if" in schema:
        if not validate(instance, schema["if"], store, current_root, path, seen):
            if "then" in schema:
                errors.extend(validate(instance, schema["then"], store, current_root, path, seen))
        elif "else" in schema:
            errors.extend(validate(instance, schema["else"], store, current_root, path, seen))

    if "const" in schema and instance != schema["const"]:
        errors.append(f"{path}: expected constant {schema['const']!r}")
    if "enum" in schema and instance not in schema["enum"]:
        errors.append(f"{path}: value is not in the allowed enumeration")

    if "type" in schema:
        expected = schema["type"]
        expected_types = expected if isinstance(expected, list) else [expected]
        if not any(type_matches(instance, item) for item in expected_types):
            return errors + [f"{path}: expected type {expected_types}, got {type(instance).__name__}"]

    if isinstance(instance, dict):
        for required in schema.get("required", []):
            if required not in instance:
                errors.append(f"{path}: missing required property {required}")
        properties = schema.get("properties", {})
        for key, value in instance.items():
            if key in properties:
                errors.extend(validate(value, properties[key], store, current_root, f"{path}.{key}", seen))
            elif schema.get("additionalProperties") is False:
                errors.append(f"{path}: additional property {key} is not allowed")

    if isinstance(instance, list):
        if len(instance) < schema.get("minItems", 0):
            errors.append(f"{path}: fewer than minItems")
        if "maxItems" in schema and len(instance) > schema["maxItems"]:
            errors.append(f"{path}: more than maxItems")
        if schema.get("uniqueItems"):
            encoded = [json.dumps(item, sort_keys=True) for item in instance]
            if len(encoded) != len(set(encoded)):
                errors.append(f"{path}: duplicate array item")
        if "items" in schema:
            for index, value in enumerate(instance):
                errors.extend(validate(value, schema["items"], store, current_root, f"{path}[{index}]", seen))

    if isinstance(instance, str):
        if len(instance) < schema.get("minLength", 0):
            errors.append(f"{path}: shorter than minLength")
        if "maxLength" in schema and len(instance) > schema["maxLength"]:
            errors.append(f"{path}: longer than maxLength")
        if "pattern" in schema and re.search(schema["pattern"], instance) is None:
            errors.append(f"{path}: does not match required pattern")
        if schema.get("format") == "date-time":
            try:
                dt.datetime.fromisoformat(instance.replace("Z", "+00:00"))
            except ValueError:
                errors.append(f"{path}: invalid date-time")

    if isinstance(instance, (int, float)) and not isinstance(instance, bool):
        if "minimum" in schema and instance < schema["minimum"]:
            errors.append(f"{path}: below minimum")
        if "maximum" in schema and instance > schema["maximum"]:
            errors.append(f"{path}: above maximum")

    return errors


def iter_refs(value):
    if isinstance(value, dict):
        for key, child in value.items():
            if key == "$ref" and isinstance(child, str):
                yield child
            yield from iter_refs(child)
    elif isinstance(value, list):
        for child in value:
            yield from iter_refs(child)


schemas = {}
c2_schema_paths = sorted((ROOT / "schemas").rglob("*.schema.json"))
c1_schema_paths = sorted((C1_ROOT / "schemas").rglob("*.schema.json"))
for schema_path in c1_schema_paths + c2_schema_paths:
    schema = load_json(schema_path)
    assert schema.get("$schema") == "https://json-schema.org/draft/2020-12/schema"
    assert "$id" in schema
    schemas[schema["$id"]] = schema

schema_reference_failures = []
for schema in schemas.values():
    for reference in iter_refs(schema):
        base, fragment = urldefrag(reference)
        target_root = schema if not base else schemas.get(base)
        if target_root is None:
            schema_reference_failures.append(reference)
            continue
        try:
            json_pointer(target_root, fragment)
        except (KeyError, TypeError):
            schema_reference_failures.append(reference)

manifest = load_json(ROOT / "fixtures/fixture-manifest.json")
results = []
for item in manifest["fixtures"]:
    root_schema = load_json(ROOT / item["schema"])
    target_schema = {"$ref": f"{root_schema['$id']}#/$defs/{item['definition']}"}
    document = load_json(ROOT / "fixtures" / item["file"])
    errors = validate(document, target_schema, schemas, root_schema)
    actual_valid = not errors
    leaked = sorted(set(walk_keys(document)) & FORBIDDEN_KEYS) if item["expected_valid"] else []
    passed = actual_valid == item["expected_valid"] and not leaked
    results.append({
        "file": item["file"],
        "expected_valid": item["expected_valid"],
        "actual_valid": actual_valid,
        "knowledge_leak_keys": leaked,
        "passed": passed,
        "errors": errors[:10],
    })


def verify_api_text(relative_path, expected_version):
    api_path = ROOT / relative_path
    text = api_path.read_text(encoding="utf-8")
    if not text.startswith(expected_version):
        raise AssertionError(f"{relative_path} has wrong version header")
    external_refs = re.findall(r"\$ref:\s*['\"]?(\.\./schemas/[^#'\" }]+)#/\$defs/([A-Za-z0-9_]+)", text)
    for relative_ref, definition in external_refs:
        target = (api_path.parent / relative_ref).resolve()
        schema = load_json(target)
        assert definition in schema.get("$defs", {}), f"Missing {definition} in {target}"
    return text


openapi_text = verify_api_text("openapi/mythic-ui-c2.yaml", "openapi: 3.1.2")
asyncapi_text = verify_api_text("asyncapi/mythic-events-c2.yaml", "asyncapi: 3.1.0")
operation_ids = re.findall(r"operationId:\s*([A-Za-z0-9_]+)", openapi_text)
assert len(operation_ids) == len(set(operation_ids)), "Duplicate OpenAPI operationId"
assert len(operation_ids) == 25, f"Expected 25 operations, found {len(operation_ids)}"
assert openapi_text.count("{ $ref: '#/components/parameters/IdempotencyKey' }") == 11
assert "receiveSystemBreadthEvents:" in asyncapi_text
async_message_count = len(re.findall(r"^    [A-Za-z][A-Za-z0-9]+:\n      name:", asyncapi_text, flags=re.MULTILINE))
assert async_message_count == 9, f"Expected 9 AsyncAPI messages, found {async_message_count}"

contract_manifest = load_json(ROOT / "contract-manifest.json")
assert contract_manifest["approved_dependency"]["status"] == "approved"
assert contract_manifest["implementation_authorized"] is False

failed = sum(1 for result in results if not result["passed"]) + len(schema_reference_failures)
report = {
    "checkpoint": "C2",
    "validator": "dependency-free deterministic JSON Schema 2020-12 subset used by C1 and C2",
    "c1_dependency_schema_count": len(c1_schema_paths),
    "c2_schema_count": len(c2_schema_paths),
    "schema_reference_failure_count": len(schema_reference_failures),
    "fixture_count": len(results),
    "positive_fixture_count": sum(1 for result in results if result["expected_valid"]),
    "negative_fixture_count": sum(1 for result in results if not result["expected_valid"]),
    "passed_count": sum(1 for result in results if result["passed"]),
    "failed_count": failed,
    "openapi_operation_count": len(operation_ids),
    "asyncapi_message_count": async_message_count,
    "results": results,
}
(ROOT / "validation_report.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
print(json.dumps({key: value for key, value in report.items() if key != "results"}, indent=2))
if failed:
    for result in results:
        if not result["passed"]:
            print(json.dumps(result, indent=2))
sys.exit(1 if failed else 0)
