import data from "@/data/data.json"
import { MediaData } from "@/type/typeSection"
import Media from "../components/layout/media/Media"

const media = data.media as MediaData;

export default function MediaPage()
{
    return(
        <>
        <Media data={media}/>
        </>
    )
}