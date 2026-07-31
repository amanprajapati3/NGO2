import RefundPolicy from "../components/layout/refund/Refund";
import data from "@/data/data.json";
import type { refundPolicydata } from "@/type/typeSection";

export default function RefundPolicyPage() {
  const refund = data.refund as refundPolicydata;

  return (
    <>
      <RefundPolicy data={refund} />
    </>
  );
}