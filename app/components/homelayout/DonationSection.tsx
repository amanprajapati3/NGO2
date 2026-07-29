"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiHeart,
} from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi2";

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
    <section className="relative mb-5 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
        <div className="overflow-hidden">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

            {/* ================= LEFT ================= */}
            <div className="flex flex-col items-center px-2 py-6 text-center sm:px-4 sm:py-8 lg:items-start lg:px-12 lg:py-10 lg:text-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600 sm:px-4 sm:py-2 sm:text-sm">
                <HiOutlineHeart className="text-base sm:text-lg" />
                {badge.label}
              </div>

              {/* Title */}
              <h2 className="md:mt-4 max-w-xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:mt-3">
                {title.line1}
              </h2>

              {/* Accent Line */}
              <div className="md:mt-3 h-1 w-14 rounded-full bg-orange-500" />

              {/* Description */}
              <p className="md:mt-3 max-w-lg text-md md:leading-7 text-slate-900 sm:text-base sm:leading-8">
                {description}
              </p>

              {/* CTA */}
              <div className="mt-5">
                <Link
                  href={button.href}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-300/40 transition-all duration-300 hover:bg-orange-600 sm:px-8 sm:py-4 sm:text-base"
                >
                  <FiHeart />

                  {button.label}

                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="relative flex min-h-[390px] items-center justify-center md:py-6 sm:min-h-[460px] sm:py-8 lg:min-h-0 lg:py-14">

              {/* Decorative Dotted Circle */}
              <div
                className="
                  absolute
                  h-[290px] w-[290px]
                  rounded-full
                  border-2 border-dashed border-orange-200
                  sm:h-[370px] sm:w-[370px]
                  md:h-[410px] md:w-[410px]
                  lg:h-[430px] lg:w-[430px]
                "
              />

              {/* Main Circular Image */}
              <div
                className="
                  relative
                  z-10
                  h-[250px] w-[250px]
                  overflow-hidden
                  rounded-full
                  border-[8px] border-white
                  shadow-2xl
                  sm:h-[320px] sm:w-[320px]
                  md:h-[360px] md:w-[360px]
                  lg:h-[420px] lg:w-[420px]
                "
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={false}
                  className="object-cover"
                  sizes="(max-width: 640px) 250px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 420px"
                />
              </div>

              {/* Floating Circle Card */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-20
                  flex
                  h-24 w-24
                  -translate-x-[145%]
                  -translate-y-1/2
                  flex-col
                  items-center
                  justify-center
                  rounded-full
                  bg-[#fdeee7]
                  text-center
                  shadow-xl
                  sm:h-28 sm:w-28
                  sm:-translate-x-[150%]
                  lg:left-8
                  lg:h-28 lg:w-28
                  lg:translate-x-0
                "
              >
                <div className="mb-1 rounded-full bg-white p-1.5 shadow sm:p-2">
                  <FiHeart className="text-base text-orange-500 sm:text-lg" />
                </div>

                <p className="px-2 text-[9px] font-semibold leading-3.5 text-slate-700 sm:px-3 sm:text-[10px] sm:leading-4">
                  {floatingCard.title}
                </p>

                <p className="px-2 text-[9px] leading-3.5 text-slate-500 sm:px-3 sm:text-[10px] sm:leading-4">
                  {floatingCard.subtitle}
                </p>
              </div>

              {/* Signature */}
              <div
                className="
                  absolute
                  bottom-4
                  right-4
                  z-20
                  rotate-[-10deg]
                  sm:bottom-6
                  sm:right-8
                  md:right-10
                  lg:bottom-6
                  lg:right-10
                "
              >
                <span
                  className="text-2xl text-orange-400 sm:text-3xl"
                  style={{ fontFamily: "cursive" }}
                >
                  {signature}
                </span>
              </div>

              {/* Small Decorative Heart */}
              <div className="absolute bottom-5 right-0 text-orange-200 opacity-60 sm:bottom-8 sm:right-2">
                <HiOutlineHeart className="text-4xl sm:text-5xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
