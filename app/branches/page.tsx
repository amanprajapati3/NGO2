import Branches from "../components/layout/branches/Branches";
import data from "@/data/data.json";
import type { BranchesPageProps } from "@/type/typeSection";

export default function BranchesPage() {
  const branchesPage = data.branchesPage as BranchesPageProps;

  return (
    <>
      <Branches data={branchesPage} />
    </>
  );
}