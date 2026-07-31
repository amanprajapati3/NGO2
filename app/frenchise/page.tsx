import FrenchisePage from "../components/layout/frenchise/Frenchise";
import data from "@/data/data.json";
import { FranchisePageProps } from "@/type/typeSection";

export default function Frenchise() {
  const franchisePage = data.franchisePage as FranchisePageProps;

  return (
    <>
      <FrenchisePage data={franchisePage} />
    </>
  );
}