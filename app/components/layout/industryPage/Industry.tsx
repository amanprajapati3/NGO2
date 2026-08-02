import React from "react";
import PageBanner from "../../shared/PageBanner";
import type { IndustryPageData } from "@/type/typeSection";
import { HiOutlineHeart } from "react-icons/hi2";

// ===============================
// Sector Icon Renderer
// ===============================
const getIcon = (name: string) => {
  const iconProps = {
    className: "w-6 h-6 text-white",
    strokeWidth: 2,
  };

  switch (name) {
    case "graduation-cap":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-white"
        >
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4l7 3.82 7-3.82v-4L12 17l-7-3.82z" />
        </svg>
      );

    case "activity-heartbeat":
      return (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          {...iconProps}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12h4l3-9 4 18 3-9h4"
          />
        </svg>
      );

    case "leaf":
      return (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white"
        >
          <path d="M17 8C8 10 5 16.17 3.83 12 12c.17 4.17 4 8 8 8 5.52 0 10-4.48 10-10 0-4.84-3.44-8.87-8-9.83zm-5 10c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8 2.24 3.32 5.86 5.6 10 5.75-.85 1.81-2.75 3.05-4.7 3.05z" />
        </svg>
      );

    case "user-female":
      return (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white"
        >
          <path d="M12 2a5 5 0 100 10 5 5 0 000-10zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z" />
        </svg>
      );

    case "food-bowl":
      return (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white"
        >
          <path d="M12 3a1 1 0 00-1 1v1a1 1 0 102 0V4a1 1 0 00-1-1zm-4 2a1 1 0 00-1 1v1a1 1 0 102 0V6a1 1 0 00-1-1zm8 0a1 1 0 00-1 1v1a1 1 0 102 0V6a1 1 0 00-1-1zM4 11v2a8 8 0 0016 0v-2H4zm2 10h12a1 1 0 001-1v-1H5v1a1 1 0 001 1z" />
        </svg>
      );

    case "theatre-masks":
      return (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3 7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-3 8c-2.33 0-4.32-1.45-5.12-3.5h10.24c-.8 2.05-2.79 3.5-5.12 3.5z" />
        </svg>
      );

    case "gears":
      return (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white"
        >
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.488.488 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2z" />
        </svg>
      );

    case "water-drop":
      return (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white"
        >
          <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
        </svg>
      );

    case "paw-print":
      return (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white"
        >
          <path d="M12 13c-2.4 0-4.5 1.5-5 3.5-.4 1.7.5 3.5 2.1 4.1 1.7.6 3.6 0 4.6-1.3 1 1.3 2.9 1.9 4.6 1.3 1.6-.6 2.5-2.4 2.1-4.1-.5-2-2.6-3.5-5-3.5zm-6.5-3C4.1 10 3 11.1 3 12.5S4.1 15 5.5 15 8 13.9 8 12.5 6.9 10 5.5 10zm13 0c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zm-10-5C7.1 5 6 6.1 6 7.5S7.1 10 8.5 10 11 8.9 11 7.5 9.9 5 8.5 5zm7 0C14.1 5 13 6.1 13 7.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5S16.9 5 15.5 5z" />
        </svg>
      );

    case "handshake":
    default:
      return (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          {...iconProps}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 11.5V14m0 0l3 3m-3-3l-3-3m13 1.5V14m0 0l-3 3m3-3l3-3M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
      );
  }
};

// ===============================
// Metric Icon Renderer
// ===============================
const getMetricIcon = (name: string) => {
  const iconProps = {
    className: "w-8 h-8 text-[#DC2626]",
    strokeWidth: 1.5,
  };

  switch (name) {
    case "hands-heart":
      return (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          {...iconProps}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      );

    case "people-group":
      return (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          {...iconProps}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      );

    case "globe":
      return (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          {...iconProps}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      );

    case "handshake-outline":
    default:
      return (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          {...iconProps}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M4 7l2 1M4 7l2-1M4 7v2.5M12 21a9 9 0 100-18 9 9 0 000 18z"
          />
        </svg>
      );
  }
};

// Industry Component
interface IndustryProps {
  data: IndustryPageData;
}

export default function Industry({ data }: IndustryProps) {
  const { header, banner, sectors, partnerBanner } = data;

  return (
    <div className="w-full bg-[#FCFDFD] font-sans text-[#0F172A]">
      <PageBanner banner={banner} title={`${header.title.part1} ${header.title.part2}`} />

      {/* ================= MAIN CONTENT ================= */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6  lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3">
           <HiOutlineHeart className="text-base text-[#FF4500]" />

            <span className="text-sm font-bold uppercase tracking-wider text-orange-500 sm:text-sm">
              {header.topBadge}
            </span>
          </div>

          <h2 className="mt-0 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {header.title.part1}{" "}
            <span className="relative inline-block text-slate-900">
              {header.title.part2}

              {/* <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-orange-500" /> */}
            </span>
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            {header.pretitle}
          </p>

          <div className="mt-8 inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-600" />

            <span className="text-[11px] font-bold uppercase tracking-widest text-orange-500 sm:text-sm">
              {header.sectionTag}
            </span>

            <span className="h-2 w-2 rounded-full bg-orange-600" />
          </div>
        </div>

        {/* ================= SECTOR CARDS ================= */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={sector.image.src}
                    alt={sector.image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Icon */}
                <div className="relative z-10 -mt-7 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-orange-500 shadow-md">
                    {getIcon(sector.iconName)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 pt-3 text-center">
                  <h3 className="font-serif text-base font-bold text-slate-900 transition-colors group-hover:text-orange-500">
                    {sector.title}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-500">
                    {sector.description}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pb-5 text-center">
                <a
                  href={sector.cta.url}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-500 transition-colors hover:text-orange-700"
                >
                  {sector.cta.text}

                  <span className="text-sm font-semibold transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ================= PARTNER BANNER ================= */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-orange-100/80 bg-gradient-to-r from-orange-50/80 via-white to-orange-50/60 p-6 shadow-sm  sm:p-10">
          {/* Decorative Pattern */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#dc2626_1px,transparent_1px)] opacity-5 [background-size:16px_16px]" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Content */}
            <div className="text-left lg:col-span-5">
              <h3 className="font-serif text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
                {partnerBanner.title.line1}

                <br />

                <span className="text-orange-500">
                  {partnerBanner.title.line2}
                </span>
              </h3>

              <div className="mt-2 h-[3px] w-12 bg-orange-500" />

              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-sm">
                {partnerBanner.description}
              </p>

              <div className="mt-6">
                <a
                  href={partnerBanner.cta.url}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-orange-700 hover:shadow-lg"
                >
                  {partnerBanner.cta.text}

                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 border-t border-orange-100 pt-6 sm:grid-cols-4 sm:gap-6 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {partnerBanner.metrics.map((metric, idx) => (
                <div
                  key={metric.id}
                  className={`flex flex-col items-center p-2 text-center ${
                    idx < partnerBanner.metrics.length - 1
                      ? "sm:border-r sm:border-orange-100"
                      : ""
                  }`}
                >
                  <div className="mb-2">{getMetricIcon(metric.iconName)}</div>

                  <span className="font-serif text-xl font-bold text-orange-500 sm:text-2xl">
                    {metric.value}
                  </span>

                  <span className="mt-1 text-sm font-medium text-slate-600">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
