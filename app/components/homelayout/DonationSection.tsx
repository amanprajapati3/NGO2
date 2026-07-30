"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiHeart, FiShield } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";

import { HiOutlineHeart } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa6";

import type { SupportSectionProps } from "@/type/typeSection";

export default function DonationSection({
  data,
}: SupportSectionProps) {
  const {
    badge,
    title,
    description,
    button,
    image,
    floatingCard,
    signature,
  } = data;

  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-0 py-8 lg:py-12">
      {/* Background Soft Glows */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-orange-100/60 blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-orange-100/40 blur-[120px] pointer-events-none" />

      {/* Outer Section Box */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50">
          
          {/* Floral Corner Accent (Top Left) */}
          <div className="absolute top-0 left-0 text-orange-200/30 pointer-events-none">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
              <path d="M0,0 L100,0 Q50,50 0,100 Z" />
            </svg>
          </div>

          <div className="grid grid-cols-1 items-center lg:grid-cols-12">
            
            {/* ================= LEFT CONTENT AREA ================= */}
            <div className="z-10 flex flex-col items-center px-6 py-10 text-center sm:px-10 lg:col-span-6 lg:items-start lg:py-14 lg:pl-14 lg:pr-6 lg:text-left">
              
              {/* Badge Pill with Icon */}
              <div className="inline-flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-[#FF4500]">
                  <FaRegHeart className="text-base" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF4500]">
                  {badge.label}
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="mt-1 font-serif text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl ">
                {title.line1}{" "}
                <span className="text-[#FF4500]">{title.highlight || "Change"}</span>{" "}
                {title.highlight}
              </h2>

              {/* Centered / Left Divider Line */}
              <div className="mt-2 flex items-center gap-2 text-[#FF4500]">
                <span className="h-[2px] w-12 bg-[#FF4500]" />
                <FiHeart className="text-xs" />
                <span className="h-[2px] w-12 bg-[#FF4500]" />
              </div>

              {/* Description Paragraph */}
              <p className="mt-4 max-w-lg text-xs leading-relaxed text-slate-600 sm:text-sm">
                {description}
              </p>

              {/* Action Button */}
              <div className="mt-6">
                <Link
                  href={button.href}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#FF4500] px-8 py-3.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-[#e03d00] hover:shadow-lg hover:-translate-y-0.5"
                >
                  <FiHeart className="text-sm" />
                  <span>{button.label}</span>
                  <FiArrowRight className="text-sm" />
                </Link>
              </div>

              {/* Trust Badge Subtext */}
              <div className="mt-5 flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                <FiShield className="text-xs text-[#FF4500]" />
                <span>100% Secure Donation | Make an Impact Today</span>
              </div>
            </div>

            {/* ================= RIGHT IMAGE AREA ================= */}
            <div className="relative min-h-[380px] w-full lg:col-span-6 lg:min-h-[480px]">
              
              {/* Curved Masked Image Container with Bottom-Right Oval Curve */}
              <div className="relative h-full w-full min-h-[380px] overflow-hidden rounded-br-[120px] sm:rounded-br-[160px] lg:min-h-[480px] lg:rounded-l-[240px] lg:rounded-br-[180px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Circular Badge Overlapping Image */}
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

              {/* Bottom Right Handwritten "Thank you!" Signature */}
              <div className="absolute bottom-4 right-6 z-20 flex flex-col items-end pointer-events-none">
                <span
                  className="text-2xl font-bold tracking-wide text-[#FF4500] sm:text-3xl"
                  style={{ fontFamily: "'Caveat', 'Comic Sans MS', cursive" }}
                >
                  {signature || "Thank you!"}
                </span>
                <HiOutlineHeart className="mr-2 -mt-1 text-base text-[#FF4500]" />
              </div>

              {/* Corner Floral Leaf Accent */}
              <div className="absolute bottom-2 right-2 text-orange-200/40 pointer-events-none">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M10,90 Q 50,10 90,90 Z" />
                </svg>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}