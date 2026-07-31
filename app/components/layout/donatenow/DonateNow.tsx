import PageBanner from "../../shared/PageBanner";
import Image from "next/image";
import Link from "next/link";
import DonationSection from "../../homelayout/DonationSection";
import type { SupportSection } from "@/type/typeSection";

interface DonateNowPageLayoutProps {
  data: SupportSection;
}

export default function DonateNowPageLayout({ data }: DonateNowPageLayoutProps) {
  const banner = data?.banner;

  return (
    <div className="w-full overflow-hidden bg-gray-50/50">
      <PageBanner banner={banner} />


      <DonationSection data={data} />
    </div>
  );
}
