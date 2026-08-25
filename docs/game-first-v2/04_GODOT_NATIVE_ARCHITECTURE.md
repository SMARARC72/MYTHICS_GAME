# Mythic Game-First v2 — Godot Native Architecture Decision

**Decision:** Native desktop / Steam is the product target. Godot becomes the primary game client. The authoritative campaign, rules, event-ledger, knowledge, persistence, AI interpretation, and simulation services remain server-side.

## Product invariant

> **Attempt anything plausible. The world decides what happens.**

The player has broad action freedom, but neither the player nor the language model may invent world objects, capabilities, facts, participants, terrain, inventory, or affordances that do not exist in authoritative state.

A player may attempt to lift a crate because that crate exists in the current location state and is visible/known to the player. The player may not conjure a crane, explosive barrel, doorway, ally, spell, weapon, or environmental feature simply by describing it.

## Client/server boundary

```text
                         MYTHIC AUTHORITATIVE SERVICES

 intent parser / action interpreter
             |
 authoritative campaign service
             |
 deterministic rules kernel
             |
 canonical event ledger + snapshots
             |
 knowledge / viewpoint projector
             |
 autonomous actor + world simulation
             |
 typed API + ordered event stream
             |
             v
                         GODOT NATIVE CLIENT

 world map | exploration scenes | tactical maps | encounters
 Hero      | inventory          | journal       | codex
 dialogue  | free-intent input  | dice/VFX      | audio
```

Godot is a presentation, interaction, and local orchestration client. It is not canonical authority.

## World-object authority model

Every interactable world object must have an authoritative identity and gameplay descriptor.

Minimum runtime object projection:

```text
WorldObject
- id
- archetype
- display_name
- location_id / scene_id
- tile / transform
- visibility_state
- knowledge_state
- physical_tags
- interaction_tags
- mass / size class when mechanically relevant
- material tags when relevant
- durability / condition when relevant
- ownership / faction when relevant
- inventory/container state when relevant
- traversal / collision properties
- rules references
- public descriptive affordances
```

Examples:

- crate
- table
- fallen beam
- torch
- motorcycle
- loose stone
- door
- window
- corpse
- altar
- flooded gate
- explosive canister

The client renders only what the viewpoint projection permits.

## Free-action resolution

A free-text declaration such as:

> "I grab the stone bench and throw it at the cultists."

is processed as:

1. **Reference grounding** — resolve `stone bench` against known/visible world objects.
2. **Actor capability check** — determine whether the character can plausibly lift/manipulate it.
3. **Rules construction** — identify movement, action cost, ability/check, range, targets, cover, damage/effects, risks and environmental consequences.
4. **Clarification only when materially ambiguous** — e.g. two visible benches.
5. **Commit** — deterministic roll/resolution occurs server-side.
6. **Canonical mutation** — events change object/actor/world state.
7. **Projection** — Godot receives the resulting state/events and animates them.

The LLM may interpret language and propose a legal mechanical action. It may not fabricate missing world state to make the declaration possible.

## Object affordance doctrine

The UI should not enumerate every legal interaction. Instead it provides layered discovery:

- visible scene objects communicate affordances through art, animation and hover/selection;
- contextual inspect reveals concise object facts the character can know;
- normal actions remain discoverable through traditional RPG controls;
- free-intent input permits creative combinations of known objects and capabilities;
- suggested actions demonstrate possibilities but never define the complete action space.

This produces systemic freedom without hallucinated reality.

## Godot responsibilities

Godot owns:

- native Windows desktop client first;
- Steam-facing application packaging when authorized;
- TileMapLayer-based world/exploration maps;
- tactical battle maps and positioning;
- visual scene graph;
- cameras;
- sprites and animation;
- VFX / shaders / particles;
- audio and music presentation;
- controller / mouse / keyboard input;
- local HUD and menus;
- accessibility presentation available at client level;
- deterministic-result dice animation;
- rendering projected authoritative objects;
- client-side previews such as movement paths that do not mutate canon;
- transient interpolation and visual reconciliation of ordered server events.

## Server responsibilities

The server remains the sole authority for:

- campaign truth;
- world objects and existence;
- actor stats and inventory;
- NPC private knowledge/motives;
- rules and dice outcomes;
- action legality;
- XP/progression;
- injuries/death;
- item ownership/destruction;
- Ledger Time;
- factions and relationships;
- autonomous NPC/world actions;
- event ordering;
- persistence;
- save/resume;
- replay and audit;
- AI action interpretation constraints.

## Spatial model

The authoritative domain stores logical spatial state independent of rendering.

Godot converts authoritative locations/tiles/transforms to presentation coordinates.

For grid/hex combat the server must understand the same logical cells used for rules. Godot may animate movement between cells but may not independently decide occupancy, range, line-of-sight or collision legality for canonical resolution.

Client pathfinding is a preview. The server validates the committed path/action.

## Godot map tooling

Use current Godot 4 `TileMapLayer` / `TileSet` workflows rather than deprecated `TileMap` architecture.

Recommended map layers:

- ground
- elevation / terrain
- structures
- collision
- occlusion
- decorative objects
- authoritative interactable-object anchors
- hazards
- effects
- fog / knowledge visibility

Godot tile maps support collision, navigation and occlusion, but canonical interaction identity should be represented by stable projected entity IDs rather than inferred from artwork alone.

## Tactical direction

The target is Battle Brothers-level tactical significance, adapted to Mythic powers and free intent:

- discrete positioning;
- movement cost;
- terrain;
- elevation where useful;
- cover;
- line of sight;
- engagement / zones of control;
- environmental objects;
- hazards;
- ranged/melee distinction;
- area effects;
- conditions;
- destructible/manipulable objects;
- multi-target effects;
- interactive terrain;
- vertical/environmental Stunts;
- persistent injuries and battlefield consequences.

Traditional actions provide speed. Free intent provides systemic creativity.

## Example: lifting an object

Visible authoritative state contains:

```text
object: archive_stone_table_03
mass_class: heavy
material: stone
condition: cracked
position: H7
interaction_tags: [liftable_if_capable, pushable, breakable, cover]
```

Player declares:

> "Lift the table and use it as a shield while I move toward Ilya."

The interpreter grounds the table ID, checks character capability, builds the relevant check/action cost and movement consequences, and resolves server-side.

If successful, events may include:

- object lifted;
- character movement;
- temporary cover state;
- strain/resource cost;
- table condition change.

Godot animates only the committed result.

If the table is not visible or does not exist, the system does not invent one.

## Offline behavior

Native desktop does not mean offline authority. The initial architecture assumes connected authoritative play.

Local client data may include:

- settings;
- cached assets;
- UI state;
- recoverable drafts;
- pending-command identifiers;
- last safe projection;

It must not silently become canonical campaign truth.

## Migration consequence

The existing Next.js/React player client is no longer the target shipping client. Reuse its domain knowledge, contracts, tests, content, UX lessons and server architecture, but do not continue investing in it as the production game UI.

A thin web/admin/dev surface may remain only where operationally useful.

## Acceptance test

A player looking at the running client should immediately perceive a native 2D RPG.

A player should be able to:

1. see an environmental object;
2. inspect it if appropriate;
3. type a creative action involving it;
4. have the system ground that request to the real object;
5. receive a deterministic rules result;
6. see the committed consequence represented spatially;
7. reload/resume with the same authoritative world consequence intact.

If free intent can create objects/facts that were absent from authoritative state, the architecture has failed.
