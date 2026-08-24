// Generated from pinned approved C1–C3 schemas. Do not edit.
export const CONTRACT_SCHEMAS = [
  {
    "path": "c1_contracts/schemas/commands/core-loop.schema.json",
    "id": "https://contracts.mythic-rpg.local/c1/schemas/commands/core-loop.schema.json",
    "title": "Mythic RPG C1 Core Loop Commands and Receipts",
    "definitions": [
      "CommandReceipt",
      "CommitActionCommand",
      "ForecastProposalCommand",
      "InterpretIntentCommand",
      "ResolveCommitStatusCommand",
      "ReviseProposalCommand"
    ]
  },
  {
    "path": "c1_contracts/schemas/common/common.schema.json",
    "id": "https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json",
    "title": "Mythic RPG C1 Common Contract Vocabulary",
    "definitions": [
      "AccessibilitySemantic",
      "CommandEnvelope",
      "ConfirmationClass",
      "ContractVersion",
      "EventEnvelope",
      "Freshness",
      "InputProvenance",
      "KnowledgeClass",
      "KnowledgeFact",
      "KnowledgeSnapshotId",
      "LedgerTime",
      "OpaqueId",
      "Permission",
      "ProvenanceRef",
      "PublicOutcome",
      "ReadModelEnvelope",
      "ReceiptEnvelope",
      "RecoveryInstruction",
      "StateVersion"
    ]
  },
  {
    "path": "c1_contracts/schemas/events/core-loop.schema.json",
    "id": "https://contracts.mythic-rpg.local/c1/schemas/events/core-loop.schema.json",
    "title": "Mythic RPG C1 Core Loop Events",
    "definitions": [
      "AccessibilityAnnouncement",
      "AccessibleProjectionUpdated",
      "CanonicalStateCommitted",
      "CommandStatusChanged",
      "DecisionWindowChanged",
      "RecoveryRequired"
    ]
  },
  {
    "path": "c1_contracts/schemas/read-models/core-loop.schema.json",
    "id": "https://contracts.mythic-rpg.local/c1/schemas/read-models/core-loop.schema.json",
    "title": "Mythic RPG C1 Core Loop Read Models",
    "definitions": [
      "EntityContextLens",
      "IntentCapability",
      "InterpretedProposal",
      "ProposalForecast",
      "ResolutionBeat",
      "StageFrame",
      "WorldStripStatus"
    ]
  },
  {
    "path": "c2_contracts/schemas/commands/system-breadth.schema.json",
    "id": "https://contracts.mythic-rpg.local/c2/schemas/commands/system-breadth.schema.json",
    "title": "Mythic RPG C2 System-Breadth Commands",
    "definitions": [
      "ChooseContinuation",
      "CommandReceipt",
      "CommitAdvancement",
      "CommitJourneyLeg",
      "CommitProjectInterval",
      "DraftAdvancement",
      "DraftJourney",
      "DraftProjectInterval",
      "RecordCaseClaim",
      "RequestAutonomousActorAction",
      "SubmitRecruitmentOffer",
      "TransferCustody"
    ]
  },
  {
    "path": "c2_contracts/schemas/events/system-breadth.schema.json",
    "id": "https://contracts.mythic-rpg.local/c2/schemas/events/system-breadth.schema.json",
    "title": "Mythic RPG C2 System-Breadth Events",
    "definitions": [
      "AutonomousActorStatusChanged",
      "ChronicleConsequenceRouted",
      "CustodyTransferred",
      "DefeatContinuationChanged",
      "JourneyIntervalResolved",
      "ProgressionCommitted",
      "ProjectCheckpointReached",
      "RelicStatusChanged",
      "WorldRecordUpdated"
    ]
  },
  {
    "path": "c2_contracts/schemas/read-models/character-continuation.schema.json",
    "id": "https://contracts.mythic-rpg.local/c2/schemas/read-models/character-continuation.schema.json",
    "title": "Mythic RPG C2 Character, Progression, Harm and Continuation Read Models",
    "definitions": [
      "AdvancementDraft",
      "BpLedger",
      "CharacterRecord",
      "ContinuationState",
      "XpEntry"
    ]
  },
  {
    "path": "c2_contracts/schemas/read-models/chronicle-routing.schema.json",
    "id": "https://contracts.mythic-rpg.local/c2/schemas/read-models/chronicle-routing.schema.json",
    "title": "Mythic RPG C2 Chronicle Consequence Routing Read Models",
    "definitions": [
      "ChronicleConsequenceBundle"
    ]
  },
  {
    "path": "c2_contracts/schemas/read-models/company-relics.schema.json",
    "id": "https://contracts.mythic-rpg.local/c2/schemas/read-models/company-relics.schema.json",
    "title": "Mythic RPG C2 Company, Autonomous Actor and Relic Read Models",
    "definitions": [
      "AutonomousActorStatus",
      "CompanyRecord",
      "RelicRecord"
    ]
  },
  {
    "path": "c2_contracts/schemas/read-models/holdings-projects.schema.json",
    "id": "https://contracts.mythic-rpg.local/c2/schemas/read-models/holdings-projects.schema.json",
    "title": "Mythic RPG C2 Holdings, Custody and Project Read Models",
    "definitions": [
      "HoldingsRecord",
      "ProjectRecord"
    ]
  },
  {
    "path": "c2_contracts/schemas/read-models/world-investigation.schema.json",
    "id": "https://contracts.mythic-rpg.local/c2/schemas/read-models/world-investigation.schema.json",
    "title": "Mythic RPG C2 Known World, Journey, Site, Investigation, Front and Law Read Models",
    "definitions": [
      "CaseRecord",
      "FactionFrontLegalRecord",
      "JourneyState",
      "KnownWorldMap",
      "SiteRecord"
    ]
  },
  {
    "path": "c3_contracts/schemas/commands/async-media.schema.json",
    "id": "https://contracts.mythic-rpg.local/c3/schemas/commands/async-media.schema.json",
    "title": "Mythic RPG C3 Recovery, Accessibility and Media Commands",
    "definitions": [
      "AcknowledgeRecovery",
      "CreateComicSourceLock",
      "PublishComicEdition",
      "RequestComicCorrection",
      "RequestComicJobRecovery",
      "RetryRecovery",
      "ReviewComicInflection",
      "SetComicWipPolicy",
      "SubmitComicQaDisposition",
      "UpdateAccessibilityProfile",
      "UpdateContentControlProfile",
      "UpdateLocalizationProfile"
    ]
  },
  {
    "path": "c3_contracts/schemas/events/async-media.schema.json",
    "id": "https://contracts.mythic-rpg.local/c3/schemas/events/async-media.schema.json",
    "title": "Mythic RPG C3 Recovery, Accessibility and Media Events",
    "definitions": [
      "AccessibilityProfileChanged",
      "AttentionDigestUpdated",
      "ComicCaptureUpdated",
      "ComicEditionPublished",
      "ComicEditionSuperseded",
      "ComicInflectionReady",
      "ComicJobStatusChanged",
      "ComicReviewRequired",
      "ComicSourceLocked",
      "ConnectivityStateChanged",
      "ContentControlsChanged",
      "RecoveryStateChanged",
      "SaveCheckpointCommitted"
    ]
  },
  {
    "path": "c3_contracts/schemas/media/media-provenance.schema.json",
    "id": "https://contracts.mythic-rpg.local/c3/schemas/media/media-provenance.schema.json",
    "title": "Mythic RPG C3 Media Provenance, QA and Accessibility Contracts",
    "definitions": [
      "AccessiblePublicationPackage",
      "MediaAssetManifest"
    ]
  },
  {
    "path": "c3_contracts/schemas/read-models/accessibility-content-localization.schema.json",
    "id": "https://contracts.mythic-rpg.local/c3/schemas/read-models/accessibility-content-localization.schema.json",
    "title": "Mythic RPG C3 Accessibility, Content-Control and Localization Read Models",
    "definitions": [
      "AccessibilityProfile",
      "ContentControlProfile",
      "IssueZeroAvailability",
      "LocalizationProfile"
    ]
  },
  {
    "path": "c3_contracts/schemas/read-models/async-attention-recovery.schema.json",
    "id": "https://contracts.mythic-rpg.local/c3/schemas/read-models/async-attention-recovery.schema.json",
    "title": "Mythic RPG C3 Connectivity, Recovery and Attention Read Models",
    "definitions": [
      "AttentionDigest",
      "ConnectivityState",
      "SaveRecoveryState"
    ]
  },
  {
    "path": "c3_contracts/schemas/read-models/comic-capture-source-lock.schema.json",
    "id": "https://contracts.mythic-rpg.local/c3/schemas/read-models/comic-capture-source-lock.schema.json",
    "title": "Mythic RPG C3 Comic Capture, Inflection and Source Lock Read Models",
    "definitions": [
      "ComicCaptureRecord",
      "InflectionReview",
      "SourceLockRecord"
    ]
  },
  {
    "path": "c3_contracts/schemas/read-models/comic-production-reader.schema.json",
    "id": "https://contracts.mythic-rpg.local/c3/schemas/read-models/comic-production-reader.schema.json",
    "title": "Mythic RPG C3 Comic Production, Reader and Edition Read Models",
    "definitions": [
      "ComicJobRecord",
      "ComicReaderRecord",
      "EditionHistory"
    ]
  },
  {
    "path": "c3_contracts/schemas/telemetry/privacy-safe-analytics.schema.json",
    "id": "https://contracts.mythic-rpg.local/c3/schemas/telemetry/privacy-safe-analytics.schema.json",
    "title": "Mythic RPG C3 Privacy-Safe Analytics Event",
    "definitions": [
      "PrivacySafeAnalyticsEvent"
    ]
  }
] as const;
export type ContractSchemaId = typeof CONTRACT_SCHEMAS[number]["id"];
export type ContractSchemaPath = typeof CONTRACT_SCHEMAS[number]["path"];
export const CONTRACT_DEFINITION_REFS = ["https://contracts.mythic-rpg.local/c1/schemas/commands/core-loop.schema.json#/$defs/CommandReceipt","https://contracts.mythic-rpg.local/c1/schemas/commands/core-loop.schema.json#/$defs/CommitActionCommand","https://contracts.mythic-rpg.local/c1/schemas/commands/core-loop.schema.json#/$defs/ForecastProposalCommand","https://contracts.mythic-rpg.local/c1/schemas/commands/core-loop.schema.json#/$defs/InterpretIntentCommand","https://contracts.mythic-rpg.local/c1/schemas/commands/core-loop.schema.json#/$defs/ResolveCommitStatusCommand","https://contracts.mythic-rpg.local/c1/schemas/commands/core-loop.schema.json#/$defs/ReviseProposalCommand","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/AccessibilitySemantic","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/CommandEnvelope","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/ConfirmationClass","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/ContractVersion","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/EventEnvelope","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/Freshness","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/InputProvenance","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/KnowledgeClass","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/KnowledgeFact","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/KnowledgeSnapshotId","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/LedgerTime","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/OpaqueId","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/Permission","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/ProvenanceRef","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/PublicOutcome","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/ReadModelEnvelope","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/ReceiptEnvelope","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/RecoveryInstruction","https://contracts.mythic-rpg.local/c1/schemas/common/common.schema.json#/$defs/StateVersion","https://contracts.mythic-rpg.local/c1/schemas/events/core-loop.schema.json#/$defs/AccessibilityAnnouncement","https://contracts.mythic-rpg.local/c1/schemas/events/core-loop.schema.json#/$defs/AccessibleProjectionUpdated","https://contracts.mythic-rpg.local/c1/schemas/events/core-loop.schema.json#/$defs/CanonicalStateCommitted","https://contracts.mythic-rpg.local/c1/schemas/events/core-loop.schema.json#/$defs/CommandStatusChanged","https://contracts.mythic-rpg.local/c1/schemas/events/core-loop.schema.json#/$defs/DecisionWindowChanged","https://contracts.mythic-rpg.local/c1/schemas/events/core-loop.schema.json#/$defs/RecoveryRequired","https://contracts.mythic-rpg.local/c1/schemas/read-models/core-loop.schema.json#/$defs/EntityContextLens","https://contracts.mythic-rpg.local/c1/schemas/read-models/core-loop.schema.json#/$defs/IntentCapability","https://contracts.mythic-rpg.local/c1/schemas/read-models/core-loop.schema.json#/$defs/InterpretedProposal","https://contracts.mythic-rpg.local/c1/schemas/read-models/core-loop.schema.json#/$defs/ProposalForecast","https://contracts.mythic-rpg.local/c1/schemas/read-models/core-loop.schema.json#/$defs/ResolutionBeat","https://contracts.mythic-rpg.local/c1/schemas/read-models/core-loop.schema.json#/$defs/StageFrame","https://contracts.mythic-rpg.local/c1/schemas/read-models/core-loop.schema.json#/$defs/WorldStripStatus","https://contracts.mythic-rpg.local/c2/schemas/commands/system-breadth.schema.json#/$defs/ChooseContinuation","https://contracts.mythic-rpg.local/c2/schemas/commands/system-breadth.schema.json#/$defs/CommandReceipt","https://contracts.mythic-rpg.local/c2/schemas/commands/system-breadth.schema.json#/$defs/CommitAdvancement","https://contracts.mythic-rpg.local/c2/schemas/commands/system-breadth.schema.json#/$defs/CommitJourneyLeg","https://contracts.mythic-rpg.local/c2/schemas/commands/system-breadth.schema.json#/$defs/CommitProjectInterval","https://contracts.mythic-rpg.local/c2/schemas/commands/system-breadth.schema.json#/$defs/DraftAdvancement","https://contracts.mythic-rpg.local/c2/schemas/commands/system-breadth.schema.json#/$defs/DraftJourney","https://contracts.mythic-rpg.local/c2/schemas/commands/system-breadth.schema.json#/$defs/DraftProjectInterval","https://contracts.mythic-rpg.local/c2/schemas/commands/system-breadth.schema.json#/$defs/RecordCaseClaim","https://contracts.mythic-rpg.local/c2/schemas/commands/system-breadth.schema.json#/$defs/RequestAutonomousActorAction","https://contracts.mythic-rpg.local/c2/schemas/commands/system-breadth.schema.json#/$defs/SubmitRecruitmentOffer","https://contracts.mythic-rpg.local/c2/schemas/commands/system-breadth.schema.json#/$defs/TransferCustody","https://contracts.mythic-rpg.local/c2/schemas/events/system-breadth.schema.json#/$defs/AutonomousActorStatusChanged","https://contracts.mythic-rpg.local/c2/schemas/events/system-breadth.schema.json#/$defs/ChronicleConsequenceRouted","https://contracts.mythic-rpg.local/c2/schemas/events/system-breadth.schema.json#/$defs/CustodyTransferred","https://contracts.mythic-rpg.local/c2/schemas/events/system-breadth.schema.json#/$defs/DefeatContinuationChanged","https://contracts.mythic-rpg.local/c2/schemas/events/system-breadth.schema.json#/$defs/JourneyIntervalResolved","https://contracts.mythic-rpg.local/c2/schemas/events/system-breadth.schema.json#/$defs/ProgressionCommitted","https://contracts.mythic-rpg.local/c2/schemas/events/system-breadth.schema.json#/$defs/ProjectCheckpointReached","https://contracts.mythic-rpg.local/c2/schemas/events/system-breadth.schema.json#/$defs/RelicStatusChanged","https://contracts.mythic-rpg.local/c2/schemas/events/system-breadth.schema.json#/$defs/WorldRecordUpdated","https://contracts.mythic-rpg.local/c2/schemas/read-models/character-continuation.schema.json#/$defs/AdvancementDraft","https://contracts.mythic-rpg.local/c2/schemas/read-models/character-continuation.schema.json#/$defs/BpLedger","https://contracts.mythic-rpg.local/c2/schemas/read-models/character-continuation.schema.json#/$defs/CharacterRecord","https://contracts.mythic-rpg.local/c2/schemas/read-models/character-continuation.schema.json#/$defs/ContinuationState","https://contracts.mythic-rpg.local/c2/schemas/read-models/character-continuation.schema.json#/$defs/XpEntry","https://contracts.mythic-rpg.local/c2/schemas/read-models/chronicle-routing.schema.json#/$defs/ChronicleConsequenceBundle","https://contracts.mythic-rpg.local/c2/schemas/read-models/company-relics.schema.json#/$defs/AutonomousActorStatus","https://contracts.mythic-rpg.local/c2/schemas/read-models/company-relics.schema.json#/$defs/CompanyRecord","https://contracts.mythic-rpg.local/c2/schemas/read-models/company-relics.schema.json#/$defs/RelicRecord","https://contracts.mythic-rpg.local/c2/schemas/read-models/holdings-projects.schema.json#/$defs/HoldingsRecord","https://contracts.mythic-rpg.local/c2/schemas/read-models/holdings-projects.schema.json#/$defs/ProjectRecord","https://contracts.mythic-rpg.local/c2/schemas/read-models/world-investigation.schema.json#/$defs/CaseRecord","https://contracts.mythic-rpg.local/c2/schemas/read-models/world-investigation.schema.json#/$defs/FactionFrontLegalRecord","https://contracts.mythic-rpg.local/c2/schemas/read-models/world-investigation.schema.json#/$defs/JourneyState","https://contracts.mythic-rpg.local/c2/schemas/read-models/world-investigation.schema.json#/$defs/KnownWorldMap","https://contracts.mythic-rpg.local/c2/schemas/read-models/world-investigation.schema.json#/$defs/SiteRecord","https://contracts.mythic-rpg.local/c3/schemas/commands/async-media.schema.json#/$defs/AcknowledgeRecovery","https://contracts.mythic-rpg.local/c3/schemas/commands/async-media.schema.json#/$defs/CreateComicSourceLock","https://contracts.mythic-rpg.local/c3/schemas/commands/async-media.schema.json#/$defs/PublishComicEdition","https://contracts.mythic-rpg.local/c3/schemas/commands/async-media.schema.json#/$defs/RequestComicCorrection","https://contracts.mythic-rpg.local/c3/schemas/commands/async-media.schema.json#/$defs/RequestComicJobRecovery","https://contracts.mythic-rpg.local/c3/schemas/commands/async-media.schema.json#/$defs/RetryRecovery","https://contracts.mythic-rpg.local/c3/schemas/commands/async-media.schema.json#/$defs/ReviewComicInflection","https://contracts.mythic-rpg.local/c3/schemas/commands/async-media.schema.json#/$defs/SetComicWipPolicy","https://contracts.mythic-rpg.local/c3/schemas/commands/async-media.schema.json#/$defs/SubmitComicQaDisposition","https://contracts.mythic-rpg.local/c3/schemas/commands/async-media.schema.json#/$defs/UpdateAccessibilityProfile","https://contracts.mythic-rpg.local/c3/schemas/commands/async-media.schema.json#/$defs/UpdateContentControlProfile","https://contracts.mythic-rpg.local/c3/schemas/commands/async-media.schema.json#/$defs/UpdateLocalizationProfile","https://contracts.mythic-rpg.local/c3/schemas/events/async-media.schema.json#/$defs/AccessibilityProfileChanged","https://contracts.mythic-rpg.local/c3/schemas/events/async-media.schema.json#/$defs/AttentionDigestUpdated","https://contracts.mythic-rpg.local/c3/schemas/events/async-media.schema.json#/$defs/ComicCaptureUpdated","https://contracts.mythic-rpg.local/c3/schemas/events/async-media.schema.json#/$defs/ComicEditionPublished","https://contracts.mythic-rpg.local/c3/schemas/events/async-media.schema.json#/$defs/ComicEditionSuperseded","https://contracts.mythic-rpg.local/c3/schemas/events/async-media.schema.json#/$defs/ComicInflectionReady","https://contracts.mythic-rpg.local/c3/schemas/events/async-media.schema.json#/$defs/ComicJobStatusChanged","https://contracts.mythic-rpg.local/c3/schemas/events/async-media.schema.json#/$defs/ComicReviewRequired","https://contracts.mythic-rpg.local/c3/schemas/events/async-media.schema.json#/$defs/ComicSourceLocked","https://contracts.mythic-rpg.local/c3/schemas/events/async-media.schema.json#/$defs/ConnectivityStateChanged","https://contracts.mythic-rpg.local/c3/schemas/events/async-media.schema.json#/$defs/ContentControlsChanged","https://contracts.mythic-rpg.local/c3/schemas/events/async-media.schema.json#/$defs/RecoveryStateChanged","https://contracts.mythic-rpg.local/c3/schemas/events/async-media.schema.json#/$defs/SaveCheckpointCommitted","https://contracts.mythic-rpg.local/c3/schemas/media/media-provenance.schema.json#/$defs/AccessiblePublicationPackage","https://contracts.mythic-rpg.local/c3/schemas/media/media-provenance.schema.json#/$defs/MediaAssetManifest","https://contracts.mythic-rpg.local/c3/schemas/read-models/accessibility-content-localization.schema.json#/$defs/AccessibilityProfile","https://contracts.mythic-rpg.local/c3/schemas/read-models/accessibility-content-localization.schema.json#/$defs/ContentControlProfile","https://contracts.mythic-rpg.local/c3/schemas/read-models/accessibility-content-localization.schema.json#/$defs/IssueZeroAvailability","https://contracts.mythic-rpg.local/c3/schemas/read-models/accessibility-content-localization.schema.json#/$defs/LocalizationProfile","https://contracts.mythic-rpg.local/c3/schemas/read-models/async-attention-recovery.schema.json#/$defs/AttentionDigest","https://contracts.mythic-rpg.local/c3/schemas/read-models/async-attention-recovery.schema.json#/$defs/ConnectivityState","https://contracts.mythic-rpg.local/c3/schemas/read-models/async-attention-recovery.schema.json#/$defs/SaveRecoveryState","https://contracts.mythic-rpg.local/c3/schemas/read-models/comic-capture-source-lock.schema.json#/$defs/ComicCaptureRecord","https://contracts.mythic-rpg.local/c3/schemas/read-models/comic-capture-source-lock.schema.json#/$defs/InflectionReview","https://contracts.mythic-rpg.local/c3/schemas/read-models/comic-capture-source-lock.schema.json#/$defs/SourceLockRecord","https://contracts.mythic-rpg.local/c3/schemas/read-models/comic-production-reader.schema.json#/$defs/ComicJobRecord","https://contracts.mythic-rpg.local/c3/schemas/read-models/comic-production-reader.schema.json#/$defs/ComicReaderRecord","https://contracts.mythic-rpg.local/c3/schemas/read-models/comic-production-reader.schema.json#/$defs/EditionHistory","https://contracts.mythic-rpg.local/c3/schemas/telemetry/privacy-safe-analytics.schema.json#/$defs/PrivacySafeAnalyticsEvent"] as readonly string[];
export const CONTRACT_OPERATION_IDS = ["acknowledgeRecovery","chooseContinuation","commitAction","commitAdvancement","commitJourneyLeg","commitProjectInterval","createComicSourceLock","draftAdvancement","draftJourney","draftProjectInterval","forecastProposal","getAccessibilityProfile","getAdvancementDraft","getAttentionDigest","getAutonomousActorStatus","getCaseRecord","getCharacterRecord","getChronicleConsequenceBundle","getComicCaptureRecord","getComicEditionHistory","getComicInflectionReview","getComicJobRecord","getComicReaderRecord","getComicSourceLockRecord","getCompanyRecord","getConnectivityState","getContentControlProfile","getContinuationState","getEntityContextLens","getFactionFrontLegalRecord","getHoldingsRecord","getIntentCapability","getIssueZeroAvailability","getJourneyState","getKnownWorldMap","getLocalizationProfile","getMediaAssetManifest","getProjectRecord","getRelicRecord","getSaveRecoveryState","getSiteRecord","getStageFrame","getWorldStripStatus","interpretIntent","publishComicEdition","recordCaseClaim","requestAutonomousActorAction","requestComicCorrection","requestComicJobRecovery","resolveCommitStatus","retryRecovery","reviewComicInflection","reviseProposal","setComicWipPolicy","submitComicQaDisposition","submitRecruitmentOffer","transferCustody","updateAccessibilityProfile","updateContentControlProfile","updateLocalizationProfile"] as const;
