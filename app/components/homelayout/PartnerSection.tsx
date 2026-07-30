"use client";

import Image from "next/image";
import Link from "next/link";
import type { PartnersSectionProps, PartnerItem } from "@/type/typeSection";
import { FiHeart } from "react-icons/fi";

export default function PartnersSection({ data }: PartnersSectionProps) {
  const { badge, title, description, partnersList } = data;

  // Duplicate logos for seamless infinite scrolling
  const logos = [...partnersList, ...partnersList];

  return (
    <section className="relative overflow-hidden bg-gray-100 py-8">
      {/* Background */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-orange-100 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-50 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Badge */}
        <div className="text-center">
          <span className="inline-flex rounded-full bg-orange-50 px-4 pt-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
            {badge.label}
          </span>

          {/* Heading */}
          <h2 className="mt-0 text-3xl font-extrabold text-slate-900 md:text-5xl">
            {title.line1}{" "}
            <span className="text-orange-700">{title.highlight}</span>
          </h2>

          <div className="mt-1 flex items-center justify-center gap-3 text-xs font-semibold tracking-wide text-slate-500">
            <span className="h-[1px] w-10 bg-orange-300" />
            <FiHeart className="text-[10px] text-[#FF4500]" />
            <span className="h-[1px] w-10 bg-orange-300" />
          </div>
          {/* Description */}
          <p className="mx-auto mt-2 max-w-3xl md:text-md text-sm text-slate-900">
            {description}
          </p>
        </div>

        {/* ================= Logo Slider ================= */}

        <div className="relative md:mt-12 mt-5 overflow-hidden">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-white to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          <div className="flex bg-gray-100 py-5 animate-partner-scroll gap-5 w-max">
            {logos.map((partner: PartnerItem, index) => (
              <Link
                key={`${partner.name}-${index}`}
                href={partner.website}
                target="_blank"
                className="flex h-28 w-56 flex-shrink-0 items-center justify-center rounded-2xl  bg-white px-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={70}
                  sizes="(max-width: 640px) 100px, (max-width: 1024px) 120px, 150px"
                  className="max-h-14 w-auto object-contain transition duration-300 hover:grayscale-0"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
