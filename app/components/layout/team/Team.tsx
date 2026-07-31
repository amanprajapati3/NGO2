"use client";

import PageBanner from "../../shared/PageBanner"
import VolunteerSection from "../../homelayout/VolunteersSection";
import data from "@/data/data.json";
import type { TeamSectionData } from "@/type/typeSection";
import Image from "next/image";
import Link from "next/link";

const team = data.team as TeamSectionData;

export default function Team({ data }: { data: TeamSectionData }) {
  const { banner } = data;

  return (
    <>
      <main className="w-full overflow-hidden">

        {/* BANNER */}
        {banner && (
      <PageBanner banner={banner} />

        )}

        {/* TEAM SECTION */}
        <VolunteerSection data={team} />
      </main>
    </>
  );
}