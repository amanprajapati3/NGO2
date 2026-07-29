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
import type {
  AboutSectionProps,
  AboutStatistic,
} from "@/type/typeSection";
import { useEffect, useRef, useState } from "react";


const getButtonIcon = (icon: string) => {
  switch (icon) {
    case "heart":
      return <FiHeart className="text-lg" />;
    case "users":
      return <FiUsers className="text-lg" />;
    default:
      return null;
  }
};

const getStatIcon = (icon: string) => {
  switch (icon) {
    case "shield":
      return <FiShield className="text-2xl" />;
    case "badge":
      return <FiAward className="text-2xl" />;
    case "users":
      return <FiUsers className="text-2xl" />;
    case "globe":
      return <FiGlobe className="text-2xl" />;
    default:
      return null;
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
      { threshold: 0.5 }
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
      {count}
      {suffix}
    </span>
  );
};

export default function AboutSection({ data }: AboutSectionProps) {
  const {
    badge,
    title,
    description,
    buttons,
    gallery,
    statistics,
  } = data;

  return (
    <section className="relative overflow-hidden bg-white py-5 lg:py-16">
      {/* Decorative Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-100 blur-[130px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-50 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl px-3 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ================= LEFT ================= */}
          <div className="">

            {/* Badge */}
            <div className="md:mb-6 flex justify-center md:justify-start items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
              <HiOutlineHeart className="text-lg" />
              {badge.label}
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-3xl text-center md:text-start font-extrabold md:leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {title.line1}
              <br />
              {title.line2}
              <br />
              <span className="text-orange-500">
                {title.highlight}
              </span>
            </h2>

            {/* Orange Line */}
            <div className="md:mt-8 hidden md:block mt-2 h-1 w-14 rounded-full bg-orange-500" />
            {/* Primary Text */}
            <p className="md:mt-8 mt-2 max-w-xl md:text-xl text-center md:text-start leading-relaxed text-slate-900">
              {description.primary}
            </p>

            {/* Secondary Text */}
            <p className="md:mt-8 mt-2 max-w-xl md:text-xl text-center md:text-start leading-relaxed text-slate-900">
              {description.secondary}
            </p>

            {/* Buttons */}
            <div className="sm:mt-10 mt-4 flex justify-center md:justify-start gap-1 sm:gap-4">
              {buttons.map((button) => {
                const primary = button.variant === "primary";
                return (
                  <Link
                    key={button.label}
                    href={button.href}
                    className={`group inline-flex items-center sm:gap-3 gap-1 text-sm sm:text-lg  rounded-full px-3 sm:px-8 sm:py-4 py-3 font-semibold transition-all duration-300 ${
                      primary
                        ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-300/40"
                        : "bg-slate-900 text-white hover:bg-slate-800 shadow-lg"
                    }`}
                  >
                    {getButtonIcon(button.icon)}
                    {button.label}
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative min-h-[650px]">

            {/* Top Image */}
            <div className="absolute right-6 top-0 h-72 w-[72%] overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
              <Image
                src={gallery.topImage.src}
                alt={gallery.topImage.alt}
                fill
                className="object-cover"
                sizes="(max-width:768px)100vw,40vw"
              />
            </div>

            {/* Side Image */}
            <div className="absolute bottom-16 right-0 h-[430px] w-[22%] overflow-hidden rounded-3xl border-4 border-white shadow-xl">
              <Image
                src={gallery.sideImage.src}
                alt={gallery.sideImage.alt}
                fill
                className="object-cover"
                sizes="20vw"
              />
            </div>

            {/* Main Image */}
            <div className="absolute bottom-0 left-0 z-10 h-[430px] w-[82%] overflow-hidden rounded-3xl border-[5px] border-white shadow-2xl">
              <Image
                src={gallery.mainImage.src}
                alt={gallery.mainImage.alt}
                fill
                className="object-cover"
                sizes="(max-width:768px)100vw,50vw"
              />

              {/* Play Button */}
              <Link
                href={gallery.playButton.videoUrl}
                target="_blank"
                className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-2xl transition hover:scale-105"
              >
                <FiPlay className="ml-1 text-4xl text-orange-500" />
              </Link>
            </div>

            {/* Floating Card */}
            <div className="absolute right-2 md:top-5 top-3 z-20 rounded-3xl bg-white px-6 py-5 shadow-2xl">
              <div className="flex items-center md:gap-4 gap-2">
                <div className="rounded-full bg-orange-100 p-3">
                  <HiOutlineHeart className="text-3xl text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">
                    {gallery.floatingCard.title}
                  </p>
                  <p className="text-slate-600">
                    {gallery.floatingCard.subtitle}
                  </p>
                  <span className="font-bold text-orange-500">
                    {gallery.floatingCard.highlight}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
                {/* ================= Statistics ================= */}
        <div className="md:mt-10 mt-3 grid md:gap-6 gap-2 grid-cols-2 md:grid-cols-4">
          {statistics.map((item: AboutStatistic) => (
            <div
              key={item.label}
              className="group rounded-3xl border border-slate-200 bg-white md:p-7 p-3 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
            >
              <div className="md:mb-5 mb-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                {getStatIcon(item.icon)}
              </div>
              <h3 className="sm:text-3xl text-2xl font-extrabold text-slate-900">
                 <AnimatedNumber value={item.value} />
              </h3>
              <p className="sm:mt-2 text-base font-medium text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}