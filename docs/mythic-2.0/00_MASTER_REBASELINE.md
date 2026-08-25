# Mythic 2.0 — Master Rebaseline

## Decision

Restart **implementation**, not the project's intellectual foundation.

### Greenfield

- Godot native client.
- Tactical/world-map presentation.
- New player UX and tutorial.
- New simulation orchestration appropriate to long-lived worlds.
- New asset grammar and procedural composition pipeline.
- New API boundary between native client and authoritative server.

### Preserve and audit

- World Constitution and canon.
- Ledger Time.
- Deterministic resolution philosophy.
- Authoritative server state.
- Append-only/event-ledger concepts.
- Idempotency and replay.
- Viewpoint-safe knowledge.
- RAG/content architecture.
- Character progression, morality, Fate/Mantle/Stunt concepts where still justified.
- Existing internal monsters and other reusable assets.
- Prior requirements and contracts as source material, not automatic authority.

### Supersede/remove

- Browser-first target.
- React/Next player client as production game client.
- Dashboard/CRM information architecture.
- Chatbot presentation.
- Comic-strip/product workflow.
- Any UI or copy that exposes internal system terminology as ordinary gameplay.

## Product category

Mythic 2.0 is a **native systemic CRPG / living-world RPG** in which AI expands the traditionally finite authored interaction boundary.

It is not an AI Dungeon clone, VTT, AI GM chat window, pure life simulator, procedural-map toy, or conventional CRPG with AI-flavored dialogue.

## Reference synthesis

- **Battle Brothers:** tactical readability, 2D systemic battlefield, map-as-game-space.
- **Vagrus:** illustrated narrative/world presentation, density without losing game identity.
- **5E/d20:** familiar mechanical grammar where it lowers learning cost.
- **AI Dungeon:** frictionless free intent.
- **Immersive sims:** systemic environmental problem solving.
- **Dwarf Fortress / Crusader Kings:** causal continuity and long-horizon social/world change, but with aggressive simulation abstraction.

References are directional, not cloning targets.

## Reality, simulation and AI

**Reality:** authoritative server state describes what currently exists and what is true.

**Simulation:** rules and agents may create new future reality when causally justified: births, deaths, ownership changes, settlement growth, roads, factions, new cities, ruins, marriages, wars, businesses and organizations.

**AI:** may interpret player intent, roleplay actors, reason about goals, propose world actions, generate bounded names/descriptions/content and plan autonomous behavior. AI may **not** contradict committed reality or create a convenient present-tense object/fact merely to satisfy narration.

## Campaign continuity

The campaign/world—not the current protagonist—is the durable game entity. Characters can die, retire, disappear, grow old, have children, establish legacies or be replaced. The player may continue as an heir, protégé, companion, existing NPC or unrelated new character in the same evolved world.

## First commercial milestone

Do not build the ultimate simulation first. Build a polished vertical slice proving:

1. native Godot game feel;
2. explorable 2D location/world representation;
3. real tactical combat;
4. d20/5E-familiar mechanics;
5. grounded unrestricted natural-language action;
6. authoritative environmental interaction;
7. persistent NPC/business/world consequence;
8. death/world continuity foundation;
9. concise engaging narrative/tutorial;
10. acceptable AI latency and cost.
