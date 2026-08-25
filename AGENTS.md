# Codex Repository Instructions — Mythic Superhero RPG

These instructions apply to the entire repository.

## Active project state

**Mythic 2.0 first-principles preproduction and W0–W8 preimplementation are locked. Production implementation remains frozen pending explicit authorization.**

The production target is a native Steam/desktop 2D tactical RPG in Godot 4 .NET/C# with an authoritative persistent C# server-side world simulation. The existing Next.js/browser client is legacy/reference work and is not the production game client.

## Mandatory authority order

Before changing project direction, architecture, gameplay contracts or implementation:

1. Read `docs/mythic-2.0/README.md` completely.
2. Read every file in its mandatory read order completely.
3. Read `docs/implementation-handoff/v1.0/01_GOVERNANCE/Mythic_Superhero_RPG_World_Constitution_v1.md` for setting/lore/canon where Mythic 2.0 has not explicitly superseded a mechanic/product assumption.
4. Treat legacy contracts/tests as migration evidence according to `21_W0_MIGRATION_AUTHORITY_AUDIT.md`.
5. Treat `docs/game-first-v2/`, old UX/UI packages and the browser implementation as historical evidence only where they do not conflict with Mythic 2.0.

## Precedence

Mythic 2.0 supersedes browser-first, Phaser/hybrid-renderer, dashboard-like UI, chatbot-presentation, comic-product and previous player-client execution decisions wherever they conflict.

The World Constitution continues to govern canon unless explicitly amended. Ledger Time, deterministic authority, stable entity identity, viewpoint-safe knowledge, hidden-truth protection, persistent consequences, replay/idempotency and server-authoritative canonical state remain binding.

## Explicit implementation gate

Do **not** begin production implementation, repository restructuring, new Godot project construction, new C# server construction, database migration, or destructive legacy movement until the product owner says exactly:

> **Authorize the clean-session Codex implementation run.**

Before that phrase, permitted work includes repository inspection, research, planning/architecture documentation, schema/ontology design, asset inventory/provenance work, balance/economics analysis and explicitly authorized disposable technical spikes.

After authorization, use the **I-series implementation sequence in FP-12**. Do not resume old GN/GFR/EP plans.

## Binding product thesis

> **Attempt anything plausible. The world decides what happens. The world remembers.**

### Meaning

- Free-form intent is a core input mode, not the only interface.
- Players may attempt actions not represented by buttons.
- Player intent must ground to actual known/visible world entities, capabilities, inventory, geography, relationships or canonical state.
- AI cannot retcon committed reality or invent convenient present-tense affordances.
- AI may help create future reality through causally justified, server-validated plans/generation.
- Deterministic systems resolve mechanics and canonical mutations.
- Godot visualizes authoritative projections; it is not canonical authority.
- The world survives the protagonist; death, retirement, aging, heirs and new characters continue in the same campaign.

## Tactical combat doctrine

- Combat must be fun with all AI/free-text features disabled.
- Hex grid, individual initiative, AP economy, separate Reaction, d20/Defense readability, Exertion, morale, injuries/death, LOS/cover/elevation, varied objectives and environmental Stunts are binding structural choices.
- Routine enemy turns never require an LLM.
- Deterministic utility/behavior AI owns ordinary tactical decisions.
- LLM combat use is sparse/event-driven: optional encounter plans, bounded material replans, free-text grounding, natural-language doctrines and rare high-value narration/reward synthesis.
- Provider outage must not stop ordinary tactical combat.
- Headless deterministic combat simulation and balance proof precede polished Godot combat presentation.

## Dynamic loot/reward doctrine

- Physical loot comes from canonical world state.
- Creative play may improve reward outcomes only through a traceable causal channel such as preservation, salvage, patron/faction response, information, crafting opportunity, artifact imprint or causally created/bestowed future reward.
- AI may author a `UniqueItemProposal`, but the server owns reward budget, mechanical legality, exact coefficients, item identity, Power Tier, ownership and canonical commit.
- AI-generated item mechanics must compose from approved versioned effect primitives; models never generate arbitrary executable game code.
- Repeated/paraphrased Stunts cannot farm infinite novelty/reward quality.

## World simulation doctrine

- Persistent causal society/world simulation uses adaptive fidelity and causal-significance budgets rather than full-fidelity simulation of every citizen.
- Stable identities outlive roles: people, businesses, offices, property, roads and factions are separate canonical entities.
- Children age through Ledger Time and may become future NPCs/player characters.
- Businesses/roads/settlements/relationships/ownership may change through causal events.
- Major autonomous actors receive bounded planning windows, not continuous token-burning consciousness.

## Product direction

- Steam/native desktop first.
- Godot 4 .NET/C# production client.
- C#/ASP.NET Core authoritative server and worker.
- Supabase Pro/Postgres persistence.
- Battle Brothers-level tactical ambition as a direction, not a clone.
- Vagrus-style illustrated narrative/world presentation as a direction, not a clone.
- Familiar d20/5E grammar where it reduces onboarding cost.
- Concise, vivid player-facing prose.
- Real RPG progression, combat, equipment, exploration, relationships and risk must be fun without AI novelty.
- Large reusable semantic 2D asset libraries are part of simulation architecture.
- Comic generation/product scope is removed.

## Current resource assumptions

Planning may assume:
- 800+ internally created monster assets;
- Supabase Pro;
- GitHub Team;
- high-capacity ChatGPT/Codex access;
- Claude development access.

These reduce incremental development cost but do not remove runtime API cost, environment/human/UI asset needs, QA, audio/VFX or production-art requirements.

## Legacy code

Do not delete legacy work casually. Preserve Git history. Migrate **behavioral invariants, tests, schemas and content**, not TypeScript merely because it exists.

Priority-A preserved concepts include idempotency, stale-state rejection, unknown-commit recovery, ordered event sequencing, deterministic replay, viewpoint-safe projection and hidden-knowledge negative fixtures.

Legacy browser presentation and Drowned-Archive-specific regex rule code are rewrite/archive candidates rather than production architecture.

## Safety and authority

- Never expose hidden NPC/world truth to an unauthorized player projection.
- Visual state is never canonical by itself.
- Systemic interactable objects require stable authoritative identity.
- Generated future world facts require provenance.
- Death/failure are valid outcomes.
- New world generation must respect geography, resources, time, ownership, social/economic constraints and world invariants.
- Third-party assets require provenance/license records before production use.
- Preserve unrelated user work.

## Delivery boundary

The current deliverable is complete Mythic 2.0 preimplementation authority and a Codex-ready implementation handoff, not a production release.

Production implementation, Steam release, paid provider acquisition beyond approved services, destructive production migration and failed-gate bypass require separate authorization.

<!-- BEGIN:nextjs-agent-rules -->

# Legacy Next.js note

If legacy web code is inspected or maintained, read the relevant guide in `node_modules/next/dist/docs/` before modifying it. This does not imply Next.js remains the Mythic 2.0 production client.

<!-- END:nextjs-agent-rules -->
