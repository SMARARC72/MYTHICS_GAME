"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CampaignLibrary, CampaignSetup, CharacterBuilder } from "@/src/components/campaign-start";
import { PlayableIntent } from "@/src/components/playable-intent";
import { SCREENS, type ScreenSpec } from "@/src/lib/screen-data";
import type { StageProjection } from "@/src/server/projectors/drowned-archive-projector";

type LoadedStage = StageProjection & { eventSequence: number; character: { vitality: number; evidence: readonly string[] }; chronicle: readonly string[] };

const primaryDestinations = [
  { label: "Play", href: "/campaign/glass-harbor/stage" },
  { label: "Hero", href: "/campaign/glass-harbor/character" },
  { label: "World", href: "/campaign/glass-harbor/world" },
];

function StartSurface({ kind }: { kind: ScreenSpec["kind"] }) {
  if (kind === "library") return <CampaignLibrary />;
  if (kind === "onboarding") return <CampaignSetup />;
  return <CharacterBuilder />;
}

function GameNav({ active }: { active: string }) {
  return <nav className="game-nav" aria-label="Game destinations">
    {primaryDestinations.map(item => <Link key={item.label} href={item.href} aria-current={active === item.label ? "page" : undefined}>{item.label}</Link>)}
    <details className="more-menu"><summary aria-label="Open more destinations">More</summary><div><Link href="/campaign/glass-harbor/company">Allies</Link><Link href="/campaign/glass-harbor/holdings">Gear</Link><Link href="/campaign/glass-harbor/chronicle">Journal</Link><Link href="/settings">Settings</Link></div></details>
  </nav>;
}

function Stage({ screen, projection }: { screen: ScreenSpec; projection?: LoadedStage }) {
  const danger = screen.kind === "danger";
  return <main className="play-stage" id="main-content">
    <section className={`living-scene ${danger ? "is-danger" : ""}`} aria-labelledby="scene-title">
      <Image src="/glass-harbor-archive.png" alt="Rain falls across the flooded stacks and broken bridges of the Drowned Archive" fill sizes="100vw" priority />
      <div className="scene-vignette" />
      <div className="scene-status"><span>{danger ? "Immediate danger" : "Drowned Archive"}</span><strong>{danger ? "The stacks collapse in one beat" : "The tide reaches the lower stair"}</strong></div>
      <div className="scene-story">
        <p className="location">Threshold · Glass Harbor</p>
        <h1 id="scene-title">{projection?.scene.title ?? screen.headline}</h1>
        <blockquote><span>Curator Ilya</span>“The archive does not open. It remembers who asked.”</blockquote>
        <p className="scene-change">Three dry footprints end at the water. In its reflection, a doorway waits where the wall is solid.</p>
      </div>
    </section>
    <section className="scene-actions" aria-label="What you can do next">
      <div className="dramatic-question"><span>The question</span><strong>Will you give the archive a name to remember?</strong></div>
      <div className="quick-actions">
        <button type="button">Inspect the reflection <small>The resin mark looks familiar</small></button>
        <button type="button">Question Ilya <small>She is hiding something observable</small></button>
        <button type="button">Use a capability <small>Draw on Mara’s impossible cartography</small></button>
      </div>
      <PlayableIntent stateVersion={String(projection?.eventSequence ?? 0)} />
    </section>
  </main>;
}

function ReferenceSurface({ screen }: { screen: ScreenSpec }) {
  const journal = screen.kind === "chronicle";
  return <main className="reference-page" id="main-content">
    <Link className="return-to-play" href="/campaign/glass-harbor/stage">← Return to the Drowned Archive</Link>
    <header><span>{journal ? "Your story so far" : screen.destination}</span><h1>{journal ? "Journal" : screen.headline}</h1><p>{journal ? "The choices and consequences Mara can remember." : screen.summary}</p></header>
    <div className="reference-layout">
      <section className="reference-feature"><span>Right now</span><h2>{screen.facts[0]?.value}</h2><p>{screen.context[0]}</p><button className="primary-action">{screen.primaryAction}</button></section>
      <section className="reference-list" aria-label="Relevant details">{screen.facts.slice(1).map(fact => <article key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></article>)}</section>
    </div>
    {journal && <details className="audit-details"><summary>Show resolution history and rules audit</summary><p>Receipt and provenance details are available here without competing with play.</p></details>}
  </main>;
}

export function MythicApp({ path, initialStage }: { path: string; initialStage?: LoadedStage }) {
  const screen = useMemo(() => SCREENS.find(item => item.route === path) ?? SCREENS[0], [path]);
  const [menuOpen, setMenuOpen] = useState(false);
  const isStart = ["library", "onboarding", "builder"].includes(screen.kind);
  const isStage = ["stage", "resolution", "danger"].includes(screen.kind);
  const active = isStage ? "Play" : ["character", "company", "holdings"].includes(screen.kind) ? "Hero" : "World";

  if (isStart) return <div className="entry-shell"><header className="entry-header"><Link href="/campaigns" className="wordmark">MYTHIC</Link><Link href="/settings">Accessibility & settings</Link></header><main id="main-content"><StartSurface kind={screen.kind} /></main></div>;

  return <div className="game-shell">
    <header className="game-header"><Link href="/campaigns" className="wordmark"><span>MYTHIC</span><small>Glass Harbor</small></Link><GameNav active={active}/><div className="world-pulse"><span>Day 18 · Dusk</span><strong>Tide rising</strong></div><button className="icon-button" aria-expanded={menuOpen} onClick={() => setMenuOpen(value => !value)} aria-label="Open game menu">☰</button></header>
    {menuOpen && <aside className="utility-drawer"><Link href="/campaign/glass-harbor/recovery">Save & recovery</Link><Link href="/settings">Accessibility & settings</Link><Link href="/campaigns">Leave campaign</Link></aside>}
    {isStage ? <Stage screen={screen} projection={initialStage}/> : <ReferenceSurface screen={screen}/>}
    <div className="announcer sr-only" aria-live="polite">Current world ready</div>
  </div>;
}
