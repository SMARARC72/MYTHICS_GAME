# Mythic 2.0 — W6 Preimplementation World Simulation Scheduler

**Status:** LOCKED scheduling blueprint

## Objective

Specify how a persistent world containing people, households, businesses, roads, factions, projects, aging and long-term consequences advances without simulating every entity every second.

## Fidelity tiers

**S0 — Active tactical scene:** full spatial/object/actor mechanics; seconds/rounds.

**S1 — Active locality:** named NPCs, households, businesses, local projects, local prices/supplies, law/faction activity; minutes/hours/days.

**S2 — Regional simulation:** trade, migration, infrastructure, faction movement, demographic/economic aggregates, major actors; daily/weekly batches.

**S3 — Background world:** aggregated population/resources, slow projects, broad faction strategy, births/deaths/aging cohorts and probabilistic event candidates; weekly/monthly/yearly batches.

Entities can promote/demote tiers without losing identity/history.

## Scheduler inputs

Ledger Time delta, player proximity/relevance, named-entity salience, active projects, unresolved fronts, faction importance, causal dependencies, scheduled obligations/events, pending AI plan windows and simulation budget.

## Event queues

Maintain deterministic scheduled queues for project milestones, travel arrivals, material age-stage transitions, contract/debt deadlines, office/term changes, production/restock cycles, healing/recovery, construction/repair, represented pregnancy/birth/family events, faction plans, weather/season changes and infrastructure maintenance/failure candidates.

## Causal propagation budget

Every initiating event gets a propagation score based on magnitude, proximity, named-entity involvement, economic/social connectivity, faction significance, player relevance and time horizon.

Downstream effects terminate when significance drops below threshold or budget is exhausted. Aggregate changes can absorb many low-significance effects.

## Catch-up simulation

When a region has not been active for years:
1. identify elapsed Ledger Time;
2. replay mandatory scheduled events;
3. update demographic aggregates;
4. update economic/resource flows;
5. advance infrastructure/projects;
6. execute major actor/faction plan windows;
7. materialize only consequential individual events;
8. create a compact canonical change bundle;
9. project only what the player can know.

Do not simulate every missed day individually.

## Aging / generations

Person records use birth date/time and derive age from Ledger Time. Age-stage changes can trigger capability, portrait/asset recipe, occupation, education/training and relationship changes through validated rules.

Children become autonomous adults through actual elapsed time and life events, not retroactive replacement.

## Business continuity

Business, office and property entities outlive current holders. Death/removal of an owner triggers succession/closure/transfer workflows rather than deleting the institution automatically.

## Infrastructure topology

Roads, bridges, gates and routes are canonical edges/features. Damage/construction changes pathing/trade/travel projections and can create regional economic consequences.

## AI planning windows

Major autonomous actors receive bounded planning windows when a prior plan expires/fails, a major event changes assumptions, a scheduled strategic review occurs, or player action materially affects goals/resources.

AI outputs proposal goals/projects; deterministic systems validate feasibility and schedule work.

## Determinism / replay

World-simulation randomness uses explicit seeds and versioned tuning. AI proposal text itself need not replay identically; the validated committed proposal/event is stored so canonical replay is deterministic.

## Exit

Before implementation, define scheduler cadence tables, promotion/demotion rules, propagation-score inputs, catch-up bundle schema, scheduled-event types, project advancement interface and major-actor planning trigger rules.
