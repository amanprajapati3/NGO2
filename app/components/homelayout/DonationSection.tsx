"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiHeart,
  FiShield,
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
    trustItems,
    image,
    floatingCard,
    signature,
  } = data;

  return (
    <section className="relative overflow-hidden mb-5">

      {/* Decorative Background */}
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full  blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full  blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        <div className="overflow-hidden">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* ================= LEFT ================= */}
            <div className="px-8 py-10 lg:px-12">

              {/* Badge */}
              <div className="mb-0 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
                <HiOutlineHeart className="text-lg" />
                {badge.label}
              </div>

              {/* Title */}
              <h2 className="max-w-xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
                {title.line1}
              </h2>

              <div className="mt-0 h-1 w-14 rounded-full bg-orange-500" />

              {/* Description */}
              <p className="mt-1 max-w-lg text-md leading-8 text-slate-900">
                {description}
              </p>

              {/* CTA */}
              <div className="mt-5">
                <Link
                  href={button.href}
                  className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-300/40 transition-all duration-300 hover:bg-orange-600"
                >
                  <FiHeart />
                  {button.label}

                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Trust Text */}

            </div>

            {/* RIGHT SIDE COMES NEXT */}
                        {/* ================= RIGHT ================= */}
            <div className="relative flex items-center justify-center py-10 lg:py-14">

              {/* Decorative Dotted Circle */}
              <div className="absolute h-[430px] w-[430px] rounded-full border-2 border-dashed border-orange-200" />

              {/* Main Circular Image */}
              <div className="relative z-10 h-[360px] w-[360px] overflow-hidden rounded-full border-[10px] border-white shadow-2xl lg:h-[420px] lg:w-[420px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={false}
                  className="object-cover"
                  sizes="(max-width:768px)90vw,420px"
                />
              </div>

              {/* Floating Circle Card */}
              <div className="absolute left-4 top-1/2 z-20 flex h-28 w-28 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#fdeee7] text-center shadow-xl lg:left-8">
                <div className="mb-1 rounded-full bg-white p-2 shadow">
                  <FiHeart className="text-lg text-orange-500" />
                </div>

                <p className="px-3 text-[10px] font-semibold leading-4 text-slate-700">
                  {floatingCard.title}
                </p>

                <p className="px-3 text-[10px] leading-4 text-slate-500">
                  {floatingCard.subtitle}
                </p>
              </div>

              {/* Signature */}
              <div className="absolute bottom-6 right-10 z-20 rotate-[-10deg]">
                <span
                  className="text-3xl text-orange-400"
                  style={{ fontFamily: "cursive" }}
                >
                  {signature}
                </span>
              </div>

              {/* Small Decorative Leaf */}
              <div className="absolute bottom-10 right-2 text-orange-200 opacity-60">
                <HiOutlineHeart className="text-5xl" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
    