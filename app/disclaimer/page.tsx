import Disclaimer from "../components/layout/disclaimer/Disclaimer";
import data from "@/data/data.json";
import type { disclaimerPolicydata } from "@/type/typeSection";

export default function DisclaimerPage() {
  const disclaimer = data.disclaimer as disclaimerPolicydata;

  return (
    <>
      <Disclaimer data={disclaimer} />
    </>
  );
}
