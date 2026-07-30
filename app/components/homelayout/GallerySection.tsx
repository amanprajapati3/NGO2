"use client";

import { useState } from "react";
import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import type {
  GallerySectionProps,
  GalleryImage,
  GalleryData,
} from "@/type/typeSection";

export default function GallerySection({ data }: GallerySectionProps) {
  const { badge, title, description, categories, images } = data;

  const defaultCategory =
    categories.find(
      (c: GalleryData["categories"][number]) => c.active
    )?.value || "all";

  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((item) => item.category === activeCategory);

  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-0 py-8">
      {/* Background Soft Glow Orbs */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-orange-100/60 blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-orange-100/40 blur-[120px] pointer-events-none" />

      {/* Decorative Grid Dots */}
      <div className="absolute top-10 left-6 grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        ))}
      </div>
      <div className="absolute top-10 right-6 grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col items-center text-center">
          {/* Badge Label */}
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF4500]">
            <span className="h-[1px] w-8 bg-orange-200" />
            <span>{badge?.label || "Our Gallery"}</span>
            <span className="h-[1px] w-8 bg-orange-200" />
          </div>

          {/* Main Title */}
          <h2 className="mt-0 font-serif text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            {title?.line1 || "Moments of"}{" "}
            <span className="text-[#FF4500]">
              {title?.highlight || "Change & Hope"}
            </span>
          </h2>

          {/* Subheading Heart Line Divider */}
          <div className="mt-1 flex items-center justify-center gap-3 text-xs font-semibold tracking-wide text-slate-500">
            <span className="h-[1px] w-10 bg-orange-300" />
            <FiHeart className="text-[10px] text-[#FF4500]" />
            <span className="h-[1px] w-10 bg-orange-300" />
          </div>

          {/* Description Paragraph */}
          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm">
            {description}
          </p>

          {/* ================= CATEGORY FILTER TABS ================= */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((category, idx) => {
              const isActive = activeCategory === category.value;

              return (
                <div key={category.value} className="flex items-center">
                  <button
                    onClick={() => setActiveCategory(category.value)}
                    className={`rounded-full px-5 py-2 text-xs cursor-pointer font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-[#FF4500] text-white shadow-md shadow-orange-500/20"
                        : "text-slate-600 hover:text-[#FF4500]"
                    }`}
                  >
                    {category.label}
                  </button>

                  {/* Vertical Separator line between categories */}
                  {idx < categories.length - 1 && (
                    <span className="ml-2 hidden h-3 w-[1px] bg-slate-200 sm:inline-block sm:ml-3" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= GALLERY BENTO GRID ================= */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {filteredImages.map((item: GalleryImage, index: number) => {
            // First item spans 2 rows on large screens (tall feature card)
            const isTall = index === 0;

            return (
              <div
                key={item.title || index}
                className={`group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl ${
                  isTall
                    ? "h-[320px] sm:h-[420px] lg:row-span-2 lg:h-full"
                    : "h-[200px] sm:h-[220px]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title || "Gallery image"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Gentle Gradient Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Hover Caption Title */}
                {item.title && (
                  <div className="absolute bottom-4 left-4 right-4 z-10 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-bold text-white drop-shadow sm:text-sm">
                      {item.title}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}