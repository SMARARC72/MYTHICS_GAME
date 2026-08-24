import { describe, expect, it } from "vitest";
import {
  BRANCH_KINDS,
  drownedArchiveContent,
  validateCampaignContent,
  type CanonicalCampaignContent,
} from "@/src/content/drowned-archive";
import { projectDrownedArchiveStage } from "@/src/server/projectors/drowned-archive-projector";

describe("Drowned Archive content", () => {
  it("is internally valid and implements every required outcome branch", () => {
    expect(validateCampaignContent(drownedArchiveContent)).toEqual([]);
    expect(new Set(drownedArchiveContent.branches.map((branch) => branch.kind))).toEqual(new Set(BRANCH_KINDS));
  });

  it("rejects protected facts placed in a visible scene", () => {
    const invalid = structuredClone(drownedArchiveContent) as CanonicalCampaignContent;
    invalid.scenes[0].visibleFactIds.push("fact-ilya-drive");
    expect(validateCampaignContent(invalid)).toContain("scene scene-threshold exposes protected fact fact-ilya-drive");
  });
});

describe("viewpoint-safe Stage projector", () => {
  it("projects only facts known to the authorized player viewpoint", () => {
    const projection = projectDrownedArchiveStage(drownedArchiveContent, "mara-vale");
    expect(projection.scene.facts.map((fact) => fact.classification)).toEqual(["perceived", "reported", "inferred"]);
    const serialized = JSON.stringify(projection);
    expect(serialized).not.toContain("salt-wraith");
    expect(serialized).not.toContain("protect the archive's names");
    expect(serialized).not.toContain("privatePolicy");
    expect(projection.stateBasis).toBe("event:0");
  });

  it("fails closed for unauthorized viewpoints and unavailable knowledge", () => {
    expect(() => projectDrownedArchiveStage(drownedArchiveContent, "curator-ilya")).toThrow(/not authorized/);
    const unsafe = structuredClone(drownedArchiveContent) as CanonicalCampaignContent;
    unsafe.scenes[0].visibleFactIds.push("fact-lower-vault-occupant");
    expect(() => projectDrownedArchiveStage(unsafe, "mara-vale")).toThrow(/unavailable to viewpoint/);
  });
});
