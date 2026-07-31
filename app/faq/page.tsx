import FaqPageLayout from "../components/layout/faq/Faq";
import data from "@/data/data.json";
import type { FAQData } from "@/type/typeSection";

export default function FaqPage() {
  const faq = data.faq as FAQData;

  return <FaqPageLayout data={faq} />;
}
