# Mythic 2.0 — W5 Preimplementation Effect Primitive and Item Grammar

**Status:** LOCKED semantic blueprint; numeric point costs remain tunable

## Objective

Create one deterministic vocabulary capable of expressing weapons, powers, monster abilities, environmental Stunts, conditions and AI-proposed unique items without arbitrary runtime code generation.

> **Content composes approved mechanics; content does not invent executable rules.**

## Primitive families

**Targeting:** self, single actor/object, hex, line, cone, radius, chain, adjacent set, selected allies/enemies, tagged targets.

**Accuracy/checks:** attack vs Defense/AC, ability check vs DC, saving throw, contested check, automatic effect when prerequisite is satisfied.

**Damage/healing:** dice package, flat bounded modifier, damage family/tag, armor/barrier interaction, resistance/vulnerability interaction, healing/recovery type, structure/object damage.

**Spatial:** move, forced move, pull/push, teleport where fiction permits, knockdown, elevation change, difficult terrain creation/removal, LOS blocker creation/removal, occupy/deny hex, swap positions.

**Economy:** AP cost/refund, Reaction consume/grant, Exertion gain/recovery, resource spend/gain, charge/recharge, cooldown/once-per-X.

**Conditions:** apply/remove, duration, save/end, stacking, immunity/resistance tags, bounded event triggers.

**Defensive:** Defense modifier, cover, guard/intercept, reduction, barrier, resistance, scoped immunity, reroll/Advantage/Disadvantage, reaction counter.

**Morale:** morale damage/recovery, Shaken/Breaking/Routed modifiers, surrender/flee threshold, fear/awe tags, command/aura effects.

**Information:** inspect/identify, reveal known property, mark target, improve knowledge certainty, expose weakness, track/locate within knowledge limits.

**World/systemic:** damage/repair object, ignite/extinguish, wet/dry/freeze/electrify where material rules permit, lock/unlock/open/close, transfer custody, persistent surface/hazard from causal inputs, noise/light/smoke, route passability changes.

## Trigger grammar

Effects can trigger on bounded events such as action start/finish, hit/miss/critical, damage taken/dealt, kill/down/morale break, movement/engagement break, terrain entry/exit, Reaction use, resource threshold, once-per-round/encounter/day, or specified tagged events.

No general arbitrary expression evaluator is exposed to generated content.

## Requirement grammar

Actions/items may require equipped item family, minimum ability/proficiency, target tag, distance/range, LOS, terrain/material state, free hand, AP/resource/Reaction, actor state, Power Tier, knowledge/identified state, or faction/oath/Mantle status.

## Effect budget model

Every package receives deterministic budget cost based on magnitude, reliability, action-economy efficiency, range/area, frequency, stacking, control, survivability and drawback. AI cannot exceed the provided budget.

## Drawbacks

Approved drawbacks include increased AP/Exertion, resource cost, limited charges, conditional activation, self-condition, reduced defense, restricted target, oath/faction consequence, instability, durability loss, collateral hazard and recovery requirement.

## Item identity model

A durable item separates stable ID, base family, physical material/condition, mechanical package, provenance/history, ownership/custody, visual recipe, unique Name/title, imprint/upgrade history and legal/faction/mythic tags.

## Unique-item generation constraints

AI may select primitive IDs and propose flavor/provenance. It may not invent unknown primitive IDs or raw coefficients outside allowed ranges.

Validator rejects unknown primitives, illegal combinations, budget overflow, Power Tier violation, circular triggers, infinite resource/AP loops, impossible asset requirements, duplicate unique identity and mechanics contradicting causal source events.

## Loop/exploit validation

Static validation searches for obvious cycles such as `spend 1 AP -> gain 2 AP -> repeat`. Monte Carlo simulation supplements static checks.

## Exit

Before implementation, produce versioned primitive IDs, requirement/trigger schema, budget metadata shape, compatibility rules, sample standard weapons/powers/environmental Stunts and at least 50 generated unique-item fixtures that validate without bespoke code.
