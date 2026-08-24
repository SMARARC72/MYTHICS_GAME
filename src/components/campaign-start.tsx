"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";

type CampaignDraft = {
  name: string;
  pronouns: string;
  concept: string;
  origin: "ordinary" | "awakened";
  edge: "cartography" | "tide-sense" | "iron-will";
  tone: "hopeful-noir" | "bright-mythic" | "street-mystery";
  veilHorror: boolean;
  guided: boolean;
};

const key = "mythic.glass-harbor.character.v1";
const defaults: CampaignDraft = { name: "Mara Vale", pronouns: "she / her", concept: "Harbor guide who survived the impossible tide", origin: "ordinary", edge: "cartography", tone: "hopeful-noir", veilHorror: true, guided: true };

export function CampaignLibrary() {
  const hasCampaign = useSyncExternalStore(
    listener => { window.addEventListener("storage", listener); return () => window.removeEventListener("storage", listener); },
    () => Boolean(localStorage.getItem(key)),
    () => false,
  );
  return <section className="start-flow" aria-labelledby="campaign-choice">
    <div className="start-hero"><span className="eyebrow">YOUR MYTH BEGINS HERE</span><h2 id="campaign-choice">Glass Harbor is waiting</h2><p>Build a hero, learn the world through play, and make choices the ledger remembers. No rulebook reading is required before your first decision.</p></div>
    <div className="choice-grid">
      <article className="choice-card featured"><span className="step-number">NEW STORY</span><h3>Create your hero</h3><p>Choose the campaign tone and your boundaries, then build a legal 18-point character before entering the Drowned Archive.</p><Link className="primary-action action-link" href="/campaigns/new">Start new campaign</Link><small>About 3 minutes · every choice can be reviewed</small></article>
      <article className="choice-card"><span className="step-number">CONTINUE</span><h3>{hasCampaign ? "Resume at the threshold" : "No campaign saved yet"}</h3><p>{hasCampaign ? "Your hero and onboarding choices are stored on this device. Continue from the first playable scene." : "Create a hero first. A resumable campaign will appear here after you commit the build."}</p>{hasCampaign ? <Link className="secondary-action action-link" href="/campaign/glass-harbor/stage">Resume campaign</Link> : <span className="disabled-action">Complete character creation to unlock</span>}</article>
    </div>
    <div className="how-to-play"><h3>How play works</h3><ol><li><strong>Describe a goal.</strong> Say what you want and how you attempt it.</li><li><strong>Review the interpretation.</strong> Correct the system before anything becomes canon.</li><li><strong>Confirm the risk.</strong> The rules roll openly and record consequences.</li></ol></div>
  </section>;
}

export function CampaignSetup() {
  const router = useRouter();
  const [tone, setTone] = useState<CampaignDraft["tone"]>(defaults.tone);
  const [veilHorror, setVeilHorror] = useState(true);
  const [guided, setGuided] = useState(true);
  function continueToHero() {
    localStorage.setItem("mythic.glass-harbor.setup.v1", JSON.stringify({ tone, veilHorror, guided }));
    router.push("/campaigns/new/character");
  }
  return <section className="start-flow" aria-labelledby="setup-title"><div className="progress-steps" aria-label="Campaign creation progress"><strong>1 · Story</strong><span>2 · Hero</span><span>3 · Enter world</span></div><div className="start-hero"><span className="eyebrow">CAMPAIGN SETUP · STEP 1 OF 3</span><h2 id="setup-title">Choose the promise of your story</h2><p>Glass Harbor is rebuilding after an impossible tide. You decide what kind of superhero story emerges from its drowned streets.</p></div>
    <fieldset className="setup-fieldset"><legend>Story tone</legend><div className="option-grid">{([['hopeful-noir','Hopeful noir','Hard truths, stubborn hope, and mysteries with human stakes.'],['bright-mythic','Bright mythic','Larger-than-life heroism against ancient wonders.'],['street-mystery','Street mystery','Local bonds, strange cases, and consequences close to home.']] as const).map(([value,title,copy])=><label className={tone===value?"option-card selected":"option-card"} key={value}><input type="radio" name="tone" value={value} checked={tone===value} onChange={()=>setTone(value)}/><strong>{title}</strong><span>{copy}</span></label>)}</div></fieldset>
    <fieldset className="setup-fieldset"><legend>Comfort and guidance</legend><label className="toggle-row"><input type="checkbox" checked={veilHorror} onChange={e=>setVeilHorror(e.target.checked)}/><span><strong>Veil graphic body horror</strong><small>Consequences remain meaningful, but descriptions cut away before graphic detail.</small></span></label><label className="toggle-row"><input type="checkbox" checked={guided} onChange={e=>setGuided(e.target.checked)}/><span><strong>Teach me while I play</strong><small>Short explanations appear only when a mechanic first matters. They never block play.</small></span></label></fieldset>
    <div className="flow-actions"><Link href="/campaigns" className="secondary-action action-link">Back</Link><button className="primary-action" onClick={continueToHero}>Build my hero →</button></div></section>;
}

export function CharacterBuilder() {
  const router = useRouter();
  const [draft, setDraft] = useState(defaults);
  const [committing, setCommitting] = useState(false);
  const costs = { origin: draft.origin === "awakened" ? 6 : 2, edge: draft.edge === "iron-will" ? 5 : 6, fundamentals: 10 };
  const spent = costs.origin + costs.edge + costs.fundamentals;
  const legal = spent === 18 && draft.name.trim().length >= 2 && draft.concept.trim().length >= 10;
  async function commit() { setCommitting(true); const setup=JSON.parse(localStorage.getItem("mythic.glass-harbor.setup.v1")??"{}"); localStorage.setItem(key,JSON.stringify({...draft,...setup,createdAt:new Date().toISOString()})); await new Promise(r=>setTimeout(r,300)); router.push("/campaign/glass-harbor/stage?welcome=1"); }
  return <section className="start-flow" aria-labelledby="builder-title"><div className="progress-steps" aria-label="Campaign creation progress"><span>✓ Story</span><strong>2 · Hero</strong><span>3 · Enter world</span></div><div className="start-hero"><span className="eyebrow">CHARACTER CREATION · STEP 2 OF 3</span><h2 id="builder-title">Who answers Glass Harbor?</h2><p>Start with identity and intent. The Build Point ledger makes every mechanical tradeoff visible.</p></div>
    <div className="builder-layout"><div className="builder-form"><label><span>Hero name</span><input value={draft.name} onChange={e=>setDraft({...draft,name:e.target.value})}/></label><label><span>Pronouns</span><input value={draft.pronouns} onChange={e=>setDraft({...draft,pronouns:e.target.value})}/></label><label className="wide"><span>Hero concept</span><textarea value={draft.concept} onChange={e=>setDraft({...draft,concept:e.target.value})}/><small>Who are you, and why can’t you ignore the city’s call?</small></label>
      <fieldset className="wide setup-fieldset"><legend>Origin</legend><div className="option-grid two"><label className={draft.origin==='ordinary'?"option-card selected":"option-card"}><input type="radio" checked={draft.origin==='ordinary'} onChange={()=>setDraft({...draft,origin:'ordinary',edge:'cartography'})}/><strong>Ordinary survivor · 2 BP</strong><span>Human-scale courage, expertise, and a city that knows your name.</span></label><label className={draft.origin==='awakened'?"option-card selected":"option-card"}><input type="radio" checked={draft.origin==='awakened'} onChange={()=>setDraft({...draft,origin:'awakened',edge:'iron-will'})}/><strong>Awakened hero · 6 BP</strong><span>A manifest gift with visible costs and responsibility.</span></label></div></fieldset>
      <label className="wide"><span>Signature edge</span><select value={draft.edge} onChange={e=>setDraft({...draft,edge:e.target.value as CampaignDraft['edge']})}>{draft.origin==='ordinary'?<><option value="cartography">Impossible Cartography · 6 BP</option><option value="tide-sense">Tide Sense · 6 BP</option></>:<option value="iron-will">Iron Will · 5 BP</option>}</select></label></div>
      <div className="bp-ledger"><span className="eyebrow">BUILD POINT LEDGER</span><div className="bp-total"><strong>{spent}</strong><span>/ 18 BP</span></div><dl><div><dt>Origin</dt><dd>{costs.origin}</dd></div><div><dt>Signature edge</dt><dd>{costs.edge}</dd></div><div><dt>Core capabilities</dt><dd>{costs.fundamentals}</dd></div></dl><p className={legal?"build-valid":"build-invalid"}>{legal?"✓ Legal build · ready to commit":"Complete the required fields and balance exactly 18 BP."}</p><small>Commit creates the campaign on this device. Your first scene begins immediately afterward.</small></div></div>
    <div className="flow-actions"><Link href="/campaigns/new" className="secondary-action action-link">Back</Link><button className="primary-action" disabled={!legal||committing} onClick={commit}>{committing?"Creating campaign…":"Commit hero & enter world →"}</button></div></section>;
}
