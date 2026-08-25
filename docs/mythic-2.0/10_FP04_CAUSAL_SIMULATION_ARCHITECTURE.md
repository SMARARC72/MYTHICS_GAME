# Mythic 2.0 — FP-04 Causal Simulation Architecture

**Status:** LOCKED architecture target
**Purpose:** Define how actions cascade through a persistent world without either becoming decorative narrative or exploding into an impossible full-universe simulation.

## 1. Core principle

Every meaningful canonical event may produce downstream consequences, but consequences propagate only where causal strength and simulation relevance justify them.

Mythic simulates **reasonable causality**, not infinite butterfly effects.

## 2. Simulation is event-driven

All meaningful change begins with canonical events: person died, ownership transferred, bridge collapsed, faction declared war, child was born, road project completed, artifact stolen, harvest failed, god manifested, etc.

Events enter a causal evaluator that determines affected domains and schedules follow-on work.

## 3. Causal domains

A root event can affect physical/spatial, character/health, relationships, household/family, economy/business, resources/trade, faction/political, law/claims, demographics, infrastructure, knowledge/information, culture/religion, supernatural/mythic, goals/projects and reputation/public history.

## 4. Causal significance

Candidate downstream effects are scored by direct causal strength, magnitude, geographic/temporal proximity, persistent-actor involvement, dependency/ownership links, faction significance, economic centrality, player relevance, historical significance, uncertainty and available simulation budget.

Effects below threshold can be absorbed into aggregate state instead of materializing discrete events.

## 5. Propagation budget

No event recursively generates unlimited events. Root events receive bounded propagation budgets based on significance. Trivial events may produce 0–2 follow-ons; local events a handful; major regional/world events receive explicitly budgeted multi-stage chains. Exact values are tuning.

## 6. Time horizons

Consequences can be immediate, delayed hours/days, scheduled weeks/months, long-horizon years, or conditional on later triggers. A shopkeeper death may close a shop now, trigger inheritance days later, alter supply relationships over weeks and influence a child's career years later.

## 7. Fidelity tiers

- **Active scene:** high-fidelity immediate resolution.
- **Active locality:** named people, businesses, households and projects update frequently.
- **Region:** trade, factions, migration, infrastructure and demographics update in batches.
- **Background world:** aggregates, major actors, scheduled events and high-significance processes only until promotion.

## 8. Catch-up simulation

Inactive regions do not tick second-by-second. On renewed relevance: load last state, calculate elapsed Ledger Time, process scheduled events/projects, batch demographic/economic/political/infrastructure updates, process major autonomous actors, resolve bounded consequences, write canonical catch-up events/snapshot and materialize only needed detail.

Catch-up is deterministic for identical state, seed, rules and validated AI proposal records.

## 9. Autonomous actors

Major actors receive planning windows, not continuous LLM consciousness. Planning context includes goals, beliefs/knowledge, resources, values/personality, relationships, obligations, threats/opportunities, available actions and horizon. AI may propose plans; deterministic simulation validates feasibility/cost before commitment.

## 10. Economy

Initial economy is category/flow based rather than individual-item macroeconomics. Track production capacity, demand, inventory bands, supplier links, route access, scarcity, purchasing power, labor, taxes/fees and business health. Individual inventory materializes only where gameplay requires it. AI can explain prices; it does not arbitrarily set them.

## 11. Business continuity

Owner death does not delete a business. Operating authority, claims/inheritance/creditors/seizure, managers/employees, suppliers/customers and debts persist until events alter them. Closure, transfer and transformation are canonical changes.

## 12. Demography and aging

Aggregated population advances statistically; persistent people advance individually. Track birth/age, life stage, household, health-risk basis, occupation/education/training, migration, partnership/parenthood where simulated and death. Children become adults without being recreated.

## 13. Infrastructure/spatial evolution

Roads, bridges and routes affect travel, trade, migration, military movement, prosperity and isolation. Projects/events can build, reroute, damage, block or destroy them. The visible world map reflects authoritative topology.

## 14. Settlement evolution

Validated processes can change population, districts, businesses, abandoned buildings, fortification, destruction/rebuilding, control, wealth, roads/ports and supernatural state. Visual generation uses semantic asset grammars, not unconstrained invention.

## 15. Knowledge propagation

Information cascades through witnesses, rumors, reports, faction intelligence, families, culture and misinformation, with plausible delay/distortion. The narrator cannot make everyone instantly know player actions.

## 16. Reputation

Reputation is multi-dimensional and audience-specific: honor, cruelty, reliability, fear, heroism, criminality, faction alignment, supernatural status, etc. Different communities can hold different beliefs based on what they actually know.

## 17. Projects as causal engines

Long-duration change should usually be represented by Projects: construction, training, business expansion, politics, research, settlement founding, armies, rebuilding. Projects advance Ledger Time and expose the world to interference.

## 18. Failure/interruption

Projects and long-horizon plans can fail, stall, be sabotaged, lose funding/actors, redirect or complete differently. AI narrates; it never guarantees completion.

## 19. Simulation invariants

No downstream event may create resources without a valid source (unless supernatural rules explicitly allow), teleport entities without mechanism, transfer ownership without claim/process, use hidden knowledge without source, violate topology, resurrect without rules, erase conflicting history or bypass required checks.

## 20. Cost doctrine

Prefer deterministic code for aging, prices, inventory bands, route costs, inheritance, ordinary business operation, demographics, timers, faction resource accounting, combat, dice and physical interactions.

Use AI for ambiguous intent, high-level actor planning, dialogue, narrative synthesis, coherent naming/details and bounded generation proposals.

## 21. Required acceptance chains

The architecture must support without bespoke scripting:

- **Shop-owner death:** death -> authority/claim process -> manager/supplier response -> business changes -> visual owner/signage state -> heir continuity.
- **Bridge destruction:** destruction -> route graph change -> travel/trade cost change -> possible scarcity -> alternate route/project -> persistent map update.
- **Child maturation:** same Person ages -> education/relationships affect development -> adult role -> can become major NPC/player character.
- **Political action:** expose official -> knowledge propagates -> reputation/faction response -> office succession/unrest -> bounded governance/economic effects.

## 22. Exit

Every world-changing system must answer what caused the change, affected domains, propagation depth, timing, fidelity, whether code/AI participate, and what makes the result canonical/replayable.
