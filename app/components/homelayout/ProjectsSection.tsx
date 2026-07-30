"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiHeart,
  FiBookOpen,
  FiDroplet,
} from "react-icons/fi";
import { GrRestroomWomen } from "react-icons/gr";
import { HiOutlineHeart } from "react-icons/hi2";

import type {
  ProjectSectionProps,
  ProjectCard,
} from "@/type/typeSection";

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

export default function ProjectSection({
  data,
}: ProjectSectionProps) {
  const {
    badge,
    heading,
    description,
    items,
    cta,
  } = data;

  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-0 py-10">
      {/* Background Soft Glow Orbs */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-orange-100/60 blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-orange-100/40 blur-[120px] pointer-events-none" />

      {/* Decorative Grid Dots */}
      <div className="absolute top-10 left-6 grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        ))}
      </div>
      <div className="absolute top-10 right-6 grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col items-center text-center">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 pt-1 text-xs font-bold uppercase tracking-wider text-[#FF4500]">
            <HiOutlineHeart className="text-base text-[#FF4500]" />
            <span>{badge.label}</span>
          </div>

          {/* Main Title */}
          <h2 className="mt-1 font-serif text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            {heading.title}
          </h2>

          {/* Subheading Divider Line */}
          <div className="mt-3 flex items-center justify-center gap-3 text-xs font-semibold tracking-wide text-slate-500">
            <span className="h-[1px] w-10 bg-orange-300" />
            <FiHeart className="text-[10px] text-[#FF4500]" />
            <span>Making Impact Every Day</span>
            <span className="h-[1px] w-10 bg-orange-300" />
          </div>

          {/* Description Paragraph */}
          <p className="mt-2 max-w-2xl text-xs  text-slate-800 sm:text-sm">
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
            const circleBgColor = isPurple
              ? "bg-[#5B3CC4]"
              : "bg-[#FF4500]";

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
                    <p className="mt-1 text-xs leading-relaxed text-slate-800">
                      {item.description}
                    </p>
                  </div>

                  {/* Text Action Link */}
                  <div className="mt-0 pt-2">
                    <Link
                      href={item.button.href}
                      className={`inline-flex items-center gap-1.5 text-xs font-bold transition-all hover:gap-2.5 ${primaryTextColor}`}
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
          <div className="relative mt-12 overflow-hidden rounded-2xl bg-[#fdf4f0] px-6 py-8 shadow-sm sm:px-10 lg:px-12">
            {/* Background Decorative Foliage / Leaf Accents */}
            <div className="absolute left-2 bottom-0 text-orange-200/40 pointer-events-none">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                <path d="M10,90 Q 50,10 90,90 Z" />
              </svg>
            </div>
            <div className="absolute right-2 top-0 text-orange-200/40 pointer-events-none">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                <path d="M10,10 Q 90,50 10,90 Z" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
              {/* Left Side: Avatar + Text */}
              <div className="flex items-center gap-5 text-center sm:text-left">
                {/* Double Ring Heart Avatar */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-100/70 p-2 ring-8 ring-orange-100/30">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#FF4500] text-white shadow-md">
                    <FiHeart className="text-2xl" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                    {cta.title}
                  </h3>
                  <p className="mt-1 max-w-md text-xs text-slate-600 sm:text-sm">
                    {cta.description}
                  </p>
                </div>
              </div>

              {/* Right Side: Donate Button */}
              <Link
                href={cta.button.href}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#FF4500] px-7 py-3 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-[#e03d00] hover:shadow-lg"
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