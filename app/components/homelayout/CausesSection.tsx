"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FiArrowRight,
  FiBookOpen,
  FiHeart,
  FiHome,
  FiUsers,
} from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi2";

import type { CausesSectionProps, CauseItem } from "@/type/typeSection";

const getCauseIcon = (icon: string) => {
  switch (icon) {
    case "education":
      return <FiBookOpen className="text-xl text-white" />;
    case "donation":
      return <FiHeart className="text-xl text-white" />;
    case "medical":
    case "helpless":
      return <FiHome className="text-xl text-white" />;
    default:
      return <FiHeart className="text-xl text-white" />;
  }
};
export const HandDrawnHeart = ({ 
  className = "w-24 h-24", 
  color = "#FFD5CE" 
}: { 
  className?: string; 
  color?: string; 
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 33 78 C 50 63 85 49 85 38 C 85 27 70 23 60 32 C 55 36 53 41 53 41 C 53 41 50 33 46 29 C 40 23 27 25 27 38 C 27 52 50 72 75 85"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function CausesSection({ data }: CausesSectionProps) {
  const { badge, title, description, items, exploreButton, cta } = data;

  return (
    <section className="relative overflow-hidden md:pt-12 pt-5">

       
      {/* Top Left / Bottom Right Light Glow Background Decorators */}
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-orange-100 blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-orange-100 blur-[120px] pointer-events-none" />


       {/* circle design top right and left */}
       <div className="-top-15 -left-15 sm:h-32 sm:w-32 bg-orange-200 rounded-full absolute pointer-events-none">
       </div>

       <div className="absolute md:top-40 top-14 rotate-6 md:right-60 right-10">
        <HandDrawnHeart/>
       </div>
      
      {/* Background Decorative Grid Dots */}
      <div className="absolute md:top-28 top-5 left-0 md:left-6 grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        ))}
      </div>
      <div className="absolute md:top-28 top-5 right-0 md:right-6 grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        ))}
      </div>
      

      <div className="relative mx-auto ">
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full  px-3.5 pt-1 text-xs font-bold uppercase tracking-wider text-[#FF4500]">
            <HiOutlineHeart className="text-base text-[#FF4500]" />
            <span>{badge.label}</span>
          </div>

          {/* Heading */}
          <h2 className="mt-1 font-serif text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            {title.line1}{" "}
            <span className="relative inline-block text-[#0F172A]">
              {title.highlight}
              {/* Curved red brush accent under highlight text */}
              {/* <svg
                className="absolute -bottom-2 left-0 w-full text-[#FF4500]"
                height="10"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 15 Q 50 0, 100 12"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg> */}
            </span>{" "}
            {title.line2}
          </h2>

          {/* Center Line Divider with Heart */}
          {/* <div className="mt-4 flex items-center gap-2">
            <div className="h-[2px] w-8 bg-slate-300" />
            <div className="h-[2px] w-12 bg-[#FF4500]" />
            <FiHeart className="text-xs text-[#FF4500]" />
            <div className="h-[2px] w-12 bg-[#FF4500]" />
            <div className="h-[2px] w-8 bg-slate-300" />
          </div> */}

          {/* Description */}
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            {description}
          </p>
        </div>

        {/* ================= CAUSE CARDS GRID ================= */}
        <div className="md:mt-12 mt-4 grid grid-cols-1 px-4 sm:px-6 lg:px-8 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item: CauseItem, index: number) => {
            const isPurple = index === 1;
            const primaryColorClass = isPurple
              ? "text-[#5B3CC4]"
              : "text-[#FF4500]";
            const bgIconClass = isPurple ? "bg-[#5B3CC4]" : "bg-[#FF4500]";
            const bgButtonClass = isPurple
              ? "bg-[#5B3CC4] hover:bg-[#4a2eb0]"
              : "bg-[#FF4500] hover:bg-[#e03d00]";

            return (
              <div
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                {/* Image & Floating Corner Icon */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Top Left Rounded Badge Icon */}
                  <div
                    className={`absolute top-0 left-0 flex h-14 w-14 items-center justify-center rounded-br-2xl ${bgIconClass} shadow-md`}
                  >
                    {getCauseIcon(item.icon)}
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    {/* Category */}
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${primaryColorClass}`}
                    >
                      {item.category}
                    </span>

                    {/* Title */}
                    <h3 className="mt-2 text-xl font-bold leading-snug text-slate-900 group-hover:text-[#FF4500] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="md:mt-6 mt-2 flex items-center justify-between gap-3 pt-2">
                    {/* Secondary Icon Circle */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                        isPurple ? "bg-purple-50 text-[#5B3CC4]" : "bg-orange-50 text-[#FF4500]"
                      }`}
                    >
                      <FiUsers className="text-lg" />
                    </div>

                    {/* Main Donate Button */}
                    <Link
                      href={item.button.href}
                      className={`flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all ${bgButtonClass}`}
                    >
                      <span>{item.button.label}</span>
                      <FiArrowRight className="text-sm" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= EXPLORE MORE BUTTON ================= */}
        <div className="mb-12 mt-4 flex justify-center">
          <Link
            href={exploreButton.href}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-xs font-bold text-slate-800 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50"
          >
            <span>{exploreButton.label}</span>
            <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ================= CTA BANNER ================= */}
{cta && (
  <div className="relative mt-5 h-[260px] sm:h-[280px] overflow-hidden bg-[#232042] py-10 text-center text-white shadow-2xl  flex items-center justify-center">
    
    {/* ================= BACKGROUND LEAVES (EXACT SCALE & POSITIONS) ================= */}
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex justify-between items-center px-2 sm:px-6">
      
      {/* 1. FAR LEFT: Upward Curved Split Leaf */}
      <svg
        className="h-[85%] w-auto text-[#3C3666] -ml-4"
        viewBox="0 0 100 200"
        fill="currentColor"
      >
        <path d="M 15 200 C 10 140 30 70 80 10 C 95 40 90 90 65 140 C 45 175 30 190 15 200 Z" />
        <path d="M 15 200 Q 40 100 80 10" stroke="#232042" strokeWidth="2.5" fill="none" />
        {/* Cuts */}
        <path d="M 60 55 L 82 65 L 65 80 Z" fill="#232042" />
        <path d="M 50 95 L 72 108 L 54 120 Z" fill="#232042" />
        <path d="M 38 140 L 58 152 L 42 162 Z" fill="#232042" />
      </svg>

      {/* 2. INNER LEFT: Downward Drooping Fern */}
      <svg
        className="h-[95%] w-auto text-[#3C3666] -ml-6 sm:-ml-2"
        viewBox="0 0 140 200"
        fill="none"
        stroke="currentColor"
      >
        <path d="M 130 -10 Q 100 80 10 160" strokeWidth="3" strokeLinecap="round" />
        {/* Left Side Fronds */}
        <path d="M 110 25 Q 70 20 40 30" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 98 48 Q 58 40 28 55" strokeWidth="5" strokeLinecap="round" />
        <path d="M 85 72 Q 48 65 18 82" strokeWidth="5" strokeLinecap="round" />
        <path d="M 70 98 Q 36 92 10 112" strokeWidth="5" strokeLinecap="round" />
        <path d="M 55 122 Q 26 120 4 140" strokeWidth="4.5" strokeLinecap="round" />
        
        {/* Right Side Fronds */}
        <path d="M 120 15 Q 95 40 75 60" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 108 38 Q 82 65 62 88" strokeWidth="5" strokeLinecap="round" />
        <path d="M 92 62 Q 68 90 50 112" strokeWidth="5" strokeLinecap="round" />
        <path d="M 76 88 Q 54 118 38 138" strokeWidth="4.5" strokeLinecap="round" />
      </svg>

      {/* 3. INNER RIGHT: Large Monstera Leaf Hanging Down */}
      <svg
        className="h-[105%] w-auto text-[#3C3666] -mr-6 sm:-mr-2"
        viewBox="0 0 160 200"
        fill="currentColor"
      >
        <path d="M 30 -20 C 95 -20 160 40 150 120 C 140 170 95 200 50 180 C 15 160 -10 100 5 40 Z" />
        {/* Center Stem & Veins */}
        <path d="M 30 -20 Q 65 70 100 165" stroke="#232042" strokeWidth="3" fill="none" />
        <path d="M 48 25 Q 95 20 128 35" stroke="#232042" strokeWidth="2" fill="none" />
        <path d="M 58 65 Q 108 65 138 85" stroke="#232042" strokeWidth="2" fill="none" />
        <path d="M 68 105 Q 112 112 132 138" stroke="#232042" strokeWidth="2" fill="none" />
      </svg>

      {/* 4. FAR RIGHT: Upward Fan Palm Leaf */}
      <svg
        className="h-[95%] w-auto text-[#3C3666] -mr-4"
        viewBox="0 0 130 200"
        fill="none"
        stroke="currentColor"
      >
        <path d="M 105 210 Q 90 110 10 10" strokeWidth="3" strokeLinecap="round" />
        {/* Top Fronds */}
        <path d="M 20 22 Q 55 20 88 32" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 32 38 Q 66 36 98 52" strokeWidth="5" strokeLinecap="round" />
        <path d="M 44 58 Q 78 55 108 75" strokeWidth="5" strokeLinecap="round" />
        <path d="M 56 80 Q 88 78 118 100" strokeWidth="5" strokeLinecap="round" />
        <path d="M 68 102 Q 96 105 122 128" strokeWidth="4.5" strokeLinecap="round" />

        {/* Bottom Fronds */}
        <path d="M 12 15 Q 32 50 52 80" strokeWidth="4" strokeLinecap="round" />
        <path d="M 24 35 Q 44 70 64 102" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 38 58 Q 56 92 74 125" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 52 82 Q 70 118 86 148" strokeWidth="4" strokeLinecap="round" />
      </svg>

    </div>

    {/* ================= CTA CONTENT (CENTERED OVER LEAVES) ================= */}
    <div className="relative z-10 mx-auto max-w-xl px-4">
      <h2 className="font-serif text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
        {cta.title}
      </h2>

      <p className="mt-2.5 text-xs text-slate-300 sm:text-sm leading-relaxed opacity-90 max-w-md mx-auto">
        {cta.description}
      </p>

      <div className="mt-6">
        <Link
          href={cta.button.href}
          className="inline-flex items-center gap-2 rounded-full bg-[#463E75] hover:bg-[#524989] px-7 py-2.5 text-xs font-bold text-white shadow-md transition-all border border-white/10"
        >
          <span>{cta.button.label}</span>
          <FiArrowRight className="text-sm" />
        </Link>
      </div>
    </div>

  </div>
)}
      </div>
    </section>
  );
}