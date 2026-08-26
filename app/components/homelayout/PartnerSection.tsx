
"use client";

import Image from "next/image";
import Link from "next/link";
import type { PartnersSectionProps, PartnerItem } from "@/type/typeSection";
import { FiHeart } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi2";
import ScrollReveal from "../shared/ScrollReveal";

export default function PartnersSection({ data }: PartnersSectionProps) {
  const { badge, title, description, partnersList } = data;

  return (
    <section className="relative overflow-hidden bg-gray-100 py-8 md:py-12">
      {/* Background */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-orange-100 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-50 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
        <div className="text-center">
          {/* Badge */}
          <div className="flex justify-center gap-1">
             <HiOutlineHeart className="text-base text-[#FF4500]" />
          <span className="inline-flex rounded-full bg-orange-50  text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
            {badge.label}
          </span>
          </div>


          {/* Heading */}
          <h2 className="mt-0 text-3xl font-extrabold text-slate-900 md:text-5xl">
            {title.line1}{" "}
            <span className="text-slate-900">{title.highlight}</span>
          </h2>

          {/* Decorative Line */}
          {/* <div className="mt-1 flex items-center justify-center gap-3 text-sm font-semibold tracking-wide text-slate-500">
            <span className="h-[1px] w-10 bg-orange-300" />

            <FiHeart className="text-[10px] text-[#FF4500]" />

            <span className="h-[1px] w-10 bg-orange-300" />
          </div> */}

          {/* Description */}
          <p className="mx-auto mt-1 max-w-2xl text-sm leading-relaxed text-slate-500 sm:mt-2 sm:text-base">
            {description}
          </p>
        </div>
        </ScrollReveal>

        {/* ================= Partners Grid ================= */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-12 md:grid-cols-4 lg:grid-cols-5 lg:gap-5">
          {partnersList.map((partner: PartnerItem, index: number) => (
            <ScrollReveal key={partner.name} direction="scale" delay={0.2 + index * 0.08}>
            <Link
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-28 items-center justify-center rounded-2xl bg-white px-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl sm:h-32 sm:px-6"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={70}
                sizes="(max-width: 640px) 100px, (max-width: 1024px) 120px, 150px"
                className="max-h-14 w-auto object-contain transition duration-300 group-hover:scale-105"
              />
            </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
