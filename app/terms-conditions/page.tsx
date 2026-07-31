import Terms from "../components/layout/terms/Terms";
import data from "@/data/data.json";
import type { TermsData } from "@/type/typeSection";
export default function TermsPage() {
  const terms = data.terms as TermsData;
  return (
    <>
      {" "}
      <Terms data={terms} />
    </>
  );
}
