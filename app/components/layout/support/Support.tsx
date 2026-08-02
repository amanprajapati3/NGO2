import React from "react";
import PageBanner from "../../shared/PageBanner"
import type { SupportDataProps } from "@/type/typeSection";
import { HiOutlineHeart } from "react-icons/hi2";

// Helper Function for Rendering Vector SVGs Based on Icon Names
const renderIcon = (
  iconName: string,
  className: string = "w-6 h-6 text-[#EA580C]",
) => {
  const strokeProps = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (iconName) {
    case "hands-heart":
    case "hand-holding-heart":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      );
    case "people-group":
    case "users":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "shield-check":
    case "shield-check-outline":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "handshake":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <path d="M11 11l2 2 4-4" />
          <path d="M20 12l-8 8-4-4" />
          <path d="M4 8l8-8 4 4" />
        </svg>
      );
    case "gift":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <polyline points="20 12 20 22 4 22 4 12" />
          <rect x="2" y="7" width="20" height="5" />
          <line x1="12" y1="22" x2="12" y2="7" />
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
      );
    case "megaphone":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <path d="M3 11l18-5v12L3 13v-2z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      );
    case "graduation-cap":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case "bowl-hot":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <path d="M12 2v4M8 3v3M16 3v3" />
          <path d="M2 11h20a10 10 0 0 1-20 0z" />
        </svg>
      );
    case "heart-pulse":
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          <path d="M3 12h4l2 -3l2 6l2 -3h4" />
        </svg>
      );
    case "globe":
    default:
      return (
        <svg viewBox="0 0 24 24" {...strokeProps}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
  }
};

export default function SupportPage({ data }: SupportDataProps) {
  const {
    hero,
    introduction,
    keyValues,
    waysToSupport,
    impactStats,
    ctaBanner,
    transparencyBar,
  } = data;

  return (
    <div className="w-full bg-[#FAF9F6] text-slate-800 antialiased font-sans">
      {/* ================= 1. HERO BREADCRUMB BANNER ================= */}
      <PageBanner banner={hero.banner} title={hero.title} />

      {/* ================= MAIN CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12  space-y-16">
        {/* ================= 2. INTRODUCTION & TOP VALUES ================= */}
        <section className="text-center">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center gap-2">
              <HiOutlineHeart className="text-base text-orange-500 sm:text-lg" />
              
            <span className="text-sm mt-0.5 font-bold uppercase tracking-widest text-[#EA580C]">
              {introduction.topBadge}
            </span>
            </div>
            {/* <div className="mx-auto w-8 h-[2px] bg-[#EA580C] mt-1 mb-3" /> */}

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              {introduction.heading.plainText}{" "}
              <span className="text-slate-900">
                {introduction.heading.highlightedText}
              </span>
            </h2>

            {/* <div className="mx-auto w-10 h-[2px] bg-[#EA580C] mt-3 mb-4" /> */}

            <p className="mx-auto mt-1 max-w-2xl text-sm leading-relaxed text-slate-500 sm:mt-2 sm:text-base">
              {introduction.description}
            </p>
          </div>

          {/* 3 Top Key Values Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {keyValues.values.map((val) => (
              <div
                key={val.id}
                className="bg-white p-6 rounded-2xl border border-orange-100 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                  {renderIcon(val.iconName, "w-12 h-12 text-[#EA580C]")}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-slate-900">
                    {val.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 3. WAYS TO SUPPORT (5 CARDS) ================= */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs text-center">
          <div className="flex items-center justify-center gap-3">
              <HiOutlineHeart className="text-base text-orange-500 sm:text-lg" />

            <span className="text-sm font-bold uppercase tracking-widest text-[#EA580C]">
              {waysToSupport.topBadge}
            </span>
          </div>
          <h2 className="text-2xl pt-0 sm:text-4xl font-serif font-bold text-slate-900">
            {waysToSupport.heading}
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {waysToSupport.supportCards.map((card) => (
              <div
                key={card.id}
                className="bg-slate-50/60 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between items-center text-center hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 sm:w-24 sm:h-24 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mb-4">
                    {renderIcon(
                      card.iconName,
                      "w-6 h-6 sm:w-16 sm:h-16 text-[#EA580C]",
                    )}
                  </div>

                  <h3 className="font-serif font-bold text-sm sm:text-base text-slate-900 mb-2">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 w-full">
                  <a
                    href={card.action.url}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#EA580C] text-white text-sm font-bold hover:bg-orange-700 transition-colors shadow-xs"
                  >
                    {card.action.label}
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 4. YOUR SUPPORT, REAL IMPACT ================= */}
        <section className="bg-orange-50/50 border rounded-3xl p-6 sm:p-10 border-orange-200/80 text-center">
        <div className="flex justify-center gap-1">
          <HiOutlineHeart className="text-base text-orange-500 sm:text-lg" />

          <span className="text-sm font-bold uppercase tracking-widest text-[#EA580C]">
            {impactStats.topBadge}
          </span>
          </div>
          {/* <div className="mx-auto w-8 h-[2px] bg-[#EA580C] mt-1 mb-2" /> */}

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
            {impactStats.heading}
          </h2>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center bg-white p-5 rounded-2xl border border-orange-100/60 shadow-2xs"
              >
                <div className="w-6 h-6 sm:w-24 sm:h-24  rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center mb-3">
                  {renderIcon(
                    stat.iconName,
                    "w-6 h-6 sm:w-16 sm:h-16 text-[#EA580C]",
                  )}
                </div>

                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#EA580C]">
                  {stat.value}
                </span>

                <span className="mt-1 text-sm font-semibold text-slate-700">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm sm:text-sm text-slate-600 font-medium max-w-xl mx-auto">
            {impactStats.closingText}
          </p>
        </section>

        {/* ================= 5. CTA BANNER (SIDE-BY-SIDE WITH HANDS ICON) ================= */}
        <section className="relative min-h-[300px] overflow-hidden rounded-3xl border border-orange-100 shadow-sm">
          {/* Full Section Background Image */}
          <img
            src={ctaBanner.bannerImage.src}
            alt={ctaBanner.bannerImage.alt}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* White gradient from left 50% → transparent */}
          <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-white via-white/95 to-transparent" />

          {/* Optional: subtle overall overlay for readability */}
          <div className="absolute inset-0 bg-white/5" />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center min-h-[300px]">
            {/* Left Content Area */}
            <div className="lg:col-span-7 p-3 sm:p-10 flex flex-col sm:flex-row items-start gap-6">
              {/* Left Hands Icon Badge */}
              {/* <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-sm border border-orange-100 flex items-center justify-center shrink-0">
                {/* {renderIcon(
                  "hands-heart",
                  "w-10 h-10 sm:w-12 sm:h-12 text-[#EA580C]",
                )}
                <img src="/heartImage.png" alt="" />
              </div> */}

              {/* Text Info */}
              <div className="flex-1">
                <div>
                  <span className="text-sm font-bold uppercase tracking-wider text-[#EA580C]">
                    {ctaBanner.topBadge}
                  </span>

                  <div className="w-8 h-[2px] bg-[#EA580C] mt-1" />
                </div>

                <h3 className="mt-3 font-serif text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
                  {ctaBanner.heading.plainText} <br />
                  <span className="text-[#EA580C]">
                    {ctaBanner.heading.highlightedText}
                  </span>
                </h3>

                <p className="mt-3 text-sm sm:text-sm text-slate-900 leading-relaxed max-w-md">
                  {ctaBanner.description}
                </p>

                {/* Dual Action Buttons */}
                <div className="mt-6 flex flex-wrap justify-center md:justify-start items-center sm:gap-3 gap-1">
                  <a
                    href={ctaBanner.primaryAction.url}
                    className="inline-flex items-center sm:gap-2 gap-1 sm:px-6 sm:py-3 p-2 rounded-full bg-[#EA580C] text-white text-sm font-bold shadow-xs hover:bg-orange-700 transition-all"
                  >
                    {ctaBanner.primaryAction.label}
                    <span>&rarr;</span>
                  </a>

                  {ctaBanner.secondaryAction && (
                    <a
                      href={ctaBanner.secondaryAction.url}
                      className="inline-flex items-center sm:gap-2 gap-1 sm:px-6 sm:py-3 p-2 rounded-full border border-[#EA580C] text-[#EA580C] text-sm font-bold hover:bg-orange-50 transition-all"
                    >
                      {ctaBanner.secondaryAction.label}
                      <span>&rarr;</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 6. TRANSPARENCY BAR ================= */}
        <section className="rounded-2xl bg-white text-orange-500 p-5 sm:p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center shrink-0">
              {renderIcon(transparencyBar.iconName, "w-10 h-10 text-orange-700")}
            </div>

            <div>
              <h4 className="font-semibold text-md pt-2 sm:text-base">
                {transparencyBar.title}
              </h4>
              <p className="text-sm text-orange-600 mt-0.5">
                {transparencyBar.pretitle}
              </p>
            </div>
          </div>

          <a
            href={transparencyBar.action.url}
            className="px-5 py-2.5 rounded-full shadow-sm hover:shadow-md shadow-orange-500 text-orange-500 hover:bg-white hover:text-[#EA580C] transition-all text-sm font-bold whitespace-nowrap"
          >
            {transparencyBar.action.label} &rarr;
          </a>
        </section>
      </div>
    </div>
  );
}
