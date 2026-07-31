import EnquiryPage from "../components/layout/enquiry/EnquiryPage";
import data from "@/data/data.json";
import type { EnquiryNowPageProps } from "@/type/typeSection";

export default function Enquiry() {
  const enquiryNowPage = data.enquiryNowPage as EnquiryNowPageProps;

  return (
    <>
      <EnquiryPage data={enquiryNowPage} />
    </>
  );
}