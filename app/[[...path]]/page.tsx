import { MythicApp } from "@/src/components/mythic-app";
import { stageProjection } from "@/src/server/vertical-slice";
export default async function Page({ params }: { params: Promise<{ path?: string[] }> }) {
  const path = (await params).path ?? [];
  const route = `/${path.join("/")}`;
  return <MythicApp path={route} initialStage={route.includes("/stage") ? stageProjection() : undefined} />;
}
