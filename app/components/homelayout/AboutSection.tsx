"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiHeart,
  FiUsers,
  FiPlay,
  FiShield,
  FiAward,
  FiGlobe,
} from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi2";
import { LuSmile, LuGraduationCap, LuActivity, LuUsers } from "react-icons/lu";
import type { AboutSectionProps, AboutStatistic } from "@/type/typeSection";
import { useEffect, useRef, useState } from "react";

const getButtonIcon = (icon: string) => {
  switch (icon) {
    case "heart":
      return <FiHeart className="text-base" />;
    case "users":
      return <FiUsers className="text-base" />;
    default:
      return null;
  }
};

// Map statistics icons & background color variations dynamically
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
      return { icon: <FiShield className="text-3xl" />, theme };
    case "badge":
      return { icon: <FiAward className="text-3xl" />, theme };
    case "users":
      return { icon: <LuUsers className="text-3xl" />, theme };
    case "globe":
      return { icon: <FiGlobe className="text-3xl" />, theme };
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

export default function AboutSection({ data }: AboutSectionProps) {
  const { badge, title, description, buttons, gallery, statistics } = data;

  return (
    <section className="relative overflow-hidden bg-white py-16 ">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-6">
            {/* Badge Sub-title */}
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#fe4040]">
              <HiOutlineHeart className="text-lg" />
              <span className="text-base font-medium">{badge.label}</span>
            </div>

            {/* Heading */}
            <h2 className="mt-0 text-2xl font-bold  text-[#23122c] ">
              {title.line1}
            </h2>

            {/* Primary Text */}
            <p className="mt-2 text-base font-semibold text-[#fe4040] sm:text-[17px]">
              {description.primary}
            </p>

            {/* Secondary Text */}
            <p className="mt-2 text-sm  text-[#666666] sm:text-[15px]">
              {description.secondary}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {buttons.map((button) => {
                const primary = button.variant === "primary";
                return (
                  <Link
                    key={button.label}
                    href={button.href}
                    className={`group inline-flex items-center gap-2 rounded-[30px] px-8 py-3.5 text-[15px] font-bold transition-all duration-300 ${
                      primary
                        ? "bg-[#fe4040] text-white hover:bg-[#23122c] shadow-lg shadow-red-500/10"
                        : "bg-[#23122c] text-white hover:bg-[#fe4040] shadow-md"
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
          <div className="relative mt-10 lg:col-span-6 lg:mt-0">
            <div className="relative mx-auto min-h-[360px] w-full max-w-lg sm:min-h-[460px] lg:max-w-none">
              {/* Main Top Right Image */}
              <div className="absolute right-0 top-0 h-[260px] w-[88%] overflow-hidden rounded-xl shadow-lg sm:h-[360px] sm:w-[82%]">
                <Image
                  src={gallery.mainImage?.src || gallery.topImage?.src || ""}
                  alt={gallery.mainImage?.alt || gallery.topImage?.alt || "Gallery main"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, 40vw"
                  priority
                />
              </div>

              {/* Overlapping Bottom Left Video Image */}
              <div className="absolute left-0 bottom-0 z-10 h-[200px] w-[75%] overflow-hidden rounded-xl border-[8px] border-white shadow-2xl sm:h-[270px] sm:w-[68%]">
                <Image
                  src={gallery.topImage?.src || gallery.mainImage?.src || ""}
                  alt={gallery.topImage?.alt || gallery.mainImage?.alt || "Gallery overlay"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 75vw, 35vw"
                />

                {/* Play Button Overlay */}
                {gallery.playButton && (
                  <Link
                    href={gallery.playButton.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-16"
                  >
                    <span className="absolute h-full w-full animate-ping rounded-full bg-white opacity-75" />
                    <FiPlay className="ml-1 text-2xl text-[#fe4040] transition-transform group-hover:scale-110" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATISTICS (FLOATING BAR) ================= */}
        {statistics && statistics.length > 0 && (
          <div className="mt-10">
            <div className="rounded-3xl bg-white px-6 py-6 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.07)] border border-slate-100 sm:px-8 sm:py-8">
              <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
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