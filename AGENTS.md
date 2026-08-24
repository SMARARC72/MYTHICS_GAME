# Codex Repository Instructions — Mythic Superhero RPG

These instructions apply to the entire repository.

## Mandatory authority order

Before changing code, read these files completely in order:

1. `docs/implementation-handoff/v1.0/README_FIRST.md`
2. `docs/implementation-handoff/v1.0/SOURCE_PRECEDENCE.md`
3. `docs/implementation-handoff/v1.0/00_START_HERE/CODEX_EXECUTION_PROMPT.md`
4. `docs/implementation-handoff/v1.0/01_GOVERNANCE/Mythic_Superhero_RPG_World_Constitution_v1.md`
5. `docs/implementation-handoff/v1.0/01_GOVERNANCE/UX_UI_Foundation_v0.1A.md`
6. `docs/implementation-handoff/v1.0/01_GOVERNANCE/Mythic_RPG_Product_Information_Architecture_v0.1A.md`
7. The C1–C4 acceptance documents and packages under `02_CONTRACTS/`
8. The UI-01–UI-04 acceptance documents and packages under `03_FINALIZED_UX_UI/`
9. The controlled workbook under `04_CONTROL_AND_TRACEABILITY/`
10. Every file under `05_READINESS_AND_RUNBOOK/`

The World Constitution governs canon and player-visible truth. Approved contracts govern authority and payloads. Approved UX/UI packages govern the player experience and frontend composition. The execution runbook may not override them.

## Handoff integrity

The handoff checksum ledger and embedded ZIPs may be inspected when diagnosing
package integrity, but there is no pre-mutation validator or validation gate.
Do not treat tooling portability issues as implementation blockers.

## Explicit implementation gate

Read `05_READINESS_AND_RUNBOOK/implementation-authorization.json` before mutating the repository.

If its decision is `AWAITING_EXPLICIT_USER_AUTHORIZATION`, require the user to say exactly:

> Authorize the clean-session Codex implementation run.

Repository inspection and non-mutating diagnostics are allowed before that phrase. Construction is not.

After authorization, execute EP-00 through EP-15 continuously in dependency order. Do not solicit approval packet-by-packet unless a documented stop condition is reached.

## Binding product direction

- Ledger Time is the only world-time model.
- The Adaptive Living World Stage is the primary workspace.
- Desktop browser is the reference target; compact variants preserve capability.
- Progressive disclosure introduces the world and mechanics in context over time without hiding legal choices.
- The experience must feel like a living mythic superhero RPG, never a chatbot skin or lore dashboard.
- Figma is prohibited. Use the approved code-native component library, semantic HTML/CSS/SVG, approved visual references, and asset fallbacks.

## Authority and safety

- The browser is a viewpoint-safe projection renderer and workflow coordinator, never a second game engine.
- Generate types and runtime validators from the approved contracts; do not handwrite duplicate network-domain models.
- Keep caches separated by campaign, viewpoint, contract version, and state basis.
- Keep drafts separate from authoritative projections.
- Persist idempotency before sending a mutation.
- Never show canonical mutation before authoritative receipts and ordered events.
- Resolve unknown commit status before retry.
- Pause mutation on ordered-event gaps and preserve recoverable drafts.
- Never expose hidden truth or protected media audit data to public client state, logs, or analytics.
- Preserve unrelated user work and follow any more-specific nested `AGENTS.md` files added later.

## Delivery boundary

The authorized implementation target is a QA-ready protected-preview candidate with automated evidence. Production deployment, public release, paid provider acquisition, destructive production mutation, comic publication, art-rights/canon clearance, and failed-gate bypass require separate user authorization.

Automated results cannot waive human assistive-technology, usability, rights/consent, canon, or Reader Knowledge Ceiling review.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
