"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiHeart, FiPlay } from "react-icons/fi";
import { FaShield } from "react-icons/fa6";
import { BsAwardFill } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { RiGlobalFill } from "react-icons/ri";
import { LuSmile, LuGraduationCap, LuActivity } from "react-icons/lu";
import type {
  AboutSectionProps,
  AboutStatistic,
  AboutStatistic2,
} from "@/type/typeSection";
import { useEffect, useRef, useState } from "react";

// ==========================================
// BACKGROUND DECORATION COMPONENT
// ==========================================

const BackgroundDecorations = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Semi-circular decorative shape behind top-right image extending to stats section */}
      <div 
        className="absolute -right-20 -top-20 h-[850px] w-[300 rounded-full bg-[#fdeee9]/60 md:h-[950px] ] lg:-right-32 lg:-top-32 lg:h-[1100px] w-[500px]"
      />
    </div>
  );
};

// ==========================================
// HELPER FUNCTIONS & SUB-COMPONENTS
// ==========================================

const getButtonIcon = (icon: string) => {
  switch (icon) {
    case "heart":
      return <FiHeart className="text-base" />;
    case "users":
      return <FaUsers className="text-base" />;
    default:
      return null;
  }
};

const getStatIconAndTheme = (icon: string, index: number) => {
  const themes = [
    { bg: "bg-[#ffebe4]", text: "text-[#ff5e28]" }, // Orange
    { bg: "bg-[#e2f5d8]", text: "text-[#10b981]" }, // Green
    { bg: "bg-[#e3effd]", text: "text-[#2563eb]" }, // Blue
    { bg: "bg-[#f3e5f5]", text: "text-[#9333ea]" }, // Purple
  ];

  const theme = themes[index % themes.length];

  let IconComponent = <LuSmile className="text-3xl" />;
  switch (icon) {
    case "shield":
      return { icon: <FaShield className="text-3xl" />, theme };
    case "badge":
      return { icon: <BsAwardFill className="text-3xl" />, theme };
    case "users":
      return { icon: <FaUsers className="text-3xl" />, theme };
    case "globe":
      return { icon: <RiGlobalFill className="text-3xl" />, theme };
    case "child":
      return { icon: <LuSmile className="text-3xl" />, theme };
    case "education":
      return { icon: <LuGraduationCap className="text-3xl" />, theme };
    case "healthcare":
      return { icon: <LuActivity className="text-3xl" />, theme };
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
    description,
    buttons,
    gallery,
    statistics,
    statistics2,
  } = data;

  return (
    <section className="relative overflow-hidden bg-white md:py-16 py-5 ">
      {/* Background Semi-Circle Decoration */}
      <BackgroundDecorations />

      <div className="relative z-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-6 text-center md:text-start">
            {/* Badge Sub-title */}
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
              <HiOutlineHeart className="text-lg" />
              <span className="text-base font-medium">{badge.label}</span>
            </div>

            {/* Heading */}
            <h2 className="md:mt-2 text-2xl font-bold text-[#23122c] md:text-[45px] md:leading-tight">
              {title.line1}
            </h2>

            <div className="md:y-4 h-2  hidden md:block md:justify-start w-[70px] rounded-xl bg-orange-500" />

            {/* Primary Text */}
            <p className="mt-2 text-base font-semibold text-orange-600 sm:text-[17px]">
              {description.primary}
            </p>

            {/* Secondary Text */}
            <p className="mt-2 text-sm text-[#666666] sm:text-[15px]">
              {description.secondary}
            </p>

            {/* Buttons */}
            <div className="md:mt-8 mt-4 flex justify-center md:justify-start flex-wrap items-center md:gap-4 gap-1">
              {buttons.map((button) => {
                const primary = button.variant === "primary";
                return (
                  <Link
                    key={button.label}
                    href={button.href}
                    className={`group inline-flex items-center md:gap-2 gap-1 rounded-[30px] md:px-8 px-2 md:py-3.5 py-2 text-[15px] font-bold transition-all duration-300 ${
                      primary
                        ? "bg-orange-600 text-white shadow-lg shadow-red-500/10 hover:bg-[#23122c]"
                        : "bg-[#23122c] text-white shadow-md hover:bg-orange-600"
                    }`}
                  >
                    {getButtonIcon(button.icon)}
                    <span>{button.label}</span>
                    <FiArrowRight className="text-base transition-transform group-hover:translate-x-1" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT GALLERY ================= */}
          <div className="relative md:mt-10 mt-0 lg:col-span-6 lg:mt-0">
            {/* Outer container establishing height and proportions */}
            <div className="relative mx-auto h-[400px] w-full max-w-lg sm:h-[480px] lg:max-w-none">
              {/* ================= 1. TOP LEFT IMAGE ================= */}
              <div className="absolute left-8 top-0 z-0 h-[220px] w-[68%] overflow-hidden rounded-2xl shadow-sm sm:h-[270px] sm:w-[68%]">
                <Image
                  src={gallery.mainImage?.src || gallery.topImage?.src || ""}
                  alt={gallery.mainImage?.alt || "Background scene"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 70vw, 35vw"
                  priority
                />
              </div>

              {/* ================= 2. FLOATING BADGE (Top Right) ================= */}
              <div className="absolute right-0 top-6 z-10 flex items-center gap-2 rounded-2xl bg-white p-2 shadow-xl sm:px-5 sm:py-2">
                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-orange-500">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                {/* Text */}
                <div className="flex flex-col">
                  {gallery.floatingCard.title}
                  <span className="text-sm -mt-1">{gallery.floatingCard.subtitle}</span>
                  <span className="text-orange-500 -mt-1 text-md">{gallery.floatingCard.highlight}</span>
                </div>
              </div>

              {/* ================= 3. RIGHT SIDE VERTICAL IMAGE ================= */}
              <div className="absolute right-0 top-16 z-0 h-[300px] w-[32%] overflow-hidden rounded-2xl shadow-md sm:h-[360px] sm:w-[28%]">
                <Image
                  src={gallery.topImage?.src || gallery.mainImage?.src || ""}
                  alt={gallery.topImage?.alt || "Side scene"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 35vw, 20vw"
                />
              </div>

              {/* ================= 4. MAIN FRONT OVERLAPPING IMAGE ================= */}
              <div className="absolute bottom-0 left-0 z-20 h-[240px] w-[82%] overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:h-[300px] sm:w-[80%]">
                <Image
                  src={gallery.topImage?.src || gallery.mainImage?.src || ""}
                  alt={gallery.topImage?.alt || "Main children photo"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, 40vw"
                />

                {/* Play Button Overlay */}
                {gallery.playButton && (
                  <Link
                    href={gallery.playButton.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/60 bg-white/20 backdrop-blur-md shadow-2xl transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-16"
                  >
                    <span className="absolute h-full w-full animate-ping rounded-full bg-white opacity-40" />
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-md transition-transform group-hover:scale-105 sm:h-12 sm:w-12">
                      <FiPlay className="ml-0.5 text-xl fill-current" />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATISTICS SMALL BAR ================= */}
        {statistics2 && statistics2.length > 0 && (
          <div className="md:mt-5 mt-2 w-full lg:w-3/4">
            <div className="rounded-3xl border border-slate-100 bg-white/90 backdrop-blur-sm px-3 py-3 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.07)]">
              <div className="grid  divide-y divide-slate-100 grid-cols-2 sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
                {statistics2.map((item: AboutStatistic2, index: number) => {
                  const { icon, theme } = getStatIconAndTheme(item.icon, index);

                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3 py-2 lg:py-0 ${
                        index !== 0 ? "lg:pl-8" : ""
                      } ${index !== statistics2.length - 1 ? "lg:pr-2" : ""}`}
                    >
                      {/* Circle Icon */}
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${theme.bg} ${theme.text}`}
                      >
                        {icon}
                      </div>

                      {/* Number & Text Label */}
                      <div className="flex flex-col">
                        <h3 className="text-md font-bold text-[#23122c]">
                          <AnimatedNumber value={item.value} />
                        </h3>

                        <p className="text-sm font-medium leading-tight text-[#666666]">
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

        {/* ================= STATISTICS MAIN BAR ================= */}
        {statistics && statistics.length > 0 && (
          <div className="md:mt-10 mt-0">
            <div className="rounded-3xl border border-slate-100 bg-white/90 backdrop-blur-sm px-6 py-6 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.07)] sm:px-8 sm:py-8">
              <div className="grid divide-y divide-slate-100 grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
                {statistics.map((item: AboutStatistic, index: number) => {
                  const { icon, theme } = getStatIconAndTheme(item.icon, index);

                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-4 py-4 sm:py-2 lg:py-0 ${
                        index !== 0 ? "lg:pl-8" : ""
                      } ${index !== statistics.length - 1 ? "lg:pr-8" : ""}`}
                    >
                      {/* Circle Icon */}
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${theme.bg} ${theme.text}`}
                      >
                        {icon}
                      </div>

                      {/* Number & Text Label */}
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-[#23122c] sm:text-3xl">
                          <AnimatedNumber value={item.value} />
                        </h3>
                        <p className="text-sm font-medium leading-tight text-[#666666] sm:text-base">
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