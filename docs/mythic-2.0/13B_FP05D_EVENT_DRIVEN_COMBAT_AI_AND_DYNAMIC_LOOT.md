# Mythic 2.0 — FP-05D Event-Driven Combat AI and Dynamic Loot

**Status:** LOCKED responsibility architecture; model/provider and numeric reward tuning remain configurable

## 1. Design objective

Use AI in combat only where semantic interpretation, strategic reframing, authored identity, or generative reward design adds meaningful value. The hot tactical loop remains deterministic, fast, testable, inexpensive, and fully playable with all LLM calls disabled.

> **AI expands the possibility space. It does not run the turn loop.**

## 2. Runtime combat AI layers

### Layer T0 — deterministic tactical kernel (default)
Handles every ordinary combat turn with no LLM call: legal moves/targets, pathfinding, AP/Reaction use, attack/defense selection, LOS/cover/elevation, utility scoring, morale/retreat/surrender, role behavior, Exertion/resources, objectives, known environmental interactions, and basic ally coordination.

Target: **80–95%+ of combat decisions involve no model inference.**

### Layer T1 — authored tactical profiles
Faction/species/monster behavior is authored or AI-assisted offline, then stored as deterministic data: aggression, preferred range, acceptable risk, target priorities, retreat threshold, formation preference, objective weighting, willingness to sacrifice allies, reaction preferences, environmental affinities, morale traits, and signature-combo priorities.

The 800+ monster asset library maps onto reusable tactical profiles and signature mechanics rather than 800 runtime agents.

### Layer T2 — encounter planning window
At encounter creation, an optional inexpensive model may produce one typed **TacticalIntentPacket** for an important enemy squad, boss, or intelligent faction force. Fields can include strategic objective, protected actor/object, preferred engagement plan, fallback plan, retreat/surrender conditions, target-priority modifiers, known counters, and faction/personality constraints.

The packet only adjusts bounded utility weights and goals. It cannot choose illegal actions, reveal unknown player information, alter stats, create objects, or roll dice. Use this for meaningful encounters, not every wolf pack.

### Layer T3 — event-triggered replanning
A model may be called once when a **material tactical discontinuity** occurs and deterministic behavior cannot adequately express intelligent adaptation, e.g. commander death, transformed objective, newly revealed player power, battlefield-changing Stunt, allegiance change, or boss phase goal change.

The server decides whether the trigger qualifies. The model emits a bounded plan; deterministic utility AI executes later turns.

Default limit: **0–1 runtime replan calls per normal encounter; 0–2 for major/boss encounters.**

## 3. Player free-text in combat

Pipeline:
`text -> cheap semantic parse/grounding -> typed Stunt proposal -> deterministic legality/rule construction -> optional clarification -> commit -> deterministic resolution -> narration`

The model can identify referenced entities and infer intended manipulation. It cannot invent objects, mechanics, success, damage, DC, AP cost, or resulting canonical state.

Straightforward commands should be handled by local/parser templates before an LLM is called. Examples: "focus the archer", "hold this doorway", or "fall back to the stairs".

## 4. Companion and squad command compression

Natural-language tactical orders can create a persistent **CommandDoctrine** for several turns: hold, screen, protect actor, focus target class, conserve resources, withdraw below threshold, aggressive push, avoid collateral damage, capture rather than kill.

One semantic parse can alter deterministic ally behavior for subsequent turns. Do not call a model separately for every companion turn.

## 5. Combat narration and barks

Routine hit/miss text and enemy barks use authored banks, procedural grammar, or cached generation. Model calls are reserved for high-impact Stunts, boss transitions, surrender/negotiation, important deaths, rare signature moments, and post-battle memory-worthy summaries.

## 6. AI call budget per encounter

**Ordinary encounter:** 0 planner calls by default; 0 turn-by-turn calls; 0–2 free-text semantic calls depending on player use; 0–1 post-battle reward/narrative call when warranted.

**Major intelligent encounter:** up to 1 encounter plan; 0–1 material replan; free-intent calls as needed; 1 optional post-battle synthesis/reward call.

**Boss/world-significant encounter:** 1 plan; up to 2 phase/replan events; free-intent calls as needed; 1 high-value post-battle consequence/reward synthesis.

Never require each combatant or turn to invoke a model.

## 7. Dynamic reward philosophy

> **Creative actions can improve reward outcomes only through a causal reward channel.**

Examples: preserve a valuable object -> better salvage; defeat a creature without damaging armor -> intact equipment; manipulate an artifact under unusual conditions -> causal imprint candidate; impress a patron -> better future reward; capture a target -> bounty/intelligence/access; discover a grounded hidden route -> pre-existing cache; unusual material interaction -> recovered material gains validated altered state.

The system may not invent a chest that "was always there" after the fact merely because the player was clever.

## 8. Ingenuity and reward significance

Each committed action may contribute to an encounter-level **IngenuityRecord** using deterministic evidence plus optional semantic classification.

Candidate dimensions: novelty relative to recent actions, causal leverage, risk accepted, resource/cost commitment, objective impact, environmental/systemic combination count, non-repetition, preservation/capture value, and world significance.

AI may help classify semantic novelty or intent, but the server computes the final bounded score from committed evidence. Ingenuity is primarily a reward-generation input and telemetry signal, not another constant HUD currency.

## 9. Reward channels

Creative play may affect rewards through bounded channels:
1. Preservation quality.
2. Salvage access.
3. Patron/faction response.
4. Information reward.
5. Artifact imprint.
6. Crafting opportunity.
7. Unique item generation where a new item is causally created or bestowed.
8. Reputation/Name/Epithet value.

## 10. Unique Item Forge

When the world legitimately creates a new unique reward, AI may author a **UniqueItemProposal** from a bounded mechanical grammar.

Input includes source events, creator/patron/faction, materials/components, location/culture, threat/reward budget, Power Tier ceiling, player-known history, item family, allowed mechanical primitives, asset/icon grammar, and prohibited tags/effects.

AI may propose name/title, appearance recipe, provenance text, mechanical trait package from allowed primitives, drawback/condition, upgrade hook, and faction implications.

Server validation owns item ID, rarity/reward budget, effect legality, numeric values, stacking, Power Tier, ownership/custody, asset availability, uniqueness, and canonical commit.

## 11. Mechanical item grammar

Models never generate arbitrary executable scripts. Unique mechanics compose from typed primitives such as damage/type conversion, AP adjustment, range/reach, reaction unlock, condition application/resistance, cover/terrain interaction, morale effect, resource generation/spend, Exertion interaction, target tags, once-per-X triggers, charge/recharge, movement/displacement, save/check modifiers, Stunt permission, world/social tags, crafting sockets, and explicit drawbacks.

## 12. Artifact imprinting

Exceptional causal events can mutate existing items instead of always generating replacements. If canonical materials, event magnitude, and metaphysical rules support it, the server opens an **ImprintCandidate**. AI may propose a name/lore/trait expression; deterministic rules validate the transformation.

This enables "my weapon became legendary because of what I did" without arbitrary loot tables.

## 13. Anti-exploit rules

- Repeating the same free-text trick rapidly loses Ingenuity value.
- Cosmetic wording differences do not count as novelty.
- AI cannot raise the mechanical reward budget by itself.
- Cleverness cannot create value from nonexistent materials or actors.
- Reward upgrades must cite causal source events.
- Player build context may influence usefulness, but generated rewards should not always be perfect best-in-slot items.
- Unique items retain stable identity if lost, stolen, sold, inherited, or destroyed.

## 14. Cost routing

- **R0:** no AI for tactical turns/resolution.
- **R1:** inexpensive model for semantic classification, grounding assistance, command parsing, concise reward text.
- **R2:** standard model for difficult Stunts, important encounter planning/replanning, unique-item proposals.
- **R3:** rare frontier call only for world-significant artifact/mythic generation or genuinely ambiguous high-impact adjudication support.

Prompt caching should be used for stable rules/world schemas where economical.

## 15. Cost target

A combat encounter with no free-text novelty should be capable of costing **$0 in model inference**.

A typical encounter using one or two semantic/free-intent calls should remain in the low-cent or sub-cent range depending on model/context size.

A major encounter with planner + replan + reward generation should target **well under $0.10 in model inference** under normal routing.

These are engineering targets, not guaranteed provider prices; telemetry determines final routing.

## 16. Required telemetry

Per encounter: deterministic turn count; AI call count by class; model/provider; input/output/cached tokens; latency; cost; free-text usage; Stunt result; Ingenuity dimensions; reward channel; unique-item generation attempts/acceptance; equipment adoption; repeated-action exploit signals.

## 17. Acceptance gates

Pass only if:
1. ordinary combat remains fully functional during total provider outage;
2. normal enemy turns never require an LLM;
3. a player can issue one natural-language squad doctrine and deterministic allies follow it across later turns;
4. a free-text environmental action is grounded/resolved without invented objects;
5. material tactical changes trigger bounded replanning rather than per-turn reasoning;
6. creative play causally improves at least three reward channels;
7. one validated unique item is generated with stable identity and deterministic mechanics;
8. one existing item acquires a causal gameplay imprint;
9. repeating the same stunt cannot farm infinite reward quality;
10. telemetry proves the per-encounter model budget.

## 18. Lock

**LOCKED:** event-driven/sparse LLM combat use; deterministic hot loop; optional encounter plan packets; bounded event replanning; natural-language doctrine compression; grounded free-intent calls; causal creative-reward channels; server-owned Ingenuity evaluation; schema-bounded unique-item generation; artifact imprinting; anti-farming rules; no arbitrary executable AI item scripts.

**OPEN:** exact Ingenuity formula, model thresholds, reward-budget coefficients, rarity labels, prompt structure and cache strategy.
