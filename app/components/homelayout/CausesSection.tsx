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

export default function CausesSection({ data }: CausesSectionProps) {
  const { badge, title, description, items, exploreButton, cta } = data;

  return (
    <section className="relative overflow-hidden py-12">
      {/* Top Left / Bottom Right Light Glow Background Decorators */}
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-orange-100/60 blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-orange-100/40 blur-[120px] pointer-events-none" />

      {/* Background Decorative Grid Dots */}
      <div className="absolute top-12 left-6 grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        ))}
      </div>
      <div className="absolute top-12 right-6 grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none">
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
              <svg
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
              </svg>
            </span>{" "}
            {title.line2}
          </h2>

          {/* Center Line Divider with Heart */}
          <div className="mt-4 flex items-center gap-2">
            <div className="h-[2px] w-8 bg-slate-300" />
            <div className="h-[2px] w-12 bg-[#FF4500]" />
            <FiHeart className="text-xs text-[#FF4500]" />
            <div className="h-[2px] w-12 bg-[#FF4500]" />
            <div className="h-[2px] w-8 bg-slate-300" />
          </div>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            {description}
          </p>
        </div>

        {/* ================= CAUSE CARDS GRID ================= */}
        <div className="mt-12 grid grid-cols-1 px-4 sm:px-6 lg:px-8 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                  <div className="mt-6 flex items-center justify-between gap-3 pt-2">
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
          <div className="relative mt-5 overflow-hidden border bg-[#1c1830]  py-12 text-center text-white shadow-2xl  lg:py-16">
            {/* CTA Background Image Overlay */}
            {cta.backgroundImage && (
              <Image
                src={cta.backgroundImage}
                alt="CTA Background"
                fill
                className="object-cover opacity-10 pointer-events-none"
                sizes="100vw"
              />
            )}

            {/* Glowing Accent Orbs */}
            <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-[#FF4500]/20 blur-[100px] pointer-events-none" />
            <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-[#5B3CC4]/30 blur-[100px] pointer-events-none" />

            {/* CTA Content */}
            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="font-serif text-2xl font-extrabold sm:text-4xl lg:text-4xl">
                {cta.title}
              </h2>

              <p className="mt-3 text-xs text-slate-300 sm:text-sm lg:text-base leading-relaxed">
                {cta.description}
              </p>

              <div className="mt-8">
                <Link
                  href={cta.button.href}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF4500] px-8 py-3.5 text-xs font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[#e03d00] hover:shadow-orange-500/40"
                >
                  <FiHeart className="text-sm" />
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