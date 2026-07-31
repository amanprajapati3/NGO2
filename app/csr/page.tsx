import CSR from "../components/layout/csr/CSR";
import data from "@/data/data.json";
import type { CSRPageProps } from "@/type/typeSection";

export default function CSRpage() {
  const csrPage = data.csrPage as CSRPageProps;

  return <CSR data={csrPage} />;
}