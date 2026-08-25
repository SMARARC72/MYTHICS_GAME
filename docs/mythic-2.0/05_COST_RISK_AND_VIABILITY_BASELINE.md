# Mythic 2.0 — Cost, Risk and Viability Baseline

## Viability verdict

**GO to preproduction and vertical-slice validation.**  
**NO-GO to unrestricted full-scope production today.**

The product is technically viable and commercially differentiable, but its full vision has extreme scope risk. Validate the business case through a polished vertical slice before committing to broad content production.

## Existing cost advantages

Already covered or planned:

- 800+ monster assets;
- Supabase Pro;
- GitHub Team;
- high-capacity ChatGPT access;
- Claude 5x access.

These materially lower immediate tooling and creature-art costs.

## Incremental development cost categories

### Engine/tooling

- Godot: no engine license/royalty cost.
- Blender/Krita/GIMP-class open-source tooling: no license cost.
- Optional 2D/pixel tools: low one-time cost.
- Steam Direct: low one-time per-app fee before release.

### Infrastructure

Supabase Pro is already available. Scaling, backups, compute, storage and bandwidth remain variable usage costs.

### AI runtime

This is the most important variable operating cost. Use deterministic simulation wherever language reasoning is unnecessary; retrieve only relevant context; route models by task difficulty; cache summaries/memories; and avoid LLM calls for ordinary background simulation.

A monetization model must eventually account for cloud inference if the shipped game requires online AI for indefinite play.

### Art

The monster library reduces one large category but does not solve environmental and systemic visual breadth. Prototype with internal/open licensed assets; concentrate custom vertical-slice work on a coherent environment family, world/tactical tiles, systemic objects, humanoid character family, bespoke UI, VFX and key locations.

Do not purchase a huge one-off catalog before the semantic asset grammar is locked.

## Top risks

1. **Scope explosion — EXTREME.** Mitigate with vertical slicing and strict non-goals.
2. **Causal simulation explosion — EXTREME.** Mitigate with adaptive fidelity and causal-significance budgets.
3. **AI operating cost — HIGH.** Mitigate with deterministic systems, routing, caching, usage telemetry and provider abstraction.
4. **AI hallucination/world incoherence — HIGH.** Mitigate with grounded entity references, generation proposals, server validation, invariants and event provenance.
5. **AI latency — HIGH.** Mitigate with fast models for common actions, prefetch, streaming and animation during resolution.
6. **Art incoherence — HIGH.** Mitigate with one art bible and semantic asset grammar.
7. **Generational QA complexity — HIGH.** Architect now; prove limited succession/death in early releases; expand later.
8. **AI novelty without game quality — HIGH.** Combat/progression/exploration must stand on their own.
9. **Online dependency — MEDIUM/HIGH.** Be transparent and build resilient reconnect/save behavior.

## Validation gates

Do not scale production until a vertical slice proves that players understand the game without explanation; grounded free actions feel materially different from conventional CRPG choices; combat is fun without AI novelty; the world visibly remembers consequences; narration remains concise; latency and model cost are manageable; and procedural asset composition remains visually coherent.
