import data from "@/data/data.json";
import { CaseDetailPageMainContent } from "@/type/typeSection";
import CaseDetails from "../components/layout/casedetails/CaseDetails";

export default function CaseStudyDetailsPage(){

const caseDetails = data.caseStudyDetails as CaseDetailPageMainContent

    return(
        <>
    <CaseDetails data={caseDetails}/>
        </>
    )
}