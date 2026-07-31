"use client";

import React from "react";
import Image from "next/image";
import {
  FiTarget,
  FiUsers,
  FiAward,
  FiHeart,
  FiDollarSign,
  FiArrowUpRight,
} from "react-icons/fi";
import { WhyChooseUsData } from "@/type/typeSection";

const renderIcon = (icon: string) => {
  switch (icon) {
    case "target":
      return <FiTarget size={30} strokeWidth={2} />;

    case "users":
      return <FiUsers size={30} strokeWidth={2} />;

    case "heart-hand":
      return <FiHeart size={30} strokeWidth={2} />;

    case "award":
      return <FiAward size={30} strokeWidth={2} />;

    case "handshake":
      return <FiUsers size={30} strokeWidth={2} />;

    case "donation":
      return <FiDollarSign size={30} strokeWidth={2} />;

    default:
      return <FiArrowUpRight size={30} />;
  }
};

export default function WhyChooseUs({
  data,
}: {
  data: WhyChooseUsData;
}) {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] md:px-32 px-2 py-8 ">
      <div className="relative mx-auto  bg-[#fffcf9] md:p-6 p-2">
        
        {/* BACKGROUND DECORATION */}
        {/* Left Glow Curved Border */}
        <div className="pointer-events-none absolute -left-12 top-0 h-full w-24 rounded-r-full bg-[#ffefe9] opacity-60 blur-xl" />

        {/* Dotted Grid Pattern Top Right */}
        <div className="pointer-events-none absolute right-6 top-6 grid grid-cols-6 gap-2.5 opacity-40">
          {Array.from({ length: 30 }).map((_, index) => (
            <span
              key={index}
              className="h-1 w-1 rounded-full bg-[#ff784b]"
            />
          ))}
        </div>

        {/* MAIN GRID CONTENT */}
        <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">

          {/* LEFT COLUMN: TITLE, DESC & IMAGE */}
          <div className="flex flex-col lg:col-span-5">

            {/* BADGE */}
            <div className="mb-3 flex items-center gap-2 text-xs md:tet-xl font-bold tracking-wider text-[#ff541b] uppercase">
              <FiHeart size={15} className="fill-[#ff541b]" />
              <span>{data.badge}</span>
            </div>

            {/* TITLE */}
            <h2 className="text-3xl font-extrabold text-[#0f172a] sm:text-4xl md:text-[50px] leading-[1.15]">
              {data.title.line1}
              <br />
              <span>
                {data.title.line2.split(" ").map((word, index) => (
                  <React.Fragment key={index}>
                    {index === data.title.line2.split(" ").length - 1 ? (
                      <span className="text-[#ff541b]">{word}</span>
                    ) : (
                      word
                    )}
                    {index !== data.title.line2.split(" ").length - 1 && " "}
                  </React.Fragment>
                ))}
              </span>
            </h2>

            {/* RED UNDERLINE */}
            <div className="mt-3 h-[3px] w-12 rounded-full bg-[#ff541b]" />

            {/* DESCRIPTION */}
            <p className="mt-5 text-xs sm:text-lg leading-relaxed text-[#525b70]">
              {data.desc}
            </p>

            {/* IMAGE CARD */}
            <div className="relative mt-8 min-h-[380px] w-full overflow-hidden rounded-2xl sm:min-h-[420px] lg:min-h-[400px]">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />

              {/* OVERLAY BADGE AT BOTTOM */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3.5 rounded-2xl bg-[#091024]/90 p-3.5 backdrop-blur-md shadow-lg sm:p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#ff541b] shadow-md">
                  {renderIcon(data.imageOverlay.icon)}
                </div>

                <p className="text-xs sm:text-sm font-normal text-white leading-tight">
                  {data.imageOverlay.text}{" "}
                  <span className="font-bold text-[#ff541b]">
                    {data.imageOverlay.highlight}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 6 FEATURE CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-5">
            {data.cards.map((card, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/[0.02] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)]"
              >
                <div>
                  {/* ICON */}
                  <div className="flex h-12 sm:h-16 sm:w-16 w-12 items-center justify-center rounded-full bg-[#fff0e8] text-[#ff541b] transition-colors duration-300 group-hover:bg-[#ff541b] group-hover:text-white">
                    {renderIcon(card.icon)}
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-4 text-base md:text-2xl font-bold leading-snug text-[#0f172a]">
                    {card.title}
                  </h3>

                  {/* UNDERLINE */}
                  <div className="mt-2.5 h-[2px] w-4 bg-[#ff541b]" />

                  {/* DESCRIPTION */}
                  <p className="mt-3 text-xs md:text-lg leading-relaxed text-[#64748b]">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* DECORATIVE DASHED HEART LINE (BOTTOM-LEFT) */}
        <div className="pointer-events-none absolute -bottom-4 -left-4 hidden h-28 w-20 opacity-70 sm:block">
          <svg
            viewBox="0 0 70 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <path
              d="M31 8C24 0 12 3 12 13C12 22 22 29 31 38C40 29 51 22 51 13C51 3 39 0 31 8Z"
              stroke="#ff9e80"
              strokeWidth="1.5"
            />
            <path
              d="M31 38C25 48 12 52 14 66C16 78 30 77 39 84"
              stroke="#ff9e80"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <path
              d="M39 84L34 80M39 84L34 87"
              stroke="#ff9e80"
              strokeWidth="1.5"
            />
          </svg>
        </div>

      </div>
    </section>
  );
}