export type ActionState = "drafting" | "interpreting" | "reviewing" | "persisting-key" | "committing" | "unknown" | "resolving" | "committed" | "blocked";
export type ActionEvent = "INTERPRET" | "INTERPRETED" | "CONFIRM" | "KEY_PERSISTED" | "UNKNOWN_STATUS" | "LOOKUP_CONFIRMED" | "RECEIPT" | "EVENT_GAP" | "RESYNCED";
const transitions: Record<ActionState, Partial<Record<ActionEvent, ActionState>>> = {
 drafting:{INTERPRET:"interpreting"}, interpreting:{INTERPRETED:"reviewing"}, reviewing:{CONFIRM:"persisting-key"},
 "persisting-key":{KEY_PERSISTED:"committing"}, committing:{UNKNOWN_STATUS:"unknown",RECEIPT:"resolving",EVENT_GAP:"blocked"},
 unknown:{LOOKUP_CONFIRMED:"resolving"}, resolving:{RECEIPT:"committed",EVENT_GAP:"blocked"}, committed:{}, blocked:{RESYNCED:"reviewing"}
};
export function transition(state: ActionState, event: ActionEvent): ActionState { const next=transitions[state][event]; if(!next) throw new Error(`Illegal action transition: ${state} → ${event}`); return next; }
