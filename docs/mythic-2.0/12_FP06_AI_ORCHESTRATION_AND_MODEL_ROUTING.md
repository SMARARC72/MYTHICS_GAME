# Mythic 2.0 — FP-06 AI Orchestration and Model Routing

**Status:** LOCKED responsibility architecture; provider/model selection remains configurable
**Goal:** Use AI where semantic reasoning and authored expression add value while ensuring AI never owns canonical truth, rules, random outcomes, economics or unrestricted world mutation.

## 1. Core rule

AI can **interpret, propose, plan and narrate**.

AI cannot directly commit canonical state.

Every world-changing AI output must pass through typed validation and an authoritative service.

## 2. Approved AI responsibilities

- free-intent parsing;
- entity/reference grounding assistance;
- ambiguity detection;
- typed action-proposal construction;
- NPC dialogue;
- high-level autonomous actor planning;
- culturally coherent names/descriptions;
- bounded settlement/character/business generation proposals;
- narration of committed outcomes;
- player-known history summaries;
- memory salience proposals;
- moderation/safety classification where required.

## 3. Prohibited AI authority

AI is never sole authority for dice/randomness, HP, inventory quantities, ownership, life/death, path legality, LOS/range, prices/economics, aging dates, inheritance execution, XP/levels, resource spending, object existence, hidden-knowledge visibility, canonical event ordering, topology or persistent IDs.

## 4. Intent pipeline

`player text -> bounded context -> interpretation -> entity grounding -> ambiguity check -> typed action proposal -> deterministic rules/simulation validation -> optional player correction -> commit -> authoritative resolution -> event write -> AI narration`

Narration receives only the canonical result and knowledge-safe facts it may reveal.

## 5. Grounding

The model receives an allowlisted projection of relevant entities, never unrestricted secret world state. Machine-relevant grounding output references stable IDs.

If a player references something unavailable:
- clarify if multiple plausible grounded matches exist;
- reject if it does not exist or is not perceivable/knowable;
- never synthesize a convenient present-tense object.

## 6. NPC dialogue

Dialogue context is limited to NPC identity/personality, goals, relationships, known memories/beliefs, scene facts and permitted cultural context. Global hidden truth cannot bleed into character knowledge.

## 7. Autonomous planning

Major actors get periodic/planned reasoning windows, not continuous token-burning consciousness. Typed plan proposals include goal, intended actions/projects, target entities, resources, time horizon and contingencies based only on allowed knowledge. Simulation validates feasibility/cost before commitment.

## 8. World generation

AI-generated expansion is proposal-driven. For example, if a faction causally decides to found a town, AI may propose name, cultural details, district purposes, landmark concepts and candidate leaders consistent with current state.

Deterministic systems decide valid site, resources, road connectivity, population source, construction time, IDs, semantic asset grammar and canonical creation events.

## 9. Narration

Narration is a projection of resolved events, never a second resolution pass.

Default style is concise, concrete, sensory, characterful and mechanically accurate. Avoid verbose exposition or repeating obvious UI state. Major prose beats are deliberate exceptions.

## 10. Router classes

Use provider-neutral capability classes:

- **R0 — deterministic/no AI:** rules, combat, economics, topology, aging, inventory/accounting.
- **R1 — inexpensive/light model:** classification, straightforward grounding, summaries, routine dialogue.
- **R2 — standard reasoning model:** ambiguous intent, important dialogue, memory synthesis, moderate actor planning.
- **R3 — frontier reasoning model:** rare high-impact planning, difficult interpretation, major generation proposals or complex adjudication support.

Every model call records task class, provider, model/version, latency, token counts/cost and reason for escalation.

## 11. Multi-provider strategy

OpenAI and Anthropic can both be used during development/production through provider-neutral adapters. Gameplay rules cannot require one provider.

Support task-specific selection, safe failover, deterministic/offline test doubles, captured AI fixtures and cost/latency telemetry. Provider changes never rewrite committed state.

Development subscriptions are development tools, not production API credits.

## 12. Context strategy

Do not send full campaign history. Assemble bounded context from current projection, relevant entity records, selected memories, current goals, recent events, compact retrieved lore and required rule descriptors.

RAG/semantic retrieval must respect viewpoint/knowledge permissions and is never the sole store of canonical structured truth.

## 13. Memory compression

Raw dialogue transcripts are not permanent memory. Canonical event facts persist structurally; AI may propose salient memory summaries linked to source events. Low-value conversational text expires from active context.

## 14. Structured outputs

Machine-relevant calls use versioned schemas such as `IntentInterpretation`, `EntityGrounding`, `NPCPlanProposal`, `WorldGenerationProposal`, `MemoryProposal` and `NarrationResponse`.

Malformed/schema-invalid output cannot mutate the world.

## 15. Latency doctrine

Routine interactions should feel near-immediate where feasible; important AI responses should normally arrive within a few seconds, with streaming/presentation masking only after the authoritative action state is known. Rare high-impact planning/generation may run asynchronously only when it does not block player action.

Use smaller models, cached lore, parallel retrieval/validation and preplanned actor goals. Routine enemy combat never waits on an LLM.

## 16. Cost doctrine

Track cost per player-hour, action type, NPC interaction, generation event and background planning window. High-cost models require routing reason codes. Deterministic systems should handle the majority of state changes.

Production targets are defined in FP-10.

## 17. Safety / Steam readiness

Live generation requires enforceable safeguards: input/output moderation hooks, prohibited-content rules, user-report references, generation provenance, versioned guardrails and auditable model activity without exposing hidden game truth unnecessarily.

## 18. Failure behavior

- Interpretation failure: bounded retry/fallback or ask for clarification; never guess canonical mutation.
- Narration failure after commit: display structured/mechanical result; narration can retry without replaying action.
- Planner failure: actor retains prior goal/default deterministic behavior until next planning window.
- Provider outage: deterministic gameplay remains functional wherever AI is not semantically required; no provider failure mutates canon.

## 19. Testability

Every AI-mediated feature requires deterministic/captured fixtures, schema validation, grounding tests, hidden-knowledge leak tests, hallucinated-object tests, provider-independent contract tests and cost/latency benchmarks.

Do not store or rely on private model chain-of-thought. Persist validated structured outputs, provenance and canonical events only.

## 20. Exit

Each AI call must have a defined purpose, allowed context, typed output, validation path, authority boundary, fallback, cost tier and test strategy.
