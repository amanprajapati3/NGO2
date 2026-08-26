"use client";

import React from "react";
import Link from "next/link";
import PageBanner from "../../shared/PageBanner";
import {
  FiFileText,
  FiList,
  FiCheckCircle,
  FiBriefcase,
  FiClock,
  FiMapPin,
  FiAward,
  FiDollarSign,
  FiUsers,
  FiArrowRight,
  FiHeadphones,
  FiMail,
  FiGift,
  FiTrendingUp,
  FiLayers,
} from "react-icons/fi";
import { GiCheckedShield } from "react-icons/gi";
import type { JobDetailsProps } from "@/type/typeSection";
import ScrollReveal from "../../shared/ScrollReveal";
import { GiLifeSupport } from "react-icons/gi";
import { IoMdClock } from "react-icons/io";
import { FaGift } from "react-icons/fa";
const iconMap: Record<string, React.ReactNode> = {
  FiShield: <GiCheckedShield className="text-xl md:text-4xl" />,
  FiTrendingUp: <FiTrendingUp className="text-xl md:text-4xl" />,
  FiHeart: <GiLifeSupport className="text-xl md:text-4xl" />,
  FiClock: <IoMdClock className="text-xl md:text-4xl" />,
  FiGift: <FaGift className="text-xl md:text-4xl" />,
};

export default function JobDetails({ data }: JobDetailsProps) {
  if (!data) return null;

  return (
    <main className="w-full bg-[#fcfcfd] text-[#0d152e]">
      {/* ================= HERO BANNER ================= */}
      <PageBanner
        banner={data.banner}
        title={data.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: data.banner.breadcrumbHome, href: "/careers" },
          { label: data.title },
        ]}
      />

      {/* ================= MAIN CONTENT SECTION ================= */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: DETAILS */}
          <ScrollReveal direction="left" className="lg:col-span-8 w-full">
            <div className="space-y-10">
              {/* 1. JOB OVERVIEW */}
              <div className="rounded-2xl bg-white p-6 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-slate-100 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff541b] text-white">
                    <FiFileText size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-[#0d152e] sm:text-2xl">
                    Job Overview
                  </h2>
                </div>

                <div className="mt-5 space-y-3 text-sm leading-relaxed text-[#525b70] sm:text-base">
                  <p>{data.overview}</p>
                  <p>{data.description}</p>
                </div>
              </div>

              {/* 2. KEY RESPONSIBILITIES */}
              {data.responsibilities && data.responsibilities.length > 0 && (
                <div className="rounded-2xl bg-white p-6 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-slate-100 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff541b] text-white">
                      <FiList size={20} />
                    </div>
                    <h2 className="text-xl font-bold text-[#0d152e] sm:text-2xl">
                      Key Responsibilities
                    </h2>
                  </div>

                  <ul className="mt-6 space-y-3.5">
                    {data.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#ff541b]" />
                        <span className="text-sm leading-normal text-[#525b70] sm:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 3. REQUIREMENTS */}
              {data.requirements && data.requirements.length > 0 && (
                <div className="rounded-2xl bg-white p-6 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-slate-100 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff541b] text-white">
                      <FiAward size={20} />
                    </div>
                    <h2 className="text-xl font-bold text-[#0d152e] sm:text-2xl">
                      Requirements
                    </h2>
                  </div>

                  <ul className="mt-6 space-y-3.5">
                    {data.requirements.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#ff541b]" />
                        <span className="text-sm leading-normal text-[#525b70] sm:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 4. WHAT WE OFFER */}
              {data.perks && data.perks.length > 0 && (
                <div className="rounded-2xl bg-white p-6 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-slate-100 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff541b] text-white">
                      <FiGift size={20} />
                    </div>
                    <h2 className="text-xl font-bold text-[#0d152e] sm:text-2xl">
                      What We Offer
                    </h2>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                    {data.perks.map((perk, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center rounded-xl bg-[#fff7f4] p-4 text-center transition-all duration-300 hover:bg-[#fff0eb]"
                      >
                        <div className="flex h-10 md:h-20 md:w-20 w-10 items-center justify-center rounded-full bg-white text-[#ff541b] shadow-sm">
                          {iconMap[perk.icon] || <FiGift className="text-xl" />}
                        </div>
                        <span className="mt-3 text-sm font-bold leading-tight text-[#0d152e]">
                          {perk.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* RIGHT COLUMN: SIDEBAR */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-4 w-full">
            <div className="space-y-6">
              {/* JOB SUMMARY CARD */}
              <div className="rounded-2xl bg-white p-6 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-slate-100 sm:p-7">
                <h3 className="text-lg font-bold text-[#0d152e]">
                  Job Summary
                </h3>
                <div className="mt-2 h-[2px] w-8 bg-[#ff541b]" />

                <div className="mt-6 space-y-4 text-sm sm:text-sm">
                  <div className="flex items-center justify-between py-1 border-b border-slate-50">
                    <div className="flex items-center gap-2.5 text-[#64748b]">
                      <FiBriefcase className="text-[#ff541b]" />
                      <span>Job Title:</span>
                    </div>
                    <span className="font-semibold text-[#0d152e]">
                      {data.title}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-50">
                    <div className="flex items-center gap-2.5 text-[#64748b]">
                      <FiClock className="text-[#ff541b]" />
                      <span>Job Type:</span>
                    </div>
                    <span className="font-semibold text-[#0d152e]">
                      {data.employmentType}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-50">
                    <div className="flex items-center gap-2.5 text-[#64748b]">
                      <FiUsers className="text-[#ff541b]" />
                      <span>Department:</span>
                    </div>
                    <span className="font-semibold text-[#0d152e]">
                      {data.department}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-50">
                    <div className="flex items-center gap-2.5 text-[#64748b]">
                      <FiMapPin className="text-[#ff541b]" />
                      <span>Location:</span>
                    </div>
                    <span className="font-semibold text-[#0d152e]">
                      {data.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-50">
                    <div className="flex items-center gap-2.5 text-[#64748b]">
                      <FiAward className="text-[#ff541b]" />
                      <span>Experience:</span>
                    </div>
                    <span className="font-semibold text-[#0d152e]">
                      {data.experience}
                    </span>
                  </div>

                  {data.vacancies && (
                    <div className="flex items-center justify-between py-1 border-b border-slate-50">
                      <div className="flex items-center gap-2.5 text-[#64748b]">
                        <FiLayers className="text-[#ff541b]" />
                        <span>Vacancies:</span>
                      </div>
                      <span className="font-semibold text-[#0d152e]">
                        {data.vacancies}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-2.5 text-[#64748b]">
                      <FiDollarSign className="text-[#ff541b]" />
                      <span>Salary:</span>
                    </div>
                    <span className="font-semibold text-[#0d152e]">
                      {data.salary}
                    </span>
                  </div>
                </div>

                {/* APPLY NOW BUTTON */}
                <div className="mt-7">
                  <Link
                    href={data.applyButton.href}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff541b] py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#e0430e]"
                  >
                    <span>{data.applyButton.label}</span>
                    <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* HAVE QUESTIONS BOX */}
              {data.questionsSection && (
                <div className="rounded-2xl bg-[#f0f5ff] p-6 text-center border border-blue-50 sm:p-7">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                    <FiHeadphones className="text-xl" />
                  </div>

                  <h4 className="mt-3 text-base font-bold text-[#0d152e]">
                    {data.questionsSection.title}
                  </h4>
                  <p className="mt-1 text-sm text-[#64748b] leading-relaxed">
                    {data.questionsSection.pretitle}
                  </p>

                  <a
                    href={`tel:${data.questionsSection.phone}`}
                    className="mt-4 inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-4 py-2.5 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-50"
                  >
                    <FiMail size={14} />
                    <span>{data.questionsSection.buttonLabel}</span>
                  </a>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* ================= UPDATED CTA BANNER FROM CAREER JSON ================= */}
        {data.cta && (
          <ScrollReveal direction="up" delay={0.1} className="w-full">
            <div className="relative mt-14 overflow-hidden rounded-3xl bg-[#fff2eb] p-6 sm:p-8 md:p-10">
              <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#ff541b] text-white shadow-md sm:h-18 sm:w-18">
                    <FiMail className="h-8 w-8 sm:h-9 sm:w-9" />
                  </div>

                  <div className="max-w-md">
                    {data.cta.badge && (
                      <span className="text-sm font-bold uppercase tracking-wider text-[#ff541b]">
                        {data.cta.badge}
                      </span>
                    )}
                    <h3 className="mt-1 text-xl font-bold text-[#0d152e] sm:text-2xl">
                      {data.cta.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#525b70] sm:text-sm">
                      {data.cta.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <Link
                    href={data.cta.button.href}
                    className="group inline-flex items-center gap-2 rounded-xl bg-[#ff541b] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#e0430e] sm:text-sm"
                  >
                    <span>{data.cta.button.label}</span>
                    <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}
      </section>
    </main>
  );
}