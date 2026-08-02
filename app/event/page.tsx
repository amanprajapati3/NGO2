import EventsPageLayout from "../components/layout/events/Events";
import data from "@/data/data.json";
import type { EventsSection, TestimonialData } from "@/type/typeSection";

export default function EventPage() {
  const events = data.events as EventsSection;
  const testimonial = data.testimonial as TestimonialData;

  return (
    <EventsPageLayout
      data={events}
      testimonialData={testimonial}
    />
  );
}