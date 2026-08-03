import { notFound } from "next/navigation";
import data from "@/data/data.json";
import ProjectDetails from "@/app/components/layout/projectDetails/ProjectDetails";
import type { ProjectDetailsData } from "@/type/typeSection";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const projectDetails =
    data.projectDetails as Record<string, ProjectDetailsData>;

  const project = projectDetails[slug];

  if (!project) {
    notFound();
  }

  return <ProjectDetails data={project} />;
}