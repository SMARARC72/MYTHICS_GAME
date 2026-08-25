# Mythic 2.0 — FP-10 AI Unit Economics and Operating Model

**Status:** LOCKED economic guardrails; external model pricing must be refreshed before launch

## 1. Key distinction

Development subscriptions and runtime API costs are separate.

Already available/planned for development: high-capacity ChatGPT/Codex access, Claude 5x, GitHub Team and Supabase Pro. These accelerate development but do **not** make production OpenAI/Anthropic API inference free.

## 2. Economic design principle

Spend model tokens only where semantic/generative intelligence adds material player value.

Do **not** use LLM inference for dice, combat math, enemy tactical turns, pathfinding/LOS, inventory/equipment math, prices/economy formulas, aging, inheritance mechanics, project timers, initiative, ordinary route changes or routine causal propagation.

Every deterministic system improves both game quality and COGS.

## 3. Pricing reference

Current public API prices are volatile/promotional and must be refreshed before implementation/launch. Planning examples recorded on 2026-08-24 included low-cost models around sub-dollar to low-single-digit dollars per million tokens and frontier models materially higher. **Do not hard-code business viability to temporary promotional rates.**

## 4. Runtime task classes

- **Tier 0 — no model:** target 80%+ of operations; standard combat, movement, transactions, simulation math, normal schedules, rules/state updates.
- **Tier 1 — lightweight semantic:** classification, grounding/disambiguation, short extraction/ranking and routine short dialogue where quality permits.
- **Tier 2 — standard narrative/reasoning:** meaningful dialogue, scene narration, complex action proposals, local actor plans, bounded generation proposals.
- **Tier 3 — frontier escalation:** rare high-impact ambiguous intent, major political/faction planning, difficult continuity and significant world-generation proposals. Always require reason code/budget.

## 5. Target runtime COGS

Initial design target: **$0.05–$0.15 AI spend per active player-hour**.

- soft warning: >$0.15/hour sustained;
- mandatory economic review: >$0.25/hour sustained.

These are targets to validate with real prompts, not guaranteed billing.

## 6. Context discipline

Never resend the full campaign transcript. Build task-specific context from current projection, relevant canonical facts, actor knowledge, selected memories, recent events, retrieved lore and required action/rule schemas.

Use cacheable prefixes/provider prompt caching where economical.

## 7. Narrative verbosity

Concise prose is an economic and UX feature. Routine outcomes should generally use tens to low hundreds of output tokens; longer writing is reserved for genuinely important scenes.

## 8. Background simulation

Offline campaigns do not continuously consume AI. Ledger Time drives simulation. Use models during catch-up only for high-value actor plans, culturally coherent materialization/naming and significant summaries; demographics/economy/ownership remain deterministic.

Use discounted/batch processing for non-blocking work when safe/economical.

## 9. Multi-provider routing

Keep OpenAI/Anthropic behind provider-neutral capability adapters. Route based on task, structured-output reliability, latency, context/caching, price, rate limits, quality benchmarks and provider health.

Provider identity cannot affect committed mechanics/history.

## 10. Subscription implications

ChatGPT/Codex and Claude subscription capacity is a **development acceleration budget** for coding, review, planning, tests, asset metadata and authoring. It is not counted as runtime player API entitlement unless the provider explicitly offers commercially valid API credits.

## 11. One-time purchase risk

A one-time Steam purchase plus unlimited lifetime cloud inference is not assumed sustainable. Illustratively, even $0.10/hour becomes $10 at 100 hours and $30 at 300 hours before hosting/platform/support/taxes.

Do not promise unlimited cloud inference until measured lifetime COGS supports it.

## 12. Monetization seams to preserve

Architecture should be able to support an included AI allowance, optional/required online subscription, future local/cloud hybrid, advanced BYO-key mode or premium higher-intelligence cloud modes. **Do not lock consumer pricing before vertical-slice cost/hour and usage distribution are measured.**

## 13. Cost telemetry

Every AI call records task class, provider/model/version, input/cached/output tokens, cost, latency, cache hit, fallback/escalation and quality/error outcome.

Dashboards must expose cost/player-hour, cost/session, cost by feature/task, percentage of operations using models, escalation rate and cached-input ratio.

## 14. Non-AI infrastructure

Existing Supabase Pro covers the database baseline. Add only modest always-on API/worker hosting initially and scale from measured concurrency. Avoid premature infrastructure purchases.

## 15. Asset impact

The existing 800+ internal monsters materially reduce creature acquisition cost but do not eliminate normalization/animation/rework. Early budget should focus on environments, modular humans/portraits, systemic props, world map, UI, VFX and audio.

## 16. Economic gates before pricing

1. Measure a real multi-hour cohort cost/hour.
2. Separate dialogue-heavy and combat-heavy sessions.
3. Measure 95th percentile user cost.
4. Simulate 50/100/300-hour lifetime COGS.
5. Include Steam/platform share, server/support and taxes.
6. Stress-test expiration of promotional model pricing.
7. Choose monetization only after these numbers exist.

## 17. Lock

LOCKED: dev subscriptions separate from production COGS; deterministic-first architecture; provider-neutral routing; Tier 0 dominates; target $0.05–$0.15/hour; mandatory review >$0.25/hour; no default offline AI spend; business model deferred until measured; unlimited one-time cloud AI not assumed viable.

OPEN: final consumer price, allowance/subscription structure, provider mix, exact token budgets and local-model roadmap.

## 18. Acceptance

The vertical slice must report exact AI COGS/player-hour and show that moving work from AI to deterministic systems can reduce spend without making the world feel less intelligent.
