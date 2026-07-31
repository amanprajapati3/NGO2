import PageBanner from "../../shared/PageBanner";
import Image from "next/image";
import Link from "next/link";
import GallerySection from "../../homelayout/GallerySection";
import type { GalleryData } from "@/type/typeSection";

interface GalleryPageLayoutProps {
  data: GalleryData;
}

export default function GalleryPageLayout({ data }: GalleryPageLayoutProps) {
  const banner = data?.banner;

  return (
    <div className="w-full overflow-hidden bg-gray-50/50">
      <PageBanner banner={banner} />


      <GallerySection data={data} />
    </div>
  );
}
