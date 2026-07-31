
"use client";

import PageBanner from "../../shared/PageBanner"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiBookOpen,
  FiHeart,
  FiFeather,
  FiUser,
  FiSmile,
  FiShield,
  FiAward,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";
import { FaHandHoldingHeart } from "react-icons/fa";

import type { ServicesPageProps } from "@/type/typeSection";

const iconMap: Record<string, React.ReactNode> = {
  FiBookOpen: <FiBookOpen className="h-5 w-5 sm:h-6 sm:w-6" />,
  FiHeart: <FiHeart className="h-5 w-5 sm:h-6 sm:w-6" />,
  FiFeather: <FiFeather className="h-5 w-5 sm:h-6 sm:w-6" />,
  FiUser: <FiUser className="h-5 w-5 sm:h-6 sm:w-6" />,
  FiSmile: <FiSmile className="h-5 w-5 sm:h-6 sm:w-6" />,
  FiHeartHandshake: <FaHandHoldingHeart className="h-5 w-5 sm:h-6 sm:w-6" />,
  FiShield: <FiShield className="h-5 w-5 sm:h-6 sm:w-6" />,
  FiAward: <FiAward className="h-5 w-5 sm:h-6 sm:w-6" />,
  FiUsers: <FiUsers className="h-5 w-5 sm:h-6 sm:w-6" />,
};

export default function ServicesPage({ data }: ServicesPageProps) {
  const { header, items, callToAction, banner } = data;

  return (
    <main className="w-full ">
      {/* banner */}
      <PageBanner banner={banner} />

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 bg-[#fdfcfc] py-8 text-[#1a1a1a] sm:py-12 lg:py-16">
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center">
          {/* Top Divider & Tag */}
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-500 sm:text-sm">
            <span className="h-[1px] w-6 bg-orange-400 sm:w-10" />

            <span>{header.subTag}</span>

            <span className="h-[1px] w-6 bg-orange-400 sm:w-10" />
          </div>

          {/* Title */}
          <h1 className="mt-2 font-serif text-2xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
            {header.titlePrefix}

            <span className="relative inline-block text-orange-500">
              {header.titleHighlight}

              <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-orange-500" />
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            {header.description}
          </p>

          {/* Section Tag */}
          <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-orange-500 sm:mt-6 sm:text-xs">
            <span className="h-[1px] w-4 bg-orange-500 sm:w-8" />

            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

            <span>{header.sectionTag}</span>

            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

            <span className="h-[1px] w-4 bg-orange-500 sm:w-8" />
          </div>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100 sm:h-52">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Icon */}
                <div className="absolute -bottom-5 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-orange-500 text-white shadow-md ring-4 ring-white sm:-bottom-6 sm:h-13 sm:w-13">
                  {iconMap[item.icon] || (
                    <FiHeart className="h-5 w-5 sm:h-6 sm:w-6" />
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-4 pt-7 text-center sm:p-6 sm:pt-8">
                <h3 className="font-serif text-base font-bold text-[#111111] sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                  {item.description}
                </p>

                {/* Learn More */}
                <div className="mt-4 sm:mt-6">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-500 transition-colors hover:text-orange-600 sm:text-sm"
                  >
                    <span>{item.label}</span>

                    <FiArrowRight className="text-xs transition-transform group-hover:translate-x-1 sm:text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= CTA BANNER ================= */}
        <div className="relative mt-10 min-h-[280px] overflow-hidden rounded-2xl sm:mt-16">
          {/* Full CTA Background Image */}
          <Image
            src={callToAction.bannerImage}
            alt={callToAction.buttonText}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* White gradient from left 50% → transparent */}
          <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-white via-white/95 to-transparent" />

          {/* CTA Content */}
          <div className="relative z-10 grid min-h-[280px] grid-cols-1 items-center lg:grid-cols-12">
            <div className="p-5 sm:p-8 lg:col-span-7 lg:p-12">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="font-serif text-xl font-bold text-[#111111] sm:text-3xl lg:text-4xl">
                  {callToAction.titlePrefix}

                  <span className="text-orange-500">
                    {callToAction.titleHighlight}
                  </span>
                </h2>

                <p className="max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm lg:text-base">
                  {callToAction.description}
                </p>

                <div className="pt-2">
                  <Link
                    href={callToAction.buttonLink}
                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-orange-600 sm:px-7 sm:py-3 sm:text-sm"
                  >
                    <span>{callToAction.buttonText}</span>

                    <FiArrowRight className="text-xs sm:text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
