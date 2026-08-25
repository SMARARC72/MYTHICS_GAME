# Mythic 2.0 — W10 Preimplementation Model Activity Scheduler

**Status:** LOCKED orchestration blueprint

## Objective

Create one cross-game scheduler that determines when model inference is valuable enough to justify latency/cost, preventing accidental 'LLM everywhere' architecture.

## Activity classes

- `player_intent`
- `npc_dialogue`
- `npc_life_plan`
- `relationship_interpretation`
- `memory_salience`
- `tactical_plan`
- `tactical_replan`
- `economic_plan`
- `faction_plan`
- `political_legal_plan`
- `world_generation`
- `unique_item_generation`
- `rumor_news_projection`
- `history_summary`
- `tutorial_guidance`
- `narration`

Every class has:
- trigger policy;
- minimum significance;
- allowed model tier;
- context assembler;
- schema;
- authority validator;
- fallback;
- cache policy;
- latency target;
- cost ceiling;
- telemetry.

## Priority model

Calls are prioritized by:
1. player blocking;
2. immediate scene relevance;
3. canonical impact potential;
4. named/major actor importance;
5. causal magnitude;
6. deadline in Ledger Time;
7. novelty/ambiguity;
8. cost budget.

Background world calls may queue and batch. Player-blocking intent/dialogue calls receive highest service priority.

## Significance gating

A model call requires a reason code. Examples:
- semantic ambiguity unresolved locally;
- major actor needs new plan;
- previous plan invalidated;
- life milestone reached;
- economic threshold crossed;
- new institution/place causally justified;
- unique reward authorized;
- memory-worthy event requires interpretation;
- player explicitly requests dialogue/action beyond deterministic parser.

No reason code -> no model call.

## Model tiers

R0 deterministic.
R1 light/cheap semantic work.
R2 standard reasoning/planning.
R3 rare high-impact reasoning/generation.

Escalation is explicit and logged.

## Temporal scheduling

Models do not run continuously.

Typical cadence examples:
- tactical turns: none;
- combat replan: event-triggered;
- merchant planning: weekly/monthly or event-triggered depending activity tier;
- household life plan: milestone/event-triggered;
- ruler/faction plan: weekly/monthly/quarterly equivalent or event-triggered;
- background settlement generation: only after deterministic eligibility event;
- child/adolescent development: milestone windows rather than daily simulation.

Exact cadence scales with simulation fidelity tier.

## Context safety

Each activity receives only the actor/viewpoint knowledge required. Global canonical state is never dumped into model context by default.

## Outage behavior

Provider outage cannot stop deterministic combat, markets, aging, routes, inventory or basic NPC schedules. Existing plans and fallback policies remain active.

## Budget governors

Support per-player-hour, per-campaign-day, per-region, per-actor and global production budgets. Background model calls can be deferred if budget is exhausted; player-blocking calls may use reserved budget.

## Evaluation

Measure whether each activity class:
- improves player-observable quality;
- creates materially different valid behavior;
- stays within latency/cost target;
- avoids hidden knowledge leakage;
- produces valid structured output;
- has a graceful deterministic fallback.

Disable any model activity class whose incremental value is not demonstrated.
