"use client";

import { useState } from "react";
import Image from "next/image";
import { FiArrowRight, FiBookOpen, FiUser } from "react-icons/fi";

import type { NewsSectionProps, NewsArticle } from "@/type/typeSection";

export default function NewsSection({ data }: NewsSectionProps) {
  const { badge, title, subtitle, button, articles } = data;

  const [showAll, setShowAll] = useState(false);

  const visibleArticles = showAll ? articles : articles.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-white px-0 py-8 ">
      {/* Background Glows */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full  blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full  blur-[120px] pointer-events-none" />

      {/* Top Right Decorative Grid Dots */}
      <div className="absolute top-8 right-12 grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none hidden sm:grid">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col items-center text-center">
          {/* Badge Label with Book Icon */}
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF4500]">
            <FiBookOpen className="text-sm" />
            <span>{badge?.label || "Our Blog"}</span>
          </div>

          {/* Main Serif Title */}
          <h2 className="mt-0 font-serif text-3xl font-extrabold tracking-tight text-[#1E1B4B] sm:text-4xl lg:text-5xl">
            {title?.line1 || "Check Out Our"}{" "}
            <span className="text-[#1E1B4B]">
              {title?.highlight || "Latest News"}
            </span>
          </h2>

          {/* Subtitle / Description */}
          {subtitle && (
            <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm">
              {subtitle}
            </p>
          )}
        </div>

        {/* ================= ARTICLE CARDS GRID ================= */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article: NewsArticle) => (
            <div
              key={article.title}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Card Image Container */}
              <div className="relative h-56 w-full  bg-slate-100 sm:h-64">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Floating Bottom-Right Author Icon Badge */}
                <div className="absolute -bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#1E1B4B] text-white shadow-md ring-2 ring-transparent">
                  <FiUser className="text-md  " />
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  {/* Category & Date Metadata */}
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-[#FF4500]" />
                    <span>
                      {article.category ? `${article.category}, ` : ""}
                      {article.date}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-[#1E1B4B] transition-colors duration-200 group-hover:text-[#FF4500] sm:text-xl">
                    {article.title}
                  </h3>

                  {/* Optional Summary */}
                  {article.description && (
                    <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-2">
                      {article.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= VIEW ALL BUTTON ================= */}
        {articles.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#FF4500] px-8 py-3.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition-all duration-300 hover:bg-[#e03d00] hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>{showAll ? "Show Less" : button?.label || "View All Posts"}</span>
              <FiArrowRight
                className={`text-sm transition-transform duration-300 ${
                  showAll ? "-rotate-90" : "group-hover:translate-x-1"
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}