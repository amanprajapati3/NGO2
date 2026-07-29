"use client";

import { useState } from "react";
import Image from "next/image";
import type {
  GallerySectionProps,
  GalleryImage,
  GalleryData,
} from "@/type/typeSection";

export default function GallerySection({
  data,
}: GallerySectionProps) {
  const {
    badge,
    title,
    description,
    categories,
    images,
  } = data;

  const defaultCategory =
    categories.find(
  (c: GalleryData["categories"][number]) => c.active
)?.value || "all";

  const [activeCategory, setActiveCategory] =
    useState(defaultCategory);

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="relative overflow-hidden bg-white md:py-8 py-4">
      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-orange-100 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-50 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Badge */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-orange-50 px-4 pt-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
            {badge.label}
          </span>

          {/* Heading */}
          <h2 className="mt-0 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            {title.line1}{" "}
            <span className="text-orange-500">
              {title.highlight}
            </span>
          </h2>

          <div className="mx-auto mt-1 h-1 w-16 rounded-full bg-orange-500" />

          {/* Description */}
          <p className="mx-auto mt-0 max-w-2xl text-md md:leading-8 text-slate-900">
            {description}
          </p>

          {/* Categories */}
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() =>
                  setActiveCategory(category.value)
                }
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category.value
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                    : "bg-slate-100 text-slate-600 hover:bg-orange-100 hover:text-orange-500"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px]">
          {filteredImages.map(
            (item: GalleryImage, index: number) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl ${
                  index === 0
                    ? "lg:row-span-2"
                    : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  sizes="(max-width:768px)100vw,
                  (max-width:1024px)50vw,
                  25vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 transition duration-300 group-hover:opacity-100" />

                {/* Title */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-xl font-bold text-white drop-shadow">
                    {item.title}
                  </h3>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}