import PageBanner from "../../shared/PageBanner";
import Image from "next/image";
import Link from "next/link";
import NewsSection from "../../homelayout/NewsSection";
import type { NewsSectionData } from "@/type/typeSection";

interface BlogPageLayoutProps {
  data: NewsSectionData;
}

export default function BlogPageLayout({ data }: BlogPageLayoutProps) {
  const banner = data?.banner;

  return (
    <div className="w-full overflow-hidden bg-gray-50/50">
      <PageBanner banner={banner} />

      <NewsSection data={data} showDescription enablePagination />
    </div>
  );
}
