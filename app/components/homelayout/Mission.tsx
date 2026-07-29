"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FiArrowRight,
  FiTarget,
  FiShield,
  FiUsers,
  FiEye,
  FiCheckCircle,
} from "react-icons/fi";

import type { MissionSectionProps, MissionFeature } from "@/type/typeSection";

const getTabIcon = (icon: string) => {
  switch (icon) {
    case "mission":
      return <FiTarget className="text-base text-orange-500" />;
    case "vision":
      return <FiEye className="text-base text-slate-400" />;
    case "goal":
      return <FiCheckCircle className="text-base text-slate-400" />;
    default:
      return null;
  }
};

const getFeatureIcon = (icon: string) => {
  switch (icon) {
    case "community":
      return <FiUsers className="text-xl" />;
    case "shield":
      return <FiShield className="text-xl" />;
    case "growth":
      return <FiTarget className="text-xl" />;
    default:
      return <FiTarget className="text-xl" />;
  }
};

const getPurposeIcon = (icon: string) => {
  switch (icon) {
    case "target":
      return <FiTarget className="text-3xl" />;
    default:
      return <FiTarget className="text-3xl" />;
  }
};

export default function MissionSection({ data }: MissionSectionProps) {
  const { badge, title, tabs, description, imageSection, features, buttons } =
    data;

  return (
    <section className="relative w-full bg-white py-10">
      {/* Top Decorative Brush Edge */}
      {imageSection.showBrushTop && (
        <div className="absolute top-0 left-0 right-0 z-20 h-10 w-full bg-[url('/images/brush-top.png')] bg-cover bg-center" />
      )}

      <div className="relative ">
        {/* Main Card Container with Left Image & Floating Right Dark Panel */}
        <div className="relative min-h-[640px] p-8 w-full overflow-hidden  ">
          
          {/* Main Background Image (Left Side Focus) */}
          <div className="absolute inset-0 z-0">
            <Image
              src={imageSection.mainImage.src}
              alt={imageSection.mainImage.alt}
              fill
              priority
              className="object-cover object-left"
              sizes="100vw"
            />
            
            {/* Soft Gradient Overlay towards right */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/40 to-[#101426]" />

            {/* Orange Concentric Rings on Bottom Left */}
            {imageSection.showRings && (
              <div className="absolute -bottom-16 -left-16 pointer-events-none">
                <div className="h-72 w-72 rounded-full border border-orange-500/25" />
                <div className="absolute inset-6 rounded-full border border-orange-500/20" />
                <div className="absolute inset-12 rounded-full border border-orange-500/15" />
              </div>
            )}
          </div>

          {/* Floating Purpose Card (Bottom Left) */}
          <div className="absolute bottom-8 left-8 z-10 hidden p-5 max-w-sm rounded-2xl border border-white/10 bg-[#121629]/80 backdrop-blur-md md:block">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500">
                {getPurposeIcon(imageSection.purposeCard.icon)}
              </div>
              <div>
                <span className="text-xs font-semibold tracking-wider text-orange-500 uppercase">
                  {imageSection.purposeCard.badge}
                </span>
                <h4 className="mt-1 text-sm font-bold leading-snug text-white">
                  {imageSection.purposeCard.title}
                </h4>
              </div>
            </div>
          </div>

          {/* Right Floating Content Box */}
          <div className="relative z-10 flex min-h-[640px] justify-end">
            <div className="w-full rounded-xl ml-6 shadow-xl shadow-gray-800 max-w-2xl bg-[#101426]/95 p-8 text-white backdrop-blur-md lg:p-12">
              
              {/* Dot Grid Decorative Pattern Top Right */}
              <div className="absolute top-8 right-8 grid grid-cols-6 gap-1.5 opacity-20">
                {Array.from({ length: 30 }).map((_, i) => (
                  <span key={i} className="h-1 w-1 rounded-full bg-slate-300" />
                ))}
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-orange-500 uppercase">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10">
                  <FiTarget className="text-orange-500" />
                </span>
                {badge.label}
              </div>

              {/* Title */}
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white lg:text-4xl">
                {title.line1}{" "}
                <span className="text-orange-500">{title.highlight}</span>{" "}
                {title.line2}
              </h2>

              {/* Underline Indicator */}
              <div className="mt-3 flex gap-1">
                <div className="h-0.5 w-12 bg-orange-500" />
                <div className="h-0.5 w-4 bg-slate-700" />
              </div>

              {/* Tabs with Underline */}
              <div className="mt-6 flex items-center gap-8 border-b border-slate-800/80 pb-3">
                {tabs.map((tab) => (
                  <button
                    key={tab.label}
                    className={`relative flex items-center gap-2 text-xs font-semibold tracking-wide transition-colors ${
                      tab.active
                        ? "text-orange-500"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {getTabIcon(tab.icon)}
                    {tab.label}
                    {tab.active && (
                      <span className="absolute -bottom-3.5 left-0 right-0 h-0.5 bg-orange-500" />
                    )}
                  </button>
                ))}
              </div>

              {/* Description Paragraphs */}
              <div className="mt-6 space-y-3 text-xs leading-relaxed text-slate-300 lg:text-sm">
                <p>{description.primary}</p>
                {description.secondary && <p>{description.secondary}</p>}
              </div>

              {/* Feature Cards Grid (3 Columns) */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {features.map((feature: MissionFeature) => (
                  <div
                    key={feature.title}
                    className="flex flex-col rounded-2xl border border-slate-800/80 bg-[#161b30] p-4 transition-all hover:border-slate-700"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-500">
                      {getFeatureIcon(feature.icon)}
                    </div>
                    <h3 className="text-xs font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex items-center gap-6">
                {buttons.map((button) => {
                  const isPrimary = button.variant === "primary";
                  return (
                    <Link
                      key={button.label}
                      href={button.href}
                      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold transition-all duration-200 ${
                        isPrimary
                          ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {button.label}
                      <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}