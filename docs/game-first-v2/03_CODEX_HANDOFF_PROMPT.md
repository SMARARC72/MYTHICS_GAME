# Codex Handoff — Mythic Game-First v2

Use this document as the clean-session execution prompt for the next implementation phase.

---

## Mission

Rebuild Mythic as an unmistakable **native desktop / Steam-targeted 2D RPG in Godot**, while preserving the current authoritative server-side campaign, deterministic rules, event ledger, persistence, AI interpretation, Ledger Time, autonomous actors, and viewpoint-safe knowledge architecture.

The target experience combines:

- Battle Brothers-style tactical depth and readable 2D battlefields;
- Vagrus-style illustrated narrative/world presentation;
- familiar d20/5E mechanical grammar where useful;
- unrestricted natural-language action attempts;
- Mythic's authoritative persistent simulation and systemic world-object interaction.

The product thesis is:

> **Attempt anything plausible. The world decides what happens.**

The second invariant is equally binding:

> **Freedom does not permit invention.**

A player may creatively interact with world objects, actors, terrain, items and capabilities that actually exist in authoritative state. The language model may interpret intent and map it to those objects and mechanics, but may never fabricate an object, fact, participant, capability or affordance merely to satisfy the declaration.

Do not turn this into a generic VTT, chatbot, web dashboard, or direct clone of any reference game.

## Mandatory read order

Before writing code, read completely:

1. `AGENTS.md`
2. `docs/product/GAME_FIRST_REBASELINE.md`
3. `docs/game-first-v2/00_SOURCE_OF_TRUTH.md`
4. `docs/game-first-v2/04_GODOT_NATIVE_ARCHITECTURE.md`
5. `docs/game-first-v2/01_TOOLCHAIN_ASSETS_AND_LICENSES.md`
6. `docs/game-first-v2/02_EXECUTION_PLAN.md`
7. `docs/engineering/PLAYABLE_VERTICAL_SLICE_PLAN.md`
8. `docs/implementation-handoff/v1.0/SOURCE_PRECEDENCE.md`
9. World Constitution and C1–C4 contract acceptance packages referenced by `AGENTS.md`
10. Existing UI-01–UI-04 packages only as historical product evidence where they do not conflict with Game-First v2 or the Godot native decision
11. current source tree, tests and any nested `AGENTS.md`
12. Current stable Godot 4 documentation relevant to any engine API being implemented.

Where Game-First v2 or `04_GODOT_NATIVE_ARCHITECTURE.md` conflicts with older web-player UI requirements, the Godot native architecture wins. Engine authority, contract safety, Ledger Time, hidden-truth protections, idempotency, replay, accessibility intent and recovery remain binding.

## Authorization boundary

Follow the repository implementation authorization gate exactly.

Before the required exact authorization phrase is present, you may inspect, compare, plan, run non-mutating diagnostics and report conflicts. Do not begin construction.

Once authorization is valid, execute the native Game-First v2 work continuously in dependency order. Do not stop for approval between packets unless a documented blocking decision or safety/legal issue prevents a responsible default.

## Primary implementation objective

The first priority is **not feature breadth**. It is one polished, fun, authoritative Drowned Archive native vertical slice.

Do not begin generalized world generation, multiplayer, full campaign breadth, large content libraries or production Steam release until the slice passes its game-feel acceptance gates.

## Required architecture

### Native client

Godot 4 is the production game client.

Godot owns:

- native desktop presentation;
- world/exploration maps;
- tactical battle maps;
- cameras, sprites, animation, VFX and audio;
- Hero/inventory/journal/Codex game UI;
- dialogue and free-intent player input;
- deterministic-result dice animation;
- keyboard/mouse/controller input;
- local visual previews and reconciliation.

Use current `TileMapLayer` / `TileSet` APIs, not deprecated `TileMap` architecture.

### Server authority

The existing server-side architecture remains canonical and must be preserved/refactored rather than replaced by Godot.

The server alone owns:

- world and campaign truth;
- existence and state of world objects;
- player/NPC stats and inventory;
- private NPC knowledge/motives;
- deterministic dice/rules;
- action legality;
- XP and progression;
- injuries/death;
- Ledger Time;
- factions/relationships;
- autonomous simulation;
- persistence, snapshots and replay;
- ordered canonical events;
- AI interpretation constraints.

Godot must never become a second game authority.

## Grounded free-intent pipeline

Every free-text attempt must execute through this order:

1. resolve referenced nouns/actions against the player's current knowledge-safe projection;
2. bind references to stable authoritative entity IDs;
3. reject or clarify unresolved/materially ambiguous references;
4. validate actor capabilities and world physics/rules;
5. construct the mechanical action;
6. disclose player-knowable stakes where appropriate;
7. commit once;
8. resolve deterministically server-side;
9. append canonical events;
10. project the result back to Godot;
11. animate the committed result.

Example:

> "I lift that stone table and use it as cover."

This is legal to interpret only if a visible/known projected object matching the table exists. Its mass, material, tile, condition and interaction tags inform the action. The AI must not invent a table or rewrite its properties.

## Spatial and object model

Interactive map art is not merely decorative.

Every meaningful interactable object rendered in the world should correspond to a stable projected entity or authoritative terrain feature when practical.

Objects may expose tags and properties such as:

- liftable / pushable / breakable;
- cover;
- flammable;
- climbable;
- container;
- door/window/barrier;
- hazard source;
- weight/size/material;
- durability/condition;
- ownership/faction;
- tile/transform.

Do not expose hidden properties the viewpoint is not permitted to know.

## Tactical target

Build toward Battle Brothers-level tactical significance while preserving Mythic free intent:

- discrete positions;
- movement costs;
- terrain/elevation;
- cover and line of sight;
- engagement/zones of control;
- environmental hazards;
- manipulable/destructible objects;
- ranged/melee distinction;
- area effects;
- conditions;
- environmental Stunts;
- persistent injuries and consequences.

Traditional action controls should make common actions fast. Free text should allow creative use of real scene state that was not explicitly represented by a button.

## Drowned Archive proof

The native slice must demonstrate at minimum:

- a real 2D map/scene in Godot;
- authoritative projected objects;
- concise worldbuilding and dialogue;
- a visible NPC interaction;
- one exploratory check;
- deterministic dice theater;
- Hero/inventory presentation;
- one tactical encounter;
- movement/positioning;
- one standard combat action;
- one creative free-intent environmental action grounded to an actual map object;
- one impossible or unavailable action correctly rejected without fabrication;
- XP/reward/progression feedback;
- a persistent visible world consequence;
- save/resume against server authority.

## Toolchain migration

Do not continue Phaser as the production game renderer. Remove or archive Phaser-specific implementation plans where they conflict with this decision.

Retain Next.js/React only for existing backend/server capabilities, development/admin utilities or transitional tooling where useful. The production player experience is Godot-native.

Prefer GDScript unless a specific module has a documented engineering reason to use another supported Godot language. Keep authoritative domain/rules services outside the client.

## Verification

The slice is not complete merely because it launches.

Verify:

- server remains authoritative;
- no client-side canonical mutation;
- deterministic replay parity;
- entity grounding for free intent;
- no hallucinated world-object creation;
- hidden-truth isolation;
- movement/range/LOS revalidated server-side;
- reconnect/save/resume consistency;
- keyboard/mouse usability;
- controller viability for primary gameplay;
- native desktop packaging;
- representative performance on the target desktop profile;
- visual acceptance: without branding, the product is immediately perceived as a native 2D RPG.

## Stop conditions

Stop and surface a blocking issue only when:

- a required contract cannot represent the native client/game-object model without a product decision;
- a third-party dependency has incompatible licensing;
- a Godot limitation materially blocks the native target;
- preserving authority would require client-side canon ownership;
- a required user decision cannot responsibly be inferred from the approved direction.

Otherwise make the best implementation choice, record it, test it, and continue.
