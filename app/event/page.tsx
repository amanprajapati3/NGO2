import EventsPageLayout from "../components/layout/events/Events";
import data from "@/data/data.json";
import type { EventsSection } from "@/type/typeSection";

export default function EventPage() {
  const events = data.events as EventsSection;

  return <EventsPageLayout data={events} />;
}
