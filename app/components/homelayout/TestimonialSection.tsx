"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import type {
  TestimonialSectionProps,
  TestimonialItem,
} from "@/type/typeSection";

export default function TestimonialSection({
  data,
}: TestimonialSectionProps) {
  const {
    badge,
    title,
    subtitle,
    description,
    testimonials,
  } = data;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial: TestimonialItem =
    testimonials[currentIndex];

  return (
    <section className="relative overflow-hidden bg-white py-3 md:py-8">

      {/* Decorative Background */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-orange-100 blur-[140px]" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,#f3f4f6_2px,transparent_2px)] [background-size:18px_18px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
        <div className="mb-0 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            {badge.label}
          </p>

          <h2 className="mt-0 text-3xl font-extrabold text-slate-900 sm:text-5xl">
            {title.line1}{" "}
            <span className="text-orange-500">
              {title.highlight}
            </span>
          </h2>

          <div className="mx-auto mt-1 h-1 w-16 rounded-full bg-orange-500" />

          <p className="mx-auto mt-1 max-w-3xl text-md md:leading-8 text-slate-900">
            {description}
          </p>

        </div>

        {/* Card */}
        <div className="relative overflow-hidden mt-3 md:mt-0 rounded-[34px] bg-white md:p-8 p-2 shadow-2xl lg:p-12">

          <div className="grid items-center gap-12 lg:grid-cols-[220px_1fr]">

            {/* Left */}
            <div className="text-center lg:text-left">

              <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full ring-4 ring-orange-100 lg:mx-0">

                <Image
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  fill
                  sizes="144px"
                  className="object-cover"
                />

              </div>

              <h3 className="md:mt-6 mt-2 text-2xl font-bold text-slate-900">
                {activeTestimonial.name}
              </h3>

              <p className="md:mt-2 font-medium text-orange-500">
                {activeTestimonial.designation}
              </p>

              <div className="md:mt-5 mt-2 flex justify-center gap-1 lg:justify-start">
                {Array.from({
                  length: activeTestimonial.rating,
                }).map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-yellow-400"
                  />
                ))}
              </div>

            </div>

            {/* Right */}
            <div>

              <blockquote className="text-md md:leading-7 text-slate-900">
                "{activeTestimonial.message}"
              </blockquote>

              {/* Navigation */}
              <div className="mt-10 flex justify-center-safe md:justify-end items-center gap-4">

                <div className="ml-auto flex justify-center-safe gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setCurrentIndex(index)
                      }
                      className={`h-2.5 rounded-full transition-all ${
                        currentIndex === index
                          ? "w-8 bg-orange-500"
                          : "w-2.5 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}