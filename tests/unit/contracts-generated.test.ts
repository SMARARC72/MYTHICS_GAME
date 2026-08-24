import { readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { describe, expect, it } from "vitest";
import { CONTRACT_SCHEMAS } from "../../contracts/generated/registry";
import { validateContract } from "../../contracts/generated/validators";

const packages = ["c1_contracts", "c2_contracts", "c3_contracts"] as const;

describe("generated approved contract boundary", () => {
  it("regenerates byte-for-byte deterministically", async () => {
    const outputs = ["registry.ts", "schema-bundle.ts", "types.ts", "validators.ts"];
    const before = await Promise.all(outputs.map(file => readFile(join(process.cwd(), "contracts/generated", file), "utf8")));
    execFileSync(process.execPath, ["scripts/generate-contracts.mjs"], { cwd: process.cwd() });
    const after = await Promise.all(outputs.map(file => readFile(join(process.cwd(), "contracts/generated", file), "utf8")));
    expect(after).toEqual(before);
  });

  it("registers every approved schema definition", () => {
    expect(CONTRACT_SCHEMAS).toHaveLength(19);
    expect(CONTRACT_SCHEMAS.every(schema => schema.id.startsWith("https://contracts.mythic-rpg.local/"))).toBe(true);
  });

  for (const packageName of packages) {
    it(`admits and rejects every ${packageName} fixture as declared`, async () => {
      const packageRoot = join(process.cwd(), "contracts/source", packageName);
      const manifest = JSON.parse(await readFile(join(packageRoot, "fixtures/fixture-manifest.json"), "utf8")) as {
        fixtures: Array<{ file: string; schema: string; definition: string; expected_valid: boolean }>;
      };
      for (const fixture of manifest.fixtures) {
        const schema = CONTRACT_SCHEMAS.find(candidate => candidate.path === `${packageName}/${fixture.schema}`);
        expect(schema, fixture.schema).toBeDefined();
        const input = JSON.parse(await readFile(join(packageRoot, "fixtures", fixture.file), "utf8"));
        const result = validateContract(`${schema!.id}#/$defs/${fixture.definition}`, input);
        expect(result.ok, fixture.file).toBe(fixture.expected_valid);
        if (!result.ok) expect(result.issues.every(issue => !JSON.stringify(issue).includes(JSON.stringify(input)))).toBe(true);
      }
    });
  }
});
