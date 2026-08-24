import { describe, expect, it } from "vitest";
import commitActionJson from "@/contracts/source/c1_contracts/fixtures/positive/commit-action-command.json";
import { validateContract } from "@/contracts/generated/validators";
import type { CommitActionCommand } from "@/src/domain/contracts";
import { SCREENS } from "@/src/lib/screen-data";
import { projectionKey } from "@/src/projections/projection-key";
import { transition } from "@/src/workflows/action-machine";
import { DeterministicServiceFake, MemoryDrafts } from "@/src/adapters/deterministic-fakes";
describe("architecture invariants",()=>{
 it("defines all fourteen routes, forty components, and seventeen scenarios",()=>{expect(SCREENS).toHaveLength(14); expect(new Set(SCREENS.flatMap(s=>s.components))).toHaveLength(40); expect(new Set(SCREENS.flatMap(s=>s.scenarios))).toHaveLength(17);});
 it("separates projection keys by viewpoint and basis",()=>{const a=projectionKey({campaignId:"c",viewpointId:"a",contractVersion:"1",stateVersion:"2"},"stage"); const b=projectionKey({campaignId:"c",viewpointId:"b",contractVersion:"1",stateVersion:"2"},"stage"); expect(a).not.toBe(b);});
 it("requires idempotency persistence before commit",()=>{expect(()=>transition("reviewing","KEY_PERSISTED")).toThrow(); expect(transition(transition("reviewing","CONFIRM"),"KEY_PERSISTED")).toBe("committing");});
 it("resolves unknown status through lookup",()=>{expect(transition(transition("committing","UNKNOWN_STATUS"),"LOOKUP_CONFIRMED")).toBe("resolving");});
 it("keeps drafts distinct from receipts",async()=>{const drafts=new MemoryDrafts(); const api=new DeterministicServiceFake(); await drafts.put("intent","1",{text:"Go"}); const admitted=validateContract<CommitActionCommand>("https://contracts.mythic-rpg.local/c1/schemas/commands/core-loop.schema.json#/$defs/CommitActionCommand",commitActionJson); expect(admitted.ok).toBe(true); if(!admitted.ok) return; const first=await api.send("commitAction",admitted.value,"key"); expect(await api.send("commitAction",admitted.value,"key")).toEqual(first); expect(await drafts.get("intent")).toEqual({text:"Go"});});
});
