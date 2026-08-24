// Generated from pinned approved C1–C3 schemas. Do not edit.
export namespace C1ContractsSchemasCommandsCoreLoop {
  export type MythicRPGC1CoreLoopCommandsAndReceipts =
    | InterpretIntentCommand
    | ReviseProposalCommand
    | ForecastProposalCommand
    | CommitActionCommand
    | ResolveCommitStatusCommand
    | CommandReceipt;
  export type InterpretIntentCommand = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "interpret_intent";
    payload?: {
      draft_text: string;
      requested_goal?: string;
      context_refs: string[];
      explanation_depth: "minimal" | "standard" | "detailed";
    };
  };
  export type ReviseProposalCommand = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "revise_proposal";
    payload?: {
      proposal_version: number;
      /**
       * @minItems 1
       */
      revisions: [
        {
          field: "goal" | "method" | "target" | "scope" | "timing" | "resource" | "assumption";
          value: string | number | boolean | unknown[] | {};
        },
        ...{
          field: "goal" | "method" | "target" | "scope" | "timing" | "resource" | "assumption";
          value: string | number | boolean | unknown[] | {};
        }[]
      ];
    };
  };
  export type ForecastProposalCommand = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "forecast_proposal";
    payload?: {
      proposal_version: number;
    };
  };
  export type CommitActionCommand = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "commit_action";
    payload?: {
      proposal_version: number;
      final_confirmation: true;
      acknowledged_consequence_ids: string[];
    };
  };
  export type ResolveCommitStatusCommand = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "resolve_commit_status";
    payload?: {
      original_command_id: string;
      original_idempotency_key: string;
    };
  };
  export type CommandReceipt = {
    [k: string]: unknown;
  } & {
    contract_version: string;
    receipt_id: string;
    command_id: string;
    lookup_key: string;
    status:
      | "accepted_pending"
      | "committed"
      | "rejected"
      | "replan_required"
      | "conflict"
      | "queued"
      | "retryable_failure"
      | "unknown_commit"
      | "canceled";
    campaign_id: string;
    source_state_version: string;
    current_state_version?: string;
    committed_event_ids?: string[];
    outcome?:
      | {
          family?: "success";
          code?: "success.committed";
        }
      | {
          family?: "mixed_failure";
          code?: "mixed.failure";
        }
      | {
          family?: "rejected";
          code?: "rejected.causal_impossible" | "rejected.rule_invalid";
        }
      | {
          family?: "refused";
          code?: "refused.actor_boundary";
        }
      | {
          family?: "interrupted";
          code?: "interrupted.window";
        }
      | {
          family?: "unavailable";
          code?: "unavailable.access" | "unavailable.window_closed" | "unavailable.provider";
        }
      | {
          family?: "destructive_consequence";
          code?: "destructive.consequence";
        }
      | {
          family?: "replan";
          code?: "replan.state_changed";
        }
      | {
          family?: "conflict";
          code?: "conflict.state_version";
        }
      | {
          family?: "recovery";
          code?: "recovery.unknown_commit";
        };
    recovery?: {
      [k: string]: unknown;
    };
    accessibility?: {
      [k: string]: unknown;
    };
    generated_at: string;
  };
}

export namespace C1ContractsSchemasCommonCommon {
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "OpaqueId".
   */
  export type OpaqueId = string;
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "ContractVersion".
   */
  export type ContractVersion = string;
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "StateVersion".
   */
  export type StateVersion = string;
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "KnowledgeSnapshotId".
   */
  export type KnowledgeSnapshotId = string;
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "Freshness".
   */
  export type Freshness = "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "KnowledgeClass".
   */
  export type KnowledgeClass =
    "perceived" | "recorded" | "reported" | "inferred" | "forecast" | "disputed" | "last_known" | "out_of_character";
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "InputProvenance".
   */
  export type InputProvenance = "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "ConfirmationClass".
   */
  export type ConfirmationClass = "routine" | "material" | "consequential";
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "Permission".
   */
  export type Permission = {
    [k: string]: unknown;
  } & {
    action: string;
    available: boolean;
    reason_code?: string;
    reason_text?: string;
  };
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "AccessibilitySemantic".
   */
  export type AccessibilitySemantic = {
    [k: string]: unknown;
  } & {
    semantic_role: "region" | "status" | "alert" | "dialogue" | "log" | "timer" | "decision";
    announcement_priority: "none" | "polite" | "assertive";
    announcement_text?: string;
    dedupe_key: string;
    focus_recommendation?: string;
    text_alternative?: string;
    structured_options?: {
      option_id: string;
      label: string;
    }[];
    time_semantics?: {
      deadline_ledger_time?: LedgerTime;
      ledger_time_paused?: boolean;
    };
  };
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "PublicOutcome".
   */
  export type PublicOutcome = {
    family:
      | "success"
      | "mixed_failure"
      | "rejected"
      | "refused"
      | "interrupted"
      | "unavailable"
      | "destructive_consequence"
      | "replan"
      | "conflict"
      | "recovery";
    code:
      | "success.committed"
      | "mixed.failure"
      | "rejected.causal_impossible"
      | "rejected.rule_invalid"
      | "refused.actor_boundary"
      | "interrupted.window"
      | "unavailable.access"
      | "unavailable.window_closed"
      | "unavailable.provider"
      | "destructive.consequence"
      | "replan.state_changed"
      | "conflict.state_version"
      | "recovery.unknown_commit";
    preserved_goal: string;
    interpreted_method: string;
    accessible_obstacle: string;
    possible_portion?: string;
    revisable_fields: ("goal" | "method" | "target" | "scope" | "timing" | "resource" | "authority" | "assumption")[];
    cost_spent: boolean;
    time_spent: boolean;
    roll_spent: boolean;
    retry_eligible: boolean;
    current_accessible_state_version?: StateVersion;
    help_refs?: ProvenanceRef[];
  } & PublicOutcome1;
  export type PublicOutcome1 =
    | {
        family?: "success";
        code?: "success.committed";
      }
    | {
        family?: "mixed_failure";
        code?: "mixed.failure";
      }
    | {
        family?: "rejected";
        code?: "rejected.causal_impossible" | "rejected.rule_invalid";
      }
    | {
        family?: "refused";
        code?: "refused.actor_boundary";
      }
    | {
        family?: "interrupted";
        code?: "interrupted.window";
      }
    | {
        family?: "unavailable";
        code?: "unavailable.access" | "unavailable.window_closed" | "unavailable.provider";
      }
    | {
        family?: "destructive_consequence";
        code?: "destructive.consequence";
      }
    | {
        family?: "replan";
        code?: "replan.state_changed";
      }
    | {
        family?: "conflict";
        code?: "conflict.state_version";
      }
    | {
        family?: "recovery";
        code?: "recovery.unknown_commit";
      };
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "RecoveryInstruction".
   */
  export type RecoveryInstruction = {
    [k: string]: unknown;
  } & {
    recovery_type:
      | "lookup_before_retry"
      | "compare_and_reconfirm"
      | "revise_method"
      | "wait_for_window"
      | "retry_dependency"
      | "contact_support";
    safe_next_action: string;
    retry_permitted: boolean;
    lookup_command_id?: string;
    current_state_version?: StateVersion;
    changed_fields?: string[];
  };
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "ReceiptEnvelope".
   */
  export type ReceiptEnvelope = {
    [k: string]: unknown;
  };

  /**
   * Shared identifiers, authority metadata, knowledge, provenance, envelopes and public outcome semantics for Checkpoint C1.
   */
  export interface MythicRPGC1CommonContractVocabulary {
    [k: string]: unknown;
  }
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "LedgerTime".
   */
  export interface LedgerTime {
    tick: number;
    display: string;
    calendar: string;
    sequence: number;
    phase?: "scene" | "round" | "interval" | "downtime" | "aftermath";
  }
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "ProvenanceRef".
   */
  export interface ProvenanceRef {
    source_id: string;
    source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
    accessible: true;
    label?: string;
    version?: string;
    citation_span?: string;
    supersedes_source_id?: string;
  }
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "KnowledgeFact".
   */
  export interface KnowledgeFact {
    fact_id: string;
    classification: KnowledgeClass;
    statement: string;
    as_of_ledger_time: LedgerTime;
    confidence_band?: "low" | "moderate" | "high" | "confirmed";
    channel?: "sense" | "document" | "witness" | "analysis" | "memory" | "player_reference";
    /**
     * @minItems 1
     */
    sources: [ProvenanceRef, ...ProvenanceRef[]];
    contradiction_fact_ids?: string[];
    visibility_scope?: "active_character" | "player" | "party_shared";
  }
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "ReadModelEnvelope".
   */
  export interface ReadModelEnvelope {
    contract_version: ContractVersion;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: StateVersion;
    knowledge_snapshot_id: KnowledgeSnapshotId;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: Freshness;
    permissions: Permission[];
    provenance: ProvenanceRef[];
    accessibility?: AccessibilitySemantic;
    payload: {};
  }
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "CommandEnvelope".
   */
  export interface CommandEnvelope {
    contract_version: ContractVersion;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: StateVersion;
    knowledge_snapshot_id: KnowledgeSnapshotId;
    proposal_id?: string;
    confirmation_class: ConfirmationClass;
    input_provenance: InputProvenance;
    payload: {};
  }
  /**
   * This interface was referenced by `MythicRPGC1CommonContractVocabulary`'s JSON-Schema
   * via the `definition` "EventEnvelope".
   */
  export interface EventEnvelope {
    contract_version: ContractVersion;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: StateVersion;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: KnowledgeSnapshotId;
    accessibility?: AccessibilitySemantic;
    payload: {};
  }
}

export namespace C1ContractsSchemasEventsCoreLoop {
  export type MythicRPGC1CoreLoopEvents =
    | CanonicalStateCommitted
    | AccessibleProjectionUpdated
    | DecisionWindowChanged
    | CommandStatusChanged
    | RecoveryRequired
    | AccessibilityAnnouncement;
  export type CanonicalStateCommitted = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: Semantic;
    payload: {};
  } & {
    event_type?: "canonical_state_committed";
    payload?: {
      previous_state_version: string;
      new_state_version: string;
      /**
       * @minItems 1
       */
      committed_event_ids: [string, ...string[]];
      receipt_id: string;
    };
  };
  export type Semantic = {
    [k: string]: unknown;
  } & {
    semantic_role: "region" | "status" | "alert" | "dialogue" | "log" | "timer" | "decision";
    announcement_priority: "none" | "polite" | "assertive";
    announcement_text?: string;
    dedupe_key: string;
    focus_recommendation?: string;
    text_alternative?: string;
    structured_options?: {
      option_id: string;
      label: string;
    }[];
    time_semantics?: {
      deadline_ledger_time?: LedgerTime;
      ledger_time_paused?: boolean;
    };
  };
  export type AccessibleProjectionUpdated = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: Semantic;
    payload: {};
  } & {
    event_type?: "accessible_projection_updated";
    payload?: {
      /**
       * @minItems 1
       */
      payload_types: [string, ...string[]];
      knowledge_snapshot_id: string;
      freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    };
  };
  export type DecisionWindowChanged = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: Semantic;
    payload: {};
  } & {
    event_type?: "decision_window_changed";
    payload?: {
      window_id: string;
      status: "opened" | "updated" | "closed" | "expired" | "resolved";
      legal_response_types: string[];
    };
  };
  export type CommandStatusChanged = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: Semantic;
    payload: {};
  } & {
    event_type?: "command_status_changed";
    payload?: {
      command_id: string;
      receipt_id: string;
      status:
        | "accepted_pending"
        | "committed"
        | "rejected"
        | "replan_required"
        | "conflict"
        | "queued"
        | "retryable_failure"
        | "unknown_commit"
        | "canceled";
    };
  };
  export type RecoveryRequired = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: Semantic;
    payload: {};
  } & {
    event_type?: "recovery_required";
    payload?: {
      command_id: string;
      outcome:
        | {
            family?: "success";
            code?: "success.committed";
          }
        | {
            family?: "mixed_failure";
            code?: "mixed.failure";
          }
        | {
            family?: "rejected";
            code?: "rejected.causal_impossible" | "rejected.rule_invalid";
          }
        | {
            family?: "refused";
            code?: "refused.actor_boundary";
          }
        | {
            family?: "interrupted";
            code?: "interrupted.window";
          }
        | {
            family?: "unavailable";
            code?: "unavailable.access" | "unavailable.window_closed" | "unavailable.provider";
          }
        | {
            family?: "destructive_consequence";
            code?: "destructive.consequence";
          }
        | {
            family?: "replan";
            code?: "replan.state_changed";
          }
        | {
            family?: "conflict";
            code?: "conflict.state_version";
          }
        | {
            family?: "recovery";
            code?: "recovery.unknown_commit";
          };
      recovery: {
        [k: string]: unknown;
      };
    };
  };
  export type AccessibilityAnnouncement = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: Semantic;
    payload: {};
  } & {
    event_type?: "accessibility_announcement";
    payload?: {
      semantic: Semantic;
    };
  };

  export interface LedgerTime {
    tick: number;
    display: string;
    calendar: string;
    sequence: number;
    phase?: "scene" | "round" | "interval" | "downtime" | "aftermath";
  }
}

export namespace C1ContractsSchemasReadModelsCoreLoop {
  export type MythicRPGC1CoreLoopReadModels =
    | WorldStripStatus
    | StageFrame
    | EntityContextLens
    | IntentCapability
    | InterpretedProposal
    | ProposalForecast
    | ResolutionBeat;
  export type WorldStripStatus = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: Items[];
    provenance: Items1[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "world_strip_status";
    payload?: {
      viewpoint_label: string;
      place: Place;
      time_display: string;
      danger_state: "calm" | "pressure" | "immediate" | "defeat" | "continuation";
      save_state: "saved" | "saving" | "recovery_required" | "offline_last_known";
      comic_state?: "idle" | "queued" | "producing" | "review_available" | "published" | "blocked";
    };
  };
  export type Items = {
    [k: string]: unknown;
  } & {
    action: string;
    available: boolean;
    reason_code?: string;
    reason_text?: string;
  };
  export type StageFrame = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: Items[];
    provenance: Items1[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "stage_frame";
    payload?: {
      stage_id: string;
      scene_mode: "exploration" | "dialogue" | "danger" | "aftermath" | "travel" | "downtime" | "defeat" | "continuation";
      title: string;
      framing_text: string;
      world_state: {
        place: Place;
        active_entities: Place[];
        salient_objects: Place[];
        pressures: Place[];
        danger_state: "calm" | "pressure" | "immediate" | "defeat" | "continuation";
      };
      stage_modules: (
        "scene_frame" | "dialogue" | "harm" | "tactics" | "decision_window" | "resolution" | "continuation"
      )[];
      lens_links?: string[];
      intent_capability_ref: string;
      chronicle_cursor: string;
    };
  };
  export type EntityContextLens = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: Items[];
    provenance: Items1[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "entity_context_lens";
    payload?: {
      entity_ref: string;
      entity_kind: "person" | "relic" | "object" | "place" | "route" | "evidence" | "rule" | "condition";
      display_name: string;
      facts: Place[];
      available_actions: Items[];
      compare_refs?: string[];
    };
  };
  export type IntentCapability = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: Items[];
    provenance: Items1[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "intent_capability";
    payload?: {
      capability_id: string;
      freeform_enabled: true;
      /**
       * @minItems 1
       */
      supported_input_provenance: [
        "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision",
        ...("typed" | "dictated" | "structured" | "prior_pattern" | "system_decision")[]
      ];
      max_draft_characters: number;
      examples_are_permissions: false;
      /**
       * @maxItems 5
       */
      suggestions:
        | []
        | [
            {
              suggestion_id: string;
              label: string;
              relevance: string;
              known_stakes: string;
            }
          ]
        | [
            {
              suggestion_id: string;
              label: string;
              relevance: string;
              known_stakes: string;
            },
            {
              suggestion_id: string;
              label: string;
              relevance: string;
              known_stakes: string;
            }
          ]
        | [
            {
              suggestion_id: string;
              label: string;
              relevance: string;
              known_stakes: string;
            },
            {
              suggestion_id: string;
              label: string;
              relevance: string;
              known_stakes: string;
            },
            {
              suggestion_id: string;
              label: string;
              relevance: string;
              known_stakes: string;
            }
          ]
        | [
            {
              suggestion_id: string;
              label: string;
              relevance: string;
              known_stakes: string;
            },
            {
              suggestion_id: string;
              label: string;
              relevance: string;
              known_stakes: string;
            },
            {
              suggestion_id: string;
              label: string;
              relevance: string;
              known_stakes: string;
            },
            {
              suggestion_id: string;
              label: string;
              relevance: string;
              known_stakes: string;
            }
          ]
        | [
            {
              suggestion_id: string;
              label: string;
              relevance: string;
              known_stakes: string;
            },
            {
              suggestion_id: string;
              label: string;
              relevance: string;
              known_stakes: string;
            },
            {
              suggestion_id: string;
              label: string;
              relevance: string;
              known_stakes: string;
            },
            {
              suggestion_id: string;
              label: string;
              relevance: string;
              known_stakes: string;
            },
            {
              suggestion_id: string;
              label: string;
              relevance: string;
              known_stakes: string;
            }
          ];
    };
  };
  export type InterpretedProposal = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: Items[];
    provenance: Items1[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "interpreted_proposal";
    payload?: {
      proposal_id: string;
      proposal_version: number;
      status: "draft" | "review" | "superseded" | "stale_material";
      preserved_goal: string;
      interpreted_method: string;
      target_refs?: string[];
      scope: string;
      assumptions: Place[];
      ambiguities: {
        field: string;
        question: string;
        material: boolean;
      }[];
      known_costs: {
        resource: string;
        amount: number;
        spend_on: "commit" | "resolution" | "success" | "interval";
      }[];
      confirmation_class: "routine" | "material" | "consequential";
      forecast_available: boolean;
    };
  };
  export type ProposalForecast = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: Items[];
    provenance: Items1[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "proposal_forecast";
    payload?: {
      forecast_id: string;
      proposal_id: string;
      proposal_version: number;
      noncanonical: true;
      assumptions: Place[];
      risk_band: "low" | "guarded" | "high" | "extreme" | "unknown";
      /**
       * @minItems 1
       */
      possible_outcomes: [Place, ...Place[]];
      invalidation_conditions: string[];
    };
  };
  export type ResolutionBeat = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: Items[];
    provenance: Items1[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "resolution_beat";
    payload?: {
      resolution_id: string;
      command_id: string;
      /**
       * @minItems 1
       */
      event_ids: [string, ...string[]];
      outcome_class:
        | "success"
        | "mixed_failure"
        | "refused"
        | "interrupted"
        | "unavailable"
        | "impossible_invalid"
        | "destructive_consequence"
        | "conflict_stale";
      summary: string;
      visible_rolls?: {
        roll_id: string;
        source: "engine" | "manual" | "external";
        result: number;
        verified: boolean;
      }[];
      costs_spent: {
        resource: string;
        amount: number;
      }[];
      world_deltas: Place[];
      continuation_choices: {
        choice_id: string;
        label: string;
      }[];
    };
  };

  export interface LedgerTime {
    tick: number;
    display: string;
    calendar: string;
    sequence: number;
    phase?: "scene" | "round" | "interval" | "downtime" | "aftermath";
  }
  export interface Items1 {
    source_id: string;
    source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
    accessible: true;
    label?: string;
    version?: string;
    citation_span?: string;
    supersedes_source_id?: string;
  }
  export interface Place {
    fact_id: string;
    classification:
      "perceived" | "recorded" | "reported" | "inferred" | "forecast" | "disputed" | "last_known" | "out_of_character";
    statement: string;
    as_of_ledger_time: LedgerTime;
    confidence_band?: "low" | "moderate" | "high" | "confirmed";
    channel?: "sense" | "document" | "witness" | "analysis" | "memory" | "player_reference";
    /**
     * @minItems 1
     */
    sources: [Items1, ...Items1[]];
    contradiction_fact_ids?: string[];
    visibility_scope?: "active_character" | "player" | "party_shared";
  }
}

export namespace C2ContractsSchemasCommandsSystemBreadth {
  export type MythicRPGC2SystemBreadthCommands =
    | DraftAdvancement
    | CommitAdvancement
    | SubmitRecruitmentOffer
    | RequestAutonomousActorAction
    | DraftJourney
    | CommitJourneyLeg
    | DraftProjectInterval
    | CommitProjectInterval
    | TransferCustody
    | RecordCaseClaim
    | ChooseContinuation
    | CommandReceipt;
  export type DraftAdvancement = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "draft_advancement";
    payload?: {
      character_id: string;
      checkpoint_id: string;
      allocations: {
        target_ref: string;
        requested_rank: number;
      }[];
    };
  };
  export type CommitAdvancement = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "commit_advancement";
    payload?: {
      character_id: string;
      checkpoint_id: string;
      reviewed_draft_id: string;
      /**
       * @minItems 1
       */
      reviewed_allocation_ids: [string, ...string[]];
      final_confirmation: true;
    };
  };
  export type SubmitRecruitmentOffer = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "submit_recruitment_offer";
    payload?: {
      candidate_id: string;
      terms: {
        purpose: string;
        role: string;
        duration: string;
        compensation: string;
        authority: string;
        ownership: string;
        boundaries: string[];
        exit_rights: string;
        risks: string[];
      };
      voluntariness: "voluntary" | "coerced_disclosed";
    };
  };
  export type RequestAutonomousActorAction = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "request_autonomous_actor_action";
    payload?: {
      actor_id: string;
      requested_goal: string;
      requested_method: string;
      authority_ref: string;
      refusal_preserved: true;
    };
  };
  export type DraftJourney = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "draft_journey";
    payload?: {
      journey_id: string;
      method_ref: string;
      pace: "cautious" | "standard" | "fast" | "forced";
      intended_destination: string;
      roles: {
        role: "navigator" | "scout" | "operator" | "trailblazer" | "quartermaster" | "guard";
        actor_id: string;
      }[];
      compression_requested: boolean;
    };
  };
  export type CommitJourneyLeg = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "commit_journey_leg";
    payload?: {
      journey_id: string;
      leg_id: string;
      reviewed_plan_id: string;
      final_confirmation: true;
    };
  };
  export type DraftProjectInterval = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "draft_project_interval";
    payload?: {
      project_id: string;
      /**
       * @minItems 1
       */
      worker_ids: [string, ...string[]];
      material_lot_ids: string[];
      method: string;
    };
  };
  export type CommitProjectInterval = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "commit_project_interval";
    payload?: {
      project_id: string;
      reviewed_interval_id: string;
      /**
       * @minItems 1
       */
      worker_authority_refs: [string, ...string[]];
      material_authority_refs: string[];
      final_confirmation: true;
    };
  };
  export type TransferCustody = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "transfer_custody";
    payload?: {
      item_id: string;
      from_holder_id: string;
      to_holder_id: string;
      authority_ref: string;
      transfer_terms: string;
      final_confirmation: true;
    };
  };
  export type RecordCaseClaim = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "record_case_claim";
    payload?: {
      case_id: string;
      claim_text: string;
      classification: "reported" | "observed" | "inferred" | "corroborated" | "disputed" | "refuted";
      supporting_evidence_ids: string[];
      contradicting_evidence_ids: string[];
    };
  };
  export type ChooseContinuation = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "choose_continuation";
    payload?: {
      continuation_id: string;
      option_id: string;
      acknowledged_constraints: string[];
      final_confirmation: true;
    };
  };
  export type CommandReceipt = {
    [k: string]: unknown;
  } & {
    contract_version: string;
    receipt_id: string;
    command_id: string;
    lookup_key: string;
    status:
      | "accepted_pending"
      | "committed"
      | "rejected"
      | "replan_required"
      | "conflict"
      | "queued"
      | "retryable_failure"
      | "unknown_commit"
      | "canceled";
    campaign_id: string;
    source_state_version: string;
    current_state_version?: string;
    committed_event_ids?: string[];
    outcome?:
      | {
          family?: "success";
          code?: "success.committed";
        }
      | {
          family?: "mixed_failure";
          code?: "mixed.failure";
        }
      | {
          family?: "rejected";
          code?: "rejected.causal_impossible" | "rejected.rule_invalid";
        }
      | {
          family?: "refused";
          code?: "refused.actor_boundary";
        }
      | {
          family?: "interrupted";
          code?: "interrupted.window";
        }
      | {
          family?: "unavailable";
          code?: "unavailable.access" | "unavailable.window_closed" | "unavailable.provider";
        }
      | {
          family?: "destructive_consequence";
          code?: "destructive.consequence";
        }
      | {
          family?: "replan";
          code?: "replan.state_changed";
        }
      | {
          family?: "conflict";
          code?: "conflict.state_version";
        }
      | {
          family?: "recovery";
          code?: "recovery.unknown_commit";
        };
    recovery?: {
      [k: string]: unknown;
    };
    accessibility?: {
      [k: string]: unknown;
    };
    generated_at: string;
  };
}

export namespace C2ContractsSchemasEventsSystemBreadth {
  export type MythicRPGC2SystemBreadthEvents =
    | ProgressionCommitted
    | DefeatContinuationChanged
    | AutonomousActorStatusChanged
    | RelicStatusChanged
    | CustodyTransferred
    | ProjectCheckpointReached
    | JourneyIntervalResolved
    | WorldRecordUpdated
    | ChronicleConsequenceRouted;
  export type ProgressionCommitted = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "progression_committed";
    payload?: {
      character_id: string;
      checkpoint_id: string;
      bp_spent: number;
      bp_remaining: number;
      /**
       * @minItems 1
       */
      allocation_refs: [string, ...string[]];
    };
  };
  export type DefeatContinuationChanged = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "defeat_continuation_changed";
    payload?: {
      subject_id: string;
      previous_state: string;
      new_state: string;
      continuation_id: string;
      agency_state: "full" | "constrained_playable" | "viewpoint_transition" | "none_by_choice";
    };
  };
  export type AutonomousActorStatusChanged = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "autonomous_actor_status_changed";
    payload?: {
      actor_id: string;
      change_kind:
        "accepted" | "refused" | "counteroffered" | "departed" | "returned" | "delegation_changed" | "captured" | "dead";
      accessible_reason: PauseReason;
      projection_refs: string[];
    };
  };
  export type RelicStatusChanged = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "relic_status_changed";
    payload?: {
      relic_id: string;
      change_kind:
        | "custody"
        | "ownership"
        | "claim"
        | "recognition"
        | "relationship"
        | "attunement"
        | "access"
        | "damage"
        | "reformation"
        | "succession";
      projection_refs: string[];
    };
  };
  export type CustodyTransferred = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "custody_transferred";
    payload?: {
      item_id: string;
      from_holder_id: string;
      to_holder_id: string;
      authority_ref: string;
      ownership_changed: boolean;
    };
  };
  export type ProjectCheckpointReached = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "project_checkpoint_reached";
    payload?: {
      project_id: string;
      interval_id: string;
      progress_delta: number;
      material_changes: string[];
      next_checkpoint_ref: string;
    };
  };
  export type JourneyIntervalResolved = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "journey_interval_resolved";
    payload?: {
      journey_id: string;
      leg_id: string;
      elapsed: string;
      location_state: "exact" | "uncertain" | "lost" | "displaced";
      resource_changes: PauseReason[];
      pause_reason: PauseReason;
    };
  };
  export type WorldRecordUpdated = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "world_record_updated";
    payload?: {
      record_kind: "map" | "route" | "site" | "evidence" | "case" | "faction" | "front" | "legal" | "reputation";
      record_id: string;
      change_kind: string;
      projection_refs: string[];
    };
  };
  export type ChronicleConsequenceRouted = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "chronicle_consequence_routed";
    payload?: {
      bundle_id: string;
      /**
       * @minItems 1
       */
      source_event_ids: [string, ...string[]];
      /**
       * @minItems 1
       */
      surface_projection_refs: [string, ...string[]];
    };
  };

  export interface LedgerTime {
    tick: number;
    display: string;
    calendar: string;
    sequence: number;
    phase?: "scene" | "round" | "interval" | "downtime" | "aftermath";
  }
  export interface PauseReason {
    fact_id: string;
    classification:
      "perceived" | "recorded" | "reported" | "inferred" | "forecast" | "disputed" | "last_known" | "out_of_character";
    statement: string;
    as_of_ledger_time: LedgerTime;
    confidence_band?: "low" | "moderate" | "high" | "confirmed";
    channel?: "sense" | "document" | "witness" | "analysis" | "memory" | "player_reference";
    /**
     * @minItems 1
     */
    sources: [
      {
        source_id: string;
        source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
        accessible: true;
        label?: string;
        version?: string;
        citation_span?: string;
        supersedes_source_id?: string;
      },
      ...{
        source_id: string;
        source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
        accessible: true;
        label?: string;
        version?: string;
        citation_span?: string;
        supersedes_source_id?: string;
      }[]
    ];
    contradiction_fact_ids?: string[];
    visibility_scope?: "active_character" | "player" | "party_shared";
  }
}

export namespace C2ContractsSchemasReadModelsCharacterContinuation {
  export type MythicRPGC2CharacterProgressionHarmAndContinuationReadModels =
    CharacterRecord | AdvancementDraft | ContinuationState;
  export type CharacterRecord = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "character_record";
    payload?: {
      [k: string]: unknown;
    };
  };
  export type AdvancementDraft = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "advancement_draft";
    payload?: {
      draft_id: string;
      character_id: string;
      checkpoint_id: string;
      status: "draft" | "review" | "invalid" | "stale_material" | "committed";
      noncanonical: true;
      available_bp: number;
      allocations: {
        allocation_id: string;
        target_ref: string;
        cost: number;
        label: string;
      }[];
      projected_changes: Items1[];
      remaining_bp: number;
      validation: Items1[];
    };
  };
  export type ContinuationState = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "continuation_state";
    payload?: {
      continuation_id: string;
      subject_id: string;
      classification:
        | "defeat"
        | "dying"
        | "threshold"
        | "echo"
        | "ghost"
        | "shade"
        | "returned"
        | "replica"
        | "possessed"
        | "hollow"
        | "composite"
        | "successor"
        | "permadeath";
      agency_state: "full" | "constrained_playable" | "viewpoint_transition" | "none_by_choice";
      body_state: Items1;
      /**
       * @minItems 4
       */
      soul_components: [
        {
          component: "Self" | "Memory" | "Name" | "Shadow";
          known_state: Items1;
        },
        {
          component: "Self" | "Memory" | "Name" | "Shadow";
          known_state: Items1;
        },
        {
          component: "Self" | "Memory" | "Name" | "Shadow";
          known_state: Items1;
        },
        {
          component: "Self" | "Memory" | "Name" | "Shadow";
          known_state: Items1;
        },
        ...{
          component: "Self" | "Memory" | "Name" | "Shadow";
          known_state: Items1;
        }[]
      ];
      constraints: Items1[];
      /**
       * @minItems 1
       */
      options: [
        {
          option_id: string;
          mode:
            | "afterlife_play"
            | "escape"
            | "bargain"
            | "companion_recovery"
            | "ghost_play"
            | "returned"
            | "successor"
            | "new_character_legacy"
            | "permadeath";
          label: string;
          available: boolean;
          requirements?: Items1[];
        },
        ...{
          option_id: string;
          mode:
            | "afterlife_play"
            | "escape"
            | "bargain"
            | "companion_recovery"
            | "ghost_play"
            | "returned"
            | "successor"
            | "new_character_legacy"
            | "permadeath";
          label: string;
          available: boolean;
          requirements?: Items1[];
        }[]
      ];
    };
  };

  export interface LedgerTime {
    tick: number;
    display: string;
    calendar: string;
    sequence: number;
    phase?: "scene" | "round" | "interval" | "downtime" | "aftermath";
  }
  export interface Items {
    source_id: string;
    source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
    accessible: true;
    label?: string;
    version?: string;
    citation_span?: string;
    supersedes_source_id?: string;
  }
  export interface Items1 {
    fact_id: string;
    classification:
      "perceived" | "recorded" | "reported" | "inferred" | "forecast" | "disputed" | "last_known" | "out_of_character";
    statement: string;
    as_of_ledger_time: LedgerTime;
    confidence_band?: "low" | "moderate" | "high" | "confirmed";
    channel?: "sense" | "document" | "witness" | "analysis" | "memory" | "player_reference";
    /**
     * @minItems 1
     */
    sources: [Items, ...Items[]];
    contradiction_fact_ids?: string[];
    visibility_scope?: "active_character" | "player" | "party_shared";
  }
}

export namespace C2ContractsSchemasReadModelsChronicleRouting {
  export type MythicRPGC2ChronicleConsequenceRoutingReadModels = ChronicleConsequenceBundle;
  export type ChronicleConsequenceBundle = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "chronicle_consequence_bundle";
    payload?: {
      bundle_id: string;
      /**
       * @minItems 1
       */
      source_event_ids: [string, ...string[]];
      headline: string;
      summary: string;
      /**
       * @minItems 1
       */
      surface_projections: [
        {
          surface: "character" | "company" | "holdings" | "world" | "chronicle";
          record_ref: string;
          summary: string;
          facts: {
            fact_id: string;
            classification:
              | "perceived"
              | "recorded"
              | "reported"
              | "inferred"
              | "forecast"
              | "disputed"
              | "last_known"
              | "out_of_character";
            statement: string;
            as_of_ledger_time: LedgerTime;
            confidence_band?: "low" | "moderate" | "high" | "confirmed";
            channel?: "sense" | "document" | "witness" | "analysis" | "memory" | "player_reference";
            /**
             * @minItems 1
             */
            sources: [Items, ...Items[]];
            contradiction_fact_ids?: string[];
            visibility_scope?: "active_character" | "player" | "party_shared";
          }[];
        },
        ...{
          surface: "character" | "company" | "holdings" | "world" | "chronicle";
          record_ref: string;
          summary: string;
          facts: {
            fact_id: string;
            classification:
              | "perceived"
              | "recorded"
              | "reported"
              | "inferred"
              | "forecast"
              | "disputed"
              | "last_known"
              | "out_of_character";
            statement: string;
            as_of_ledger_time: LedgerTime;
            confidence_band?: "low" | "moderate" | "high" | "confirmed";
            channel?: "sense" | "document" | "witness" | "analysis" | "memory" | "player_reference";
            /**
             * @minItems 1
             */
            sources: [Items, ...Items[]];
            contradiction_fact_ids?: string[];
            visibility_scope?: "active_character" | "player" | "party_shared";
          }[];
        }[]
      ];
      consequence_links: {
        link_id: string;
        kind:
          | "wound"
          | "relationship"
          | "custody"
          | "project"
          | "journey"
          | "site"
          | "case"
          | "front"
          | "legal"
          | "succession"
          | "comic_continuity";
        target_ref: string;
        label: string;
      }[];
      continuation_prompts: {
        prompt_id: string;
        label: string;
        target_surface: "stage" | "character" | "company" | "holdings" | "world" | "chronicle";
      }[];
    };
  };

  export interface LedgerTime {
    tick: number;
    display: string;
    calendar: string;
    sequence: number;
    phase?: "scene" | "round" | "interval" | "downtime" | "aftermath";
  }
  export interface Items {
    source_id: string;
    source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
    accessible: true;
    label?: string;
    version?: string;
    citation_span?: string;
    supersedes_source_id?: string;
  }
}

export namespace C2ContractsSchemasReadModelsCompanyRelics {
  export type MythicRPGC2CompanyAutonomousActorAndRelicReadModels = CompanyRecord | AutonomousActorStatus | RelicRecord;
  export type CompanyRecord = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LastContact;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "company_record";
    payload?: {
      company_id: string;
      display_name: string;
      purpose: Custody;
      governance: {
        decision_model:
          "protagonist_led" | "consensus" | "vote" | "contractual" | "hierarchical" | "distributed" | "contested";
        authority_facts: Custody[];
      };
      roster: {
        member_id: string;
        display_name: string;
        membership_state:
          "contact" | "candidate" | "member" | "separated" | "unavailable" | "departed" | "captured" | "dead";
        operation_mode: "autonomous" | "planned_doctrine" | "tactical_delegation" | "explicit_control";
        role_facts: Custody[];
      }[];
      shared_assets: string[];
      active_obligations: Custody[];
    };
  };
  export type AutonomousActorStatus = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LastContact;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "autonomous_actor_status";
    payload?: {
      actor_id: string;
      actor_kind: "companion" | "relic" | "faction_agent" | "construct";
      display_name: string;
      availability: "present" | "remote" | "separated" | "unavailable" | "refusing" | "departed" | "captured" | "dead";
      operation_mode: "autonomous" | "planned_doctrine" | "tactical_delegation" | "explicit_control";
      relationship_summary:
        | "hostile"
        | "opposed"
        | "guarded"
        | "cooperative"
        | "loyal"
        | "devoted"
        | "defining_commitment"
        | "unknown"
        | "disputed";
      delegated_authority: Custody[];
      current_intent: Custody;
      boundaries: Custody[];
      evidence: Custody[];
      last_contact?: LastContact;
      next_expected_contact?: LastContact;
    };
  };
  export type RelicRecord = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LastContact;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "relic_record";
    payload?: {
      relic_id: string;
      item_id: string;
      display_name: string;
      grade: number;
      agency_state: "inert" | "instinctive" | "communicative" | "person_like" | "sovereign";
      custody: Custody;
      legal_ownership: Custody;
      claims: Custody[];
      recognition: Custody[];
      relationship_state:
        | "hostile"
        | "rejecting"
        | "tolerated"
        | "recognized"
        | "bonded"
        | "chosen"
        | "co_sovereign"
        | "unknown"
        | "disputed";
      relationship_evidence?: Custody[];
      attunement: {
        state: "none" | "in_progress" | "active" | "suppressed" | "severed" | "disputed";
        bearer_ref: string;
        accessible_conditions?: Custody[];
      };
      accessible_functions: {
        function_id: string;
        label: string;
        available: boolean;
        reason?: Custody;
      }[];
      continuity: {
        state: "intact" | "damaged" | "dormant" | "severed" | "dispersed" | "reforming" | "unmade";
        anchors_known: Custody[];
        succession_facts: Custody[];
      };
    };
  };

  export interface LastContact {
    tick: number;
    display: string;
    calendar: string;
    sequence: number;
    phase?: "scene" | "round" | "interval" | "downtime" | "aftermath";
  }
  export interface Items {
    source_id: string;
    source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
    accessible: true;
    label?: string;
    version?: string;
    citation_span?: string;
    supersedes_source_id?: string;
  }
  export interface Custody {
    fact_id: string;
    classification:
      "perceived" | "recorded" | "reported" | "inferred" | "forecast" | "disputed" | "last_known" | "out_of_character";
    statement: string;
    as_of_ledger_time: LastContact;
    confidence_band?: "low" | "moderate" | "high" | "confirmed";
    channel?: "sense" | "document" | "witness" | "analysis" | "memory" | "player_reference";
    /**
     * @minItems 1
     */
    sources: [Items, ...Items[]];
    contradiction_fact_ids?: string[];
    visibility_scope?: "active_character" | "player" | "party_shared";
  }
}

export namespace C2ContractsSchemasReadModelsHoldingsProjects {
  export type MythicRPGC2HoldingsCustodyAndProjectReadModels = HoldingsRecord | ProjectRecord;
  export type HoldingsRecord = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: AsOf;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "holdings_record";
    payload?: {
      holder_id: string;
      items: {
        item_id: string;
        display_name: string;
        physical_location: Owner;
        custody: Owner;
        ownership: Owner;
        condition: Owner;
        access_state:
          | "carried"
          | "stored"
          | "loaned"
          | "leased"
          | "seized"
          | "stolen"
          | "lost"
          | "installed"
          | "consumed"
          | "destroyed";
        legal_status?: Owner;
        provenance: Owner[];
      }[];
      facilities: {
        facility_id: string;
        display_name: string;
        rating: number;
        access: Owner;
      }[];
      funds: {
        account_id: string;
        label: string;
        available_amount: number;
        currency: string;
        as_of: AsOf;
      }[];
      obligations: Owner[];
    };
  };
  export type ProjectRecord = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: AsOf;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "project_record";
    payload?: {
      project_id: string;
      project_type:
        | "repair"
        | "fabricate"
        | "modify"
        | "invent"
        | "reverse_engineer"
        | "salvage"
        | "improvise"
        | "manufacture"
        | "faction_project";
      intended_output: Owner;
      owner: Owner;
      workers: string[];
      status: "draft" | "ready" | "active" | "paused" | "blocked" | "checkpoint" | "completed" | "failed" | "abandoned";
      interval: {
        duration_display: string;
        commit_state: "not_started" | "committed" | "resolved";
      };
      progress: {
        current: number;
        required: number;
      };
      requirements: Owner[];
      material_ledger: {
        lot_id: string;
        state: "required" | "reserved" | "installed" | "wasted" | "recoverable" | "consumed";
        quantity: number;
        provenance: Owner[];
      }[];
      known_hazards: Owner[];
      next_checkpoint: Owner;
      provenance: Owner[];
    };
  };

  export interface AsOf {
    tick: number;
    display: string;
    calendar: string;
    sequence: number;
    phase?: "scene" | "round" | "interval" | "downtime" | "aftermath";
  }
  export interface Items {
    source_id: string;
    source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
    accessible: true;
    label?: string;
    version?: string;
    citation_span?: string;
    supersedes_source_id?: string;
  }
  export interface Owner {
    fact_id: string;
    classification:
      "perceived" | "recorded" | "reported" | "inferred" | "forecast" | "disputed" | "last_known" | "out_of_character";
    statement: string;
    as_of_ledger_time: AsOf;
    confidence_band?: "low" | "moderate" | "high" | "confirmed";
    channel?: "sense" | "document" | "witness" | "analysis" | "memory" | "player_reference";
    /**
     * @minItems 1
     */
    sources: [Items, ...Items[]];
    contradiction_fact_ids?: string[];
    visibility_scope?: "active_character" | "player" | "party_shared";
  }
}

export namespace C2ContractsSchemasReadModelsWorldInvestigation {
  export type MythicRPGC2KnownWorldJourneySiteInvestigationFrontAndLawReadModels =
    KnownWorldMap | JourneyState | SiteRecord | CaseRecord | FactionFrontLegalRecord;
  export type KnownWorldMap = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LastVerified;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "known_world_map";
    payload?: {
      map_id: string;
      location_state: "exact" | "uncertain" | "lost" | "displaced";
      places: {
        place_id: string;
        discovery_state: "unknown" | "reported" | "located" | "entered" | "surveyed" | "mapped";
        knowledge: Method[];
      }[];
      routes: {
        route_id: string;
        state: "known" | "believed" | "uncertain" | "closed" | "damaged" | "last_known";
        knowledge: Method[];
        supported_methods: string[];
      }[];
      sensory_position?: Method;
      last_verified: LastVerified;
    };
  };
  export type JourneyState = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LastVerified;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "journey_state";
    payload?: {
      journey_id: string;
      status: "planning" | "ready" | "underway" | "paused" | "lost" | "arrived" | "abandoned";
      location_state: "exact" | "uncertain" | "lost" | "displaced";
      sensory_position?: Method;
      method: Method;
      pace: "cautious" | "standard" | "fast" | "forced";
      roles: {
        role: "navigator" | "scout" | "operator" | "trailblazer" | "quartermaster" | "guard";
        actor_id: string;
        authority: Method;
      }[];
      current_leg: {
        leg_id: string;
        intended_destination: Method;
        planned_duration: string;
        commit_state: "draft" | "committed" | "resolved";
      };
      known_route_state: Method[];
      resource_forecast: Method[];
      compression: {
        eligible: boolean;
        player_consented: boolean;
        pause_reasons: Method[];
      };
    };
  };
  export type SiteRecord = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LastVerified;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "site_record";
    payload?: {
      site_id: string;
      display_name: string;
      discovery_state: "unknown" | "reported" | "located" | "entered" | "surveyed" | "mapped";
      known_zones: {
        zone_id: string;
        label: string;
        knowledge: Method[];
      }[];
      known_connections: {
        connection_id: string;
        from_zone_id: string;
        to_zone_id: string;
        state: "open" | "closed" | "locked" | "destroyed" | "created" | "blocked" | "uncertain";
        knowledge: Method[];
      }[];
      persistent_changes: Method[];
      current_assessments: Method[];
      last_verified: LastVerified;
    };
  };
  export type CaseRecord = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LastVerified;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "case_record";
    payload?: {
      case_id: string;
      title: string;
      questions: {
        question_id: string;
        text: string;
        status: "open" | "partially_supported" | "supported" | "disputed" | "refuted" | "unresolved";
      }[];
      claims: {
        claim_id: string;
        text: string;
        classification: "reported" | "observed" | "inferred" | "corroborated" | "disputed" | "refuted";
        supporting_evidence_ids: string[];
        contradicting_evidence_ids: string[];
      }[];
      evidence: {
        evidence_id: string;
        observable_content: Method;
        custody: Method;
        integrity_band: "destroyed" | "poor" | "compromised" | "serviceable" | "strong" | "preserved";
        provenance: Method[];
      }[];
      leads: Method[];
      contradictions: Method[];
      deadlines: Method[];
    };
  };
  export type FactionFrontLegalRecord = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LastVerified;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "faction_front_legal_record";
    payload?: {
      subject_id: string;
      faction_knowledge: Method[];
      fronts: {
        front_id: string;
        title: string;
        pressure_state: "latent" | "emerging" | "escalating" | "crisis" | "transition" | "unknown" | "disputed";
        supporting_evidence: Method[];
        known_countermeasures: Method[];
      }[];
      response_tracks: {
        track_id: string;
        track_kind: "case_strength" | "heat" | "exposure" | "threat_assessment" | "notoriety" | "infamy" | "reputation";
        holder_or_audience_id: string;
        state_label: string;
        accessible_value?: number;
        evidence: Method[];
      }[];
      jurisdictions: Method[];
      legal_processes: {
        process_id: string;
        stage:
          | "incident"
          | "report"
          | "jurisdiction_assessment"
          | "case_creation"
          | "suspect_identification"
          | "evidence_collection"
          | "authorization"
          | "enforcement"
          | "adjudication"
          | "sanction_or_resolution";
        authority: Method;
        warrant?: Method;
        allegations: Method[];
        evidence: Method[];
        options: Method[];
      }[];
      reputation: Method[];
    };
  };

  export interface LastVerified {
    tick: number;
    display: string;
    calendar: string;
    sequence: number;
    phase?: "scene" | "round" | "interval" | "downtime" | "aftermath";
  }
  export interface Items {
    source_id: string;
    source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
    accessible: true;
    label?: string;
    version?: string;
    citation_span?: string;
    supersedes_source_id?: string;
  }
  export interface Method {
    fact_id: string;
    classification:
      "perceived" | "recorded" | "reported" | "inferred" | "forecast" | "disputed" | "last_known" | "out_of_character";
    statement: string;
    as_of_ledger_time: LastVerified;
    confidence_band?: "low" | "moderate" | "high" | "confirmed";
    channel?: "sense" | "document" | "witness" | "analysis" | "memory" | "player_reference";
    /**
     * @minItems 1
     */
    sources: [Items, ...Items[]];
    contradiction_fact_ids?: string[];
    visibility_scope?: "active_character" | "player" | "party_shared";
  }
}

export namespace C3ContractsSchemasCommandsAsyncMedia {
  export type MythicRPGC3RecoveryAccessibilityAndMediaCommands =
    | AcknowledgeRecovery
    | RetryRecovery
    | UpdateAccessibilityProfile
    | UpdateContentControlProfile
    | UpdateLocalizationProfile
    | ReviewComicInflection
    | CreateComicSourceLock
    | SetComicWipPolicy
    | RequestComicJobRecovery
    | SubmitComicQaDisposition
    | PublishComicEdition
    | RequestComicCorrection;
  export type AcknowledgeRecovery = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "acknowledge_recovery";
    payload?: {
      recovery_id: string;
    };
  };
  export type RetryRecovery = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "retry_recovery";
    payload?: {
      recovery_id: string;
      expected_checkpoint_id: string;
      preserve_queue: true;
    };
  };
  export type UpdateAccessibilityProfile = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "update_accessibility_profile";
    payload?: {
      profile_id: string;
      /**
       * @minItems 1
       */
      input_modes: [
        "keyboard" | "pointer" | "controller" | "voice" | "switch" | "touch",
        ...("keyboard" | "pointer" | "controller" | "voice" | "switch" | "touch")[]
      ];
      text_scale: "compact" | "standard" | "large" | "extra_large";
      contrast_mode: "standard" | "high" | "system";
      reduced_motion: boolean;
      screen_reader_mode: boolean;
      live_update_mode: "essential_only" | "aggregated" | "detailed";
    };
  };
  export type UpdateContentControlProfile = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "update_content_control_profile";
    payload?: {
      profile_id: string;
      controls: {
        control_id: string;
        topic: string;
        boundary: "line" | "veil" | "standard" | "intense";
      }[];
      explicit_confirmation: true;
    };
  };
  export type UpdateLocalizationProfile = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "update_localization_profile";
    payload?: {
      profile_id: string;
      locale: string;
      reading_direction: "left_to_right" | "right_to_left";
    };
  };
  export type ReviewComicInflection = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "review_comic_inflection";
    payload?: {
      review_id: string;
      decision: "defer" | "decline_optional" | "ready_to_lock";
      included_beat_ids: string[];
      excluded_optional_beat_ids: string[];
      selected_viewpoint_id: string;
      reader_knowledge_ceiling: "character_viewpoint" | "party_shared" | "player_safe" | "omniscient_archive";
    };
  };
  export type CreateComicSourceLock = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "create_comic_source_lock";
    payload?: {
      review_id: string;
      canon_snapshot_id: string;
      canon_state_version: string;
      event_range: {
        start_event_id: string;
        end_event_id: string;
      };
      selected_viewpoint_id: string;
      reader_knowledge_ceiling: "character_viewpoint" | "party_shared" | "player_safe" | "omniscient_archive";
      gameplay_continues: true;
    };
  };
  export type SetComicWipPolicy = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "set_comic_wip_policy";
    payload?: {
      [k: string]: unknown;
    };
  };
  export type RequestComicJobRecovery = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "request_comic_job_recovery";
    payload?: {
      job_id: string;
      expected_checkpoint: string;
      action: "retry_stage" | "resume" | "use_alternate_provider" | "request_manual_review" | "cancel_unpublished_job";
      preserve_completed_work: true;
    };
  };
  export type SubmitComicQaDisposition = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "submit_comic_qa_disposition";
    payload?: {
      asset_id: string;
      qa_result_id: string;
      disposition: "approve" | "reject_to_nearest_valid_stage" | "block_for_targeted_edit";
      source_lock_id: string;
    };
  };
  export type PublishComicEdition = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "publish_comic_edition";
    payload?: {
      issue_id: string;
      edition_id: string;
      source_lock_id: string;
      hard_gates_passed: true;
      accessibility_package_id: string;
      rights_manifest_id: string;
    };
  };
  export type RequestComicCorrection = {
    contract_version: string;
    command_id: string;
    command_type: string;
    idempotency_key: string;
    campaign_id: string;
    actor_id: string;
    viewpoint_id: string;
    source_state_version: string;
    knowledge_snapshot_id: string;
    proposal_id?: string;
    confirmation_class: "routine" | "material" | "consequential";
    input_provenance: "typed" | "dictated" | "structured" | "prior_pattern" | "system_decision";
    payload: {};
  } & {
    command_type?: "request_comic_correction";
    payload?: {
      issue_id: string;
      supersedes_edition_id: string;
      new_edition_id: string;
      correction_reason: string;
      preserve_history: true;
    };
  };
}

export namespace C3ContractsSchemasEventsAsyncMedia {
  export type MythicRPGC3RecoveryAccessibilityAndMediaEvents =
    | ConnectivityStateChanged
    | SaveCheckpointCommitted
    | RecoveryStateChanged
    | AttentionDigestUpdated
    | AccessibilityProfileChanged
    | ContentControlsChanged
    | ComicCaptureUpdated
    | ComicInflectionReady
    | ComicSourceLocked
    | ComicJobStatusChanged
    | ComicReviewRequired
    | ComicEditionPublished
    | ComicEditionSuperseded;
  export type ConnectivityStateChanged = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "connectivity_state_changed";
    payload?: {
      connectivity: "online" | "degraded" | "offline" | "reconnecting";
      play_capability: "full" | "offline_safe" | "read_only" | "canonical_commit_paused";
    };
  };
  export type SaveCheckpointCommitted = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "save_checkpoint_committed";
    payload?: {
      checkpoint_id: string;
      durable_state_version: string;
      comic_capture_preserved: true;
      queue_preserved: true;
    };
  };
  export type RecoveryStateChanged = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "recovery_state_changed";
    payload?: {
      recovery_id: string;
      state: "recovering" | "conflict" | "provider_unavailable" | "unknown_commit" | "restored";
      queue_preserved: true;
      source_locks_preserved: true;
    };
  };
  export type AttentionDigestUpdated = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "attention_digest_updated";
    payload?: {
      digest_id: string;
      unread_count: number;
      knowledge_safe: true;
    };
  };
  export type AccessibilityProfileChanged = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "accessibility_profile_changed";
    payload?: {
      profile_id: string;
      semantic_update_required: true;
    };
  };
  export type ContentControlsChanged = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "content_controls_changed";
    payload?: {
      profile_id: string;
      applies_to_gameplay: true;
      applies_to_comics: true;
    };
  };
  export type ComicCaptureUpdated = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "comic_capture_updated";
    payload?: {
      capture_id: string;
      captured_through_event_id: string;
      canonical_mutation: false;
      gameplay_continues: true;
    };
  };
  export type ComicInflectionReady = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "comic_inflection_ready";
    payload?: {
      review_id: string;
      trigger: "hard_inflection" | "cadence_threshold" | "player_checkpoint" | "campaign_end";
      gameplay_continues: true;
    };
  };
  export type ComicSourceLocked = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "comic_source_locked";
    payload?: {
      source_lock_id: string;
      canon_snapshot_id: string;
      immutable: true;
      gameplay_continues: true;
      world_time_frozen: false;
    };
  };
  export type ComicJobStatusChanged = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "comic_job_status_changed";
    payload?: {
      job_id: string;
      stage:
        | "capturing"
        | "waiting_for_inflection"
        | "preparing"
        | "source_locked"
        | "outlined"
        | "scripted"
        | "storyboarded"
        | "generating"
        | "art_qa"
        | "lettered"
        | "page_qa"
        | "exporting"
        | "approved"
        | "published"
        | "blocked";
      progress_display_mode: "stage_only";
      queue_durable: true;
      gameplay_continues: true;
    };
  };
  export type ComicReviewRequired = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "comic_review_required";
    payload?: {
      job_id: string;
      review_kind: "inflection" | "blocked_asset" | "qa" | "publication";
      wip_requires_opt_in: true;
    };
  };
  export type ComicEditionPublished = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "comic_edition_published";
    payload?: {
      issue_id: string;
      edition_id: string;
      source_lock_id: string;
      immutable: true;
      hard_gates_passed: true;
    };
  };
  export type ComicEditionSuperseded = {
    contract_version: string;
    event_id: string;
    event_type: string;
    campaign_id: string;
    viewpoint_id?: string;
    state_version: string;
    ledger_time: LedgerTime;
    occurred_at: string;
    correlation_id: string;
    causation_id: string;
    knowledge_snapshot_id?: string;
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    event_type?: "comic_edition_superseded";
    payload?: {
      issue_id: string;
      superseded_edition_id: string;
      new_edition_id: string;
      history_preserved: true;
    };
  };

  export interface LedgerTime {
    tick: number;
    display: string;
    calendar: string;
    sequence: number;
    phase?: "scene" | "round" | "interval" | "downtime" | "aftermath";
  }
}

export namespace C3ContractsSchemasMediaMediaProvenance {
  export type MythicRPGC3MediaProvenanceQAAndAccessibilityContracts = MediaAssetManifest | AccessiblePublicationPackage;

  export interface MediaAssetManifest {
    contract_version: string;
    asset_id: string;
    visibility: "protected_media_audit";
    issue_id: string;
    page_id: string;
    panel_id: string;
    layer_id: string;
    source_lock_id: string;
    source_event_ids: string[];
    content_hash: string;
    provider: string;
    model_profile: string;
    generation_settings_ref: string;
    prompt_manifest_ref: string;
    reference_manifest_ids: string[];
    seed: string;
    attempt_number: number;
    edits: {
      edit_id: string;
      kind: "crop" | "color" | "mask" | "paint" | "lettering" | "layout" | "export";
      creator_ref: string;
    }[];
    rights: {
      license_state: "owned" | "licensed" | "public_domain" | "original_generated";
      likeness_authorized: boolean;
      authorization_ref?: string;
    };
    qa_state: "pending" | "failed" | "passed" | "blocked";
    accepted_bytes_retained: true;
    exact_regeneration_assumed: false;
    published_asset_mutable: false;
    supersedes_asset_id?: string;
  }
  export interface AccessiblePublicationPackage {
    contract_version: string;
    package_id: string;
    issue_id: string;
    edition_id: string;
    reader_knowledge_ceiling: "character_viewpoint" | "party_shared" | "player_safe" | "omniscient_archive";
    knowledge_gate_passed: true;
    deterministic_reading_order: string[];
    page_alt_text: Items[];
    dialogue_transcript: Items[];
    speaker_attribution: Items[];
    caption_sfx_transcript: Items[];
    color_independent_identification: true;
    navigable_structure: true;
    content_warnings: Items[];
    localization_profile_id: string;
  }
  export interface Items {
    fact_id: string;
    classification:
      "perceived" | "recorded" | "reported" | "inferred" | "forecast" | "disputed" | "last_known" | "out_of_character";
    statement: string;
    as_of_ledger_time: {
      tick: number;
      display: string;
      calendar: string;
      sequence: number;
      phase?: "scene" | "round" | "interval" | "downtime" | "aftermath";
    };
    confidence_band?: "low" | "moderate" | "high" | "confirmed";
    channel?: "sense" | "document" | "witness" | "analysis" | "memory" | "player_reference";
    /**
     * @minItems 1
     */
    sources: [
      {
        source_id: string;
        source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
        accessible: true;
        label?: string;
        version?: string;
        citation_span?: string;
        supersedes_source_id?: string;
      },
      ...{
        source_id: string;
        source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
        accessible: true;
        label?: string;
        version?: string;
        citation_span?: string;
        supersedes_source_id?: string;
      }[]
    ];
    contradiction_fact_ids?: string[];
    visibility_scope?: "active_character" | "player" | "party_shared";
  }
}

export namespace C3ContractsSchemasReadModelsAccessibilityContentLocalization {
  export type MythicRPGC3AccessibilityContentControlAndLocalizationReadModels =
    AccessibilityProfile | ContentControlProfile | LocalizationProfile | IssueZeroAvailability;
  export type AccessibilityProfile = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: {
      source_id: string;
      source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
      accessible: true;
      label?: string;
      version?: string;
      citation_span?: string;
      supersedes_source_id?: string;
    }[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "accessibility_profile";
    payload?: {
      profile_id: string;
      /**
       * @minItems 1
       */
      input_modes: [
        "keyboard" | "pointer" | "controller" | "voice" | "switch" | "touch",
        ...("keyboard" | "pointer" | "controller" | "voice" | "switch" | "touch")[]
      ];
      text_scale: "compact" | "standard" | "large" | "extra_large";
      contrast_mode: "standard" | "high" | "system";
      reduced_motion: boolean;
      screen_reader_mode: boolean;
      live_update_mode: "essential_only" | "aggregated" | "detailed";
      color_independent: true;
      non_drag_alternative: true;
      hover_independent: true;
      session_persistent: true;
    };
  };
  export type ContentControlProfile = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: {
      source_id: string;
      source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
      accessible: true;
      label?: string;
      version?: string;
      citation_span?: string;
      supersedes_source_id?: string;
    }[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "content_control_profile";
    payload?: {
      profile_id: string;
      controls: {
        control_id: string;
        topic: string;
        boundary: "line" | "veil" | "standard" | "intense";
        presentation_note?: string;
      }[];
      confirmed: true;
      never_inferred_from_prose: true;
      applies_to_gameplay: true;
      applies_to_comics: true;
    };
  };
  export type LocalizationProfile = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: {
      source_id: string;
      source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
      accessible: true;
      label?: string;
      version?: string;
      citation_span?: string;
      supersedes_source_id?: string;
    }[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "localization_profile";
    payload?: {
      profile_id: string;
      locale: string;
      reading_direction: "left_to_right" | "right_to_left";
      separate_lettering_layers: true;
      approved_terminology: {
        term_id: string;
        source_term: string;
        localized_term: string;
      }[];
      meaning_preserved: true;
      source_dialogue_traceable: true;
    };
  };
  export type IssueZeroAvailability = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: {
      source_id: string;
      source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
      accessible: true;
      label?: string;
      version?: string;
      citation_span?: string;
      supersedes_source_id?: string;
    }[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "issue_zero_availability";
    payload?: {
      issue_id: string;
      asset_state: "available" | "preparing" | "unavailable" | "corrupt";
      /**
       * @minItems 4
       */
      supported_modes: [
        "read" | "summarize" | "defer" | "skip",
        "read" | "summarize" | "defer" | "skip",
        "read" | "summarize" | "defer" | "skip",
        "read" | "summarize" | "defer" | "skip",
        ...("read" | "summarize" | "defer" | "skip")[]
      ];
      blocking: false;
      choice_penalty: false;
      fallback_summary_available: true;
      gameplay_start_available: true;
    };
  };

  export interface LedgerTime {
    tick: number;
    display: string;
    calendar: string;
    sequence: number;
    phase?: "scene" | "round" | "interval" | "downtime" | "aftermath";
  }
}

export namespace C3ContractsSchemasReadModelsAsyncAttentionRecovery {
  export type MythicRPGC3ConnectivityRecoveryAndAttentionReadModels =
    ConnectivityState | SaveRecoveryState | AttentionDigest;
  export type ConnectivityState = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: EndLedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "connectivity_state";
    payload?: {
      connectivity: "online" | "degraded" | "offline" | "reconnecting";
      play_capability: "full" | "offline_safe" | "read_only" | "canonical_commit_paused";
      unsent_command_count: number;
      last_durable_state_version: string;
      comic_queue_durable: true;
      recovery_refs: string[];
      accessible_status?: AccessibleStatus;
    };
  };
  export type SaveRecoveryState = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: EndLedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "save_recovery_state";
    payload?: {
      recovery_id: string;
      state: "clean" | "saving" | "recovering" | "conflict" | "provider_unavailable" | "unknown_commit" | "restored";
      durable_checkpoint_id: string;
      last_durable_state_version: string;
      gameplay_access: "full" | "offline_safe" | "read_only" | "paused_for_canonical_conflict";
      queue_preserved: true;
      comic_capture_preserved: true;
      source_locks_preserved: true;
      resumes_from_checkpoint?: true;
      /**
       * @minItems 1
       */
      recovery_actions: [
        {
          action_id: string;
          label: string;
          kind: "retry" | "lookup" | "reconnect" | "compare" | "restore" | "continue_offline" | "contact_support";
        },
        ...{
          action_id: string;
          label: string;
          kind: "retry" | "lookup" | "reconnect" | "compare" | "restore" | "continue_offline" | "contact_support";
        }[]
      ];
      accessible_explanation: AccessibleStatus;
    };
  };
  export type AttentionDigest = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: EndLedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "attention_digest";
    payload?: {
      digest_id: string;
      aggregation_window: {
        start_ledger_time: EndLedgerTime;
        end_ledger_time: EndLedgerTime;
      };
      items: {
        item_id: string;
        category: "world" | "party" | "law" | "front" | "recovery" | "comic" | "system";
        urgency: "ambient" | "notable" | "urgent" | "blocking";
        action_required: boolean;
        delivery_verified: true;
        summary: AccessibleStatus;
        source_event_ids: string[];
        target_surface?: "stage" | "character" | "company" | "world" | "chronicle" | "comic" | "settings" | "recovery";
      }[];
      unread_count: number;
      knowledge_safe: true;
    };
  };

  export interface EndLedgerTime {
    tick: number;
    display: string;
    calendar: string;
    sequence: number;
    phase?: "scene" | "round" | "interval" | "downtime" | "aftermath";
  }
  export interface Items {
    source_id: string;
    source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
    accessible: true;
    label?: string;
    version?: string;
    citation_span?: string;
    supersedes_source_id?: string;
  }
  export interface AccessibleStatus {
    fact_id: string;
    classification:
      "perceived" | "recorded" | "reported" | "inferred" | "forecast" | "disputed" | "last_known" | "out_of_character";
    statement: string;
    as_of_ledger_time: EndLedgerTime;
    confidence_band?: "low" | "moderate" | "high" | "confirmed";
    channel?: "sense" | "document" | "witness" | "analysis" | "memory" | "player_reference";
    /**
     * @minItems 1
     */
    sources: [Items, ...Items[]];
    contradiction_fact_ids?: string[];
    visibility_scope?: "active_character" | "player" | "party_shared";
  }
}

export namespace C3ContractsSchemasReadModelsComicCaptureSourceLock {
  export type MythicRPGC3ComicCaptureInflectionAndSourceLockReadModels =
    ComicCaptureRecord | InflectionReview | SourceLockRecord;
  export type ComicCaptureRecord = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: EndLedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "comic_capture_record";
    payload?: {
      capture_id: string;
      captured_through_event_id: string;
      captures: {
        beat_id: string;
        source_event_ids: string[];
        start_ledger_time: EndLedgerTime;
        end_ledger_time: EndLedgerTime;
        viewpoint_id: string;
        knowledge_ceiling: "character_viewpoint" | "party_shared" | "player_safe" | "omniscient_archive";
        visible_state: {
          fact_id: string;
          classification:
            | "perceived"
            | "recorded"
            | "reported"
            | "inferred"
            | "forecast"
            | "disputed"
            | "last_known"
            | "out_of_character";
          statement: string;
          as_of_ledger_time: EndLedgerTime;
          confidence_band?: "low" | "moderate" | "high" | "confirmed";
          channel?: "sense" | "document" | "witness" | "analysis" | "memory" | "player_reference";
          /**
           * @minItems 1
           */
          sources: [Items, ...Items[]];
          contradiction_fact_ids?: string[];
          visibility_scope?: "active_character" | "player" | "party_shared";
        }[];
        dialogue_source_ids: string[];
        candidate_form:
          | "action"
          | "decision"
          | "reveal"
          | "relationship"
          | "consequence"
          | "travel"
          | "survival"
          | "investigation"
          | "comedy"
          | "horror"
          | "transformation"
          | "establishing"
          | "transition"
          | "montage";
      }[];
      foreground_cost: "lightweight";
      canonical_mutation: false;
      gameplay_continues: true;
    };
  };
  export type InflectionReview = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: EndLedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "comic_inflection_review";
    payload?: {
      review_id: string;
      trigger: "hard_inflection" | "cadence_threshold" | "player_checkpoint" | "campaign_end";
      eligible_event_range: {
        start_event_id: string;
        end_event_id: string;
      };
      required_beat_ids: string[];
      optional_beat_ids: string[];
      viewpoint_options: string[];
      selected_knowledge_ceiling: "character_viewpoint" | "party_shared" | "player_safe" | "omniscient_archive";
      decision_state: "pending" | "deferred" | "reviewed" | "declined_optional" | "ready_to_lock";
      gameplay_continues: true;
    };
  };
  export type SourceLockRecord = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: EndLedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "comic_source_lock_record";
    payload?: {
      source_lock_id: string;
      immutable: true;
      event_range: {
        start_event_id: string;
        end_event_id: string;
      };
      canon_snapshot_id: string;
      canon_state_version: string;
      locked_at: string;
      selected_viewpoint_id: string;
      reader_knowledge_ceiling: "character_viewpoint" | "party_shared" | "player_safe" | "omniscient_archive";
      included_beat_ids: string[];
      excluded_optional_beat_ids: string[];
      rights_manifest_refs: string[];
      gameplay_continues: true;
      world_time_frozen: false;
      next_adaptation_window_start_event_id?: string;
    };
  };

  export interface EndLedgerTime {
    tick: number;
    display: string;
    calendar: string;
    sequence: number;
    phase?: "scene" | "round" | "interval" | "downtime" | "aftermath";
  }
  export interface Items {
    source_id: string;
    source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
    accessible: true;
    label?: string;
    version?: string;
    citation_span?: string;
    supersedes_source_id?: string;
  }
}

export namespace C3ContractsSchemasReadModelsComicProductionReader {
  export type MythicRPGC3ComicProductionReaderAndEditionReadModels = ComicJobRecord | ComicReaderRecord | EditionHistory;
  export type ComicJobRecord = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "comic_job_record";
    payload?: {
      [k: string]: unknown;
    };
  };
  export type ComicReaderRecord = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "comic_reader_record";
    payload?: {
      [k: string]: unknown;
    };
  };
  export type EditionHistory = {
    contract_version: string;
    payload_type: string;
    campaign_id: string;
    viewpoint_id: string;
    state_version: string;
    knowledge_snapshot_id: string;
    ledger_time: LedgerTime;
    generated_at: string;
    freshness: "current" | "superseded_nonmaterial" | "stale_material" | "last_known" | "disputed" | "unknown";
    permissions: {
      [k: string]: unknown;
    }[];
    provenance: Items[];
    accessibility?: {
      [k: string]: unknown;
    };
    payload: {};
  } & {
    payload_type?: "comic_edition_history";
    payload?: {
      issue_id: string;
      current_edition_id: string;
      correction_policy: "new_superseding_edition_only";
      /**
       * @minItems 1
       */
      editions: [
        {
          edition_id: string;
          version: string;
          state: "published" | "superseded";
          immutable: true;
          source_lock_id: string;
          published_at: string;
          supersedes_edition_id?: string;
          correction_summary?: BlockedReason;
        },
        ...{
          edition_id: string;
          version: string;
          state: "published" | "superseded";
          immutable: true;
          source_lock_id: string;
          published_at: string;
          supersedes_edition_id?: string;
          correction_summary?: BlockedReason;
        }[]
      ];
    };
  };

  export interface LedgerTime {
    tick: number;
    display: string;
    calendar: string;
    sequence: number;
    phase?: "scene" | "round" | "interval" | "downtime" | "aftermath";
  }
  export interface Items {
    source_id: string;
    source_type: "event" | "record" | "observation" | "communication" | "rule" | "correction";
    accessible: true;
    label?: string;
    version?: string;
    citation_span?: string;
    supersedes_source_id?: string;
  }
  export interface BlockedReason {
    fact_id: string;
    classification:
      "perceived" | "recorded" | "reported" | "inferred" | "forecast" | "disputed" | "last_known" | "out_of_character";
    statement: string;
    as_of_ledger_time: LedgerTime;
    confidence_band?: "low" | "moderate" | "high" | "confirmed";
    channel?: "sense" | "document" | "witness" | "analysis" | "memory" | "player_reference";
    /**
     * @minItems 1
     */
    sources: [Items, ...Items[]];
    contradiction_fact_ids?: string[];
    visibility_scope?: "active_character" | "player" | "party_shared";
  }
}

export namespace C3ContractsSchemasTelemetryPrivacySafeAnalytics {
  export interface MythicRPGC3PrivacySafeAnalyticsEvent {
    [k: string]: unknown;
  }
  /**
   * This interface was referenced by `MythicRPGC3PrivacySafeAnalyticsEvent`'s JSON-Schema
   * via the `definition` "PrivacySafeAnalyticsEvent".
   */
  export interface PrivacySafeAnalyticsEvent {
    contract_version: string;
    analytics_event_id: string;
    category: "navigation" | "accessibility" | "performance" | "contract_outcome" | "comic_pipeline" | "recovery";
    surface:
      | "home"
      | "onboarding"
      | "stage"
      | "character"
      | "company"
      | "holdings"
      | "world"
      | "chronicle"
      | "comic"
      | "settings"
      | "recovery";
    coarse_outcome: "opened" | "completed" | "abandoned" | "recovered" | "failed" | "blocked";
    contract_ref?: string;
    contains_player_content: false;
    contains_private_canon: false;
    contains_prompt_text: false;
    contains_raw_dialogue: false;
    contains_asset_bytes: false;
    alters_play: false;
    retention_class: "ephemeral" | "aggregate_only" | "diagnostic_opt_in";
    consent_scope: "essential" | "product_improvement_opt_in" | "diagnostic_opt_in";
  }
}
