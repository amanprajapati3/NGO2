import data from "@/data/data.json"
import { EventDetailData } from "@/type/typeSection"
import EventDetails from "../components/layout/eventDetails/EventDetails"

export default function EventDetailsPage(){

const eventdetails = data.eventDetails as EventDetailData

    return(
        <>
        <EventDetails data={eventdetails}/>
        </>
    )
}