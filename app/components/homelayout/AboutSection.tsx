"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiHeart, FiPlay } from "react-icons/fi";
import { FaUsers, FaShieldAlt } from "react-icons/fa";
import { BsAwardFill } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi2";
import { LuSmile, LuGraduationCap, LuActivity } from "react-icons/lu";
import type {
  AboutSectionProps,
  AboutStatistic,
  AboutStatistic2,
} from "@/type/typeSection";
import { useEffect, useRef, useState } from "react";
import { constants } from "crypto";

// ==========================================
// BACKGROUND DECORATION COMPONENT
// ==========================================

const BackgroundDecorations = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Background Soft Oval Shape positioned behind gallery */}
      <div className="absolute -right-24 -top-12 h-[750px] w-[600px] rounded-[40%] bg-[#fff2ed]/80 blur-0 md:-right-16 md:h-[850px] md:w-[700px] lg:-right-20 lg:h-[950px] lg:w-[800px]" />
    </div>
  );
};

// ==========================================
// HELPER FUNCTIONS & SUB-COMPONENTS
// ==========================================

const getButtonIcon = (icon: string) => {
  switch (icon) {
    case "heart":
      return <FiHeart className="text-sm sm:text-base" />;
    case "users":
      return <FaUsers className="text-sm sm:text-base" />;
    default:
      return null;
  }
};

const getStatIconAndTheme = (icon: string, index: number) => {
  const themes = [
    { bg: "bg-[#ffebe4]", text: "text-[#ff5a36]" }, // Orange
    { bg: "bg-[#e2f5d8]", text: "text-[#10b981]" }, // Green
    { bg: "bg-[#e3effd]", text: "text-[#2563eb]" }, // Blue
    { bg: "bg-[#f3e5f5]", text: "text-[#9333ea]" }, // Purple
  ];

  const theme = themes[index % themes.length];

  const IconComponent = <LuSmile className="text-xl sm:text-2xl" />;
  switch (icon) {
    case "shield":
      return { icon: <FaShieldAlt className="text-lg sm:text-2xl" />, theme };
    case "badge":
      return { icon: <BsAwardFill className="text-lg sm:text-2xl" />, theme };
    case "users":
      return { icon: <FaUsers className="text-lg sm:text-2xl" />, theme };
    case "child":
      return { icon: <LuSmile className="text-lg sm:text-2xl" />, theme };
    case "education":
      return { icon: <LuGraduationCap className="text-lg sm:text-2xl" />, theme };
    case "healthcare":
      return { icon: <LuActivity className="text-lg sm:text-2xl" />, theme };
    default:
      return { icon: IconComponent, theme };
  }
};

const AnimatedNumber = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const number = Number(value.replace(/\D/g, "")) || 0;
  const prefix = value.match(/^[^\d]+/)?.[0] || "";
  const suffix = value.match(/[^\d]+$/)?.[0] || "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const increment = number / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, number]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function AboutSection({ data }: AboutSectionProps) {
  const {
    badge,
    title,
    desc,
    buttons,
    gallery,
    statistics,
    statistics2,
  } = data;

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-12">
      {/* Background Semi-Circle Decoration */}
      <BackgroundDecorations />

      <div className="relative z-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="md:text-left text-center lg:col-span-6">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#ff5a36] sm:text-sm">
              <HiOutlineHeart className="text-base text-[#ff5a36]" />
              <span>{badge?.label || "ABOUT US"}</span>
            </div>

            {/* Heading */}
            <h2 className="md:mt-3 mt-0 text-3xl font-extrabold leading-tight text-[#1a0c2e] sm:text-4xl md:text-[42px] lg:leading-[1.18]">
              {title.line1}
            </h2>

            {/* Paragraph Description */}
            <p className="mt-4 text-sm leading-relaxed text-[#666666] sm:text-sm md:text-base">
              {desc.primary}
            </p>
            {desc.secondary && (
              <p className="mt-3 text-sm leading-relaxed text-[#666666] sm:text-sm md:text-base">
                {desc.secondary}
              </p>
            )}

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start items-center md:gap-3 gap-1 sm:mt-8 sm:gap-4">
              {buttons.map((button) => {
                const primary = button.variant === "primary";
                return (
                  <Link
                    key={button.label}
                    href={button.href}
                    className={`group inline-flex items-center sm:gap-2 gap-1 rounded-full px-2 py-2.5 text-sm font-bold transition-all duration-300 sm:px-7 sm:py-3.5 sm:text-sm ${
                      primary
                        ? "bg-[#ff5a36] text-white shadow-md shadow-[#ff5a36]/20 hover:bg-[#1a0c2e]"
                        : "bg-[#1a0c2e] text-white shadow-md hover:bg-[#ff5a36]"
                    }`}
                  >
                    {getButtonIcon(button.icon)}
                    <span>{button.label}</span>
                    <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1 sm:text-base" />
                  </Link>
                );
              })}
            </div>

            {/* Feature Pills under buttons (Trust badges) */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 rounded-full bg-[#f8f9fa] px-3.5 py-1.5 border border-slate-100 text-sm sm:text-sm font-semibold text-[#1a0c2e]">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  ✓
                </div>
                <span>100% Trusted</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-[#f8f9fa] px-3.5 py-1.5 border border-slate-100 text-sm sm:text-sm font-semibold text-[#1a0c2e]">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  ★
                </div>
                <span>80G Certified</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-[#f8f9fa] px-3.5 py-1.5 border border-slate-100 text-sm sm:text-sm font-semibold text-[#1a0c2e]">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  ♥
                </div>
                <span>50K+ Lives Impacted</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT GALLERY ================= */}
          <div className="relative mt-4 lg:col-span-6 lg:mt-0">
            <div className="relative mx-auto h-[380px] w-full max-w-lg sm:h-[460px] lg:max-w-none">
              
              {/* Top Horizontal Image */}
              <div className="absolute right-12 top-0 z-0 h-[170px] w-[65%] overflow-hidden rounded-2xl shadow-sm sm:h-[210px]">
                <Image
                  src={gallery.topImage?.src || gallery.mainImage?.src || ""}
                  alt={gallery.topImage?.alt || "Top scene"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 65vw, 30vw"
                  priority
                />
              </div>

              {/* Floating Badge (Top Right) */}
              {gallery.floatingCard && (
                <div className="absolute right-0 top-4 z-20 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-xl sm:px-4 sm:py-3 border border-slate-100">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fff2ed] text-[#ff5a36]">
                    <FiHeart className="text-xl fill-current" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] font-medium text-gray-500 sm:text-sm">
                      {gallery.floatingCard.pretitle || "Your Support"}
                    </span>
                    <span className="text-sm font-bold text-[#1a0c2e] sm:text-sm">
                      {gallery.floatingCard.title || "Creates Real"}
                    </span>
                    <span className="text-sm font-bold text-[#ff5a36] sm:text-sm">
                      {gallery.floatingCard.highlight || "Change"}
                    </span>
                  </div>
                </div>
              )}

              {/* Right Vertical Image */}
              <div className="absolute right-0 top-24 z-0 h-[280px] w-[30%] overflow-hidden rounded-2xl shadow-md sm:h-[330px]">
                <Image
                  src={gallery.mainImage?.src || gallery.topImage?.src || ""}
                  alt="Side view"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 30vw, 15vw"
                />
              </div>

              {/* Main Overlay Image with Play Icon */}
              <div className="absolute bottom-2 left-0 z-10 h-[220px] w-[78%] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:h-[280px] sm:w-[75%]">
                <Image
                  src={gallery.mainImage?.src || gallery.topImage?.src || ""}
                  alt={gallery.mainImage?.alt || "Main program photo"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 35vw"
                />

                {/* Play Button Overlay */}
                {gallery.playButton && (
                  <Link
                    href={gallery.playButton.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 bg-white/30 backdrop-blur-md shadow-2xl transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-16"
                  >
                    <span className="absolute h-full w-full animate-ping rounded-full bg-white opacity-40" />
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff5a36] text-white shadow-md transition-transform group-hover:scale-105 sm:h-12 sm:w-12">
                      <FiPlay className="ml-0.5 text-lg sm:text-xl fill-current" />
                    </div>
                  </Link>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* ================= STATISTICS CONTAINER ================= */}
        {(statistics || statistics2) && (
          <div className="mt-12 sm:mt-16">
            <div className="rounded-2xl border border-slate-100 bg-white px-4 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] sm:px-8 sm:py-6">
              <div className="grid grid-cols-2 gap-4 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
                {(statistics || statistics2 || []).map((item: AboutStatistic, index: number) => {
                  const { icon, theme } = getStatIconAndTheme(item.icon, index);

                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3 pt-3 sm:pt-0 lg:py-1 ${
                        index !== 0 ? "lg:pl-6" : ""
                      }`}
                    >
                      {/* Icon Circle */}
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12 ${theme.bg} ${theme.text}`}
                      >
                        {icon}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col text-left">
                        <h3 className="text-base font-extrabold text-[#1a0c2e] sm:text-xl md:text-2xl">
                          <AnimatedNumber value={item.value} />
                        </h3>
                        <p className="text-sm font-medium text-gray-500 sm:text-sm">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}