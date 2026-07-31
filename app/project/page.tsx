import data from "@/data/data.json";
import { ProjectSectionData } from "@/type/typeSection";
import Project from "../components/layout/projects/Project";

export default function ProjectPage(){

      const project = data.projects as ProjectSectionData;

    return(
        <>
        <Project data={project}/>
        </>
    )
}