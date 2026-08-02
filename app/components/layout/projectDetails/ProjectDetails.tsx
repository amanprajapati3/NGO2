"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectDetailsProps } from "@/type/typeSection";
import PageBanner from "../../shared/PageBanner";
import {
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from "react-icons/fi";
import {
  HiOutlineHeart,
  HiOutlineUserGroup,
  HiOutlineSparkles,
} from "react-icons/hi2";
import {
  IoWaterOutline,
  IoShieldCheckmarkOutline,
  IoStatsChartOutline,
} from "react-icons/io5";

export default function ProjectDetails({ data }: ProjectDetailsProps) {
  const {
    banner,
    badge,
    title,
    mainImage,
    summary,
    meta,
    overview,
    impactSoFar,
    gallery,
    keyHighlights,
    ctaSidebar,
  } = data;

  // State for image lightbox/slider
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<
    number | null
  >(null);

  const handleNextImage = () => {
    if (selectedGalleryIndex === null || !gallery?.images) return;
    setSelectedGalleryIndex((prev) =>
      prev !== null ? (prev + 1) % gallery.images.length : 0,
    );
  };

  const handlePrevImage = () => {
    if (selectedGalleryIndex === null || !gallery?.images) return;
    setSelectedGalleryIndex((prev) =>
      prev !== null
        ? (prev - 1 + gallery.images.length) % gallery.images.length
        : 0,
    );
  };

  // Helper function to map stat icons dynamically
  const renderStatIcon = (iconName: string) => {
    switch (iconName) {
      case "people":
        return <HiOutlineUserGroup className="text-2xl text-[#FF4500]" />;
      case "water-drop":
        return <IoWaterOutline className="text-2xl text-[#FF4500]" />;
      case "shield-check":
        return <IoShieldCheckmarkOutline className="text-2xl text-[#FF4500]" />;
      case "heart-percentage":
        return <IoStatsChartOutline className="text-2xl text-[#FF4500]" />;
      default:
        return <HiOutlineSparkles className="text-2xl text-[#FF4500]" />;
    }
  };

  return (
    <>
      <div className="bg-white overflow-hidden">
        {/* Banner */}
        <PageBanner banner={banner} />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
          {/* Top Section: Hero Image (Left) & Title/Meta Info (Right) */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            {/* Left Image with Badge */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm lg:col-span-7">
              <div className="relative h-[300px] w-full sm:h-[400px] lg:h-[460px]">
                <Image
                  src={
                    mainImage?.url || "/images/projects/clean-water-main.jpg"
                  }
                  alt={mainImage?.alt || title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                {mainImage?.badgeText && (
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-full bg-[#FF4500] px-3.5 py-1.5 text-sm font-bold text-white shadow-md">
                    <IoWaterOutline className="text-sm" />
                    <span>{mainImage.badgeText}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Meta Header & Details */}
            <div className="flex flex-col justify-center lg:col-span-5 lg:pl-4">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#FF4500]">
                <HiOutlineHeart className="text-base" />
                <span>{badge || "OUR PROJECT"}</span>
              </div>

              <h1 className="mt-2 font-serif text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                {title}
              </h1>

              <div className="mt-2 h-[2px] w-12 bg-orange-200" />

              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {summary}
              </p>

              {/* Meta Stats Row */}
              <div className="mt-8 grid grid-cols-3 gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-4 text-center sm:gap-4">
                <div className="flex flex-col items-center justify-center">
                  <FiCalendar className="text-lg text-[#FF4500]" />
                  <span className="mt-1 text-[11px] font-semibold text-slate-400">
                    {meta?.projectStarted?.label || "Project Started"}
                  </span>
                  <span className="mt-0.5 text-sm font-bold text-slate-800 sm:text-sm">
                    {meta?.projectStarted?.value}
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center border-x border-slate-200/60 px-2">
                  <FiMapPin className="text-lg text-[#FF4500]" />
                  <span className="mt-1 text-[11px] font-semibold text-slate-400">
                    {meta?.location?.label || "Location"}
                  </span>
                  <span className="mt-0.5 text-sm font-bold text-slate-800 sm:text-sm">
                    {meta?.location?.value}
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <FiUsers className="text-lg text-[#FF4500]" />
                  <span className="mt-1 text-[11px] font-semibold text-slate-400">
                    {meta?.beneficiaries?.label || "Beneficiaries"}
                  </span>
                  <span className="mt-0.5 text-sm font-bold text-slate-800 sm:text-sm">
                    {meta?.beneficiaries?.value}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Body Section: Overview (Left 7 Cols) & Impact Stats Card (Right 5 Cols) */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            {/* Overview & Goal Card */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100/70 text-[#FF4500]">
                  <HiOutlineSparkles className="text-lg" />
                </div>
                <h2 className="font-serif text-xl font-bold text-[#0F172A] sm:text-2xl">
                  {overview?.title || "Project Overview"}
                </h2>
              </div>

              <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {overview?.paragraphs?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Our Goal Highlight Card */}
              {overview?.goalCard && (
                <div className="mt-6 flex items-start gap-4 rounded-xl border border-orange-200/60 bg-gradient-to-r from-orange-50/70 via-orange-50/40 to-transparent p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#FF4500]">
                    <HiOutlineHeart className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {overview.goalCard.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {overview.goalCard.description}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Impact So Far Sidebar Card */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm lg:col-span-5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-[#FF4500]">
                  <IoStatsChartOutline className="text-lg" />
                </div>
                <h2 className="font-serif text-xl font-bold text-[#0F172A]">
                  {impactSoFar?.title || "Impact So Far"}
                </h2>
              </div>

              <div className="mt-6 divide-y divide-slate-200/60">
                {impactSoFar?.stats?.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100">
                      {renderStatIcon(stat.icon || "")}
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-extrabold text-[#0F172A]">
                        {stat.value}
                      </h4>
                      <p className="text-sm font-medium text-slate-500 sm:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Gallery Slider Grid */}
          {gallery?.images && gallery.images.length > 0 && (
            <div className="mt-14">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-xl font-bold text-[#0F172A] sm:text-2xl">
                  {gallery.title || "Project Gallery"}
                </h2>

                {/* Desktop controls indicator */}
                <div className="hidden sm:flex items-center gap-2">
                  <button
                    onClick={() => setSelectedGalleryIndex(0)}
                    aria-label="Open gallery view"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:border-[#FF4500] hover:text-[#FF4500] transition-colors"
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    onClick={() => setSelectedGalleryIndex(0)}
                    aria-label="Open gallery view"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:border-[#FF4500] hover:text-[#FF4500] transition-colors"
                  >
                    <FiChevronRight />
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {gallery.images.map((img, idx) => (
                  <div
                    key={img.id || idx}
                    onClick={() => setSelectedGalleryIndex(idx)}
                    className="group relative h-40 w-full overflow-hidden rounded-xl bg-slate-100 shadow-sm transition-all duration-300 hover:shadow-md sm:h-44 cursor-pointer"
                  >
                    <Image
                      src={img.url}
                      alt={img.alt || "Project detail image"}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Highlights & CTA Sidebar */}
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Highlights List */}
            <div className="lg:col-span-7">
              <h2 className="font-serif text-xl font-bold text-[#0F172A] sm:text-2xl">
                {keyHighlights?.title || "Key Highlights"}
              </h2>

              <ul className="mt-6 space-y-3.5">
                {keyHighlights?.items?.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FiCheckCircle className="text-lg text-[#FF4500] shrink-0" />
                    <span className="text-sm font-medium text-slate-700 sm:text-base">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar Call To Action Card */}
            {ctaSidebar && (
              <div className="relative overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/30 p-4 text-center shadow-sm lg:col-span-5">
                <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-4">
                  {/* Image */}
                  <div className="mx-auto flex h-24 w-24 shrink-0 md:mx-0 md:h-28 md:w-28">
                    <Image
                      src="/heartImage.png"
                      alt="Support our cause"
                      width={112}
                      height={112}
                      sizes="112px"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center md:text-left">
                    <h3 className="font-serif text-2xl font-extrabold text-[#0F172A]">
                      {ctaSidebar.title}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {ctaSidebar.description}
                    </p>

                    <Link
                      href={ctaSidebar.buttonLink || "/donate"}
                      className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#FF4500] px-8 py-3 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-[#e03d00] hover:shadow-lg hover:shadow-orange-500/30"
                    >
                      {ctaSidebar.buttonText || "Donate Now"}
                      <span className="text-lg leading-none">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= GALLERY LIGHTBOX MODAL ================= */}
      {selectedGalleryIndex !== null && gallery?.images && (
        <div
          onClick={() => setSelectedGalleryIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-all"
        >
          <button
            onClick={() => setSelectedGalleryIndex(null)}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition-colors"
          >
            <FiX className="text-xl" />
          </button>

          {gallery.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              aria-label="Previous image"
              className="absolute left-3 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <FiChevronLeft className="text-2xl" />
            </button>
          )}

          {gallery.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              aria-label="Next image"
              className="absolute right-3 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <FiChevronRight className="text-2xl" />
            </button>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl flex flex-col items-center justify-center"
          >
            <div className="relative h-[80vh] w-[90vw]">
              <Image
                src={gallery.images[selectedGalleryIndex].url}
                alt={
                  gallery.images[selectedGalleryIndex].alt || "Gallery preview"
                }
                fill
                sizes="90vw"
                quality={80}
                className="rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
