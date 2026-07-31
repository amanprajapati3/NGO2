import CaseStudy from "../components/layout/caseStudy/CaseStudy";
import data from "@/data/data.json";
import type { CausesData } from "@/type/typeSection";


export default function CaseStudypage(){

  const casestudy = data.causes as CausesData;


    return(
        <>
        <CaseStudy data={casestudy}/>
        </>
    )
}