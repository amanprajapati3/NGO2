import React from "react";
import PageBanner from "../../shared/PageBanner";
import type { CSRPageProps } from "@/type/typeSection";
import { HiOutlineHeart } from "react-icons/hi2";

// --- Custom SVGs Matching Image Icons Exactly ---
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-orange-100 bg-red-50 text-orange-500 shadow-sm transition-transform hover:scale-105">
    {children}
  </div>
);

const renderIcon = (name: string) => {
  switch (name) {
    case "users":
      return (
        <IconWrapper>
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </IconWrapper>
      );

    case "heart-hands":
      return (
        <IconWrapper>
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </IconWrapper>
      );

    case "school":
      return (
        <IconWrapper>
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </IconWrapper>
      );

    case "tree":
      return (
        <IconWrapper>
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </IconWrapper>
      );

    case "graduation-cap":
      return (
        <IconWrapper>
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
          </svg>
        </IconWrapper>
      );

    case "healthcare":
      return (
        <IconWrapper>
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </IconWrapper>
      );

    case "leaf":
      return (
        <IconWrapper>
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        </IconWrapper>
      );

    case "person-gear":
      return (
        <IconWrapper>
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </IconWrapper>
      );

    case "handshake":
      return (
        <IconWrapper>
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017a2 2 0 01-1.747-1.027l-2.002-3.513M10 10H5.236a2 2 0 00-1.789 2.894l3.5 7A2 2 0 008.737 21h4.017a2 2 0 001.747-1.027l2.002-3.513"
            />
          </svg>
        </IconWrapper>
      );

    case "target":
      return (
        <IconWrapper>
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1" />
          </svg>
        </IconWrapper>
      );

    case "globe":
      return (
        <IconWrapper>
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
            />
          </svg>
        </IconWrapper>
      );

    case "shield-check":
      return (
        <IconWrapper>
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </IconWrapper>
      );

    case "award":
      return (
        <IconWrapper>
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v5l-3-2-3 2v-5M12 15v5l3-2 3 2v-5M12 15a7 7 0 100-14 7 7 0 000 14z"
            />
          </svg>
        </IconWrapper>
      );

    case "heart":
      return (
        <IconWrapper>
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </IconWrapper>
      );

    default:
      return null;
  }
};

interface CSRProps {
  data: CSRPageProps;
}

export default function CSR({ data }: CSRProps) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <PageBanner banner={data.banner} />

      {/* Main Container */}
      <div className="mx-auto max-w-7xl  px-4 py-12 sm:px-6 lg:px-8">
        {/* 2. Top Header & pretitle */}
        <div className="mx-auto max-w-3xl space-y-1 text-center">
          <div className="inline-flex items-center space-x-3">
            <HiOutlineHeart className="text-base text-[#FF4500]" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              {data.header.topBadge}
            </span>
          </div>

          <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
            {data.header.title.part1}{" "}
            <span className="text-slate-900">{data.header.title.part2}</span>
          </h2>

          {/* <div className="flex items-center justify-center gap-3 py-2 sm:gap-4">
            {/* Left line */}
            {/* <span className="h-[2px] w-10 rounded-full bg-orange-500 sm:w-16 md:w-20" /> */}

            {/* Heart */}
            {/* <span className="text-2xl leading-none text-orange-500 sm:text-3xl md:text-4xl">
              ♥
            </span> */}

            {/* Right line *
            <span className="h-[2px] w-10 rounded-full bg-orange-500 sm:w-16 md:w-20" />
          </div> */}

          <p className="text-sm leading-relaxed text-slate-600 md:text-base">
            {data.header.pretitle}
          </p>
        </div>

        {/* 3. Stats */}
        <div className="grid my-8 grid-cols-1 divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:grid-cols-2 sm:divide-x sm:divide-y-0 md:p-8 lg:grid-cols-4">
          {data.stats.map((stat) => (
            <div
              key={stat.id}
              className="space-y-2 pt-6 text-center first:pt-0 sm:pt-0"
            >
              {renderIcon(stat.iconName)}

              <h3 className="pt-2 font-serif text-3xl font-bold text-orange-600">
                {stat.value}
              </h3>

              <p className="text-sm font-bold text-slate-900">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 4. Focus Areas */}
        <div className="space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="font-serif text-2xl font-bold text-slate-900 md:text-3xl">
              {data.focusAreas.title}
            </h2>

            {/* <div className="mx-auto h-1 w-8 rounded-full bg-orange-500" /> */}
          </div>

          <div className="grid mb-6 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {data.focusAreas.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col  rounded-xl border border-slate-100 bg-white text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-40 w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                    {renderIcon(item.iconName)}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5 pt-8">
                  <div>
                    <h3 className="mb-2 font-serif text-base font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Our Impact */}
        <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-orange-100/60 bg-orange-50/50 p-6 md:p-10 lg:grid-cols-3">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-slate-900 md:text-3xl">
              {data.ourImpact.title}
            </h2>

            {/* <div className="h-1 w-8 rounded-full bg-orange-500" /> */}

            <p className="text-sm leading-relaxed text-slate-600">
              {data.ourImpact.description}
            </p>

            <button className="mt-4 flex items-center space-x-2 rounded-lg border border-orange-400 bg-white px-5 py-2.5 text-xs font-semibold text-orange-600 shadow-sm transition-colors hover:bg-orange-50">
              <span>{data.ourImpact.ctaButton.text}</span>
              <span>&rarr;</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            {data.ourImpact.pillars.map((pillar) => (
              <div key={pillar.id} className="space-y-2 p-2 text-center">
                {renderIcon(pillar.iconName)}

                <h4 className="pt-2 font-serif text-sm font-bold text-slate-900">
                  {pillar.title}
                </h4>

                <p className="text-xs leading-relaxed text-slate-500">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. CSR Projects */}
        <div className="space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="font-serif text-2xl font-bold text-slate-900 md:text-3xl">
              {data.csrProjects.title}
            </h2>

            {/* <div className="mx-auto h-1 w-8 rounded-full bg-orange-500" /> */}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {data.csrProjects.items.map((project) => (
              <div
                key={project.id}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="h-36 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="mb-2 font-serif text-sm font-bold text-slate-900">
                      {project.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-slate-500">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Call-to-Action Banner */}
        <div className="flex mt-8 flex-col items-center justify-between gap-6 rounded-2xl bg-orange-700 p-8 text-white shadow-lg md:flex-row md:p-10">
          <div className="flex items-center space-x-6 text-center md:text-left">
            <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-orange-500/50 bg-orange-800 sm:flex">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>

            <div className="space-y-1">
              <h3 className="font-serif text-xl font-bold md:text-2xl">
                {data.bannerCta.title}
              </h3>

              <p className="text-xs text-red-100 md:text-sm">
                {data.bannerCta.description}
              </p>
            </div>
          </div>

          <button className="flex items-center space-x-2 whitespace-nowrap rounded-lg bg-white px-6 py-3 text-sm font-bold text-orange-700 shadow-sm transition-colors hover:bg-orange-50">
            <span>{data.bannerCta.buttonText}</span>
            <span>&rarr;</span>
          </button>
        </div>

        {/* 8. Core Values */}
        <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 md:grid-cols-4">
          {data.coreValues.items.map((value) => (
            <div
              key={value.id}
              className="flex items-center space-x-4 rounded-xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="shrink-0">{renderIcon(value.iconName)}</div>

              <div>
                <h4 className="font-serif text-sm font-bold text-slate-900">
                  {value.title}
                </h4>

                <p className="mt-1 text-xs text-slate-500">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
