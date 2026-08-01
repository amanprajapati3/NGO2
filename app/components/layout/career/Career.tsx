"use client";
import PageBanner from "../../shared/PageBanner";


import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiMapPin,
  FiBriefcase,
  FiClock,
  FiHeart,
  FiChevronDown,
  FiChevronUp,
  FiMail,
  FiUsers,
} from "react-icons/fi";
import type { CareerPageProps, CareerJob } from "@/type/typeSection";

const getJobIcon = (type: string) => {
  if (type.toLowerCase().includes("full")) {
    return <FiBriefcase className="text-xl" />;
  }

  return <FiClock className="text-xl" />;
};

export default function Career({ data }: CareerPageProps) {
  const { banner, badge, heading, description, jobs, cta } = data;
  const [showAllJobs, setShowAllJobs] = useState(false);

  // Default to showing only 4 jobs
  const visibleJobs = showAllJobs ? jobs : jobs.slice(0, 4);

  return (
    <main className="w-full overflow-hidden bg-[#fafafa]">
      {/* ================= BANNER ================= */}
      <PageBanner banner={banner} />


      {/* ================= CAREER INTRO & OPEN POSITIONS ================= */}
      <section className="px-4 py-4 sm:px-6 md:py-12 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* HEADER AREA */}
          <div className="mx-auto max-w-3xl text-center">
            {/* BRIEFCASE / BADGE ICON */}
            <div className="flex gap-2 justify-center">
              {/* <div className=" mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#fff0eb] text-[#ff541b]">
                <FiBriefcase className="text-2xl" />
              </div> */}

              <h2 className="flex flex-col items-center justify-center text-3xl font-extrabold text-[#0d152e] sm:text-4xl">
                <span>{heading.title}</span>

                {/* <div className="flex  gap-2">
                    <div className="bg-orange-500 mt-3 h-1 w-[80px]"></div>
                  <span className="mt-1 text-xs text-[#ff541b]">
                    <FiHeart className="inline fill-[#ff541b]" size={20} />
                  </span>
                  <div className="bg-orange-500 mt-3 h-1 w-[80px]"></div>
                </div> */}
              </h2>
            </div>

            <p className="mt-3 text-sm font-medium text-[#64748b] sm:text-base">
              {description}
            </p>
          </div>

          {/* ================= JOBS LIST ================= */}
          <div id="jobs" className="mt-10 flex flex-col gap-4">
            {visibleJobs.map((job: CareerJob) => (
              <div
                key={job.id}
                className="group flex flex-col justify-between gap-6 rounded-2xl bg-white p-5 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] md:flex-row md:items-center md:px-8 md:py-6"
              >
                {/* LEFT: ICON + TITLE + DESC */}
                <div className="flex items-start gap-4 md:max-w-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff0eb] text-[#ff541b]">
                    {getJobIcon(job.employmentType)}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0d152e] transition-colors group-hover:text-[#ff541b]">
                      {job.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#64748b] line-clamp-2">
                      {job.description}
                    </p>
                  </div>
                </div>

                {/* MIDDLE: META INFO (LOCATION & JOB TYPE) */}
                <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                  {/* LOCATION */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0eb]/60 text-[#ff541b]">
                      <FiMapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-[#94a3b8]">
                        Location
                      </p>
                      <p className="text-xs font-bold text-[#0d152e]">
                        {job.location}
                      </p>
                    </div>
                  </div>

                  {/* JOB TYPE */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0eb]/60 text-[#ff541b]">
                      <FiClock size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-[#94a3b8]">
                        Job Type
                      </p>
                      <p className="text-xs font-bold text-[#0d152e]">
                        {job.employmentType}
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT: ACTION BUTTON */}
                <div className="shrink-0">
                  <Link
                    href={job.href}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#ff541b] px-5 py-2.5 text-xs font-bold text-[#ff541b] transition-all duration-300 hover:bg-[#ff541b] hover:text-white md:w-auto"
                  >
                    <span>{job.label}</span>
                    <FiArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* VIEW MORE POSITIONS TOGGLE BUTTON */}
          {jobs.length > 4 && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllJobs(!showAllJobs)}
                className="inline-flex items-center gap-2 cursor-pointer rounded-xl bg-white px-6 py-3 text-xs font-bold text-[#ff541b] shadow-sm border border-slate-100 transition-all duration-300 hover:bg-[#fff0eb] hover:shadow-md"
              >
                <span>
                  {showAllJobs ? "View Less Positions" : "View More Positions"}
                </span>
                {showAllJobs ? (
                  <FiChevronUp className="text-base" />
                ) : (
                  <FiChevronDown className="text-base" />
                )}
              </button>
            </div>
          )}

          {/* ================= EMPTY STATE ================= */}
          {jobs.length === 0 && (
            <div className="mt-12 rounded-2xl border border-slate-100 bg-white p-12 text-center shadow-sm">
              <h3 className="text-xl font-bold text-[#0d152e]">
                No Open Positions
              </h3>
              <p className="mt-2 text-sm text-[#64748b]">
                There are currently no open positions. Please check back later.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}
<section className="relative overflow-hidden bg-[#fafafa] px-4 py-8 sm:px-6 md:py-12 lg:px-8">
  <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#fff2eb] p-6 sm:p-8 md:p-10 lg:p-12">
    
    {/* RIGHT WATERMARK DECORATION */}
    <div className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 text-[#ff541b]/10">
      <FiUsers className="h-44 w-44 lg:h-52 lg:w-52" />
    </div>

    <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
      
      {/* LEFT: ICON + TEXT CONTENT */}
      <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">
        
        {/* ENVELOPE / MAIL ICON BADGE */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#ff541b] text-white shadow-md sm:h-20 sm:w-20">
          <FiMail className="h-8 w-8 sm:h-10 sm:w-10" />
        </div>

        {/* HEADING & DESCRIPTION */}
        <div className="max-w-lg">
          <h2 className="text-2xl font-bold text-[#0d152e] sm:text-3xl">
            {cta.title}
          </h2>

          <p className="mt-2 text-xs leading-relaxed text-[#525b70] sm:text-sm">
            {cta.description}
          </p>
        </div>
      </div>

      {/* RIGHT: BUTTON */}
      <div className="shrink-0">
        <Link
          href={cta.button.href}
          className="group inline-flex items-center gap-2.5 rounded-xl bg-[#ff541b] px-6 py-3.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:bg-[#e0430e] hover:shadow-lg sm:text-sm"
        >
          <span>{cta.button.label}</span>
          <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

    </div>
  </div>
</section>
    </main>
  );
}
