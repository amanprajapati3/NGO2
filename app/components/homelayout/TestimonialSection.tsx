"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi2";

import { FaStar } from "react-icons/fa";
import type {
  TestimonialSectionProps,
  TestimonialItem,
} from "@/type/typeSection";
import ScrollReveal from "../shared/ScrollReveal";

export default function TestimonialSection({ data }: TestimonialSectionProps) {
  const { badge, title, pretitle, description, testimonials } = data;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const activeTestimonial: TestimonialItem = testimonials[currentIndex];

  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-0 py-0 pb-10">
      {/* Soft Radial Background Glow */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-orange-100/60 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <ScrollReveal direction="up">
        <div className="flex flex-col items-center text-center">
          {/* Badge Label */}
          <div className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#FF4500]">
            <HiOutlineHeart className="text-sm" />
            <span>{badge?.label || "Testimonials"}</span>
          </div>

          {/* Main Title */}
          <h2 className="md:mt-1 font-serif text-3xl font-extrabold md:tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            {title?.line1 || "Don’t Believe Us?"}{" "}
            <span className="text-[#0F172A]">
              {title?.highlight || "See Review"}
            </span>
          </h2>

          {/* pretitle / Description */}
          {(description || pretitle) && (
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
              {description || pretitle}
            </p>
          )}
        </div>
        </ScrollReveal>

        {/* ================= TESTIMONIAL CARD ================= */}
        <ScrollReveal direction="scale" delay={0.2}>
        <div className="relative md:mt-12 mt-4 overflow-hidden rounded-3xl border border-slate-100 bg-white md:p-6 p-2 shadow-xl shadow-slate-200/50 sm:p-10">
          {/* Background Dotted Globe Mesh Overlay (Right Side) */}
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[radial-gradient(#CBD5E1_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-40 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 items-stretch md:gap-8 gap-2 lg:grid-cols-12 lg:gap-12">
            {/* ================= LEFT PROFILE COLUMN ================= */}
            <div className="flex flex-col items-center text-center lg:col-span-4 justify-center">
              {/* Profile Avatar */}
              <div className="relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-orange-50 sm:h-36 sm:w-36">
                <Image
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>

              {/* Author Name */}
              <h3 className="md:mt-4 mt-2 font-serif text-2xl font-bold text-[#1E1B4B]">
                {activeTestimonial.name}
              </h3>

              {/* Designation / Country */}
              <p className="mt-1 text-sm font-semibold text-slate-500">
                {activeTestimonial.designation || "Charity Bingo"}{" "}
                <span className="text-[#FF4500]">Canada</span>
              </p>

              {/* Star Rating */}
              <div className="mt-3 flex items-center justify-center gap-1 text-amber-400">
                {Array.from({ length: activeTestimonial.rating || 5 }).map(
                  (_, i) => (
                    <FaStar key={i} className="text-sm fill-amber-400" />
                  ),
                )}
              </div>
            </div>

            {/* Middle Vertical Divider Line */}
            <div className="hidden h-auto w-[1px] border-r border-dashed border-slate-200 lg:block lg:col-span-1 lg:mx-auto" />

            {/* ================= RIGHT MESSAGE COLUMN ================= */}
            <div className="flex flex-col justify-between lg:col-span-7">
              {/* Wrapped content in flex-1 with min-height to maintain stability */}
              <div className="flex-1 flex flex-col min-h-[160px] sm:min-h-[140px]">
                {/* Quote Highlight Title */}
                <h4 className="font-serif text-xl font-bold text-[#1E1B4B] sm:text-2xl">
                  {activeTestimonial.name || "Precious Journey With You”"}
                </h4>

                {/* Main Testimonial Message Body */}
                <p className="mt-1 md:mt-4 h-64 sm:h-36 overflow-hidden text-sm text-slate-600 sm:text-sm leading-relaxed">
                  {activeTestimonial.message}
                </p>
              </div>

              {/* Arrow Navigation Controls pinned to the bottom using mt-auto */}
              <div className="mt-auto pt-4 flex justify-center md:justify-start items-center md:gap-3 gap-10">
                <button
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="flex h-10 cursor-pointer w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-[#FF4500] hover:bg-[#FF4500] hover:text-white hover:shadow-md"
                >
                  <FiArrowLeft className="text-base" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-[#FF4500] hover:bg-[#FF4500] hover:text-white hover:shadow-md"
                >
                  <FiArrowRight className="text-base" />
                </button>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
