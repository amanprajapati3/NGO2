"use client";

import PageBanner from "../../shared/PageBanner"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiBook,
  FiUsers,
  FiHome,
  FiAward,
  FiBookOpen,
  FiUser,
  FiArrowRight,
  FiUserCheck,
} from "react-icons/fi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";

import type { ServiceDetailPageData } from "@/type/typeSection";
import { HiOutlineHeart } from "react-icons/hi2";

const iconMap: Record<string, React.ReactNode> = {
  FiGraduationCap: <RiGraduationCapFill className="h-5 w-5 sm:h-6 sm:w-6" />,
  FiBook: <FiBook className="h-5 w-5 sm:h-6 sm:w-6" />,
  FiUsers: <FiUsers className="h-5 w-5 sm:h-6 sm:w-6" />,
  FiHome: <FiHome className="h-5 w-5 sm:h-6 sm:w-6" />,
  FiAward: <FiAward className="h-5 w-5 sm:h-6 sm:w-6" />,
  FiPresentation: (
    <FaChalkboardTeacher className="h-5 w-5 sm:h-6 sm:w-6" />
  ),
  FiUserCheck: <FiUserCheck className="h-5 w-5 sm:h-6 sm:w-6" />,
  FiBookOpen: <FiBookOpen className="h-5 w-5 sm:h-6 sm:w-6" />,
  FiUser: <FiUser className="h-5 w-5 sm:h-6 sm:w-6" />,
};

/* =========================================================
   ANIMATED STAT NUMBER
========================================================= */

function AnimatedNumber({
  value,
  startAnimation,
}: {
  value: string;
  startAnimation: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  /*
    Example:
    "25,000+" -> number = 25000, suffix = "+"
    "150+"    -> number = 150, suffix = "+"
  */

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;

  const suffix = value.replace(/[0-9,.\s]/g, "");

  useEffect(() => {
    if (!startAnimation) {
      setDisplayValue(0);
      return;
    }

    let startTime: number | null = null;

    const duration = 1800;

    const animate = (currentTime: number) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      /*
        Ease-out effect:
        Starts fast and slows down near the final number.
      */
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentNumber = Math.floor(numericValue * easeOut);

      setDisplayValue(currentNumber);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(numericValue);
      }
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [startAnimation, numericValue]);

  return (
    <span className="inline-flex items-center justify-center">
      <span
        key={displayValue}
        className="inline-block animate-[statNumber_0.12s_ease-out]"
      >
        {displayValue.toLocaleString()}
      </span>

      {suffix && <span>{suffix}</span>}
    </span>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ServiceDetailPage({
  data,
}: {
  data: ServiceDetailPageData;
}) {
  const {
    aboutSection,
    whatWeDoSection,
    impactSection,
    getInvolvedSection,
    banner,
  } = data;

  /* =======================================================
     IMPACT SECTION OBSERVER
  ======================================================= */

  const impactRef = useRef<HTMLElement | null>(null);

  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const section = impactRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);

          /*
            Disconnect after first animation so it doesn't
            restart every time the user scrolls away/back.
          */
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full bg-white">

      {/* BANNER */}
      <PageBanner banner={banner} />

      <div className="mx-auto max-w-7xl px-3 py-8 text-[#1a1a1a] sm:px-6 lg:px-8">

        {/* ABOUT THIS SERVICE */}
        <section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 text-center md:text-start">
            <div className="  text-center md:text-start">
              {/* <span className="h-[2px] w-6 bg-orange-400" /> */}
              <p className="text-sm text-center md:text-left font-bold uppercase tracking-wider text-orange-400 sm:text-sm">
                {aboutSection.tag}
              </p>
            </div>
            <h1 className="mt-1 text-2xl font-serif font-extrabold text-[#111111] sm:text-3xl lg:text-4xl">
              {aboutSection.title}
            </h1>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600 sm:text-sm sm:leading-normal">
              {aboutSection.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {aboutSection.features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center gap-3 rounded-2xl bg-[#fff5f5] p-3 text-left sm:p-3.5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fde8e8] text-orange-400">
                    {iconMap[feature.icon] || (
                      <FiBook className="h-5 w-5" />
                    )}
                  </div>
                  <span className="text-sm font-bold leading-tight text-[#111111]">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-3xl sm:h-80 lg:col-span-6 lg:h-[400px]">
            <Image
              src={aboutSection.image}
              alt={aboutSection.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="mt-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-orange-400 sm:text-sm">
              {/* <span className="h-[1px] w-6 bg-orange-500" /> */}
              <HiOutlineHeart className="text-base text-[#FF4500]" />
              
              <span>{whatWeDoSection.tag}</span>
              {/* <span className="h-[1px] w-6 bg-orange-500" /> */}
            </div>
            <h2 className="mt-0 text-2xl font-serif font-bold text-[#111111] sm:text-3xl lg:text-4xl">
              {whatWeDoSection.title}
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {whatWeDoSection.cards.map((card) => (
              <div
                key={card.id}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="p-5 pt-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0f0] text-orange-400">
                    {iconMap[card.icon] || (
                      <FiHome className="h-5 w-5" />
                    )}
                  </div>
                  <h3 className="mt-4 text-base font-serif font-bold text-[#111111]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-sm">
                    {card.description}
                  </p>
             </div>
              </div>
            ))}
          </div>
        </section>

        {/* OUR IMPACT */}
        <section
          ref={impactRef}
          className="mt-10 overflow-hidden rounded-3xl bg-[#fdf2f2]"
        >

          {/* Heading */}
          <div className="relative w-full py-12">
            <div className="absolute inset-0" />
            <div className="relative flex items-center justify-center px-4 text-center">
              <div>
                <div className="flex items-center  text-orange-400 justify-center gap-2 text-sm font-bold uppercase tracking-wider text-black sm:text-sm">
                  <HiOutlineHeart className="text-base text-[#FF4500]" />
                  <span>{impactSection.tag}</span>
                  {/* <span className="h-[1px] w-6 bg-orange-400 " /> */}
                </div>
                <h2 className="mt-2 text-2xl font-serif font-bold text-black sm:text-3xl lg:text-4xl">
                  {impactSection.title}
                </h2>
              </div>
            </div>
          </div>

          {/* ANIMATED STATS*/}
          <div className="grid grid-cols-2 divide-y divide-orange-200/60 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {impactSection.stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center p-5 text-center sm:p-6"
              >
                <div className="text-orange-400">
                  {iconMap[stat.icon] || (
                    <FiUsers className="h-6 w-6 sm:h-7 sm:w-7" />
                  )}
                </div>
                <span className="mt-2 text-2xl font-extrabold text-orange-400 sm:text-3xl lg:text-4xl">
                  <AnimatedNumber
                    value={stat.value}
                    startAnimation={statsStarted}
                  />
                </span>
                <span className="mt-1 text-sm font-semibold text-slate-700 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* GET INVOLVED */}
        <section className="mt-10 overflow-hidden rounded-3xl bg-[#fafafa] sm:mt-16">
          <div className="grid grid-cols-1 items-center lg:grid-cols-12">
            <div className="space-y-4 p-6 sm:p-10 lg:col-span-6 lg:p-12">
              <span className="text-sm font-bold uppercase tracking-wider text-orange-400 sm:text-sm">
                {getInvolvedSection.tag}
              </span>
              <h2 className="text-xl font-serif font-bold text-[#111111] sm:text-3xl lg:text-4xl">
                {getInvolvedSection.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-sm">
                {getInvolvedSection.description}
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                <Link
                  href={getInvolvedSection.buttons.primary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-400 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-orange-500 sm:text-sm"
                >
                  <span>
                    {getInvolvedSection.buttons.primary.label}
                  </span>
                  <FiArrowRight className="text-sm sm:text-sm" />
                </Link>
                <Link
                  href={getInvolvedSection.buttons.secondary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-600 bg-white px-6 py-3 text-sm font-bold text-orange-400 transition-all hover:bg-orange-500 hover:text-white sm:text-sm"
                >
                  <span>
                    {getInvolvedSection.buttons.secondary.label}
                  </span>
                  <FiArrowRight className="text-sm sm:text-sm" />
                </Link>
              </div>
            </div>
            <div className="relative h-64 w-full sm:h-80 lg:col-span-6 lg:h-full lg:min-h-[420px]">\
              <Image
                src={getInvolvedSection.image}
                alt={getInvolvedSection.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}