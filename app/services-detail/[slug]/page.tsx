import { notFound } from "next/navigation";
import data from "@/data/data.json";
import ServiceDetailPage from "@/app/components/layout/servicesdetails/ServicesDetails";
import type { ServiceDetailPageData } from "@/type/typeSection";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const serviceDetails =
    data.serviceDetails as Record<string, ServiceDetailPageData>;

  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage data={service} />;
}