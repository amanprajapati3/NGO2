"use client";

import Image from "next/image";
import Link from "next/link";

import { FiArrowRight, FiBookOpen, FiHeart, FiHome } from "react-icons/fi";

import { HiOutlineHeart } from "react-icons/hi2";

import type { CausesSectionProps, CauseItem } from "@/type/typeSection";

const getCauseIcon = (icon: string) => {
  switch (icon) {
    case "education":
      return <FiBookOpen size={20} />;

    case "donation":
      return <FiHeart size={20} />;

    case "medical":
      return <FiHome size={20} />;

    default:
      return <FiHeart size={20} />;
  }
};

export default function CausesSection({ data }: CausesSectionProps) {
  const { badge, title, description, items, exploreButton, cta } = data;

  return (
    <section className="relative overflow-hidden bg-white py-5 ">
      {/* Decorative Background */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-100 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-50 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 pt-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
            <HiOutlineHeart className="text-lg" />

            {badge.label}
          </div>
        </div>

        {/* Heading */}

        <div className="mx-auto mt-0 max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            {title.line1}{" "}
            <span className="text-orange-500">{title.highlight}</span>{" "}
            {title.line2}
          </h2>

          <div className="mx-auto mt-0 h-1 w-16 rounded-full bg-orange-500" />

          <p className="mt-1 text-lg leading-7 text-slate-900">{description}</p>
        </div>

        {/* Cards */}

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item: CauseItem, index) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl"
            >
              {/* ================= IMAGE ================= */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                />

                {/* Floating Icon */}
                <div
                  className={`absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg ${
                    index === 1 ? "bg-violet-600" : "bg-orange-500"
                  }`}
                >
                  {getCauseIcon(item.icon)}
                </div>

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-2">
                {/* Category */}
                <span
                  className={`text-sm font-semibold ${
                    index === 1 ? "text-violet-600" : "text-orange-500"
                  }`}
                >
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="mt-0 text-2xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-orange-500">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-1 text-base leading-7 text-slate-900">
                  {item.description}
                </p>

                {/* Donate Button */}
                <div className="mt-3">
                  <Link
                    href={item.button.href}
                    className={`group/button inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 ${
                      index === 1
                        ? "bg-violet-600 hover:bg-violet-700"
                        : "bg-orange-500 hover:bg-orange-600"
                    }`}
                  >
                    <FiHeart className="text-base" />

                    {item.button.label}

                    <FiArrowRight className="transition-transform group-hover/button:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button */}

        <div className="mt-8 flex justify-center">
          <Link
            href={exploreButton.href}
            className="group inline-flex items-center gap-3 rounded-full border border-slate-300 bg-orange-400 px-7 py-3 font-semibold text-slate-900 transition-all duration-300 hover:border-orange-500 hover:bg-orange-600"
          >
            {exploreButton.label}

            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* CTA */}

        {/* ================= CTA SECTION ================= */}

        <div className="relative mt-8 overflow-hidden rounded-[40px] bg-[#2B2343]">
          {/* Background Image */}
          <Image
            src={cta.backgroundImage}
            alt="Background"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />

          {/* Orange Glow */}
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-500/20 blur-[150px]" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-violet-500/20 blur-[160px]" />

          {/* Decorative Dots */}
          {cta.decorations.showDots && (
            <div className="absolute right-12 top-12 grid grid-cols-6 gap-2 opacity-30">
              {Array.from({ length: 36 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1.5 w-1.5 rounded-full bg-orange-300"
                />
              ))}
            </div>
          )}

          {/* Decorative Leaves */}
          {cta.decorations.showLeaves && (
            <>
              <div className="absolute -left-8 bottom-0 h-52 w-52 rounded-full border border-orange-300/20" />
              <div className="absolute -right-8 top-0 h-56 w-56 rounded-full border border-violet-300/20" />
            </>
          )}

          <div className="relative z-10 flex flex-col items-center px-8 py-9 text-center lg:px-24 ">

            {/* Heading */}
            <h2 className="mt-2 max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
              {cta.title}
            </h2>

            {/* Description */}
            <p className="mt-2 max-w-2xl text-lg leading-8 text-slate-300">
              {cta.description}
            </p>

            {/* Button */}
            <Link
              href={cta.button.href}
              className="group mt-4 inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              <FiHeart />

              {cta.button.label}

              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
