import ContactUs from "../components/layout/contact/Contact";
import data from "@/data/data.json";
import type { ContactData } from "@/type/typeSection";
export default function ContactUsPage() {
  const contact = data.contact as ContactData;
  return (
    <>
      {" "}
      <ContactUs data={contact} />{" "}
    </>
  );
}
