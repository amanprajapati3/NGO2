import SupportPage from "../components/layout/support/Support";
import data from "@/data/data.json";
import type { SupportPageData } from "@/type/typeSection";

export default function Support() {
  const support = data.supportPage as SupportPageData;

  return <SupportPage data={support} />;
}