import ProjectDetails from "../components/layout/projectDetails/ProjectDetails";
import { ProjectDetailsData } from "@/type/typeSection";
import data from "@/data/data.json"

export default function ProjectDetailsPage(){

const projectdetails = data.projectDetails as ProjectDetailsData

    return(
        <>
        <ProjectDetails data={projectdetails}/>
        </>
    )
}