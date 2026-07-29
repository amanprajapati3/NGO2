"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiMapPin,
  FiCalendar,
  FiTag,
} from "react-icons/fi";

import type { SuccessStoriesProps } from "@/type/typeSection";

export default function SuccessStories({ data }: SuccessStoriesProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const story = data.stories[activeIndex];

  const nextStory = () => {
    setActiveIndex((prev) => (prev === data.stories.length - 1 ? 0 : prev + 1));
  };

  const previousStory = () => {
    setActiveIndex((prev) => (prev === 0 ? data.stories.length - 1 : prev - 1));
  };

  return (
    <section className="relative overflow-hidden bg-white md:py-8 py-4">
      <div className="mx-auto max-w-7xl md:px-5 px-2">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full px-5 pt-2 text-sm font-semibold text-orange-700">
            {data.badge.label}
          </span>

          <h2 className="mt-0 text-3xl font-bold text-gray-900 md:text-5xl">
            {data.title.line1}{" "}
            <span className="text-yellow-600">{data.title.highlight}</span>
          </h2>

          <p className="mt-1 md:leading-relaxed text-gray-900">
            {data.subtitle}
          </p>
        </div>

        {/* Outer Relative Wrapper for Positioning Left & Right Buttons */}
        <div className="relative mt-5">
          
          {/* Navigation Controls: Left & Right Absolute Buttons */}
          <button
            onClick={previousStory}
            aria-label="Previous Story"
            className="absolute -left-4 cursor-pointer top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full  bg-white text-gray-900 shadow-md transition hover:bg-gray-100 active:scale-95 lg:-left-6"
          >
            <FiArrowLeft className="text-xl" />
          </button>

          <button
            onClick={nextStory}
            aria-label="Next Story"
            className="absolute -right-4 top-1/2 z-10 cursor-pointer flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full hover:bg-gray-100 text-black shadow-md transition  active:scale-95 lg:-right-6"
          >
            <FiArrowRight className="text-xl" />
          </button>

          {/* Story Content Wrapper */}
          <div className="grid items-center gap-10 px-6 md:grid-cols-2 md:px-12">
            
            {/* Story Image */}
            <div className="relative mx-auto h-[380px] w-full max-w-md overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={story.image}
                alt={story.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 450px"
              />
            </div>

            {/* Story Text Details */}
            <div>
              {/* Meta Info Bar */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                  <FiTag className="text-yellow-600" />
                  {story.category}
                </span>

                <span>{story.age}</span>

                <span className="flex items-center gap-1">
                  <FiMapPin className="text-yellow-600" />
                  {story.location}
                </span>

                <span className="flex items-center gap-1">
                  <FiCalendar className="text-yellow-600" />
                  {story.year}
                </span>
              </div>

              <h3 className="md:mt-4 mt-2 md:text-3xl text-2xl font-bold text-gray-900">
                {story.title}
              </h3>

              <p className="md:mt-4 mt-2 md:leading-relaxed text-gray-900">
                {story.story}
              </p>

              {/* Before & After Comparison Grid */}
              <div className="md:mt-8 mt-4 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <p className="mt-2 text-sm leading-relaxed text-gray-900">
                    {story.before}
                  </p>
                </div>

                <div className="rounded-2xl border border-yellow-100 bg-yellow-50/70 p-5">
                  <p className="mt-2 text-sm leading-relaxed text-gray-800">
                    {story.after}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-lg font-bold text-gray-900">
                {story.name}
              </p>
            </div>

          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 text-center">
          <Link
            href={data.button.href}
            className="inline-flex rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600 active:scale-95"
          >
            {data.button.label}
          </Link>
        </div>

      </div>
    </section>
  );
}