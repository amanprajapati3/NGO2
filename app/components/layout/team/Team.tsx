"use client";

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
          <section className="relative flex min-h-[280px] items-center justify-center overflow-hidden sm:min-h-[330px] lg:min-h-[350px]">
            {/* Background Image */}
            <Image
              src={banner.backgroundImage}
              alt={banner.breadcrumbCurrent}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#23122c]/65" />

            {/* Banner Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {banner.breadcrumbCurrent}
              </h1>

              <div className="flex items-center justify-center gap-2 text-sm text-white/80">
                <Link
                  href="/"
                  className="transition-colors hover:text-orange-400"
                >
                  {banner.breadcrumbHome}
                </Link>

                <span>/</span>

                <span className="text-orange-400">
                  {banner.breadcrumbCurrent}
                </span>
              </div>

              <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-orange-500" />
            </div>
          </section>
        )}

        {/* TEAM SECTION */}
        <VolunteerSection data={team} />
      </main>
    </>
  );
}