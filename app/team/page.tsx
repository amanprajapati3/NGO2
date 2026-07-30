import Team from "../components/layout/team/Team";
import data from "@/data/data.json";
import type { TeamSectionData } from "@/type/typeSection";

const team = data.team as TeamSectionData;

export default function TeamPage() {
  return (
    <>
      <Team data={team} />
    </>
  );
}