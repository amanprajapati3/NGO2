"use client";

import PageBanner from "../../shared/PageBanner";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiMapPin,
  FiBriefcase,
  FiClock,
  FiChevronDown,
  FiChevronUp,
  FiMail,
  FiUsers,
  FiHeart,
  FiTrendingUp,
  FiShield,
  FiStar,
} from "react-icons/fi";

import type {
  CareerPageProps,
  CareerJob,
} from "@/type/typeSection";
import ScrollReveal from "../../shared/ScrollReveal";

const getJobIcon = (type: string) => {
  if (type.toLowerCase().includes("full")) {
    return <FiBriefcase className="text-xl" />;
  }

  return <FiClock className="text-xl" />;
};

const getBenefitIcon = (icon: string) => {
  switch (icon) {
    case "heart-hand":
      return <FiHeart className="h-10 w-10" strokeWidth={1.8} />;

    case "growth":
      return <FiTrendingUp className="h-10 w-10" strokeWidth={1.8} />;

    case "users":
      return <FiUsers className="h-10 w-10" strokeWidth={1.8} />;

    case "shield":
      return <FiShield className="h-10 w-10" strokeWidth={1.8} />;

    case "star":
      return <FiStar className="h-10 w-10" strokeWidth={1.8} />;

    default:
      return <FiHeart className="h-10 w-10" strokeWidth={1.8} />;
  }
};

export default function Career({ data }: CareerPageProps) {
  const {
    banner,
    whyWorkWithUs,
    jobs,
    cta,
  } = data;

  const [showAllJobs, setShowAllJobs] = useState(false);

  const visibleJobs = showAllJobs ? jobs : jobs.slice(0, 4);

  return (
    <main className="w-full overflow-hidden bg-white">

      {/* BANNER */}
      <PageBanner banner={banner} />


      {/*  WHY WORK WITH US */}
      {whyWorkWithUs && (
        <ScrollReveal direction="up">
        <section className="px-4 py-8 sm:px-6 md:py-12 lg:px-8">
          <div className="mx-auto max-w-7xl">

            {/* ================= HEADER ================= */}
            <div className="mx-auto max-w-3xl text-center">

              {/* Icon + Title */}
              <div className="flex items-center justify-center gap-3">
                {/* <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#ffd0bd] bg-[#fff7f3] text-[#ff541b]">
                  <FiUsers className="h-6 w-6" />
                </div> */}

                <h1 className="font-serif text-3xl font-extrabold tracking-tight text-[#0d152e] sm:text-4xl md:text-5xl">
                  {whyWorkWithUs.title}
                </h1>
              </div>

              {/* Decorative Lines */}
              {/* <div className="mt-2 flex items-center justify-center gap-2">
                <div className="h-[2px] w-14 bg-[#ff541b]" />

                <FiHeart
                  className="fill-[#ff541b] text-[#ff541b]"
                  size={14}
                />

                <div className="h-[2px] w-14 bg-[#ff541b]" />
              </div> */}

              {/* Description */}
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#525b70] sm:text-base">
                {whyWorkWithUs.description}
              </p>
            </div>


            {/* ================= BENEFIT CARDS ================= */}
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">

              {whyWorkWithUs.benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="group flex flex-col items-center rounded-xl border border-slate-100 bg-white px-5 py-7 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
                >

                  {/* Icon */}
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#fff0eb] text-[#ff541b] transition-all duration-300 group-hover:bg-[#ff541b] group-hover:text-white">
                    {getBenefitIcon(benefit.icon)}
                  </div>

                  {/* Title */}
                  <h2 className="mt-6 font-serif text-lg font-bold leading-snug text-[#0d152e]">
                    {benefit.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-[#525b70]">
                    {benefit.description}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>
        </ScrollReveal>
      )}


      <ScrollReveal direction="up" delay={0.1}>
      <section className="px-4  sm:px-6  lg:px-8">
        <div className="mx-auto max-w-5xl">

          {/* Section Heading */}
          <div className="mb-7 text-center">

            <h2 className="font-serif text-3xl font-extrabold text-[#0d152e] sm:text-4xl">
              Open Positions
            </h2>

            {/* <div className="mt-2 flex items-center justify-center gap-2">
              <div className="h-[2px] w-12 bg-[#ff541b]" />

              <FiHeart
                className="fill-[#ff541b] text-[#ff541b]"
                size={13}
              />

              <div className="h-[2px] w-12 bg-[#ff541b]" />
            </div> */}

          </div>


          {/* Jobs */}
          <div
            id="jobs"
            className="flex flex-col gap-4"
          >
            {visibleJobs.map((job: CareerJob) => (
              <div
                key={job.id}
                className="group flex flex-col justify-between gap-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_4px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] md:flex-row md:items-center md:px-8 md:py-6"
              >

                {/* LEFT: ICON + TITLE + DESCRIPTION */}
                <div className="flex items-start gap-4 md:max-w-md">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff0eb] text-[#ff541b]">
                    {getJobIcon(job.employmentType)}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0d152e] transition-colors group-hover:text-[#ff541b]">
                      {job.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-[#64748b]">
                      {job.description}
                    </p>
                  </div>

                </div>


                {/* MIDDLE: META */}
                <div className="flex flex-wrap items-center gap-5 sm:gap-8">

                  {/* Location */}
                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff0eb]/60 text-[#ff541b]">
                      <FiMapPin size={18} />
                    </div>

                    <div>
                      <p className="text-[11px] font-medium text-[#94a3b8]">
                        Location
                      </p>

                      <p className="text-sm font-bold text-[#0d152e]">
                        {job.location}
                      </p>
                    </div>

                  </div>


                  {/* Job Type */}
                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff0eb]/60 text-[#ff541b]">
                      <FiClock size={18} />
                    </div>

                    <div>
                      <p className="text-[11px] font-medium text-[#94a3b8]">
                        Job Type
                      </p>

                      <p className="text-sm font-bold text-[#0d152e]">
                        {job.employmentType}
                      </p>
                    </div>

                  </div>

                </div>


                {/* RIGHT: BUTTON */}
                <div className="shrink-0">

                  <Link
                    href={job.href}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#ff541b] px-5 py-2.5 text-sm font-bold text-[#ff541b] transition-all duration-300 hover:bg-[#ff541b] hover:text-white md:w-auto"
                  >
                    <span>{job.label}</span>
                    <FiArrowRight size={14} />
                  </Link>

                </div>

              </div>
            ))}
          </div>


          {/* VIEW MORE */}
          {jobs.length > 4 && (
            <div className="mt-8 flex justify-center">

              <button
                type="button"
                onClick={() => setShowAllJobs(!showAllJobs)}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-100 bg-white px-6 py-3 text-sm font-bold text-[#ff541b] shadow-sm transition-all duration-300 hover:bg-[#fff0eb] hover:shadow-md"
              >
                <span>
                  {showAllJobs
                    ? "View Less Positions"
                    : "View More Positions"}
                </span>

                {showAllJobs ? (
                  <FiChevronUp className="text-base" />
                ) : (
                  <FiChevronDown className="text-base" />
                )}
              </button>

            </div>
          )}


          {/* EMPTY STATE */}
          {jobs.length === 0 && (
            <div className="mt-12 rounded-2xl border border-slate-100 bg-white p-12 text-center shadow-sm">

              <h3 className="text-xl font-bold text-[#0d152e]">
                No Open Positions
              </h3>

              <p className="mt-2 text-sm text-[#64748b]">
                There are currently no open positions. Please check back
                later.
              </p>

            </div>
          )}

        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15}>
      <section className="relative overflow-hidden bg-[#fafafa] px-4 py-8 sm:px-6 md:py-12 lg:px-8">

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#fff2eb] p-6 sm:p-8 md:p-10 lg:p-12">

          {/* Watermark */}
          <div className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 text-[#ff541b]/10">
            <FiUsers className="h-44 w-44 lg:h-52 lg:w-52" />
          </div>


          <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">

            {/* LEFT CONTENT */}
            <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#ff541b] text-white shadow-md sm:h-20 sm:w-20">
                <FiMail className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>

              <div className="max-w-lg">

                <h2 className="text-2xl font-bold text-[#0d152e] sm:text-3xl">
                  {cta.title}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-[#525b70]">
                  {cta.description}
                </p>

              </div>
            </div>


            {/* BUTTON */}
            <div className="shrink-0">

              <Link
                href={cta.button.href}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#ff541b] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#e0430e] hover:shadow-lg"
              >
                <span>{cta.button.label}</span>

                <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>

          </div>
        </div>
      </section>
      </ScrollReveal>

    </main>
  );
}