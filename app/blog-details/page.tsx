import BlogDetails from "../components/layout/blogDetails/BlogDetails"
import { BlogDetailData } from "@/type/typeSection"
import data from "@/data/data.json"

export default function BlogDetailsPage(){

const blogDetails = data.blogDetails as BlogDetailData

    return(
        <>
        <BlogDetails data={blogDetails}/>
        </>
    )
}