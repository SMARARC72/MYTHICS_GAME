import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { basename, dirname, join, relative } from "node:path";
import $RefParser from "@apidevtools/json-schema-ref-parser";
import { compile } from "json-schema-to-typescript";

const sourceRoot = new URL("../contracts/source/", import.meta.url).pathname;
const outputRoot = new URL("../contracts/generated/", import.meta.url).pathname;
async function walk(dir) { const out=[]; for (const e of await readdir(dir,{withFileTypes:true})) { const p=join(dir,e.name); if(e.isDirectory()) out.push(...await walk(p)); else if(e.name.endsWith(".schema.json")) out.push(p); } return out; }
const files=(await walk(sourceRoot)).sort();
const documents = await Promise.all(files.map(async path => ({ path, schema: JSON.parse(await readFile(path,"utf8")) })));
const byId = new Map(documents.map(({path,schema}) => [schema.$id, {path,schema}]));
const resolver = { order: 1, canRead: /^https:\/\/contracts\.mythic-rpg\.local\//, read(file) { const found=byId.get(file.url); if(!found) throw new Error(`Unpinned contract reference: ${file.url}`); return JSON.stringify(found.schema); } };
const pascal = value => value.replace(/(^|[^A-Za-z0-9]+)([A-Za-z0-9])/g,(_, _p,c)=>c.toUpperCase()).replace(/[^A-Za-z0-9]/g,"");
const registrations=[]; const typeBlocks=[];
async function walkNamed(dir, suffix) { const out=[]; for (const e of await readdir(dir,{withFileTypes:true})) { const p=join(dir,e.name); if(e.isDirectory()) out.push(...await walkNamed(p,suffix)); else if(e.name.endsWith(suffix)) out.push(p); } return out; }
const operationIds=[];
for (const apiFile of (await walkNamed(sourceRoot, ".yaml")).filter(path => path.includes("/openapi/"))) {
  const source=await readFile(apiFile,"utf8");
  operationIds.push(...[...source.matchAll(/^\s*operationId:\s*([A-Za-z][A-Za-z0-9]*)\s*$/gm)].map(match=>match[1]));
}
operationIds.sort();
for (const {path,schema} of documents) {
  const contractPath=relative(sourceRoot,path).replaceAll("\\","/");
  const namespace=pascal(contractPath.replace(/\.schema\.json$/, ""));
  registrations.push({path:contractPath,id:schema.$id,title:schema.title,definitions:Object.keys(schema.$defs ?? {}).sort()});
  const bundled=await $RefParser.bundle(structuredClone(schema), { resolve: { http: resolver } });
  const generated=await compile(bundled, pascal(schema.title ?? basename(path)), { bannerComment:"", style:{singleQuote:false}, unreachableDefinitions:true, additionalProperties:false });
  typeBlocks.push(`export namespace ${namespace} {\n${generated.trim().split("\n").map(line=>`  ${line}`).join("\n")}\n}`);
}
const definitionRefs=registrations.flatMap(schema => schema.definitions.map(definition => `${schema.id}#/$defs/${definition}`));
await mkdir(outputRoot,{recursive:true});
const banner="// Generated from pinned approved C1–C3 schemas. Do not edit.\n";
await writeFile(join(outputRoot,"registry.ts"), banner+`export const CONTRACT_SCHEMAS = ${JSON.stringify(registrations,null,2)} as const;\nexport type ContractSchemaId = typeof CONTRACT_SCHEMAS[number]["id"];\nexport type ContractSchemaPath = typeof CONTRACT_SCHEMAS[number]["path"];\nexport const CONTRACT_DEFINITION_REFS = ${JSON.stringify(definitionRefs)} as readonly string[];\nexport const CONTRACT_OPERATION_IDS = ${JSON.stringify(operationIds)} as const;\n`);
await writeFile(join(outputRoot,"types.ts"), (banner+typeBlocks.join("\n\n")+"\n").replace(/[ \t]+$/gm,""));
await writeFile(join(outputRoot,"schema-bundle.ts"), banner+`export const CONTRACT_SCHEMA_DOCUMENTS: readonly Record<string, unknown>[] = ${JSON.stringify(documents.map(({schema})=>schema))};\n`);
await writeFile(join(outputRoot,"validators.ts"), banner+`import Ajv2020, { type ErrorObject, type ValidateFunction } from "ajv/dist/2020.js";
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
  if (!compiled) throw new Error(\`Unknown contract schema reference: \${schemaRef}\`);
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
  constructor(readonly schemaRef: string, readonly issues: readonly ContractValidationIssue[]) { super(\`Contract validation failed for \${schemaRef}\`); this.name = "ContractValidationError"; }
}
`);
console.log(`generated ${documents.length} schema registrations, validators, and strict type namespaces`);
