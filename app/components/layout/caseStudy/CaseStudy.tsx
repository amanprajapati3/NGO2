import PageBanner from "../../shared/PageBanner";
import Image from "next/image";
import CausesSection from "../../homelayout/CausesSection";
import type { CausesData } from "@/type/typeSection";
import Link from "next/link";

interface CausesSectionProps {
  data: CausesData;
}

export default function CaseStudy({ data }: CausesSectionProps) {
  const banner = data?.banner;

  return (
    <>
      <div>
      <PageBanner banner={banner} />

        <CausesSection data={data} showExploreButton={false}/>
      </div>
    </>
  );
}
