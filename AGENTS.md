# Codex Repository Instructions — Mythic Superhero RPG

These instructions apply to the entire repository.

## Active project state

**Mythic 2.0 is in first-principles preproduction. Implementation expansion is frozen.**

The production target is now a native Steam/desktop 2D RPG in Godot with an authoritative persistent server-side world simulation. The existing Next.js/browser client is legacy/reference work and is not the production game client.

## Mandatory authority order

Before changing project direction, architecture, gameplay contracts, or implementation, read these files completely in order:

1. `docs/mythic-2.0/README.md`
2. `docs/mythic-2.0/00_MASTER_REBASELINE.md`
3. `docs/mythic-2.0/01_PRODUCT_THESIS_AND_NONNEGOTIABLES.md`
4. `docs/mythic-2.0/02_PLAYER_LOOP_AND_GAME_MODES.md`
5. `docs/mythic-2.0/03_WORLD_SIMULATION_FIRST_PRINCIPLES.md`
6. `docs/mythic-2.0/04_TECHNICAL_ARCHITECTURE_AND_STACK.md`
7. `docs/mythic-2.0/05_COST_RISK_AND_VIABILITY_BASELINE.md`
8. `docs/mythic-2.0/06_PREPRODUCTION_EXECUTION_PLAN.md`
9. `docs/implementation-handoff/v1.0/01_GOVERNANCE/Mythic_Superhero_RPG_World_Constitution_v1.md`
10. Existing contracts/rules/event/knowledge packages as reference inputs to be audited for Mythic 2.0 compatibility.
11. `docs/game-first-v2/` and older UX/UI packages only as historical evidence where they do not conflict with Mythic 2.0.

## Precedence

Mythic 2.0 supersedes browser-first, Phaser/hybrid-renderer, dashboard-like UI, chatbot-presentation, comic-product and previous player-client execution decisions wherever they conflict.

The World Constitution continues to govern canon unless explicitly amended. Ledger Time, deterministic mechanical authority, stable entity identity, viewpoint-safe knowledge, hidden-truth protection, persistent consequences, replay/idempotency principles and server-authoritative canonical state remain core design constraints but must be revalidated against the Mythic 2.0 ontology.

## Implementation freeze

Do **not** begin or continue production implementation from the older GN/GFR/EP execution packets merely because they exist.

The active sequence is `docs/mythic-2.0/06_PREPRODUCTION_EXECUTION_PLAN.md`, FP-00 through FP-12.

Until FP-00 through FP-11 are locked, permitted work is:

- repository inspection;
- research;
- architecture/planning documentation;
- requirements reconciliation;
- schema/ontology design documents;
- asset inventory/provenance work;
- prototypes explicitly labeled disposable technical spikes when authorized by the product owner;
- cost/unit-economics analysis.

Production construction begins only from the final Mythic 2.0 FP-12 Codex handoff after explicit user authorization.

## Binding product thesis

> **Attempt anything plausible. The world decides what happens. The world remembers.**

### Meaning

- Free-form intent remains a core input mode.
- Players may attempt actions not represented by buttons.
- Player intent must ground to actual known/visible world entities, capabilities, inventory, geography, relationships or other canonical state.
- AI cannot retcon committed reality or invent convenient present-tense affordances.
- AI may help create **future** reality through causally justified, server-validated actions such as settlement formation, business changes, marriages, migrations, construction, faction actions and other world evolution.
- Deterministic systems resolve mechanics and canonical mutations.
- Godot visualizes authoritative projections; it is not canonical authority.
- The world survives the protagonist. Death, retirement, aging, heirs and new characters can continue in the same campaign world.

## Product direction

- Steam/native desktop first.
- Godot 4 production client.
- Battle Brothers-level tactical ambition as a direction, not a clone.
- Vagrus-style illustrated narrative/world presentation as a direction, not a clone.
- Familiar d20/5E grammar where it reduces onboarding cost.
- Concise, vivid player-facing prose.
- Real RPG progression, combat, equipment, exploration, relationships and risk must be fun without AI novelty.
- Persistent causal society/world simulation uses adaptive fidelity and causal-significance budgets rather than full-fidelity simulation of every citizen.
- Large reusable semantic 2D asset libraries are part of the simulation architecture.
- Comic generation/product scope is removed.

## Current resource assumptions

Planning may assume the product owner already has or plans:

- 800+ internally created monster assets;
- Supabase Pro;
- GitHub Team;
- high-capacity ChatGPT access;
- Claude 5x access.

These reduce incremental cost but do not remove AI runtime cost, environmental/character/UI asset needs, QA, audio/VFX, or production-art requirements.

## Legacy code

Do not delete the existing web implementation during preproduction. Preserve Git history and classify code/assets as:

- reuse;
- server/reference reuse after audit;
- archive/reference only;
- retire.

A future Mythic 2.0 repository restructuring may place the legacy web client under an archive/reference boundary while introducing `client/godot`, server, shared contract, content and tooling boundaries.

## Safety and authority

- Never expose hidden NPC/world truth to a player projection that should not know it.
- Visual state is never canonical by itself.
- Systemic interactable objects require stable authoritative identity.
- Generated future world facts require provenance.
- Death/failure are valid outcomes.
- New world generation must respect geography, resources, time, ownership, social/economic constraints and world invariants.
- Third-party assets require provenance/license records before production use.
- Preserve unrelated user work.

## Delivery boundary

The current deliverable is **complete Mythic 2.0 preproduction and a Codex-ready vertical-slice implementation handoff**, not a production release.

Production implementation, Steam release, paid provider acquisition beyond approved existing services, destructive production migration, and failed-gate bypass require separate authorization.

<!-- BEGIN:nextjs-agent-rules -->

# Legacy Next.js note

The existing browser client uses a modern Next.js version whose APIs may differ from training data. If legacy web code is inspected or maintained, read the relevant guide in `node_modules/next/dist/docs/` before modifying it. This requirement does not imply that Next.js remains the Mythic 2.0 production client.

<!-- END:nextjs-agent-rules -->
