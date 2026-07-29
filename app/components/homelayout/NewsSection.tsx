"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCalendar,
  FiUser,
} from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi2";

import type {
  NewsSectionProps,
  NewsArticle,
} from "@/type/typeSection";

export default function NewsSection({
  data,
}: NewsSectionProps) {
  const {
    badge,
    title,
    subtitle,
    button,
    articles,
  } = data;

  const [showAll, setShowAll] = useState(false);

  const visibleArticles = showAll
    ? articles
    : articles.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-white md:py-8 py-3">

      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-orange-100 blur-[130px]" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange-50 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}

        <div className="mb-5 text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 pt-2 text-sm font-semibold uppercase tracking-wider text-orange-500">
            <HiOutlineHeart />
            {badge.label}
          </div>

          <h2 className="mt-0 text-3xl font-extrabold text-slate-900 sm:text-5xl">
            {title.line1}{" "}
            <span className="text-orange-500">
              {title.highlight}
            </span>
          </h2>

          <div className="mx-auto mt-1 h-1 w-16 rounded-full bg-orange-500" />

          <p className="mx-auto mt-1 max-w-2xl text-md md:leading-7 text-slate-900">
            {subtitle}
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {visibleArticles.map((article: NewsArticle) => (
          <div
            key={article.title}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="p-2">

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-orange-500" />
                  {article.category}
                </div>

                <div className="flex items-center gap-2">
                  <FiCalendar className="text-orange-500" />
                  {article.date}
                </div>

                <div className="flex items-center gap-2">
                  <FiUser className="text-orange-500" />
                  {article.author}
                </div>

              </div>

              {/* Title */}
              <h3 className="mt-1 text-2xl font-bold leading-snug text-slate-900 transition group-hover:text-orange-500">
                {article.title}
              </h3>

              {/* Description */}
              <p className="mt-2 leading-6 text-slate-900">
                {article.description}
              </p>

            </div>
          </div>
        ))}
      </div>
              {/* ================= View All Button ================= */}

        {articles.length > 3 && (
          <div className="mt-7 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-300/40 transition-all duration-300 hover:scale-105 hover:bg-orange-600"
            >
              {showAll ? "Show Less" : button.label}

              <FiArrowRight
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-90" : "group-hover:translate-x-1"
                }`}
              />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}