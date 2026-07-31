import TestimonialPageLayout from "../components/layout/testimonial/Testimonial";
import data from "@/data/data.json";
import type { TestimonialData } from "@/type/typeSection";

export default function TestimonialPage() {
  const testimonial = data.testimonial as TestimonialData;

  return <TestimonialPageLayout data={testimonial} />;
}
