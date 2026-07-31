import PrivacyPolicy from "../components/layout/privacy/Privacy"
import data from "@/data/data.json";
import type { privacyPolicydata } from "@/type/typeSection";

export default function PrivacyPolicyPage(){

  const privacy = data.privacy as privacyPolicydata;


    return(
        <>
        <PrivacyPolicy data={privacy}/>
        </>
    )
}