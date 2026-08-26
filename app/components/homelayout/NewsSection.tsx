"use client";

import { useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight, FiUser } from "react-icons/fi";

import type { NewsSectionProps, NewsArticle } from "@/type/typeSection";
import { HiOutlineHeart } from "react-icons/hi2";
import ScrollReveal from "../shared/ScrollReveal";

interface NewsSectionExtendedProps extends NewsSectionProps {
  showDescription?: boolean;
  enablePagination?: boolean;
}

export default function NewsSection({
  data,
  showDescription = false,
  enablePagination = false,
}: NewsSectionExtendedProps) {
  const { badge, title, pretitle, articles } = data;

  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 3;

  // Total number of pages
  const totalPages = Math.ceil(articles.length / blogsPerPage);

  // Blog indexes for current page
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;

  // Home = first 3
  // Blog page = 3 according to current page
  const visibleArticles = enablePagination
    ? articles.slice(startIndex, endIndex)
    : articles.slice(0, 3);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);

      // Optional: scroll back to top of blog cards
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white px-0 py-8 md:py-12">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full blur-[120px]" />

      {/* Top Right Decorative Grid Dots */}
      <div className="pointer-events-none absolute right-12 top-8 hidden grid-cols-6 gap-1.5 opacity-20 sm:grid">
        {Array.from({ length: 36 }).map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-orange-400"
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <ScrollReveal direction="up">
        <div className="flex flex-col items-center text-center">

          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#FF4500]">
            <HiOutlineHeart className="text-base text-[#FF4500]" />
            <span>{badge?.label || "Our Blog"}</span>
          </div>

          <h2 className="mt-0 font-serif text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            {title?.line1 || "Check Out Our"}{" "}
            <span className="text-[#0F172A]">
              {title?.highlight || "Latest News"}
            </span>
          </h2>

          {pretitle && (
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
              {pretitle}
            </p>
          )}
        </div>
        </ScrollReveal>

        {/* ================= ARTICLE CARDS ================= */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article: NewsArticle, index: number) => (
            <ScrollReveal key={article.title} direction="up" delay={0.2 + index * 0.15}>
            <div
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-56 w-full bg-slate-100 sm:h-64">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute -bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#1E1B4B] text-white shadow-md">
                  <FiUser className="text-md" />
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>

                  {/* Category & Date */}
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-[#FF4500]" />

                    <span>
                      {article.category
                        ? `${article.category}, `
                        : ""}
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 min-h-20 font-serif text-lg font-bold leading-snug text-[#1E1B4B] transition-colors duration-200 group-hover:text-[#FF4500] sm:text-xl">
                    <a href={article.href}>
                      {article.title}
                    </a>
                  </h3>

                  {/* Description */}
                  {showDescription && article.description && (
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">
                      {article.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ================= PAGINATION ================= */}
        {enablePagination && totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">

            {/* Previous */}
            <button
              onClick={goToPrevious}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 cursor-pointer bg-white text-slate-700 transition hover:border-[#FF4500] hover:bg-[#FF4500] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FiArrowLeft />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;

              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition ${
                    currentPage === page
                      ? "bg-[#FF4500] cursor-pointer text-white shadow-md shadow-orange-500/20"
                      : "border border-slate-200 cursor-pointer bg-white text-slate-700 hover:border-[#FF4500] hover:text-[#FF4500]"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next */}
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="flex h-10 cursor-pointer w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#FF4500] hover:bg-[#FF4500] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FiArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}