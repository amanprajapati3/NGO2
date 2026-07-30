"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiHeart } from "react-icons/fi";
import type { EventsSectionProps, EventCard } from "@/type/typeSection";

export default function EventSection({ data }: EventsSectionProps) {
  const { badge, title, description, events } = data;

  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-0 py-8">
      {/* Background Soft Glow Orbs */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-orange-100/60 blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-100/40 blur-[120px] pointer-events-none" />

      {/* Decorative Top-Left Leaf Outline */}
      <div className="absolute top-8 left-10 text-orange-200/40 pointer-events-none hidden sm:block">
        <svg width="100" height="120" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M50,110 C50,110 20,70 20,40 C20,15 35,5 50,5 C65,5 80,15 80,40 C80,70 50,110 50,110 Z" />
          <path d="M50,110 L50,5" />
          <path d="M50,40 L30,25" />
          <path d="M50,60 L70,45" />
          <path d="M50,80 L30,65" />
        </svg>
      </div>

      {/* Decorative Grid Dots */}
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col items-center text-center">
          {/* Subtitle Line */}
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#FF4500]">
            <span className="h-[1px] w-8 bg-orange-200" />
            <span>{badge?.label || "Upcoming Events"}</span>
            <span className="h-[1px] w-8 bg-orange-200" />
          </div>

          {/* Main Title */}
          <h2 className="mt-0 font-serif text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            {title?.line1 || "Be Ready"}{" "}
            <span className="text-[#FF4500]">
              {title?.highlight || "For Our Events"}
            </span>
          </h2>

          {/* Subheading Heart Divider */}
          <div className="mt-1 flex items-center justify-center gap-3 text-xs font-semibold tracking-wide text-slate-500">
            <span className="h-[1px] w-12 bg-orange-300" />
            <FiHeart className="text-xs text-[#FF4500] fill-[#FF4500]" />
            <span className="h-[1px] w-12 bg-orange-300" />
          </div>

          {/* Optional Description Paragraph */}
          {description && (
            <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm">
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
                <div className="absolute inset-0 bg-black/70 transition-opacity duration-300 group-hover:opacity-95" />

                {/* Content Overlay Area */}
                <div className="relative z-10 flex flex-col items-start p-6 sm:p-8">
                  {/* Small Red Underline Accent above Title */}
                  <div className="mb-3 h-0.5 w-10 bg-[#FF4500]" />

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold leading-snug text-white sm:text-2xl">
                    {event.title}
                  </h3>

                  {/* Action Button */}
                  <div className="mt-6">
                    <Link
                      href={event.href || "#"}
                      className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg ${btnBg}`}
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