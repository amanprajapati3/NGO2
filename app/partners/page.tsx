import PartnersPageLayout from "../components/layout/parters/Partners";
import data from "@/data/data.json";
import type { PartnersData } from "@/type/typeSection";

export default function PartnersPage() {
  const partners = data.partners as PartnersData;

  return <PartnersPageLayout data={partners} />;
}
