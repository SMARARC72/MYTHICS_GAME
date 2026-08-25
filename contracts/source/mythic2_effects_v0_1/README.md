# Mythic 2.0 Effect Primitive Catalog v0.1

**Status:** VALIDATED PREIMPLEMENTATION MECHANICAL LIBRARY

This directory indexes the first approved deterministic `fx_*` vocabulary for Mythic 2.0.

## Locked scope

- 62 primitives across 12 families.
- Strict parameter, trigger, target-selector and requirement grammar.
- Power Tier bounds.
- Generated-unique-item and drawback allowlists.
- Provisional deterministic budget metadata.
- Static anti-loop/authority rules.
- 6 sample weapons, 5 sample powers and 8 systemic environmental Stunts validated.
- 50 generated unique-item compositions validate.
- 10 negative exploit/malformed fixtures reject as expected.

## Authority rule

> Content composes approved mechanics; content does not invent executable rules.

Models may propose primitive IDs and typed parameters. They may not author runtime C#/GDScript, decide authoritative mechanical budget, bypass Power Tier ceilings, or directly commit world state.

`fx_custody.transfer`, `fx_route.passability.modify`, and `fx_actor.spawn_template` are not available as generated unique-item traits in v0.1.

Positive AP/Reaction/resource/charge/cooldown mechanics are loop-sensitive and require strict frequency/cap validation.

## Machine-readable source

The complete exploded validated catalog is retained in the Mythic 2.0 Library workspace under `/Mythic 2.0/Effect Primitive Catalog v0.1/` during preimplementation. Mirror the full machine-readable source into this repository before C# DTO/validator generation is authorized.

See `docs/mythic-2.0/38_EFFECT_PRIMITIVE_LIBRARY_V0_1.md` for the locked primitive index and validation record.