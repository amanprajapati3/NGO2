import PageBanner from "../../shared/PageBanner";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "../../homelayout/FaqsSection";
import type { FAQData } from "@/type/typeSection";

interface FaqPageLayoutProps {
  data: FAQData;
}

export default function FaqPageLayout({ data }: FaqPageLayoutProps) {
  const banner = data?.banner;

  return (
    <div className="w-full overflow-hidden bg-gray-50/50">
      <PageBanner banner={banner} />


      <FAQSection data={data} />
    </div>
  );
}
