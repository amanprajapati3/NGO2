import BlogPageLayout from "../components/layout/blog/Blog";
import data from "@/data/data.json";
import type { NewsSectionData } from "@/type/typeSection";

export default function BlogPage() {
  const blog = data.news as NewsSectionData;

  return <BlogPageLayout data={blog} />;
}
