# Mythic 2.0 — W8 Preimplementation Vertical Slice QA and Balance Matrix

**Status:** LOCKED proof matrix

## Product proof

The first native slice must prove Mythic as a game, not merely prove architecture.

Target: 30–45 minute Glass Harbor / Drowned Archive experience with exploration, social interaction, free intent, tactical combat, reward/progression and visible persistent consequence.

## Combat proof scenarios

At minimum test:
1. standard melee/ranged mixed fight;
2. cover/elevation relevance;
3. environmental object Stunt;
4. non-kill objective;
5. retreat/surrender path;
6. morale break;
7. injury persistence;
8. AI-free enemy competence;
9. one free-text squad doctrine;
10. one material event-triggered enemy replan in a major encounter.

## Reward proof scenarios

1. normal physical loot;
2. intact-vs-damaged salvage difference;
3. creative action improves a causal reward channel;
4. unique item generated within budget grammar;
5. existing item receives causal imprint;
6. repeated stunt fails to farm quality;
7. unique item persists through save/reload and ownership transfer.

## World proof scenarios

1. NPC relationship changes and persists;
2. business/property/entity survives owner change in fixture simulation;
3. route/object destruction changes movement/topology;
4. Ledger Time advances and scheduled event fires;
5. hidden fact remains hidden after reconnect;
6. player death/successor fixture retains same campaign world.

## AI proof scenarios

Measure grounding accuracy, nonexistent-object rejection, ambiguity clarification, hidden-knowledge leak rate, malformed proposal rejection, standard-action parser avoidance of unnecessary LLM, planner/replan call count, provider-outage behavior, per-call latency and per-encounter cost.

## Quantitative combat targets

Initial tuning targets, subject to playtest:
- normal encounter median 4–8 rounds;
- normal encounter median 5–15 minutes;
- dead turns <2% of actor turns;
- movement materially affects a majority of reference fights;
- morale changes occur in a meaningful subset but do not trivialize most fights;
- environmental action chosen at a competitive rate when contextually valuable;
- no broad weapon/build >60–65% win rate across intentionally mixed equal-budget benchmark suite without a clear matchup reason.

## AI cost targets

- no-free-intent ordinary combat: $0 model cost permitted/expected;
- typical combat semantic cost target: low cents or below;
- major encounter model spend target: < $0.10 under standard routing;
- full vertical-slice AI cost logged by task class;
- provider subscriptions are not counted as runtime API credit.

## Playtest gates

External testers should independently report that combat is enjoyable without AI novelty, actions are understandable, free text feels like expanded agency rather than chat, rewards feel earned and causally connected, world changes feel persistent, prose is concise/understandable and Hero/build progression creates anticipation for another encounter.

## Failure gates

Do not broaden content if combat becomes repetitive, AI calls interrupt tactical pacing, free text frequently invents/references nonexistent state, unique loot feels arbitrary/overpowered, players cannot understand why a creative reward improved, headless balance differs materially from presented Godot result, reconnect/replay changes outcomes, hidden knowledge leaks, or AI cost exceeds target without clear value.

## Exit

W8 is complete when every proof case has an automated or human test owner, evidence artifact, measurable threshold and blocking/nonblocking classification.
