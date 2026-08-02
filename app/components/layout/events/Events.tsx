import PageBanner from "../../shared/PageBanner";
import EventSection from "../../homelayout/EventSection";
import TestimonialSection from "../../homelayout/TestimonialSection";
import type { EventsSection, TestimonialData } from "@/type/typeSection";

interface EventsPageLayoutProps {
  data: EventsSection;
  testimonialData: TestimonialData;
}

export default function EventsPageLayout({
  data,
  testimonialData,
}: EventsPageLayoutProps) {
  const banner = data?.banner;

  return (
    <div className="w-full overflow-hidden bg-gray-50/50">
      <PageBanner banner={banner} />

      <EventSection data={data} />

      <TestimonialSection data={testimonialData} />
    </div>
  );
}