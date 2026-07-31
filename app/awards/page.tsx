import Award from "../components/layout/award/Award";
import data from "@/data/data.json";
import type { AwardsPageData } from "@/type/typeSection";

export default function AwardsPage() {
  const awards = data.awardsPage as AwardsPageData;

  return <Award data={awards} />;
}