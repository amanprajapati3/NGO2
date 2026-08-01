import React from "react";
import PageBanner from "../../shared/PageBanner";
import type { AwardsDataProps } from "@/type/typeSection";
import { HiOutlineHeart } from "react-icons/hi2";

// ================= ACCURATE C-CURVED LAUREL LEAF BRANCH SVG =================
const LaurelWreathSVG = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 160 300"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main C-Curved Stem */}
    <path
      d="M130 290 C120 220, 85 130, 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.8"
    />

    {/* Top Tip Leaf */}
    <path d="M 20 20 C 10 10, 2 5, 0 0 C 10 2, 18 8, 23 20 Z" />

    {/* Leaf Pair 1 (Upper C-curve) */}
    <path d="M 23 28 C 10 20, -2 26, 0 40 C 12 38, 22 32, 26 27 Z" />
    <path d="M 29 22 C 38 10, 52 5, 60 10 C 54 22, 42 28, 32 25 Z" />

    {/* Leaf Pair 2 */}
    <path d="M 33 55 C 16 48, 2 56, 4 72 C 18 68, 30 60, 35 53 Z" />
    <path d="M 40 46 C 52 32, 68 30, 75 36 C 68 48, 54 55, 43 49 Z" />

    {/* Leaf Pair 3 (Middle C-bend) */}
    <path d="M 46 88 C 26 80, 10 92, 14 108 C 28 102, 42 94, 48 85 Z" />
    <path d="M 53 76 C 68 62, 85 62, 92 70 C 83 82, 68 88, 56 80 Z" />

    {/* Leaf Pair 4 */}
    <path d="M 60 125 C 38 118, 22 130, 28 148 C 42 140, 56 130, 62 120 Z" />
    <path d="M 68 112 C 85 98, 104 100, 110 110 C 98 122, 82 126, 72 116 Z" />

    {/* Leaf Pair 5 */}
    <path d="M 76 168 C 52 162, 36 176, 44 194 C 58 184, 72 172, 78 162 Z" />
    <path d="M 84 152 C 103 138, 122 142, 126 154 C 112 166, 96 168, 88 156 Z" />

    {/* Leaf Pair 6 (Lower Base Curve) */}
    <path d="M 92 215 C 68 210, 52 226, 62 244 C 76 232, 90 218, 96 208 Z" />
    <path d="M 101 198 C 122 184, 140 190, 144 204 C 128 214, 110 214, 104 201 Z" />

    {/* Leaf Pair 7 (Bottom Anchor) */}
    <path d="M 112 262 C 88 260, 74 278, 86 294 C 98 280, 110 266, 115 256 Z" />
    <path d="M 120 244 C 142 232, 158 240, 160 255 C 144 263, 128 260, 123 247 Z" />
  </svg>
);

// ================= EXTRA CURVED RIBBON STREAMERS & CONFETTI =================
const ConfettiBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    {/* Floating Confetti Particles (Left Side) */}
    <span className="absolute top-8 left-[5%] w-3 h-2 bg-red-500/70 rotate-12 rounded-xs" />
    <span className="absolute top-20 left-[12%] w-2.5 h-2.5 bg-amber-400/90 -rotate-45" />
    <span className="absolute top-36 left-[4%] w-3 h-1.5 bg-orange-500/80 rotate-45" />
    <span className="absolute top-48 left-[18%] w-2 h-2.5 bg-red-600/60 rotate-12" />

    {/* Floating Confetti Particles (Right Side) */}
    <span className="absolute top-10 right-[6%] w-2.5 h-3.5 bg-amber-500/80 -rotate-12 rounded-xs" />
    <span className="absolute top-24 right-[15%] w-3 h-2 bg-orange-600/70 rotate-45" />
    <span className="absolute top-40 right-[5%] w-2 h-2 bg-red-500/80 -rotate-12" />
    <span className="absolute top-52 right-[20%] w-3 h-2 bg-amber-400/80 rotate-12" />

    {/* LEFT SIDE EXTRA STREAMERS */}
    <svg
      className="absolute top-4 left-[2%] w-10 h-20 text-amber-400/80 opacity-90"
      viewBox="0 0 50 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
    >
      <path d="M40 0 C 0 30, 50 60, 10 100" strokeLinecap="round" />
    </svg>
    <svg
      className="absolute top-24 left-[10%] w-8 h-16 text-orange-500/70 opacity-80"
      viewBox="0 0 50 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
    >
      <path d="M10 0 C 40 30, 0 60, 30 100" strokeLinecap="round" />
    </svg>

    {/* RIGHT SIDE EXTRA STREAMERS */}
    <svg
      className="absolute top-6 right-[3%] w-12 h-24 text-amber-400/80 opacity-90"
      viewBox="0 0 50 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
    >
      <path d="M10 0 C 40 25, 0 55, 35 100" strokeLinecap="round" />
    </svg>
    <svg
      className="absolute top-28 right-[11%] w-8 h-16 text-red-500/60 opacity-80"
      viewBox="0 0 50 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
    >
      <path d="M40 0 C 0 30, 50 60, 15 100" strokeLinecap="round" />
    </svg>
  </div>
);

// Helper SVG Icons for Stats
const getStatIcon = (iconName: string) => {
  const iconProps = {
    className: "w-7 h-7 text-[#EA580C]",
    strokeWidth: 1.5,
  };

  switch (iconName) {
    case "trophy":
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
            d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75A1.125 1.125 0 017.5 15.375V18.75m9 0h-9M3.75 6h16.5m-16.5 0a2.25 2.25 0 00-2.25 2.25v1.5a4.5 4.5 0 004.5 4.5h.375m13.875-8.25a2.25 2.25 0 012.25 2.25v1.5a4.5 4.5 0 01-4.5 4.5h-.375m-13.875-8.25h14.25"
          />
        </svg>
      );

    case "ribbon":
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
            d="M16.5 8.25a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM12 12.75l3 7.5-3-1.5-3 1.5 3-7.5z"
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
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      );

    case "star":
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
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385c.116.488-.42.87-.842.612l-4.704-2.879a.563.563 0 00-.582 0l-4.704 2.879c-.422.258-.958-.124-.842-.612l1.285-5.385a.563.563 0 00-.182-.557l-4.204-3.602c-.38-.325-.178-.948.32-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      );
  }
};

export default function Award({ data }: AwardsDataProps) {
  const {
    banner,
    header,
    stats,
    awardsSection,
    supportBanner,
    transparencyBanner,
  } = data;

  return (
    <div className="w-full bg-[#FAF9F6] text-[#0F172A] font-sans antialiased">
      {/* ================= 1. TOP HERO BREADCRUMB BANNER ================= */}
      <PageBanner banner={banner} />

      {/* ================= 2. MAIN AWARDS SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-orange-50/20 py-12">
        {/* Floating Streamers and Confetti Backdrop */}
        <ConfettiBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* ================= SECTION HEADER ================= */}
          <div className="relative text-center max-w-3xl mx-auto pt-4 pb-6">
            {/* Left Opposite C-Shape Curved Laurel Wreath */}
            <LaurelWreathSVG className="absolute -left-4 sm:left-2 top-0 h-48 sm:h-60 text-red-300/80 -scale-x-100 pointer-events-none" />

            {/* Right C-Shape Curved Laurel Wreath */}
            <LaurelWreathSVG className="absolute -right-4 sm:right-2 top-0 h-48 sm:h-60 text-red-300/80 pointer-events-none" />

            {/* Top Badge */}
            <div className="flex justify-center gap-1">
              <HiOutlineHeart className="text-base text-[#FF4500]" />

              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#EA580C]">
                {header.topBadge}
              </span>
            </div>

            {/* Top Line & Star Divider */}
            {/* <div className="mt-2 flex items-center justify-center gap-3">
              <span className="h-[1.5px] w-12 sm:w-16 bg-[#EA580C]/40" />
              <svg
                className="w-5 h-5 text-[#EA580C]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="h-[1.5px] w-12 sm:w-16 bg-[#EA580C]/40" />
            </div> */}

            {/* Main Header Title */}
            <h2 className="mt-0 text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
              {header.title.part1}{" "}
              <span className="text-slate-900">{header.title.part2}</span>
            </h2>

            {/* Three Dots Line Underline */}
            {/* <div className="mt-3 flex items-center justify-center gap-1.5">
              <span className="h-[1.5px] w-8 bg-orange-300" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
              <span className="h-[1.5px] w-8 bg-orange-300" />
            </div> */}

            {/* pretitle */}
            <p className="mt-0 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
              {header.pretitle}
            </p>
          </div>

          {/* ================= 3. IMPACT STATS ================= */}
          <div className="mt-10 bg-white rounded-2xl shadow-sm border border-orange-100/80 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
            {stats.map((stat, idx) => (
              <div
                key={stat.id}
                className={`flex flex-col items-center ${
                  idx < stats.length - 1 ? "md:border-r border-orange-100" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center mb-3">
                  {getStatIcon(stat.iconName)}
                </div>

                <span className="font-serif text-2xl sm:text-4xl font-bold text-[#EA580C]">
                  {stat.value}
                </span>

                <span className="mt-1 text-xs font-semibold text-slate-700">
                  {stat.label}
                </span>

                <span className="mt-2 w-6 h-[2px] bg-[#EA580C]" />
              </div>
            ))}
          </div>

          {/* ================= 4. AWARDS GRID ================= */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3">
                

                <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                  {awardsSection.topBadge}
                </span>

              </div>

              <h3 className="mt-0 text-2xl sm:text-4xl font-serif font-bold text-slate-900">
                {awardsSection.title}
              </h3>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {awardsSection.awards.map((award) => (
                <div
                  key={award.id}
                  className="group bg-white rounded-2xl  border-black shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center transform hover:-translate-y-1"
                >
                  <div>
                    <div className="w-full mb-5 h-48 overflow-hidden rounded-t-xl bg-slate-50">
                      <img
                        src={award.image.src}
                        alt={award.image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h4 className="font-serif text-base font-bold text-slate-900 group-hover:text-[#EA580C] transition-colors">
                      {award.title}
                    </h4>

                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      {award.description}
                    </p>
                  </div>

                  <div className="my-3 pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-400">
                      {award.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= SUPPORT BANNER ================= */}
          <div className="mt-16 sm:mt-20 relative overflow-hidden rounded-2xl bg-[#FFF8F6] border border-orange-100/80 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[280px]">
              {/* ================= LEFT CONTENT ================= */}
              <div className="relative z-20 flex items-center px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
                <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 w-full">
                  {/* Heart / Hands Icon – matches reference (no circle) */}
                  <div className="w-16 md:w-28 bg-white rounded-full">
                    <img src="/heartImage.png" alt="" />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    {/* Badge */}
                    <div className="inline-block">
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.08em] text-orange-500">
                        {supportBanner.topBadge}
                      </span>
                      <div className="mt-1.5 w-9 h-[2px] bg-orange-400 rounded-full" />
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-[30px] font-bold text-[#1E293B] leading-[1.2]">
                      {supportBanner.title.line1}
                      <br />
                      <span className="text-orange-500">
                        {supportBanner.title.line2}
                      </span>
                    </h3>

                    {/* Description */}
                    <p className="mt-3.5 max-w-[340px] text-[12px] sm:text-[13px] text-slate-600 leading-relaxed">
                      {supportBanner.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-6">
                      <a
                        href={supportBanner.cta.url}
                        className="inline-flex items-center gap-2.5 rounded-full bg-orange-500 px-6 py-2.5 text-[12px] sm:text-[13px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-orange-600 hover:shadow-md"
                      >
                        {supportBanner.cta.text}
                        <span className="text-base leading-none translate-y-px">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= RIGHT IMAGE ================= */}
              <div className="relative h-[240px] sm:h-[300px] lg:h-auto min-h-[280px] overflow-hidden">
                {/* Trophy Image */}
                <img
                  src={supportBanner.trophyImage.src}
                  alt={supportBanner.trophyImage.alt}
                  className="absolute inset-0 w-full rounded-l-full  h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          {/* ================= 6. TRANSPARENCY BANNER ================= */}
          <div className="mt-8 rounded-2xl bg-[#C2410C] text-white p-5 sm:p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z"
                  />
                </svg>
              </div>

              <div>
                <h4 className="font-semibold text-sm sm:text-base">
                  {transparencyBanner.title}
                </h4>

                <p className="text-xs text-orange-100 mt-0.5">
                  {transparencyBanner.pretitle}
                </p>
              </div>
            </div>

            <a
              href={transparencyBanner.cta.url}
              className="px-5 py-2.5 rounded-full border border-white/80 text-white hover:bg-white hover:text-[#C2410C] transition-all text-xs font-bold whitespace-nowrap"
            >
              {transparencyBanner.cta.text} &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
