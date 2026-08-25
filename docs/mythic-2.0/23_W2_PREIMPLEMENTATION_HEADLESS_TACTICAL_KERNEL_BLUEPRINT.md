# Mythic 2.0 — W2 Preimplementation Headless Tactical Kernel Blueprint

**Status:** LOCKED build blueprint; numeric tuning remains experimental

## Objective

Before polished Godot combat, prove the combat game headlessly through deterministic simulation and automated battles.

## Kernel responsibilities

The headless kernel owns:
- hex topology and distance;
- movement/path cost;
- collision/occupancy;
- LOS and cover;
- elevation tiers;
- initiative order;
- AP and Reaction budgets;
- attack/check/save resolution;
- Advantage/Disadvantage;
- damage/effect pipeline;
- conditions;
- Exertion;
- Morale;
- injuries/downed/death;
- objective state;
- item/weapon techniques;
- environmental object actions;
- deterministic enemy utility AI;
- deterministic replay.

It owns no presentation, animation, narration or LLM calls.

## Utility AI architecture

Each combatant evaluates legal actions using bounded utility functions composed from objective value, expected damage/effect, positional value, danger/exposure, ally support, target priority, morale, resource preservation, role weights, tactical doctrine, retreat/surrender values and environment opportunities.

Tie-breaking uses seeded deterministic randomness where desirable.

## Combat data-driven design

Weapon, monster, perk and power mechanics should primarily be declarative data using typed effect primitives rather than bespoke procedural code for every content entry. Custom code is reserved for mechanics that cannot be expressed safely through the primitive system.

## Simulation harness

Run automated batches across symmetric fights, melee vs ranged, armor classes, terrain types, elevation, chokepoints, morale pressure, retreat, objective play, mixed monster roles, player build archetypes and environmental-object availability.

Capture win rate, round count, AP use, movement, action diversity, damage, Exertion, morale breaks, retreat frequency, injuries, dominant actions and dead-turn frequency.

## Balance gates

Flag when:
- one weapon/build dominates broad encounter types;
- movement contributes little to outcome;
- cover/elevation are usually ignored;
- Exertion never changes decisions or creates too many dead turns;
- morale almost never matters or decides too often;
- enemy roles converge to the same behavior;
- normal fights exceed pacing targets;
- initiative creates excessive snowballing;
- player alpha-strike dominates;
- retreat is almost never rational;
- environmental actions are consistently inferior to basic attacks.

## AI-disabled fun benchmark

The first playable Godot combat prototype should not be built until headless test scenarios demonstrate meaningful tactical variation.

Required reference encounters:
1. open-ground skirmish;
2. chokepoint defense;
3. elevated ranged threat;
4. rescue/protect objective;
5. retreat from superior force;
6. morale-fragile enemy group;
7. durable elite with supporting units;
8. environmental-object-heavy encounter.

## Free-intent compatibility seam

The kernel accepts a validated ActionProposal composed of existing effect/action primitives. It does not care whether the proposal came from a button, scripted ability, AI-grounded free text or developer fixture.

This seam lets AI expand agency without becoming the rules engine.

## Required deterministic tests

- same seed/input -> identical replay;
- no screen-coordinate dependence;
- no model/provider dependence;
- no hidden actor selected by player-facing targeting;
- illegal path rejected;
- stale action basis rejected;
- AP/resource overspend rejected;
- reaction window resolves in deterministic order;
- object destruction changes subsequent LOS/pathing;
- death/injury persists to post-encounter output.

## Performance target

Headless combat should simulate substantially faster than real time so thousands of encounters can be run during balancing/CI without model calls.

## Exit

W2 implementation is ready only when the combat primitive catalog, utility inputs, simulation scenarios, metrics schema, deterministic test matrix and AI-free ActionProposal seam are all specified.
