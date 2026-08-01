import { TeamDetailsData } from "@/type/typeSection"
import data from "@/data/data.json"
import TeamDetails from "../components/layout/teamDetails/TeamDetails"

export default function TeamDetailsPage(){

    const teamDetails = data.teamDetails as TeamDetailsData

    return(
        <>
        <TeamDetails data={teamDetails}/>
        </>
    )
}