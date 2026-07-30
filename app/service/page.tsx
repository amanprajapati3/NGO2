import ServicesPage from "../components/layout/service/Services";
import data from "@/data/data.json";
import type { ServicesPageData } from "@/type/typeSection";

const servicesData = data.servicesPage as ServicesPageData;

export default function Service() {
  return (
    <>
      <ServicesPage data={servicesData} />
    </>
  );
}