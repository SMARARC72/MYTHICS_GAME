import { describe,expect,it } from "vitest";
import { MemoryWorkflowStore } from "@/src/workflows/durable-store";
import { IntentOrchestrator, type IntentGateway } from "@/src/workflows/intent-orchestrator";
const draft={goal:"Reach the archive",method:"Follow its reflection",stateVersion:"1"};
const proposal={proposalId:"p",...draft,difficulty:12,accessibleStakes:["Tide advances"]};
describe("durable intent orchestration",()=>{
 it("persists drafts independently",async()=>{const s=new MemoryWorkflowStore(); await s.putDraft("intent",draft); expect(await s.getDraft("intent")).toEqual(draft);});
 it("persists idempotency before commit",async()=>{const s=new MemoryWorkflowStore(); const gateway:IntentGateway={interpret:async()=>proposal,commit:async(_p,key)=>{expect(await s.getPending(key)).toBeDefined(); return {status:"committed"};},lookup:async()=>({})}; const o=new IntentOrchestrator(s,gateway,"intent"); const p=await o.interpret(draft); await o.commit(p,"key"); expect(o.state).toBe("resolving");});
 it("looks up unknown status instead of retrying",async()=>{const s=new MemoryWorkflowStore(); let sends=0,lookups=0; const gateway:IntentGateway={interpret:async()=>proposal,commit:async()=>{sends++; throw new Error("lost")},lookup:async()=>{lookups++;return {status:"committed"}}}; const o=new IntentOrchestrator(s,gateway,"intent"); await o.interpret(draft); await o.commit(proposal,"key"); expect({sends,lookups,state:o.state}).toEqual({sends:1,lookups:1,state:"resolving"});});
});
