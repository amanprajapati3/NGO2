import data from "@/data/data.json";
import type { IndustryPageData } from "@/type/typeSection"
import Industry from "../components/layout/industryPage/Industry";

export default function IndustryPage() {
  const industry = data.industryPage as IndustryPageData;

  return <Industry data={industry} />;
}