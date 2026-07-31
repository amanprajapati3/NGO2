import DonateNowPageLayout from "../components/layout/donatenow/DonateNow";
import data from "@/data/data.json";
import type { SupportSection } from "@/type/typeSection";

export default function DonateNowPage() {
  const donateNow = data.supportSection as SupportSection;

  return <DonateNowPageLayout data={donateNow} />;
}
