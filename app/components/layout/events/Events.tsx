import PageBanner from "../../shared/PageBanner";
import Image from "next/image";
import Link from "next/link";
import EventSection from "../../homelayout/EventSection";
import type { EventsSection } from "@/type/typeSection";

interface EventsPageLayoutProps {
  data: EventsSection;
}

export default function EventsPageLayout({ data }: EventsPageLayoutProps) {
  const banner = data?.banner;

  return (
    <div className="w-full overflow-hidden bg-gray-50/50">
      <PageBanner banner={banner} />


      <EventSection data={data} />
    </div>
  );
}
