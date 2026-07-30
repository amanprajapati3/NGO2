import data from "@/data/data.json";
import type { ServiceDetailPageData } from "@/type/typeSection";
import ServicesDetails from "../components/layout/servicesdetails/ServicesDetails";

const serviceDetailData =
  data.serviceDetailPage as ServiceDetailPageData;

export default function ServiceDetail() {
  return <ServicesDetails data={serviceDetailData} />;
}