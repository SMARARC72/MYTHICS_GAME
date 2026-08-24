"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { IndexedDbWorkflowStore } from "@/src/workflows/durable-store";
import { IntentOrchestrator, type IntentDraft, type IntentGateway, type IntentProposal } from "@/src/workflows/intent-orchestrator";

type Receipt = { status: string; outcome?: string; summary?: string; eventSequence?: number; stateVersion?: number; roll?: { natural?: number; dice?: number[]; total: number; difficulty: number } };
async function json<T>(response: Response): Promise<T> { const body=await response.json() as T & {error?:string}; if(!response.ok) throw new Error(body.error ?? `Request failed (${response.status})`); return body; }
const gateway: IntentGateway = {
  interpret: draft => fetch("/api/campaigns/campaign-drowned-archive-preview/intent/interpret",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(draft)}).then(json<IntentProposal>),
  commit: (proposal,key) => fetch("/api/campaigns/campaign-drowned-archive-preview/actions",{method:"POST",headers:{"content-type":"application/json","idempotency-key":key},body:JSON.stringify(proposal)}).then(json<Receipt>),
  lookup: key => fetch(`/api/campaigns/campaign-drowned-archive-preview/receipts/${encodeURIComponent(key)}`).then(json<Receipt>),
};

export function PlayableIntent({ stateVersion }: { stateVersion: string }) {
  const router=useRouter();
  const orchestrator=useMemo(()=>typeof indexedDB === "undefined" ? undefined : new IntentOrchestrator(new IndexedDbWorkflowStore(),gateway,"campaign-drowned-archive-preview::mara::intent"),[]);
  const [action,setAction]=useState(""); const [proposal,setProposal]=useState<IntentProposal>(); const [receipt,setReceipt]=useState<Receipt>(); const [busy,setBusy]=useState(false); const [error,setError]=useState<string>();
  useEffect(()=>{orchestrator?.loadDraft().then(saved=>saved&&setAction(saved.method));},[orchestrator]);
  async function interpret(){if(!orchestrator||!action.trim())return;setBusy(true);setError(undefined);try{setProposal(await orchestrator.interpret({goal:"Change the situation at the Drowned Archive",method:action,stateVersion}));}catch(e){setError(e instanceof Error?e.message:"The world could not understand that action yet.");}finally{setBusy(false)}}
  async function commit(){if(!orchestrator||!proposal)return;setBusy(true);setError(undefined);try{const result=await orchestrator.commit(proposal,crypto.randomUUID()) as Receipt;setReceipt(result);setProposal(undefined);router.refresh();}catch(e){setError(e instanceof Error?e.message:"The outcome could not be confirmed.");}finally{setBusy(false)}}
  if(receipt)return <article className={`outcome outcome-${receipt.outcome ?? receipt.status}`} tabIndex={-1}><span>The world answers</span><h2>{receipt.outcome === "success" ? "The archive remembers you" : receipt.outcome === "mixed" ? "The way opens—with a cost" : "The reflection breaks"}</h2><p>{receipt.summary}</p>{receipt.roll&&<details><summary>Why did this happen?</summary><p>Roll {receipt.roll.dice?.join(" + ") ?? receipt.roll.natural} = {receipt.roll.total} against {receipt.roll.difficulty}.</p></details>}<button onClick={()=>setReceipt(undefined)}>Continue</button></article>;
  return <div className="action-composer"><label htmlFor="free-action"><span>What do you do?</span><small>Try anything that makes sense in the world.</small></label><div><input id="free-action" value={action} onChange={event=>setAction(event.target.value)} onKeyDown={event=>event.key==="Enter"&&interpret()} placeholder="I trace the sigil in the reflection…"/><button disabled={busy||!action.trim()} onClick={interpret}>{busy?"Listening…":"Act"}</button></div>
    {proposal&&<section className="risk-review" aria-labelledby="understood-action"><span>I understand your action as</span><h2 id="understood-action">{proposal.method}</h2><ul>{proposal.accessibleStakes.slice(0,3).map(stake=><li key={stake}>{stake}</li>)}</ul><div><button className="secondary-action" onClick={()=>setProposal(undefined)}>Change approach</button><button className="primary-action" disabled={busy} onClick={commit}>Do it</button></div></section>}
    {error&&<p className="intent-error" role="alert">{error}</p>}
  </div>;
}
