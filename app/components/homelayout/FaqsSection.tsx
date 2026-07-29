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
    <section className="relative overflow-hidden bg-white py-8">
      {/* Decorative Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-orange-100 blur-[130px]" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange-50 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-0 md:gap-4 lg:grid-cols-2">

          {/* ================= LEFT ================= */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 pt-2 text-sm font-semibold uppercase tracking-wider text-orange-500">
              <HiOutlineHeart />
              {badge.label}
            </div>

            <h2 className="mt-0 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              {title.line1}{" "}
              <span className="text-orange-500">
                {title.highlight}
              </span>
            </h2>

            <div className="mt-1 h-1 w-14 rounded-full bg-orange-500" />

            <p className="mt-1 max-w-lg text-md leading-7 text-slate-900">
              {description}
            </p>

            <div className="relative mt-4 overflow-hidden ">

              <Image
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                className="h-full w-full object-cover"
              />

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="space-y-5">

            {questions.map(
              (item: FAQItem, index: number) => {
                const open = activeIndex === index;

                return (
                  <div
                    key={item.question}
                    className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300"
                  >
                    {/* Question */}

                    <button
                      onClick={() => toggleAccordion(index)}
                      className="flex w-full items-center justify-between px-7 py-6 text-left transition hover:bg-orange-50"
                    >
                      <h3 className="pr-5 text-lg font-bold text-slate-900">
                        {item.question}
                      </h3>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                        {open ? (
                          <FiMinus size={20} />
                        ) : (
                          <FiPlus size={20} />
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
                          <div className="border-t border-slate-100 px-7 py-6">

                            <p className="leading-8 text-slate-600">
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