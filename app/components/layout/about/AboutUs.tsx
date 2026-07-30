"use client";

import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";

import {
  FiArrowRight,
  FiHeart,
  FiShield,
  FiPlay,
  FiUsers,
} from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { BsAwardFill } from "react-icons/bs";
import { HiOutlineHeart, HiOutlineShieldCheck } from "react-icons/hi2";
import { LuGraduationCap, LuHeartHandshake } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import MissionSection from "../../homelayout/Mission";
import type { MissionData } from "@/type/typeSection";

const mission = data.mission as MissionData;



import type {
  AboutSectionProps,
  AboutStatistic,
  AboutStatistic2,
} from "@/type/typeSection";

// =====================================================
// BACKGROUND DECORATIONS
// =====================================================

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

// =====================================================
// BUTTON ICON
// =====================================================

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

// =====================================================
// STAT ICON
// =====================================================

const getStatIconAndTheme = (icon: string, index: number) => {
  const themes = [
    {
      bg: "bg-[#ffebe4]",
      text: "text-[#ff5e28]",
    },
    {
      bg: "bg-[#e2f5d8]",
      text: "text-[#10b981]",
    },
    {
      bg: "bg-[#e3effd]",
      text: "text-[#2563eb]",
    },
    {
      bg: "bg-[#f3e5f5]",
      text: "text-[#9333ea]",
    },
  ];

  const theme = themes[index % themes.length];

  switch (icon) {
    case "shield":
      return {
        icon: <FiShield className="text-2xl" />,
        theme,
      };

    case "badge":
      return {
        icon: <BsAwardFill className="text-2xl" />,
        theme,
      };

    case "users":
      return {
        icon: <FaUsers className="text-2xl" />,
        theme,
      };

    case "globe":
      return {
        icon: <FaGlobe className="text-2xl" />,
        theme,
      };

    case "heart":
      return {
        icon: <FiHeart className="text-2xl" />,
        theme,
      };

    case "education":
      return {
        icon: <LuGraduationCap className="text-2xl" />,
        theme,
      };

    default:
      return {
        icon: <HiOutlineHeart className="text-2xl" />,
        theme,
      };
  }
};

const getValueIcon = (icon: string) => {
  switch (icon) {
    case "heart":
      return <FiHeart className="text-2xl" />;

    case "shield":
      return <HiOutlineShieldCheck className="text-2xl" />;

    case "users":
      return <FiUsers className="text-2xl" />;

    case "globe":
      return <FaGlobe className="text-2xl" />;

    default:
      return <FiHeart className="text-2xl" />;
  }
};

// =====================================================
// ANIMATED NUMBER
// =====================================================

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
      {
        threshold: 0.3,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 1800;
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

// MAIN ABOUT PAGE
export default function AboutUs({ data }: AboutSectionProps) {
  const {
    badge,
    title,
    description,
    buttons,
    gallery,
    statistics,
    statistics2,
    breadcrumb,
    values,
    cta,
  } = data;

  return (
    <main className="w-full overflow-hidden">
      {breadcrumb && (
        <section className="relative flex min-h-[280px] items-center justify-center overflow-hidden sm:min-h-[330px] lg:min-h-[350px]">
          {/* Background Image */}
          <Image
            src={breadcrumb.backgroundImage.src}
            alt={breadcrumb.backgroundImage.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          {/* Overlay */}
          {breadcrumb.overlay && (
            <div className="absolute inset-0 bg-[#23122c]/65" />
          )}

          {/* Banner Content */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            {/* Title */}
            <h1 className="text-4xl mb-2 font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {breadcrumb.title}
            </h1>
            {/* Breadcrumb */}
            <div className="mb-0 flex items-center justify-center gap-2 text-sm text-white/80">
              <Link
                href={breadcrumb.home.href}
                className="transition-colors hover:text-orange-400"
              >
                {breadcrumb.home.label}
              </Link>
              <span>/</span>

              <span className="text-orange-400">
                {breadcrumb.current.label}
              </span>
            </div>
            {/* Decorative Line */}
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-orange-500" />
          </div>
        </section>
      )}

      {/* main about section */}
      <section className="relative overflow-hidden bg-white md:pt-12 pt-7">
        <BackgroundDecorations />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                <HiOutlineHeart className="text-lg" />
                <span className="text-base font-medium">{badge.label}</span>
              </div>

              {/* Heading */}
              <h2 className="mt-2 text-3xl font-bold leading-tight text-[#23122c] md:text-[45px]">
                {title.line1}
              </h2>

              {/* Divider */}
              <div className="my-4 h-2 w-[70px] rounded-xl bg-orange-500" />

              {/* Primary */}
              <p className="mt-2 text-base font-semibold text-orange-600 sm:text-[17px]">
                {description.primary}
              </p>

              {/* Secondary */}
              <p className="mt-2 text-sm leading-7 text-[#666666] sm:text-[15px]">
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
                          ? "bg-orange-600 text-white shadow-lg shadow-orange-500/10 hover:bg-[#23122c]"
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

            {/* RIGHT GALLERY  */}
            <div className="relative mt-10 lg:col-span-6 lg:mt-0">
              <div className="relative mx-auto h-[400px] w-full max-w-lg sm:h-[480px] lg:max-w-none">
                {/* Top Image */}
                <div className="absolute left-8 top-0 z-0 h-[220px] w-[68%] overflow-hidden rounded-2xl shadow-sm sm:h-[270px] sm:w-[68%]">
                  <Image
                    src={gallery.mainImage.src}
                    alt={gallery.mainImage.alt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 70vw, 35vw"
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute right-0 top-6 z-10 flex items-center gap-2 rounded-2xl bg-white p-2 shadow-xl sm:px-5 sm:py-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-orange-500">
                    <LuHeartHandshake className="h-8 w-8" />
                  </div>
                  <div className="flex flex-col text-sm font-semibold text-[#23122c]">
                    <span>{gallery.floatingCard.title}</span>
                    <span className="-mt-1 text-sm font-normal">
                      {gallery.floatingCard.subtitle}
                    </span>
                    <span className="-mt-1 text-md text-orange-500">
                      {gallery.floatingCard.highlight}
                    </span>
                  </div>
                </div>

                {/* Side Image */}
                <div className="absolute right-0 top-16 z-0 h-[300px] w-[32%] overflow-hidden rounded-2xl shadow-md sm:h-[360px] sm:w-[28%]">
                  <Image
                    src={gallery.sideImage.src}
                    alt={gallery.sideImage.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 35vw, 20vw"
                  />
                </div>

                {/* Main Image */}
                <div className="absolute bottom-0 left-0 z-20 h-[240px] w-[82%] overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:h-[300px] sm:w-[80%]">
                  <Image
                    src={gallery.topImage.src}
                    alt={gallery.topImage.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 85vw, 40vw"
                  />

                  {/* Video Button */}
                  {gallery.playButton && (
                    <Link
                      href={gallery.playButton.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/60 bg-white/20 shadow-2xl backdrop-blur-md transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-16"
                    >
                      <span className="absolute h-full w-full animate-ping rounded-full bg-white opacity-40" />
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-md transition-transform group-hover:scale-105 sm:h-12 sm:w-12">
                        <FiPlay className="ml-0.5 fill-current text-xl" />
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* statistics 2 */}
          {statistics2?.length > 0 && (
            <div className="mt-8 w-full lg:w-1/2 ">
              <div className="rounded-3xl  bg-white/90 px-3 py-3 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.07)] backdrop-blur-sm">
                <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3 lg:divide-x lg:divide-slate-200">
                  {statistics2.map((item: AboutStatistic2, index: number) => {
                    const { icon, theme } = getStatIconAndTheme(
                      item.icon,
                      index,
                    );
                    return (
                      <div
                        key={item.label}
                        className={`flex items-center gap-3 py-3 lg:py-2 ${
                          index !== 0 ? "lg:pl-8" : ""
                        } ${index !== statistics2.length - 1 ? "lg:pr-8" : ""}`}
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${theme.bg} ${theme.text}`}
                        >
                          {icon}
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-lg font-bold text-[#23122c]">
                            <AnimatedNumber value={item.value} />
                          </h3>
                          <p className="text-xs font-medium leading-tight text-[#666666]">
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

      {/* statistics */}
      {statistics?.length > 0 && (
        <section className="bg-[#fafafa]">
          <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl 0 bg-white px-6 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.07)] sm:px-8 sm:py-8">
              <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
                {statistics.map((item: AboutStatistic, index: number) => {
                  const { icon, theme } = getStatIconAndTheme(item.icon, index);
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-4 py-5 sm:py-3 lg:py-0 ${
                        index !== 0 ? "lg:pl-8" : ""
                      } ${index !== statistics.length - 1 ? "lg:pr-8" : ""}`}
                    >
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${theme.bg} ${theme.text}`}
                      >
                        {icon}
                      </div>
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
        </section>
      )}

      {/* value section */}
      {values && (
        <section className="relative overflow-hidden bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                <HiOutlineHeart className="text-lg" />
                <span>{values.badge}</span>
              </div>
              <h2 className="mt-0 text-3xl font-bold leading-tight text-[#23122c] md:text-4xl lg:text-[42px]">
                {values.title}
              </h2>
              <div className="mx-auto mt-0 h-1.5 w-16 rounded-full bg-orange-500" />
            </div>

            {/* Values Grid */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.items.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-[0_15px_40px_-20px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Icon */}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    {getValueIcon(item.icon)}
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-bold text-[#23122c]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-[#666666]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    <MissionSection data={mission} />
{cta && (
        <section className="relative overflow-hidden bg-[#23122c] py-8 ">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-orange-400/20" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-orange-400/10" />
          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400">
              <HiOutlineHeart className="text-lg" />
              <span>{cta.badge}</span>
            </div>

            {/* Title */}
            <h2 className="mt-0 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {cta.title}
            </h2>

            {/* Description */}
            <p className="mx-auto mt-2 max-w-2xl text-sm text-white/70 sm:text-base">
              {cta.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={cta.button.href}
                className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-orange-600 hover:-translate-y-0.5"
              >
                {getButtonIcon(cta.button.icon)}
                <span>{cta.button.label}</span>
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={cta.secondaryButton.href}
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#23122c]"
              >
                {getButtonIcon(cta.secondaryButton.icon)}
                <span>{cta.secondaryButton.label}</span>
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>

  );
}
