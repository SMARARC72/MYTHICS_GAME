// Generated from pinned approved C1–C3 schemas. Do not edit.
import Ajv2020, { type ErrorObject, type ValidateFunction } from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { CONTRACT_SCHEMA_DOCUMENTS } from "./schema-bundle";

export type ContractValidationIssue = Readonly<{ path: string; keyword: string; message: string }>;
export type ContractValidationResult<T> = Readonly<{ ok: true; value: T }> | Readonly<{ ok: false; issues: readonly ContractValidationIssue[] }>;
const ajv = new Ajv2020({ allErrors: true, strict: true, strictRequired: false, strictTypes: false });
addFormats(ajv);
for (const schema of CONTRACT_SCHEMA_DOCUMENTS) ajv.addSchema(schema);
const validators = new Map<string, ValidateFunction>();
function validator(schemaRef: string): ValidateFunction {
  const cached = validators.get(schemaRef);
  if (cached) return cached;
  const compiled = ajv.getSchema(schemaRef);
  if (!compiled) throw new Error(`Unknown contract schema reference: ${schemaRef}`);
  validators.set(schemaRef, compiled);
  return compiled;
}
function normalize(errors: ErrorObject[] | null | undefined): readonly ContractValidationIssue[] {
  return (errors ?? []).map(({ instancePath, keyword, message }) => ({ path: instancePath || "/", keyword, message: message ?? "contract validation failed" }));
}
export function validateContract<T>(schemaRef: string, input: unknown): ContractValidationResult<T> {
  const check = validator(schemaRef);
  return check(input) ? { ok: true, value: input as T } : { ok: false, issues: normalize(check.errors) };
}
export function assertContract<T>(schemaRef: string, input: unknown): asserts input is T {
  const result = validateContract<T>(schemaRef, input);
  if (!result.ok) throw new ContractValidationError(schemaRef, result.issues);
}
export class ContractValidationError extends Error {
  constructor(readonly schemaRef: string, readonly issues: readonly ContractValidationIssue[]) { super(`Contract validation failed for ${schemaRef}`); this.name = "ContractValidationError"; }
}
