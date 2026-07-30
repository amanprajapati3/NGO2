"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiHeart, FiShield } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { HiOutlineHeart } from "react-icons/hi2";

import type { SupportSectionProps } from "@/type/typeSection";

export const HandDrawnHeartWithTail = ({
  className = "w-16 h-16",
  color = "#ff9248",
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
        d="M 48 30 C 40 18 20 22 22 42 C 24 58 48 76 48 76 C 48 76 72 58 74 42 C 75 32 68 22 58 24 C 52 25 48 30 48 30 C 58 26 72 18 88 15"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const ExactCaringHandsIcon = ({ className = "w-20 h-20" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Soft Pink Circle */}
      <circle cx="50" cy="50" r="46" fill="#FCECE8" />

      {/* White Outline Border Layer */}
      <g fill="#FFFFFF">
        <path d="M 50 51.5 C 47.5 49 28 35.5 28 25.5 C 28 18.5 33.5 13.5 40.5 13.5 C 45 13.5 48.5 15.5 50 18 C 51.5 15.5 55 13.5 59.5 13.5 C 66.5 13.5 72 18.5 72 25.5 C 72 35.5 52.5 49 50 51.5 Z" />
        <path d="M 34.5 76.5 C 33 76.5 24 73 24 64.5 C 24 56.5 26.5 46.5 26.5 46.5 C 26.5 44.5 29 44.5 29.5 46.5 C 29.5 46.5 31.5 56.5 34 58.5 C 36 60 40.5 57 41.5 54.5 C 42 53.5 39.5 50.5 35 48 C 33 47 34 44.5 36 44.5 C 41 46.5 46 51 46 57 C 46 65.5 39 76.5 34.5 76.5 Z" />
        <path d="M 65.5 76.5 C 67 76.5 76 73 76 64.5 C 76 56.5 73.5 46.5 73.5 46.5 C 73.5 44.5 71 44.5 70.5 46.5 C 70.5 46.5 68.5 56.5 66 58.5 C 64 60 59.5 57 58.5 54.5 C 58 53.5 60.5 50.5 65 48 C 67 47 66 44.5 64 44.5 C 59 46.5 54 51 54 57 C 54 65.5 61 76.5 65.5 76.5 Z" />
      </g>

      {/* Main Red Icon */}
      <g fill="#D30808">
        <path d="M 50 49 C 47.8 46.8 30 34 30 25 C 30 19.5 34.5 15.5 40 15.5 C 44 15.5 47.2 17.3 50 20 C 52.8 17.3 56 15.5 60 15.5 C 65.5 15.5 70 19.5 70 25 C 70 34 52.2 46.8 50 49 Z" />
        <path d="M 35 74.5 C 33.8 74.5 26 71.5 26 64 C 26 57 28 48 28 48 C 28 47 29 47 29.5 48 C 29.5 48 31 56 33.5 57.5 C 35.5 59 39 56.5 40 54.5 C 40.5 53.5 38.5 51.5 35 49.5 C 34 49 34.5 47.5 36 47.5 C 40 49 44.5 53 44.5 58 C 44.5 65 38.5 74.5 35 74.5 Z" />
        <path d="M 65 74.5 C 66.2 74.5 74 71.5 74 64 C 74 57 72 48 72 48 C 72 47 71 47 70.5 48 C 70.5 48 69 56 66.5 57.5 C 64.5 59 61 56.5 60 54.5 C 59.5 53.5 61.5 51.5 65 49.5 C 66 49 65.5 47.5 64 47.5 C 60 49 55.5 53 55.5 58 C 55.5 65 61.5 74.5 65 74.5 Z" />

        {/* Gloss Marks */}
        <circle cx="41.5" cy="22" r="2.2" fill="#FFFFFF" />
        <ellipse cx="58.5" cy="22.5" rx="1.8" ry="3.2" transform="rotate(-30 58.5 22.5)" fill="#FFFFFF" />
      </g>
    </svg>
  );
};

export default function DonationSection({ data }: SupportSectionProps) {
  const { badge, title, description, button, image, floatingCard, signature } =
    data;

  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-0 py-0">
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full blur-[120px]" />

      {/* Outer Section Box */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-red-200">
          <div className="grid grid-cols-1 items-center lg:grid-cols-12">
            {/* ================= LEFT CONTENT AREA ================= */}
            <div className="z-10 flex flex-col items-center px-6 py-10 text-center sm:px-10 lg:col-span-6 lg:items-start lg:py-14 lg:pl-14 lg:pr-6 lg:text-left">
              {/* Badge Pill with Icon */}
              <div className="inline-flex items-center gap-2.5">
                <div>
                  <ExactCaringHandsIcon/>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#FF4500]">
                  {badge.label}
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="mt-1 font-serif text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                {title.line1}{" "}
                <span className="text-[#FF4500]">
                  {title.highlight || "Change"}
                </span>{" "}
                {title.highlight}
              </h2>

              {/* Divider */}
              <div className="mt-2 flex items-center gap-2 text-[#FF4500]">
                <span className="h-[2px] w-12 bg-[#FF4500]" />
                <FiHeart className="text-xs" />
                <span className="h-[2px] w-12 bg-[#FF4500]" />
              </div>

              {/* Description */}
              <p className="mt-4 max-w-lg text-xs leading-relaxed text-slate-600 sm:text-sm">
                {description}
              </p>

              {/* Action Button */}
              <div className="mt-6">
                <Link
                  href={button.href}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#FF4500] px-8 py-3.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-[#e03d00] hover:shadow-lg"
                >
                  <FiHeart className="text-sm" />
                  <span>{button.label}</span>
                  <FiArrowRight className="text-sm" />
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="mt-5 flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                <FiShield className="text-xs text-[#FF4500]" />
                <span>100% Secure Donation | Make an Impact Today</span>
              </div>
            </div>

            {/* ================= RIGHT IMAGE AREA ================= */}
            <div className="relative min-h-[380px] w-full lg:col-span-6 lg:min-h-[480px]">
              {/* Curved Image */}
              <div className="relative h-full min-h-[380px] w-full overflow-hidden rounded-br-[420px] lg:min-h-[480px] lg:rounded-l-[240px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Circular Badge */}
              <div className="absolute left-6 top-1/2 z-30 flex h-32 w-32 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#FDF0EB] p-4 text-center shadow-lg ring-4 ring-white sm:h-36 sm:w-36 lg:left-0 lg:-translate-x-1/3">
                <div className="mb-1 flex h-7 w-7 items-center justify-center text-[#FF4500]">
                  <FaHeart className="text-lg" />
                </div>

                <p className="text-[10px] font-bold leading-tight text-slate-800 sm:text-[11px]">
                  {floatingCard.title}
                </p>

                {floatingCard.subtitle && (
                  <p className="mt-0.5 text-[9px] text-slate-500">
                    {floatingCard.subtitle}
                  </p>
                )}
              </div>

              {/* Botanical Leaf Branch */}
              <div className="absolute bottom-1 -right-16 text-orange-100 pointer-events-none hidden sm:block">
                <svg
                  width="140"
                  height="180"
                  viewBox="0 0 140 180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Main Taller & Curved Stem (Bends Left) */}
                  <path d="M 85 170 C 80 120 25 80 45 15" />

                  {/* ================= 1. BOTTOM LEFT LEAF ================= */}
                  <g className="leaf-1">
                    {/* Outline */}
                    <path d="M 81 140 C 58 142 32 135 22 120 C 40 112 65 120 81 140 Z" />
                    {/* Center Vein */}
                    <path d="M 81 140 C 60 132 40 125 22 120" />
                    {/* Side Veins */}
                    <path d="M 66 134 Q 56 128 50 125" />
                    <path d="M 50 128 Q 40 122 35 120" />
                  </g>

                  {/* ================= 2. BOTTOM RIGHT LEAF ================= */}
                  <g className="leaf-2">
                    {/* Outline */}
                    <path d="M 75 122 C 96 118 120 108 128 92 C 108 90 88 102 75 122 Z" />
                    {/* Center Vein */}
                    <path d="M 75 122 C 92 110 110 100 128 92" />
                    {/* Side Veins */}
                    <path d="M 88 113 Q 100 107 106 103" />
                    <path d="M 103 103 Q 114 97 118 94" />
                  </g>

                  {/* ================= 3. MIDDLE LEFT LEAF ================= */}
                  <g className="leaf-3">
                    {/* Outline */}
                    <path d="M 57 88 C 35 84 12 70 8 52 C 28 50 48 64 57 88 Z" />
                    {/* Center Vein */}
                    <path d="M 57 88 C 38 75 22 62 8 52" />
                    {/* Side Veins */}
                    <path d="M 44 79 Q 34 71 28 67" />
                    <path d="M 30 70 Q 20 62 15 58" />
                  </g>

                  {/* ================= 4. UPPER RIGHT LEAF ================= */}
                  <g className="leaf-4">
                    {/* Outline */}
                    <path d="M 48 58 C 68 50 88 38 92 22 C 75 22 58 35 48 58 Z" />
                    {/* Center Vein */}
                    <path d="M 48 58 C 63 45 78 32 92 22" />
                    {/* Side Veins */}
                    <path d="M 60 48 Q 72 41 78 37" />
                    <path d="M 74 37 Q 82 30 85 27" />
                  </g>

                  {/* ================= 5. TOP LEAF (TIP) ================= */}
                  <g className="leaf-top">
                    {/* Outline */}
                    <path d="M 45 20 C 32 12 28 2 36 0 C 46 8 48 14 45 20 Z" />
                    {/* Center Vein */}
                    <path d="M 45 20 C 40 13 37 6 36 0" />
                    {/* Side Veins */}
                    <path d="M 43 15 Q 38 10 36 8" />
                    <path d="M 41 9 Q 37 5 36 3" />
                  </g>
                </svg>
              </div>

              {/* Bottom Right Handwritten Signature */}
              <div className="pointer-events-none absolute bottom-1 right-8 z-20 flex flex-col items-end sm:bottom-0 sm:right-12 -rotate-12">
                <span className="font-cursive text-2xl tracking-wide text-[#FF4500] sm:text-3xl">
                  {signature || "Thank you!"}
                </span>

                {/* <HiOutlineHeart className="mr-2 -mt-1 text-xl text-[#FF4500]" /> */}
                <div className="-rotate-12">
                  <HandDrawnHeartWithTail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
