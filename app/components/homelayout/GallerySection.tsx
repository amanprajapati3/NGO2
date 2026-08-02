"use client";

import { useState } from "react";
import Image from "next/image";
import { FiHeart, FiEye, FiX } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import type {
  GallerySectionProps,
  GalleryImage,
  GalleryVideo,
  GalleryData,
} from "@/type/typeSection";
import { HiOutlineHeart } from "react-icons/hi2";

export default function GallerySection({ data }: GallerySectionProps) {
  const { badge, title, description, categories, images, videos = [] } = data;

  const defaultCategory =
    categories.find((c: GalleryData["categories"][number]) => c.active)
      ?.value || "all";

  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  // Modal State for Image Lightbox & Video Player
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null);

  // Filter images & videos according to active category tab
  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((item) => item.category === activeCategory);

  const filteredVideos =
    activeCategory === "all"
      ? videos
      : videos.filter((item) => item.category === activeCategory);

  // Helper to convert standard YouTube link to embeddable URL
  const getEmbedUrl = (url?: string) => {
    if (!url) return "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/") + "?autoplay=1";
    }
    return url;
  };

  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-0 py-8 md:py-12">
      {/* Background Soft Glow Orbs */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-orange-100/60 blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-orange-100/40 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col items-center text-center">
          {/* Badge Label */}
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#FF4500]">
            <HiOutlineHeart className="text-base text-[#FF4500]" />
            
            <span>{badge?.label || "Our Gallery"}</span>
            {/* <span className="h-[1px] w-8 bg-orange-200" /> */}
          </div>

          {/* Main Title */}
          <h2 className="mt-1 font-serif text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            {title?.line1 || "Moments of"}{" "}
            <span className="text-[#0F172A]">
              {title?.highlight || "Change & Hope"}
            </span>
          </h2>

          {/* Subheading Heart Line Divider */}
          {/* <div className="mt-2 flex items-center justify-center gap-3 text-sm font-semibold tracking-wide text-slate-500">
            <span className="h-[1px] w-10 bg-orange-300" />
            <FiHeart className="text-[10px] text-[#FF4500]" />
            <span className="h-[1px] w-10 bg-orange-300" />
          </div> */}

          {/* Description Paragraph */}
          <p className="mx-auto mt-1 max-w-2xl text-sm leading-relaxed text-slate-500 sm:mt-2 sm:text-base">
            {description}
          </p>

          {/* ================= CATEGORY FILTER TABS ================= */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:mt-8">
            {categories.map((category, idx) => {
              const isActive = activeCategory === category.value;

              return (
                <div key={category.value} className="flex items-center">
                  <button
                    onClick={() => setActiveCategory(category.value)}
                    className={`rounded-full px-5 py-2 text-sm font-bold border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#FF4500] border-[#FF4500] text-white shadow-md shadow-orange-500/20"
                        : "border-gray-200 bg-white text-slate-600 hover:border-[#FF4500] hover:text-[#FF4500]"
                    }`}
                  >
                    {category.label}
                  </button>

                  {idx < categories.length - 1 && (
                    <span className="ml-2 hidden h-3 w-[1px] bg-slate-200 sm:inline-block sm:ml-3" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= 1. IMAGE GALLERY (TOP BENTO GRID) ================= */}
        {filteredImages.length > 0 && (
          <div className="mt-8 md:mt-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
              {filteredImages.map((item: GalleryImage, index: number) => {
                const isTall = index === 0;

                return (
                  <div
                    key={item.title || index}
                    onClick={() => setSelectedImage(item)}
                    className={`group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer ${
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

                    {/* Faded Background Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Center Hover Eye Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <FiEye className="text-xl" />
                      </div>
                    </div>

                    {/* Hover Caption Title */}
                    {item.title && (
                      <div className="absolute bottom-4 left-4 right-4 z-10 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm font-bold text-white drop-shadow sm:text-sm">
                          {item.title}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= 2. VIDEO GALLERY (BELOW IMAGES) ================= */}
        {filteredVideos.length > 0 && (
          <div className="mt-12">
            <div className="flex text-center mb-10 justify-center items-center">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center  gap-3 text-sm font-bold uppercase tracking-widest text-[#FF4500]">
                  {/* <span className="h-[1px] w-8 bg-orange-200 " /> */}
                   <HiOutlineHeart className="text-base text-[#FF4500]" />

                  <span className="">{badge?.label || "Our Gallery"}</span>
                  {/* <span className="h-[1px] w-8 bg-orange-200 " /> */}
                </div>
                {/* Main Title */}
                <h2 className="mt-1 font-serif text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                  {title?.line1 || "Moments of"}{" "}
                  <span className="text-[#0F172A]">
                    {title?.highlight || "Change & Hope"}
                  </span>
                </h2>

                {/* Subheading Heart Line Divider */}
                {/* <div className="mt-2 flex items-center justify-center gap-3 text-sm font-semibold tracking-wide text-slate-500">
                  <span className="h-[1px] w-10 bg-orange-300" />
                  <FiHeart className="text-[10px] text-[#FF4500]" />
                  <span className="h-[1px] w-10 bg-orange-300" />
                </div> */}

                {/* Description Paragraph */}
                <p className="mx-auto mt-1 max-w-2xl text-sm leading-relaxed text-slate-500 sm:mt-2 sm:text-base">
                  {description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredVideos.map((item: GalleryVideo, index: number) => (
                <div
                  key={index}
                  onClick={() => setSelectedVideo(item)}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
                >
                  {/* Video Thumbnail with Play Button & Duration Tag */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Dark Tint Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                    {/* Center Red Circular Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <FaPlay className="ml-0.5 text-sm" />
                      </div>
                    </div>

                    {/* Duration Badge Bottom Right */}
                    <div className="absolute bottom-2.5 right-2.5 rounded bg-black/80 px-2 py-0.5 text-[10px] font-bold text-white tracking-wider">
                      {item.duration}
                    </div>
                  </div>

                  {/* Card Info Content */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      {/* Tag Pill */}
                      <span className="inline-block rounded-full bg-[#f95738] px-2.5 py-0.5 text-[13px] font-extrabold uppercase tracking-wide text-white">
                        {item.categoryLabel || item.category}
                      </span>

                      {/* Title */}
                      <h3 className="mt-3 text-base font-bold text-gray-900 line-clamp-1 group-hover:text-[#FF4500] transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-1.5 text-sm text-slate-500 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ================= SIMPLE IMAGE POPUP ================= */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-all"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full overflow-hidden rounded-2xl bg-black shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <FiX className="text-xl" />
            </button>

            {/* Clean Image Preview */}
            <div className="relative h-[70vh] sm:h-[80vh] w-full">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title || "Gallery Preview"}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= SIMPLE VIDEO POPUP ================= */}
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-all"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full overflow-hidden rounded-2xl bg-black shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <FiX className="text-xl" />
            </button>

            {/* Pure Embedded Video */}
            <div className="relative aspect-video w-full">
              <iframe
                src={getEmbedUrl(selectedVideo.videoUrl)}
                title={selectedVideo.title}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
