"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { SCREENS, STATE_OPTIONS, type ScreenSpec, type Tone } from "@/src/lib/screen-data";
import { PlayableIntent } from "@/src/components/playable-intent";
import type { StageProjection } from "@/src/server/projectors/drowned-archive-projector";
import { CampaignLibrary, CampaignSetup, CharacterBuilder } from "@/src/components/campaign-start";

type State = (typeof STATE_OPTIONS)[number];
const destinations = ["Stage", "Character", "Company", "Holdings", "World", "Chronicle"];
const destinationRoute: Record<string, string> = {
  Stage: "/campaign/glass-harbor/stage", Character: "/campaign/glass-harbor/character",
  Company: "/campaign/glass-harbor/company", Holdings: "/campaign/glass-harbor/holdings",
  World: "/campaign/glass-harbor/world", Chronicle: "/campaign/glass-harbor/chronicle",
};
const glyphs: Record<string, string> = { Stage: "◈", Character: "◇", Company: "◆", Holdings: "▣", World: "⌖", Chronicle: "≡" };
const stateCopy: Record<State, string> = {
  Ready: "Current projection ready", Loading: "Retrieving viewpoint-safe projection", Empty: "No records exist in this scope",
  Stale: "Last-known facts may have changed", Conflict: "Your draft and committed record differ", Recovery: "Your work is retained",
  Unavailable: "This action is unavailable for the stated reason", Offline: "Confirmed records and drafts remain available",
  Success: "Authoritative receipt confirmed", Mixed: "The goal advanced with a material cost", Failure: "The attempt failed; unchanged facts remain explicit",
  Refusal: "An autonomous actor named a boundary", Interruption: "A blocking change opened a decision window",
};

function Tag({ children, tone = "neutral" }: { children: React.ReactNode; tone?: Tone }) {
  return <span className={`tag tone-${tone}`}>{children}</span>;
}

function StateNotice({ state }: { state: State }) {
  if (state === "Ready") return null;
  const urgent = state === "Interruption" || state === "Recovery" || state === "Conflict";
  return <div className={`state-notice tone-${urgent ? "pressure" : "uncertain"}`} role={urgent ? "alert" : "status"}>
    <span className="state-glyph" aria-hidden="true">{urgent ? "!" : "◌"}</span>
    <div><strong>{state}</strong><span>{stateCopy[state]}</span></div>
    <button type="button">{state === "Offline" ? "Work locally" : state === "Recovery" ? "Restore draft" : "Review"}</button>
  </div>;
}

function Facts({ screen }: { screen: ScreenSpec }) {
  return <div className="fact-grid">{screen.facts.map(fact => <article className={`fact-card tone-${fact.tone}`} key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></article>)}</div>;
}

type LoadedStage = StageProjection & { eventSequence: number; character: { vitality: number; evidence: readonly string[] }; chronicle: readonly string[] };
function Stage({ screen, projection }: { screen: ScreenSpec; projection?: LoadedStage }) {
  return <div className="stage-surface">
    <section className={`scene-frame ${screen.kind === "danger" ? "danger-scene" : ""}`} aria-label="Current scene">
      <Image src="/glass-harbor-archive.png" alt="Rain-dark flooded archival district; noncanonical atmospheric reference" fill sizes="(max-width: 980px) 100vw, 1100px" priority />
      <div className="scene-shade"/><div className="fixture-flag">REFERENCE FIXTURE · NONCANONICAL</div>
      <div className="scene-copy"><p>{screen.kind === "danger" ? "IMMEDIATE DANGER" : "DROWNED ARCHIVE · THRESHOLD"}</p><h2>{projection?.scene.title ?? screen.headline}</h2><div className="marker-row">{projection ? projection.scene.facts.map(f => <Tag key={f.id} tone={f.classification === "perceived" ? "known" : "uncertain"}>{f.classification} · {f.summary}</Tag>) : screen.facts.map(f => <Tag key={f.label} tone={f.tone}>{f.label} · {f.value}</Tag>)}</div></div>
    </section>
    <div className="stage-lower"><article className="speech-card"><span className="eyebrow">EXACT SPEECH · CURATOR ILYA</span><blockquote>“The archive does not open. It remembers who asked.”</blockquote><span className="muted">Heard clearly · no private motive inferred</span></article><aside className="lens-card"><div className="panel-heading"><span>CONTEXT LENS</span><Tag tone="uncertain">Inferred</Tag></div><strong>Floodgate sigil</strong><p>Its lower arc matches the resin mark in the Salt Ledger. Plausible, not confirmed.</p><button className="text-button">Pin to intent →</button></aside></div>
    <PlayableIntent stateVersion={String(projection?.eventSequence ?? 0)} />
  </div>;
}

function StartSurface({ kind }: { kind: ScreenSpec["kind"] }) {
  if (kind === "library") return <CampaignLibrary />;
  if (kind === "onboarding") return <CampaignSetup />;
  return <CharacterBuilder />;
}

function Record({ screen }: { screen: ScreenSpec }) {
  return <div className="record-surface"><div className="record-hero"><div><span className="eyebrow">{screen.status}</span><h2>{screen.headline}</h2><p>{screen.summary}</p></div><div className="hero-actions"><button className="primary-action">{screen.primaryAction}</button><button className="secondary-action">{screen.secondaryAction}</button></div></div><Facts screen={screen}/><div className="record-columns"><section className="ledger-panel"><div className="panel-heading"><span>PRIMARY RECORD</span><Tag tone="known">Recorded</Tag></div>{screen.context.map((item, i) => <button className={`record-row ${i === 0 ? "selected" : ""}`} key={item}><span className="record-index">0{i+1}</span><span><strong>{item}</strong><small>{i ? "Available in this viewpoint" : "Selected · inspectable"}</small></span><span>›</span></button>)}</section><aside className="detail-panel"><div className="panel-heading"><span>PLAYER-SAFE DETAIL</span><Tag tone="agency">Viewpoint</Tag></div><h3>{screen.playerQuestion}</h3><p>{screen.knowledgeBoundary}</p><div className="mini-timeline"><span className="done">Confirmed</span><span className="active">Current</span><span>Next</span></div></aside></div></div>;
}

function System({ screen }: { screen: ScreenSpec }) {
  const world = ["travel", "investigation"].includes(screen.kind);
  return <div className="system-surface"><div className="system-intro"><span className="eyebrow">{screen.status}</span><h2>{screen.headline}</h2><p>{screen.summary}</p></div><div className={`system-visual ${world ? "map-visual" : screen.kind === "chronicle" ? "timeline-visual" : "profile-visual"}`}>
    <div className="visual-grid" aria-hidden="true"/>{world ? <><span className="map-node node-a">LOWER BREAKWATER</span><span className="map-node node-b">BELL CAUSEWAY</span><span className="map-node node-c">DROWNED ARCHIVE</span><svg viewBox="0 0 600 260" role="img" aria-label="Known route from Lower Breakwater through Bell Causeway to Drowned Archive"><path d="M80 188 C160 60 260 225 360 120 S500 65 548 42" /></svg></> : screen.kind === "chronicle" ? <div className="timeline-stack">{["Receipt 7K2 · mixed outcome", "Archive threshold recorded", "Comic source lock created", "Issue 3 · producing"].map((x,i)=><div key={x}><span>{i+1}</span><strong>{x}</strong><small>{i < 2 ? "Committed canon" : "Background media"}</small></div>)}</div> : <div className="profile-ring"><span>18</span><small>BUILD POINTS</small></div>}
  </div><Facts screen={screen}/><div className="action-footer"><span>{screen.context.join(" · ")}</span><button className="primary-action">{screen.primaryAction}</button></div>{world && <table className="map-table"><caption>Known places and route parity</caption><thead><tr><th>Place</th><th>Knowledge</th><th>Connection</th></tr></thead><tbody><tr><td>Lower Breakwater</td><td>Confirmed</td><td>Origin</td></tr><tr><td>Bell Causeway</td><td>Known yesterday</td><td>Tide route</td></tr><tr><td>Drowned Archive</td><td>Believed</td><td>Destination</td></tr></tbody></table>}</div>;
}

export function MythicApp({ path, initialStage }: { path: string; initialStage?: LoadedStage }) {
  const screen = useMemo(() => SCREENS.find(s => s.route === path) ?? SCREENS[0], [path]);
  const [state, setState] = useState<State>("Ready");
  const [subview, setSubview] = useState(screen.subviews[0]);
  const isStage = ["stage", "resolution", "danger"].includes(screen.kind);
  const isStart = ["library", "onboarding", "builder"].includes(screen.kind);
  const isRecord = ["recovery", "settings"].includes(screen.kind);
  return <div className="mythic-app">
    <header className="world-strip"><Link href="/campaigns" className="mythic-mark"><span>MYTHIC</span><small>GLASS HARBOR</small></Link><div className="world-fact"><span>LEDGER TIME</span><strong>{initialStage?.ledgerTime ?? "Day 18 · Watch 2"}</strong></div><div className="world-fact"><span>VIEWPOINT</span><strong>Mara Vale</strong></div><div className="world-fact pressure"><span>WORLD PRESSURE</span><strong>{initialStage ? `${initialStage.scene.pressure.label} · ${initialStage.scene.pressure.value}/${initialStage.scene.pressure.maximum}` : "Tidemark rising"}</strong></div><Link className="world-menu" href="/settings" aria-label="Open settings">•••</Link></header>
    <div className="game-body"><nav className="campaign-rail" aria-label="Campaign destinations">{destinations.map(d => <Link key={d} href={destinationRoute[d]} className={d === screen.destination ? "active" : ""}><span>{glyphs[d]}</span><small>{d}</small></Link>)}</nav>
      <main className="game-main" id="main-content"><header className="surface-header"><div><span className="eyebrow">{screen.destination} · {screen.id}</span><h1>{screen.name}</h1></div><div className="projection-controls"><Tag tone="known">Viewpoint-safe</Tag><label><span className="sr-only">Preview state</span><select value={state} onChange={e => setState(e.target.value as State)}>{STATE_OPTIONS.filter(s => screen.variants.includes(s)).map(s => <option key={s}>{s}</option>)}</select></label></div></header>
      {!isStart && <nav className="subview-tabs" aria-label={`${screen.name} sections`}>{screen.subviews.map(s => <button key={s} className={s === subview ? "active" : ""} onClick={() => setSubview(s)}>{s}</button>)}</nav>}<StateNotice state={state}/>{isStart ? <StartSurface kind={screen.kind}/> : isStage ? <Stage screen={screen} projection={initialStage}/> : isRecord ? <Record screen={screen}/> : <System screen={screen}/>}</main></div>
    <footer className="chronicle-ribbon"><span>CHRONICLE</span><strong>Latest · Archive threshold recorded</strong><small>Canon receipt 7K2</small><Link href="/campaign/glass-harbor/chronicle">Open record</Link></footer>
    <div className="announcer sr-only" aria-live="polite">{stateCopy[state]}</div>
  </div>;
}
