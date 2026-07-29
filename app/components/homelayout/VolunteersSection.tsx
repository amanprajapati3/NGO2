"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FiArrowLeft, FiArrowRight, FiHeart } from "react-icons/fi";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import { HiOutlineHeart } from "react-icons/hi2";

import type { TeamMember, TeamSectionProps } from "@/type/typeSection";

const getSocialIcon = (icon: string) => {
  switch (icon) {
    case "facebook":
      return <FaFacebookF size={14} />;

    case "linkedin":
      return <FaLinkedinIn size={14} />;

    case "instagram":
      return <FaInstagram size={14} />;

    default:
      return null;
  }
};

export default function VolunteerSection({ data }: TeamSectionProps) {
  const { badge, heading, description, members, cta } = data;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= members.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? members.length - 1 : prev - 1));
  };

  return (
    <section className="relative overflow-hidden bg-white md:py-8 py-3">
      {/* Background */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-100 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-50 blur-[150px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* ================= Heading ================= */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 pt-2 text-sm font-semibold uppercase tracking-wider text-orange-500">
            <HiOutlineHeart className="text-base" />
            {badge.label}
          </div>

          <h2 className="mt-0 text-3xl font-extrabold text-slate-900 sm:text-5xl">
            {heading.title.split(heading.highlight)[0]}
            <span className="text-orange-500">{heading.highlight}</span>
          </h2>

          <div className="mx-auto mt-1 h-1 w-14 rounded-full bg-orange-500" />
          <p className="mx-auto mt-1 max-w-2xl md:text-lg text-md md:leading-7 text-slate-900">
            {description}
          </p>
        </div>

        {/* ================= Slider Navigation ================= */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-500 shadow-lg transition hover:bg-orange-500 hover:text-white"
          >
            <FiArrowLeft size={20} />
          </button>

        {/* ================= Slider ================= */}
        <div className="mt-1 overflow-hidden relative">
          <div
            className="flex flex-nowarp gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
            }}
          >
            {members.map((member: TeamMember) => (
              <div
                key={member.name}
                className="w-[100%] flex-shrink-0 sm:w-[calc(50%-8px)] xl:w-[calc(25%-12px)]"
              >
                <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                      sizes="(max-width:640px)100vw,(max-width:1280px)50vw,25vw"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                    {/* Social Icons */}
                    <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 translate-y-10 gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.socials.map((social) => (
                        <Link
                          key={social.icon}
                          href={social.href}
                          target="_blank"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:bg-orange-500 hover:text-white"
                        >
                          {getSocialIcon(social.icon)}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Content */}

                  <div className="sm:p-2 p-1">
                    <h3 className="sm:text-2xl text-xl font-bold text-slate-900 transition group-hover:text-orange-500">
                      {member.name}
                    </h3>

                    <p className="mt-0 font-semibold uppercase tracking-wider text-orange-500">
                      {member.designation}
                    </p>

                    <p className="mt-1 leading-7 text-slate-900">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
         <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-20 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-500 shadow-lg transition hover:bg-orange-500 hover:text-white"
          >
            <FiArrowRight size={20} />
          </button>
      </div>
      {/* ================= Bottom CTA ================= */}

      <div className="relative mt-10 overflow-hidden md:mx-16 md:rounded-[36px] bg-[#2B2343]">
        {/* Background Decoration */}
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-orange-500/20 blur-[130px]" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-violet-500/20 blur-[140px]" />

        {/* Dots */}
        <div className="absolute right-10 top-10 grid grid-cols-6 gap-2 opacity-20">
          {Array.from({ length: 36 }).map((_, index) => (
            <span
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-orange-300"
            />
          ))}
        </div>

        <div className="relative flex flex-col items-center justify-between gap-8 md:px-8 p-1 py-12 text-center lg:flex-row lg:px-14 lg:py-10 lg:text-left">
          {/* Left */}
          <div className="flex items-center md:gap-5 gap-2">
            <div className="flex h-20 w-20 items-center justify-center rounded-full md:bg-orange-500 text-white shadow-xl md:shadow-orange-500/30">
              <FiHeart className="text-4xl" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">{cta.title}</h3>

              <p className="mt-3 max-w-2xl md:leading-7 text-slate-300">
                {cta.description}
              </p>
            </div>
          </div>

          {/* Right */}

          <Link
            href={cta.button.href}
            className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-xl shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
          >
            {cta.button.label}

            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
