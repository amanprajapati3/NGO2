import PageBanner from "../../shared/PageBanner";
import Image from "next/image";
import Link from "next/link";
import ProjectSection from "../../homelayout/ProjectsSection";
import type { ProjectSectionData } from "@/type/typeSection";

interface ProjectPageLayoutProps {
  data: ProjectSectionData;
}

export default function Project({ data }: ProjectPageLayoutProps) {
  const banner = data?.banner;

  return (
    <div className="w-full mb-10 overflow-hidden bg-gray-50/50">
      {/* ================= Banner ================= */}
      <PageBanner banner={banner} />


      {/* ================= Projects ================= */}
      <ProjectSection data={data} />
    </div>
  );
}
