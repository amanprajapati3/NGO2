
import data from "@/data/data.json";
import type { DonateNowData } from "@/type/typeSection";
import DonatePage from "../components/layout/donate/DonatePage";

export default function Donate() {
  const donateNow = data.donateNow as DonateNowData;

  return (
    <>
      <DonatePage data={donateNow} />
    </>
  );
}
