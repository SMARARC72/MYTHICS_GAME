import { drownedArchiveContent } from "@/src/content/drowned-archive";
import type { ActionCommand, CampaignState } from "@/src/engine/types";
import { CampaignService } from "@/src/server/campaign-service";
import { projectDrownedArchiveStage } from "@/src/server/projectors/drowned-archive-projector";
export const SLICE_CAMPAIGN_ID = "campaign-drowned-archive-preview";
const initial: CampaignState={campaignId:SLICE_CAMPAIGN_ID,stateVersion:0,ledgerMinute:0,location:"drowned-archive-threshold",tidePressure:2,vitality:8,evidence:["salt-ledger-resin"],relationshipEvidence:["Ilya warned Mara about the threshold"],chronicle:[]};
const globalKey="__mythicSliceService" as const;
type GlobalSlice = typeof globalThis & { [globalKey]?: CampaignService };
export function sliceService(){const root=globalThis as GlobalSlice;if(!root[globalKey]){const service=new CampaignService();service.create(initial);root[globalKey]=service;}return root[globalKey];}
export function stageProjection(){const service=sliceService();const state=service.state(SLICE_CAMPAIGN_ID);const projection=projectDrownedArchiveStage(drownedArchiveContent,"mara-vale",`event:${state.stateVersion}`);return {...projection,ledgerTime:`Cycle 18 · +${state.ledgerMinute} minutes`,scene:{...projection.scene,pressure:{...projection.scene.pressure,value:state.tidePressure}},character:{vitality:state.vitality,evidence:state.evidence},chronicle:state.chronicle,eventSequence:state.stateVersion};}
export function actionCommand(input:{proposalId?:string;goal:string;method:string;difficulty?:number;stateVersion?:string},idempotencyKey:string):ActionCommand{return {commandId:input.proposalId??crypto.randomUUID(),campaignId:SLICE_CAMPAIGN_ID,idempotencyKey,expectedStateVersion:Number(input.stateVersion??0),goal:input.goal,method:input.method,actorModifier:5,difficulty:input.difficulty??12};}
