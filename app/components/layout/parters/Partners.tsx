import PageBanner from "../../shared/PageBanner";
import Image from "next/image";
import Link from "next/link";
import PartnersSection from "../../homelayout/PartnerSection";
import type { PartnersData } from "@/type/typeSection";

interface PartnersPageLayoutProps {
  data: PartnersData;
}

export default function PartnersPageLayout({ data }: PartnersPageLayoutProps) {
  const banner = data?.banner;

  return (
    <div className="w-full overflow-hidden bg-gray-50/50">
      <PageBanner banner={banner} />


      <PartnersSection data={data} />
    </div>
  );
}
