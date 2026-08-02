import Bronchure from "../components/layout/brochure/Brochure";
import data from "@/data/data.json";
import type { BrochurePageProps } from "@/type/typeSection";

export default function BronchurePage() {
  const brochurePage = data.brochurePage as BrochurePageProps;

  return (
    <>
      <Bronchure data={brochurePage} />
    </>
  );
}