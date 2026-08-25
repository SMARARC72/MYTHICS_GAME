# Mythic 2.0 — Technical Architecture and Stack

## Client

**Godot 4.x**, native desktop/Steam first.

Client responsibilities: rendering, input, tile/hex maps, animation, VFX, audio, HUD, menus, tactical previews, local caching, client-side accessibility/settings and presenting authoritative projections. The client is not canonical authority.

## Server

Initial platform: existing Supabase Pro/Postgres foundation plus service/runtime components as required.

Server responsibilities:

- campaigns and entity identity;
- canonical world state;
- event ledger and snapshots;
- deterministic rules/dice;
- Ledger Time;
- character progression;
- inventory/ownership;
- spatial validation;
- topology;
- NPC knowledge;
- social/economic simulation;
- generation validation;
- AI orchestration;
- RAG/canon retrieval;
- model routing;
- persistence/replay.

## AI orchestration

Use multiple model tiers/providers rather than one model for every task.

### Deterministic/no-model
Dice, damage, combat legality, pathfinding, inventory, formulas/prices, aging, ownership-transfer rules, time advancement and most background simulation.

### Low-cost/fast model
Intent parsing, entity-grounding assistance, classification, short low-stakes NPC utterances and summarization.

### Higher-reasoning model
Ambiguous creative actions, major NPC planning, complex social reasoning, major world-generation proposals and high-impact narration.

Provider abstraction is required from the start so OpenAI and Anthropic capacity can be used strategically without binding gameplay to one vendor.

## Shared contracts

Use explicit versioned schemas for projections, action proposals, grounded entity references, authoritative commands, receipts, ordered events, world-generation proposals, character/NPC state and spatial/map state. Generate bindings for server and Godot where practical.

## Asset system

The 800+ existing monster assets materially reduce creature-content cost, but they must be inventoried against art style, resolution, facing/animation availability, ownership/provenance, taxonomy, biome/faction fit, combat footprint, portrait/token distinction and required variants.

Additional reusable semantic libraries are still needed for terrain/biomes, architecture, roads/bridges, interiors, props/systemic objects, modular humanoids/age/clothing/equipment, factions, UI, VFX, weather and audio.

## Development resources already available

- Supabase Pro.
- GitHub Team.
- 800+ internal monster assets.
- Planned high-capacity ChatGPT access.
- Planned Claude 5x access.

Do not double-budget these as new requirements; track only incremental and usage costs.
