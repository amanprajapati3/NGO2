"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiHeart, FiBookOpen, FiDroplet } from "react-icons/fi";
import { GrRestroomWomen } from "react-icons/gr";
import { HiOutlineHeart } from "react-icons/hi2";

import type { ProjectSectionProps, ProjectCard } from "@/type/typeSection";

const getProjectIcon = (icon: string) => {
  switch (icon) {
    case "book":
    case "education":
      return <FiBookOpen className="text-xl text-white" />;

    case "heart":
    case "healthcare":
      return <FiHeart className="text-xl text-white" />;

    case "drop":
    case "water":
      return <FiDroplet className="text-xl text-white" />;

    case "women":
    case "empowerment":
      return <GrRestroomWomen className="text-xl text-white" />;

    default:
      return <FiHeart className="text-xl text-white" />;
  }
};

export const HandDrawnHeart = ({
  className = "w-24 h-24",
  color = "#FFD5CE",
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

export const ConcentricHeartBadge = () => {
  return (
    /* Outer Circle Ring (Thin Light Gray Border) */
    <div className="flex h-16 w-16 md:h-28 md:w-28 items-center justify-center rounded-full border border-gray-300 bg-gray-50/30 p-1.5 shadow-sm">
      {/* Middle Concentric Ring (Thicker Soft Inner Border + Light Shadow) */}
      <div className="flex h-full w-full items-center justify-center rounded-full border border-gray-300 bg-white shadow-inner">
        
        {/* Heart-in-Hand SVG Icon */}
        <svg
          className="h-16 w-16 md:h-28 md:w-28 text-[#E52E04]"
          viewBox="0 0 64 64"
          fill="currentColor"
        >
          {/* Top Heart */}
          <path d="M32 26.8 C27.5 20.8, 17 21.8, 17 29.5 C17 35.8, 26 41.8, 32 46.5 C38 41.8, 47 35.8, 47 29.5 C47 21.8, 36.5 20.8, 32 26.8 Z" />

          {/* Supporting Hand */}
          <path d="M20 48.5 C20 46.5, 22 45, 24.5 45 L38 45 C41.5 45, 45 42.5, 48 40 C49.2 39, 51 40.5, 50 42 C46.5 47, 41 51, 35 51 L24.5 51 C22 51, 20 49.8, 20 48.5 Z" />
          <path d="M19 46.5 L14 43.5 C12.8 42.8, 12 43.8, 13 45 C15.5 48.5, 18 51, 22 51 L20 48.5 Z" />
        </svg>

      </div>
    </div>
  );
};

export default function ProjectSection({ data }: ProjectSectionProps) {
  const { badge, heading, description, items, cta } = data;

  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-0 md:pt-12 pt-10">
      {/* Background Soft Glow Orbs */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-orange-100/60 blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-orange-100/40 blur-[120px] pointer-events-none" />

      {/* circle design */}
      <div className="-top-15 -left-15 sm:h-32 sm:w-32 bg-orange-200 rounded-full absolute pointer-events-none"></div>
      {/* Decorative Grid Dots */}
      <div className="absolute md:top-28 top-5 md:left-6 left-0 grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        ))}
      </div>
      <div className="absolute md:top-28 top-5 md:right-6 right-0 grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        ))}
      </div>

      <div className="absolute md:top-40 top-10 rotate-6 md:right-60 right-5">
        <HandDrawnHeart />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col items-center text-center">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 pt-1 text-sm font-bold uppercase tracking-wider text-[#FF4500]">
            <HiOutlineHeart className="text-base text-[#FF4500]" />
            <span>{badge.label}</span>
          </div>

          {/* Main Title */}
          <h2 className="mt-1 font-serif text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            {heading.title}
          </h2>

          {/* Subheading Divider Line */}
          {/* <div className="md:mt-3 mt-1 flex items-center justify-center gap-3 text-sm font-semibold tracking-wide text-slate-500">
            <span className="h-[1px] w-10 bg-orange-300" />
            <FiHeart className="text-[10px] text-[#FF4500]" />
            <span>Making Impact Every Day</span>
            <span className="h-[1px] w-10 bg-orange-300" />
          </div> */}

          {/* Description Paragraph */}
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            {description}
          </p>
        </div>

        {/* ================= CARDS GRID ================= */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item: ProjectCard, index: number) => {
            const isPurple = index === 1 || index === 3;
            const primaryTextColor = isPurple
              ? "text-[#5B3CC4]"
              : "text-[#FF4500]";
            const circleBgColor = isPurple ? "bg-[#5B3CC4]" : "bg-[#FF4500]";

            return (
              <div
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                {/* Image Section with Overlapping Circle Badge */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />

                  {/* Overlapping Bottom-Left Circular Badge Icon */}
                  <div
                    className={`absolute bottom-0 left-0 flex h-12 w-12 items-center justify-center rounded-full ${circleBgColor} shadow-lg ring-4 ring-transparent`}
                  >
                    {getProjectIcon(item.icon)}
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col justify-between p-3">
                  <div>
                    {/* Category Label */}
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider ${primaryTextColor}`}
                    >
                      {item.category}
                    </span>

                    {/* Card Title */}
                    <h3 className="mt-0 text-base font-bold text-slate-900 group-hover:text-[#FF4500] transition-colors">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="mt-1 text-sm leading-relaxed text-slate-800">
                      {item.description}
                    </p>
                  </div>

                  {/* Text Action Link */}
                  <div className="mt-0 pt-2">
                    <Link
                      href={item.button.href}
                      className={`inline-flex items-center gap-1.5 text-sm font-bold transition-all hover:gap-2.5 ${primaryTextColor}`}
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

        {/* ================= BOTTOM CTA BANNER ================= */}
        {cta && (
          <div className="relative md:mt-12 mt-5 overflow-hidden rounded-2xl bg-[#fdf4f0] md:px-6 px-0 md:py-8 py-2 shadow-sm sm:px-10 lg:px-20">
            {/* Background Decorative Foliage / Leaf Accents */}
            {/* ================= LEFT LEAF BRANCH ================= */}
            <div className="absolute left-0 bottom-0 top-0 h-full w-24 sm:w-32 text-orange-200/50 pointer-events-none">
              <svg
                className="h-full w-full"
                viewBox="0 0 100 160"
                fill="currentColor"
                preserveAspectRatio="none"
              >
                {/* Main Stem */}
                <path
                  d="M 10 160 Q 30 90 20 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Filled Bended Leaves - Left & Right along Stem */}
                {/* Bottom Left Leaf */}
                <path d="M 12 140 C -10 135 -10 115 15 122 C 20 128 15 138 12 140 Z" />
                {/* Bottom Right Leaf */}
                <path d="M 17 125 C 45 110 40 135 20 138 C 17 132 17 127 17 125 Z" />

                {/* Mid Left Leaf */}
                <path d="M 18 100 C -5 90 -2 72 22 84 C 23 92 20 98 18 100 Z" />
                {/* Mid Right Leaf */}
                <path d="M 22 85 C 50 68 48 95 25 98 C 22 92 22 87 22 85 Z" />

                {/* Upper Left Leaf */}
                <path d="M 21 60 C 0 48 5 32 24 45 C 24 52 22 58 21 60 Z" />
                {/* Upper Right Leaf */}
                <path d="M 23 48 C 48 32 45 55 25 58 C 23 53 23 50 23 48 Z" />

                {/* Top Leaves */}
                <path d="M 21 25 C 8 12 12 0 22 10 C 22 18 21 22 21 25 Z" />
                <path d="M 20 10 C 32 0 28 18 18 22 C 18 16 19 12 20 10 Z" />
              </svg>
            </div>

            {/* ================= RIGHT LEAF BRANCH ================= */}
            <div className="absolute right-0 bottom-0 top-0 h-full w-24 sm:w-32 text-orange-200/50 pointer-events-none">
              <svg
                className="h-full w-full"
                viewBox="0 0 100 160"
                fill="currentColor"
                preserveAspectRatio="none"
              >
                {/* Main Stem */}
                <path
                  d="M 90 160 Q 70 90 80 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Filled Bended Leaves - Left & Right along Stem */}
                {/* Bottom Right Leaf */}
                <path d="M 88 140 C 110 135 110 115 85 122 C 80 128 85 138 88 140 Z" />
                {/* Bottom Left Leaf */}
                <path d="M 83 125 C 55 110 60 135 80 138 C 83 132 83 127 83 125 Z" />

                {/* Mid Right Leaf */}
                <path d="M 82 100 C 105 90 102 72 78 84 C 77 92 80 98 82 100 Z" />
                {/* Mid Left Leaf */}
                <path d="M 78 85 C 50 68 52 95 75 98 C 78 92 78 87 78 85 Z" />

                {/* Upper Right Leaf */}
                <path d="M 79 60 C 100 48 95 32 76 45 C 76 52 78 58 79 60 Z" />
                {/* Upper Left Leaf */}
                <path d="M 77 48 C 52 32 55 55 75 58 C 77 53 77 50 77 48 Z" />

                {/* Top Leaves */}
                <path d="M 79 25 C 92 12 88 0 78 10 C 78 18 79 22 79 25 Z" />
                <path d="M 80 10 C 68 0 72 18 82 22 C 82 16 81 12 80 10 Z" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-between md:gap-6 gap-2 sm:flex-row">
              {/* Left Side: Avatar + Text */}
              <div className="flex items-center gap-5 text-center flex-col sm:flex-row sm:text-left">
                {/* Double Ring Heart Avatar */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-100/70 p-2 ring-8 ring-orange-100/30">
                  
                    <div className="text-2xl" ><ConcentricHeartBadge /></div>
                </div>

                <div className="md:ml-5">
                  <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                    {cta.title}
                  </h3>
                  <p className="mt-1 max-w-md text-sm text-slate-600 sm:text-sm">
                    {cta.description}
                  </p>
                </div>
              </div>

              {/* Right Side: Donate Button */}
              <Link
                href={cta.button.href}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#FF4500] px-7 py-3 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-[#e03d00] hover:shadow-lg"
              >
                <span>{cta.button.label}</span>
                <FiArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
