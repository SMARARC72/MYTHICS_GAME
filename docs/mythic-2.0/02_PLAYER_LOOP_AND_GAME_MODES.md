# Mythic 2.0 — Player Loop and Game Modes

## Core minute-to-minute loop

1. **Observe** — inspect a real place, people, objects, threats and opportunities.
2. **Decide** — use a conventional action or state a free-form intent.
3. **Ground** — resolve referenced entities and capabilities against the player's current knowledge and world state.
4. **Resolve** — deterministic rules establish success, failure, cost, time and consequences.
5. **Show** — Godot animates the canonical result; dice/mechanics appear at the right dramatic level.
6. **React** — NPCs, factions and environment respond according to goals, knowledge and rules.
7. **Persist** — the event enters world history.
8. **Grow** — character/world progression creates new possibilities and new problems.

## Primary game modes

### WORLD
Travel, exploration, geography, strategic information, evolving settlements and routes. The world layer shows tiles/regions, settlements, routes, weather/time, faction territory, fog/discovery, travel events and visible persistent change.

### SCENE
Location-level exploration, social interaction, investigation, narrative and environmental agency. Scenes combine real placed systemic objects, NPCs, concise narrative, free-form input, contextual actions, checks and consequences.

### TACTICAL ENCOUNTER
Turn-based 2D tactical play with discrete positioning, terrain, movement cost, LOS, cover, initiative/action economy, hazards, AoE, conditions and environmental objects. Standard actions are conveniences; they do not define the legal action space.

Example: `I push the shelf over onto the cultist and block the doorway.` The system must identify the actual shelf, direction, target tiles, weight, strength requirements, occupancy/collision, action cost and possible consequences. If the shelf is not there, the action cannot use it.

### HERO
Character identity and buildcraft: portrait/appearance, progression, abilities, skills, HP/defense, powers, equipment, injuries/conditions, relationships/reputation and later lineage/legacy.

### WORLD RECORD
Journal, leads/quests, factions, codex, lineage and history are supporting views rather than equal-weight dashboard modules.

## Tutorial principle

Teach through play: move/inspect, interact, roll, reveal Hero mechanics when relevant, demonstrate social freedom, show a persistent consequence, fight one tactical encounter, attempt a creative environmental action, gain progression, then return to the world and see that it changed.
