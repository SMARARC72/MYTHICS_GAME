# Codex Repository Instructions — Mythic Superhero RPG

These instructions apply to the entire repository.

## Mandatory authority order

Before changing code, read these files completely in order:

1. `docs/product/GAME_FIRST_REBASELINE.md`
2. `docs/game-first-v2/00_SOURCE_OF_TRUTH.md`
3. `docs/game-first-v2/01_TOOLCHAIN_ASSETS_AND_LICENSES.md`
4. `docs/game-first-v2/02_EXECUTION_PLAN.md`
5. `docs/game-first-v2/03_CODEX_HANDOFF_PROMPT.md`
6. `docs/engineering/PLAYABLE_VERTICAL_SLICE_PLAN.md`
7. `docs/implementation-handoff/v1.0/README_FIRST.md`
8. `docs/implementation-handoff/v1.0/SOURCE_PRECEDENCE.md`
9. `docs/implementation-handoff/v1.0/00_START_HERE/CODEX_EXECUTION_PROMPT.md`
10. `docs/implementation-handoff/v1.0/01_GOVERNANCE/Mythic_Superhero_RPG_World_Constitution_v1.md`
11. `docs/implementation-handoff/v1.0/01_GOVERNANCE/UX_UI_Foundation_v0.1A.md`
12. `docs/implementation-handoff/v1.0/01_GOVERNANCE/Mythic_RPG_Product_Information_Architecture_v0.1A.md`
13. The C1–C4 acceptance documents and packages under `02_CONTRACTS/`
14. The UI-01–UI-04 acceptance documents and packages under `03_FINALIZED_UX_UI/`
15. The controlled workbook under `04_CONTROL_AND_TRACEABILITY/`
16. Every file under `05_READINESS_AND_RUNBOOK/`

### Current precedence clarification

The 2026-08-24 Game-First rebaseline and `docs/game-first-v2/` packet supersede older UX/UI and comic-production player-product decisions wherever they conflict.

The older UI-01–UI-04 packages remain valuable architecture/history, but they are **not binding for player-facing composition, terminology, comic scope, dashboard-like layouts, or other experience decisions that Game-First v2 explicitly replaces**.

The World Constitution continues to govern canon and player-visible truth. Approved contracts continue to govern authority and payloads. Deterministic rules authority, Ledger Time, viewpoint safety, hidden-truth boundaries, append-only events, replay, idempotency, recovery, accessibility and persistent consequences remain binding.

## Handoff integrity

The handoff checksum ledger and embedded ZIPs may be inspected when diagnosing
package integrity, but there is no pre-mutation validator or validation gate.
Do not treat tooling portability issues as implementation blockers.

## Explicit implementation gate

Read `05_READINESS_AND_RUNBOOK/implementation-authorization.json` before mutating implementation code.

If its decision is `AWAITING_EXPLICIT_USER_AUTHORIZATION`, require the user to say exactly:

> Authorize the clean-session Codex implementation run.

Repository inspection, documentation preparation and non-mutating diagnostics are allowed before that phrase. Construction of the implementation is not.

After authorization, execute the active Game-First v2 plan continuously in dependency order. Do not solicit approval packet-by-packet unless a documented stop condition is reached.

## Binding product direction

- Mythic is a living-world RPG, not an AI chatbot, VTT utility, CRM, admin panel or lore dashboard.
- Product thesis: **Attempt anything. The world decides what happens.**
- Primary navigation is **Play**, **Hero**, **World**.
- Play is context-sensitive across **World Map**, **Scene**, and **Encounter** modes.
- Reference product/interaction inspiration is Battle Brothers + Vagrus: The Riven Realms, with familiar d20/5E game grammar where it improves adoption. Do not copy protected art/assets/trade dress.
- The Adaptive Living World Stage remains the scene-first center of ordinary play.
- Ledger Time is the only world-time model.
- Desktop browser is the reference target; compact variants preserve capability.
- Progressive disclosure introduces the world and mechanics through play without hiding legal choices.
- Free-form intent remains permanently available; suggested actions are examples only.
- Dice, XP, HP, equipment, conditions, progression and consequence should feel like game mechanics, while advanced engine detail remains optional.
- Tutorial is a playable adventure, not a documentation dump.
- Player-facing prose is concise, concrete and world-building; internal engine vocabulary stays hidden in normal play.
- Comic generation, production, publication, reader/editor and comic onboarding are removed from player-product scope.
- Figma is prohibited. Use code-native UI, semantic HTML/CSS/SVG, approved visual references, licensed/provenanced assets and asset fallbacks.

## Hybrid renderer direction

React/Next.js remains the application shell, workflow coordinator and accessible player UI.

Interactive world-map and tactical canvas surfaces may use Phaser behind internal renderer ports after the documented spike passes. External renderers never own canonical game state or authoritative rules.

Visual dice may animate predetermined authoritative results only. They never generate game truth.

## Authority and safety

- The browser is a viewpoint-safe projection renderer and workflow coordinator, never a second game engine.
- Generate types and runtime validators from the approved contracts; do not handwrite duplicate network-domain models.
- Keep caches separated by campaign, viewpoint, contract version, and state basis.
- Keep drafts separate from authoritative projections.
- Persist idempotency before sending a mutation.
- Never show canonical mutation before authoritative receipts and ordered events.
- Resolve unknown commit status before retry.
- Pause mutation on ordered-event gaps and preserve recoverable drafts.
- Never expose hidden truth, hidden encounter data, protected prompts, or private audit data to public client state, canvas data, logs, or analytics.
- Third-party game assets must have provenance/license records before entering the public asset tree.
- Preserve unrelated user work and follow any more-specific nested `AGENTS.md` files added later.

## Delivery boundary

The authorized target, once the explicit implementation phrase is provided, is a QA-ready protected-preview **Game-First v2 Drowned Archive vertical slice** with automated evidence and human playtest gates.

Production deployment, public release, paid provider acquisition, destructive production mutation, art-rights/canon clearance, and failed-gate bypass require separate user authorization.

Automated results cannot waive human assistive-technology, usability, rights/licensing, canon, or hidden-knowledge review.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
