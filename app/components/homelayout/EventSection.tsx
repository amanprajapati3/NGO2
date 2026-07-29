"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCalendar,
} from "react-icons/fi";
import type {
  EventsSectionProps,
  EventCard,
} from "@/type/typeSection";

export default function EventSection({
  data,
}: EventsSectionProps) {
  const {
    badge,
    title,
    description,
    events,
  } = data;

  return (
    <section className="relative overflow-hidden bg-white py-10">

      {/* Decorative Background */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-100 blur-[130px]" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-50 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* ================= Heading ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 pt-2 text-sm font-semibold uppercase tracking-widest text-orange-500">
            <FiCalendar />
            {badge.label}
          </div>

          <h2 className="-mt-2 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {title.line1}{" "}
            <span className="text-orange-500">
              {title.highlight}
            </span>
          </h2>

          <div className="mx-auto mt-0 h-1 w-16 rounded-full bg-orange-500" />

          <p className="mx-auto mt-1 max-w-2xl text-md leading-7 text-slate-900">
            {description}
          </p>

        </div>

        {/* ================= Event Cards ================= */}

        <div className="mt-8 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                      {events.map((event: EventCard) => {
            const primary =
              event.button.variant === "primary";

            return (
              <div
                key={event.title}
                className="group relative overflow-hidden rounded-3xl shadow-xl"
              >
                {/* Background Image */}
                <div className="relative h-[400px]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-orange-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-8">

                    <h3 className="max-w-xs text-3xl font-bold leading-tight text-white">
                      {event.title}
                    </h3>

                    <Link
                      href={event.href}
                      className={`mt-7 inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                        primary
                          ? "bg-orange-500 text-white hover:bg-orange-600"
                          : "bg-indigo-600 text-white hover:bg-indigo-700"
                      }`}
                    >
                      {event.button.label}

                      <FiArrowRight className="transition group-hover:translate-x-1" />
                    </Link>

                  </div>
                </div>
              </div>
            );
          })}
      

            {/* ================= Bottom CTA ================= */}
            {/* <div className="mt-16 flex justify-center">
              <Link
                href={EventCard.href}
                className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-10 py-4 font-semibold text-white shadow-lg shadow-orange-300/40 transition hover:bg-orange-600"
              >
                {cta.label}

                <FiArrowRight className="transition group-hover:translate-x-1" />
              </Link>
            </div> */}

          </div>
        </div>
    </section>
  );
}