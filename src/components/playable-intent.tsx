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

export function PlayableIntent({ stateVersion, onCommitted }: { stateVersion: string; onCommitted?: (receipt: Receipt) => void }) {
  const router=useRouter();
  const orchestrator=useMemo(()=>typeof indexedDB === "undefined" ? undefined : new IntentOrchestrator(new IndexedDbWorkflowStore(),gateway,"campaign-drowned-archive-preview::mara::intent"),[]);
  const [draft,setDraft]=useState<IntentDraft>({goal:"Reach the sealed archive",method:"Trace the sigil while speaking Ilya’s name",stateVersion});
  const [proposal,setProposal]=useState<IntentProposal>(); const [receipt,setReceipt]=useState<Receipt>(); const [busy,setBusy]=useState(false); const [error,setError]=useState<string>();
  useEffect(()=>{orchestrator?.loadDraft().then(saved=>saved&&setDraft(saved));},[orchestrator]);
  async function interpret(){if(!orchestrator)return;setBusy(true);setError(undefined);try{setProposal(await orchestrator.interpret(draft));}catch(e){setError(e instanceof Error?e.message:"Interpretation failed");}finally{setBusy(false)}}
  async function commit(){if(!orchestrator||!proposal)return;setBusy(true);setError(undefined);try{const result=await orchestrator.commit(proposal,crypto.randomUUID()) as Receipt;setReceipt(result);if(result.stateVersion!==undefined){setDraft(current=>({...current,stateVersion:String(result.stateVersion)}));setProposal(undefined);}onCommitted?.(result);router.refresh();}catch(e){setError(e instanceof Error?e.message:"Commit failed");}finally{setBusy(false)}}
  return <section className="playable-intent" aria-labelledby="intent-title"><div className="panel-heading"><span id="intent-title">DECLARE INTENT</span><span>{proposal?"INTERPRETED · CORRECTABLE":"DRAFT · LOCAL"}</span></div>
    <div className="intent-dock"><label className="intent-field"><span>GOAL</span><input value={draft.goal} onChange={e=>setDraft({...draft,goal:e.target.value})}/></label><label className="intent-field"><span>METHOD</span><input value={draft.method} onChange={e=>setDraft({...draft,method:e.target.value})}/></label><button className="primary-action" disabled={busy||!draft.goal||!draft.method} onClick={interpret}>{busy?"Working…":proposal?"Reinterpret":"Review intent"}</button></div>
    {proposal&&<article className="proposal-review"><div><span className="eyebrow">INTERPRETATION</span><h3>{proposal.goal}</h3><p>Method: {proposal.method}</p></div><div><span className="eyebrow">KNOWABLE STAKES</span><ul>{proposal.accessibleStakes.map(stake=><li key={stake}>{stake}</li>)}</ul><p>Difficulty {proposal.difficulty} · deterministic check on commit</p></div><button className="primary-action" disabled={busy} onClick={commit}>Confirm material action</button></article>}
    {receipt&&<article className="resolution-receipt" tabIndex={-1}><span className="eyebrow">AUTHORITATIVE RECEIPT · EVENT {receipt.eventSequence}</span><h3>{receipt.outcome ?? receipt.status}</h3><p>{receipt.summary}</p>{receipt.roll&&<p>Roll {receipt.roll.dice?.join(" + ") ?? receipt.roll.natural} = {receipt.roll.total} against {receipt.roll.difficulty}</p>}</article>}
    {error&&<p className="intent-error" role="alert">{error}</p>}<p className="intent-safety">Drafts remain local. Canon changes only after an authoritative receipt and ordered event.</p>
  </section>;
}
