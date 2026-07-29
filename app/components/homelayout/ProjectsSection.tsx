"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiHeart,
  FiBookOpen,
  FiDroplet,
} from "react-icons/fi";
import { GrRestroomWomen } from "react-icons/gr";
import { HiOutlineHeart } from "react-icons/hi2";

import type {
  ProjectSectionProps,
  ProjectCard,
} from "@/type/typeSection";

const getProjectIcon = (icon: string) => {
  switch (icon) {
    case "book":
      return <FiBookOpen className="text-xl" />;

    case "heart":
      return <FiHeart className="text-xl" />;

    case "drop":
      return <FiDroplet className="text-xl" />;

    case "women":
      return <GrRestroomWomen className="text-xl" />;

    default:
      return null;
  }
};

export default function ProjectSection({
  data,
}: ProjectSectionProps) {
  const {
    badge,
    heading,
    description,
    items,
    cta,
  } = data;

  return (
    <section className="relative overflow-hidden bg-white py-10 lg:py-12">
      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-orange-100 blur-[130px]" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange-50 blur-[150px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* ================= Heading ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 pt-2 text-sm font-semibold uppercase tracking-wider text-orange-500">
            <HiOutlineHeart className="text-base" />
            {badge.label}
          </div>
          <h2 className="mt-0 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            {heading.title.split(heading.highlight)[0]}
            <span className="text-orange-500">
              {heading.highlight}
            </span>
          </h2>
          <div className="mx-auto mt-0 h-1 w-14 rounded-full bg-orange-500" />
          <p className="mx-auto mt-1 max-w-2xl text-lg leading-7 text-slate-900">
            {description}
          </p>
        </div>

        {/* ================= Cards ================= */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item: ProjectCard) => {
            const orange = item.color === "orange";
            return (
              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,25vw"
                  />
                  <div
                    className={`absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg ${
                      orange
                        ? "bg-orange-500"
                        : "bg-violet-600"
                    }`}
                  >
                    {getProjectIcon(item.icon)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-2">
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${
                      orange
                        ? "text-orange-500"
                        : "text-violet-600"
                    }`}
                  >
                    {item.category}
                  </span>
                  <h3 className="mt-1 text-2xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-orange-500">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-base leading-7 text-slate-900">
                    {item.description}
                  </p>
                  <Link
                    href={item.button.href}
                    className={`mt-3 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                      orange
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-violet-600 text-white hover:bg-violet-700"
                    }`}
                  >
                    {item.button.label}
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
                {/* ================= Bottom CTA ================= */}

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-xl">

          {/* Decorative Background */}
          <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-orange-100 blur-3xl opacity-40" />
          <div className="absolute -right-12 -bottom-12 h-52 w-52 rounded-full bg-orange-50 blur-3xl opacity-60" />
          <div className="relative flex flex-col items-center justify-between gap-8 px-6 py-8 md:flex-row md:px-10">

            {/* Left */}
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-500 shadow-md">
                <FiHeart className="text-4xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {cta.title}
                </h3>
                <p className="mt-0 max-w-xl text-slate-900">
                  {cta.description}
                </p>
              </div>
            </div>

            {/* Right */}
            <Link
              href={cta.button.href}
              className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-300/40 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              {cta.button.label}
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}