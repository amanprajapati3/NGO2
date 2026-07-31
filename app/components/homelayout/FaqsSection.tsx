
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi2";

import type {
  FAQSectionProps,
  FAQItem,
} from "@/type/typeSection";

export default function FAQSection({
  data,
}: FAQSectionProps) {
  const { badge, title, description, image, questions } = data;

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="relative overflow-hidden bg-white py-6 sm:py-8">
      {/* Decorative Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-orange-100 blur-[130px]" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange-50 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
        <div className="flex flex-col justify-center items-center text-center gap-10">

          {/* ================= LEFT ================= */}
          <div className=" items-center text-center ">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-500 sm:px-4 sm:py-2 sm:text-sm">
              <HiOutlineHeart className="text-base sm:text-lg" />
              {badge.label}
            </div>

            {/* Title */}
            <h2 className="md:mt-0 max-w-xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:mt-0">
              {title.line1}{" "}
              <span className="text-orange-500">
                {title.highlight}
              </span>
            </h2>

            {/* Accent Line */}
            <center>
            <div className="mt-2 h-1 w-14 sm:w-28 rounded-full bg-orange-500" />
            </center>

            {/* Description */}
            <p className="mt-2 max-w-lg md:text-md text-sm text-slate-900  ">
              {description}
            </p>

            {/* Image */}
            {/* <div className="relative mt-5 w-full max-w-[520px] overflow-hidden rounded-2xl sm:mt-6">
              <Image
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 520px, 700px"
                className="h-auto w-full object-cover"
              />
            </div> */}
          </div>

          {/* ================= RIGHT ================= */}
          <div className="w-full space-y-3 sm:space-y-4">

            {questions.map(
              (item: FAQItem, index: number) => {
                const open = activeIndex === index;

                return (
                  <div
                    key={item.question}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 sm:rounded-3xl"
                  >
                    {/* Question */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="flex w-full items-center cursor-pointer justify-between gap-3 px-4 py-4 text-left transition hover:bg-orange-50 sm:px-5 sm:py-5 md:px-6 lg:px-7 lg:py-6"
                    >
                      <h3 className="pr-2 text-sm font-bold leading-6 text-slate-900 sm:pr-4 sm:text-base md:text-lg">
                        {item.question}
                      </h3>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500 sm:h-10 sm:w-10 md:h-11 md:w-11">
                        {open ? (
                          <FiMinus className="text-base sm:text-lg" />
                        ) : (
                          <FiPlus className="text-base sm:text-lg" />
                        )}
                      </div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                            y: -20,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                            y: -20,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="border-t text-start border-slate-100 px-2 py-4 sm:px-5 sm:py-5 md:px-6 lg:px-7 lg:py-6">
                            <p className="text-sm md:leading-7 text-slate-600 sm:text-base sm:leading-8">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
