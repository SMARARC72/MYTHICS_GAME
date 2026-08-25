# Mythic 2.0 — Effect Primitive Library v0.1 Locked

**Status:** INITIAL PRIMITIVE LIBRARY EXECUTED AND VALIDATED  
**Date:** 2026-08-25

## Result

The W5 semantic grammar is now a concrete mechanical library with **62 versioned `fx_*` primitives across 12 families**.

The library is broad enough to express the first vertical slice without bespoke runtime code for ordinary weapons, powers, monster abilities, environmental Stunts and AI-proposed unique items, while high-risk canonical actions and actor spawning remain authored/system controlled.

> **Content composes approved mechanics; content does not invent executable rules.**

## Primitive families

### Action economy
`fx_ap.modify`, `fx_reaction.modify`

### Conditions
`fx_condition.apply`, `fx_condition.remove`

### Control
`fx_state.knockdown`, `fx_hex.deny`, `fx_disadvantage.impose`

### Damage
`fx_damage.actor`, `fx_damage.object`

### Defense
`fx_condition.immunity.grant`, `fx_defense.modify`, `fx_cover.modify`, `fx_guard.apply`, `fx_intercept.enable`, `fx_damage_reduction`, `fx_barrier.grant`, `fx_resistance.grant`, `fx_advantage.grant`, `fx_reroll.grant`, `fx_reaction.counter`

### Healing
`fx_heal.actor`

### Information
`fx_knowledge.reveal_property`, `fx_knowledge.identify`, `fx_target.mark`, `fx_weakness.expose`, `fx_tracking.mark`, `fx_knowledge.certainty.modify`

### Morale
`fx_morale.modify`, `fx_surrender_threshold.modify`, `fx_fear.apply`, `fx_awe.apply`, `fx_aura.command`

### Resources
`fx_exertion.modify`, `fx_resource.modify`, `fx_charge.modify`, `fx_cooldown.modify`

### Spatial
`fx_move.self`, `fx_move.forced`, `fx_move.swap`, `fx_move.teleport`, `fx_elevation.change`, `fx_engagement.break`

### Terrain
`fx_terrain.difficult.create`, `fx_terrain.difficult.remove`, `fx_los.blocker.create`, `fx_los.blocker.remove`

### World/systemic
`fx_object.repair`, `fx_material.ignite`, `fx_material.extinguish`, `fx_material.wet`, `fx_material.dry`, `fx_material.freeze`, `fx_material.electrify`, `fx_structure.open_close`, `fx_structure.lock_unlock`, `fx_custody.transfer`, `fx_hazard.create`, `fx_noise.emit`, `fx_light.emit`, `fx_smoke.create`, `fx_route.passability.modify`, `fx_actor.spawn_template`

## Every primitive now defines

- strict typed parameter schema;
- valid target-selector scopes;
- valid trigger classes and frequency gates;
- valid source kinds;
- Power Tier floor/ceiling;
- instantaneous/encounter/world persistence class;
- provisional deterministic budget metadata;
- generated-unique-item eligibility;
- drawback eligibility;
- anti-loop flags and authority restrictions.

## Critical restrictions

1. **No generated executable code.** AI may choose approved primitive IDs and legal parameters only.
2. **Server computes authoritative budget.** AI proposals cannot decide their own mechanical cost.
3. **Generated unique items use an explicit allowlist.**
4. `fx_custody.transfer`, `fx_route.passability.modify`, and `fx_actor.spawn_template` are deliberately unavailable as generated unique-item traits in v0.1.
5. Positive AP/Reaction/resource/charge/cooldown interactions are loop-sensitive and receive stricter static validation.
6. Drawbacks use their own allowlist; an offensive benefit cannot simply be relabeled a drawback to buy budget.
7. World-persistent primitives still require causal inputs, authority and canonical commit.
8. Power Tier ceilings are validated per primitive.

## Budget model

The initial budget model uses deterministic base points plus declarative parameter drivers, trigger/frequency multipliers and target-scope multipliers. These values are **tuning seeds**, not shipping balance.

Drawback credit is provisionally capped at a fraction of positive-effect budget so generated items cannot stack meaningless penalties to purchase disproportionate power.

Budget tuning is expected to change during W2 headless simulation without changing primitive identity or legality.

## Validation completed

- 62 primitive definitions: **PASS**
- JSON Schema 2020-12 primitive/effect schemas: **PASS**
- trigger grammar: **PASS**
- requirement grammar: **PASS**
- target-selector grammar: **PASS**
- compatibility/authority rules: **PASS**
- 6 sample weapons: **PASS**
- 5 sample powers: **PASS**
- 8 environmental Stunts: **PASS**
- 50 generated unique-item compositions: **PASS**
- 10 malformed/exploit fixtures: **all rejected as expected**

**W5 preimplementation exit gate: PASS.**

## Full machine-readable source

The exploded validated package is retained in the ChatGPT Library at:

`/Mythic 2.0/Effect Primitive Catalog v0.1/`

It contains the full effect catalog, budget policy, compatibility rules, strict effect schemas, sample content, 50 positive unique-item fixtures, 10 negative fixtures and validation report.

Before production DTO/code generation, the exploded machine-readable package should be mirrored into GitHub alongside the Mythic 2.0 contract source.

## Next dependency

The next optimal mechanical work is the **Condition Catalog v0.1 + Tactical Content Matrix v0.1** using these primitive IDs, while the 800+ monster assets are normalized against tactical roles and the same primitive vocabulary rather than one-off ability code.