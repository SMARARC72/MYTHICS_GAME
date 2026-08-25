# Mythic 2.0 — W3 Preimplementation Grounded Intent and Dynamic Reward Blueprint

**Status:** LOCKED integration blueprint

## Objective

Define the semantic-AI seams that connect unrestricted player intent and generative rewards to deterministic game systems without granting models canonical authority.

## Intent cascade

1. Local deterministic parser checks common commands/aliases.
2. Context assembler retrieves only player-knowable nearby entities/capabilities.
3. R1 model attempts grounding + action-family classification.
4. If confidence/ambiguity threshold fails, R2 model or player clarification is used.
5. Rules builder converts grounded intent into typed ActionProposal primitives.
6. Server validates AP, capability, geometry, object state, knowledge, risks and costs.
7. Player sees correction/forecast only when materially needed.
8. Commit executes deterministically.
9. Narration receives committed result only.

## Semantic context budget

Combat intent prompts should normally contain compact IDs/descriptors for actor state, visible/known targets, nearby systemic objects, relevant terrain, equipped items/powers, current objective, active conditions/resources and a small rules vocabulary. Never send full campaign history into a combat Stunt call.

## Tactical doctrine parsing

Natural-language orders to allies compile into CommandDoctrine data.

Example: "Keep Ilya alive and don't chase anyone past the bridge."

Possible structured output:
- protect_actor = Ilya;
- pursuit_boundary = bridge edge;
- aggression = normal;
- lethal_force = allowed;
- duration = until revoked/encounter end.

Deterministic ally AI consumes the doctrine thereafter.

## Encounter planner/replanner

TacticalIntentPacket and TacticalReplanProposal may only affect strategic weights/goals and must reference known entities/objectives. They do not emit executable turns.

## Reward pipeline

After relevant events:
1. RewardContextBuilder gathers canonical reward sources and event provenance.
2. Deterministic system computes reward budget and eligible reward channels.
3. Ingenuity evaluator uses committed evidence; AI may provide bounded semantic labels.
4. Existing physical loot is resolved first.
5. Causal upgrade/imprint candidates are evaluated.
6. If a future reward may legitimately be authored, AI generates UniqueItemProposal.
7. Mechanical validator compiles allowed primitives and enforces budget/tier.
8. Asset grammar validator confirms renderability.
9. Server allocates persistent ID and commits item/provenance.

## Ingenuity anti-gaming

Maintain similarity fingerprints for recent Stunts so paraphrased repetition cannot farm novelty. Novelty alone is insufficient; the action must have material causal effect or accepted risk/cost.

## Reward budget separation

Keep separate values for base encounter/objective reward, preservation/salvage delta, patron/faction response budget, artifact/imprint eligibility and ingenuity celebration bonus. AI never controls the total budget.

## Unique mechanical grammar

Define a versioned library of item-effect primitives with point/budget costs and compatibility rules. AI selects and composes from the library; it never produces arbitrary C#/GDScript.

## Asset generation seam

Unique items produce a semantic visual recipe such as item family, material, silhouette family, culture/faction motif, condition, supernatural effect family, palette slots and icon requirements.

Godot assembles from existing reusable assets where possible. Bespoke generated art, if ever permitted for production runtime, is a separate later decision and must never block canonical item creation.

## Failure/fallback

- AI unavailable during free-intent action: player may use standard actions; preserve draft; retry semantic interpretation.
- unique-item generation unavailable: issue deterministic reward or create pending future reward proposal; never lose earned reward.
- narration unavailable: show mechanical result immediately.
- invalid item proposal: repair/retry within bounded count or fall back to deterministic curated item composition.

## Evaluation set

Permanent intent benchmark includes obvious standard actions, multi-object Stunts, ambiguous references, nonexistent objects, impossible capability claims, hidden/unseen targets, companion doctrine, social interruption during combat, capture/nonlethal intent and environmental chain reactions.

Permanent reward benchmark includes intact salvage, destroyed loot, captured boss, creative artifact interaction, repeated exploit attempt, patron-impressed reward, unique item proposal, item imprint and inheritance/loss of unique item.

## Exit

W3 implementation is ready when typed schemas, prompt-context builders, validation logic, fallback behavior, intent/reward benchmark fixtures and cost telemetry fields are specified.
