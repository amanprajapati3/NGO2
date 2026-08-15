"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiHeart } from "react-icons/fi";
import type { EventsSectionProps, EventCard } from "@/type/typeSection";
import { HiOutlineHeart } from "react-icons/hi2";

export default function EventSection({ data }: EventsSectionProps) {
  const { badge, title, description, events } = data;

  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-0 md:py-12 py-8">
      {/* Background Soft Glow Orbs */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-orange-100/60 blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-100/40 blur-[120px] pointer-events-none" />

{/* circle design */}
      <div className="top-28 -right-16 h-20 w-20 sm:h-32 sm:w-32 bg-orange-100 rounded-full absolute pointer-events-none"></div>

      {/* Decorative Top-Left Leaf Outline */}
      <div className="absolute top-8 left-28 rotate-6 text-orange-200 pointer-events-none hidden sm:block">
  <svg
    width="120"
    height="140"
    viewBox="0 0 120 140"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Main Curved Stem */}
    <path d="M 60 130 Q 55 80 70 20" />

    {/* ================= 1. BOTTOM LEFT LEAF ================= */}
    <g className="leaf-left-bottom">
      {/* Leaf Outline */}
      <path d="M 58 95 C 40 92 20 80 15 65 C 28 60 48 70 58 95 Z" />
      {/* Center Vein */}
      <path d="M 58 95 C 42 85 28 75 15 65" />
      {/* Side Veins */}
      <path d="M 46 88 Q 38 80 34 76" />
      <path d="M 36 81 Q 28 73 25 70" />
    </g>

    {/* ================= 2. MIDDLE RIGHT LEAF ================= */}
    <g className="leaf-right-middle">
      {/* Leaf Outline */}
      <path d="M 64 70 C 82 65 100 50 105 32 C 90 30 72 42 64 70 Z" />
      {/* Center Vein */}
      <path d="M 64 70 C 78 58 92 45 105 32" />
      {/* Side Veins */}
      <path d="M 74 61 Q 84 55 88 50" />
      <path d="M 85 51 Q 93 43 96 39" />
    </g>

    {/* ================= 3. TOP LEAF (TIP) ================= */}
    <g className="leaf-top">
      {/* Leaf Outline */}
      <path d="M 69 28 C 60 18 55 5 62 2 C 70 12 73 20 69 28 Z" />
      {/* Center Vein */}
      <path d="M 69 28 C 65 18 61 10 62 2" />
      {/* Side Veins */}
      <path d="M 67 22 Q 62 16 60 14" />
      <path d="M 65 14 Q 61 9 60 7" />
    </g>
  </svg>
</div>

      {/* Decorative Grid Dots */}
      <div className="absolute top-28 left-6 grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        ))}
      </div>
      <div className="absolute top-5 right-6 grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col items-center text-center">
          {/* pretitle Line */}
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-[#FF4500]">
            <HiOutlineHeart className="text-base text-[#FF4500]" />
            <span>{badge?.label || "Upcoming Events"}</span>
          </div>

          {/* Main Title */}
          <h2 className="mt-0 font-serif text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            {title?.line1 || "Be Ready"}{" "}
            <span className="text-[#0F172A]">
              {title?.highlight || "For Our Events"}
            </span>
          </h2>

          {/* Subheading Heart Divider */}
          {/* <div className="mt-1 flex items-center justify-center gap-3 text-sm font-semibold tracking-wide text-slate-500">
            <span className="h-[1px] w-12 bg-orange-300" />
            <FiHeart className="text-sm text-[#FF4500] fill-[#FF4500]" />
            <span className="h-[1px] w-12 bg-orange-300" />
          </div> */}

          {/* Optional Description Paragraph */}
          {description && (
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
              {description}
            </p>
          )}
        </div>

        {/* ================= EVENT CARDS GRID ================= */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event: EventCard, index: number) => {
            // Button theme variations matching image: Red, Purple, Orange
            const buttonBgStyles = [
              "bg-[#D32F2F] hover:bg-[#B71C1C]", // Red
              "bg-[#4C35A8] hover:bg-[#3B2885]", // Purple
              "bg-[#FF5722] hover:bg-[#E64A19]", // Orange
            ];

            const btnBg = buttonBgStyles[index % buttonBgStyles.length];

            return (
              <div
                key={event.title}
                className="group relative flex h-[420px] w-full flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                {/* Background Image */}
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black  transition-opacity duration-300 group-hover:opacity-95" />

                {/* Content Overlay Area */}
                <div className="relative z-10 flex flex-col items-start p-6 sm:p-8">
                  {/* Small Red Underline Accent above Title */}
                  <div className="mb-3 h-0.5 w-10 bg-[#FF4500]" />

                  {/* Title */}
                  <h3 className="font-serif text-xl hover:text-orange-500 font-bold leading-snug text-white sm:text-2xl">
                   <a href={event.href}>{event.title}</a> 
                  </h3>

                  {/* Action Button */}
                  <div className="mt-6">
                    <Link
                      href={event.button.href || "#"}
                      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold md:px-12 text-white shadow-md transition-all duration-300 hover:shadow-lg ${btnBg}`}
                    >
                      <span>{event.button?.label || "Join Now"}</span>
                      <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}