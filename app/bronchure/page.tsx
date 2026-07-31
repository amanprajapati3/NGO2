import Bronchure from "../components/layout/bronchure/Bronchure";
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