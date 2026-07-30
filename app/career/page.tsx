import Career from "../components/layout/career/Career";
import data from "@/data/data.json";
import type { CareerPageData } from "@/type/typeSection";

const career = data.career as CareerPageData;

export default function CareerPage() {
  return (
    <>
      <Career data={career} />
    </>
  );
}