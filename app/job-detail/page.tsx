import type {JobDetailsData} from "@/type/typeSection"
import data from "@/data/data.json";
import JobDetails from "../components/layout/jobdetails/JobDetails";

const jobdetails = data.jobDetails as JobDetailsData;

export default function jobDetailsPage(){
    return(
        <>
        <JobDetails data={jobdetails}/>
        </>
    )
}