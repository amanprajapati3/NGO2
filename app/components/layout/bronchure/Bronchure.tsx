"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  HeartHandshake,
  Users,
  Download,
  Handshake,
  Globe,
  ArrowRight,
  Heart,
} from "lucide-react";
import { SlBookOpen } from "react-icons/sl";

import PageBanner from "../../shared/PageBanner";
import type { BrochurePageProps } from "@/type/typeSection";
import { HiOutlineHeart } from "react-icons/hi2";

interface Props {
  data: BrochurePageProps;
}

const iconMap: Record<string, React.ElementType> = {
  "book-open": SlBookOpen,
  "file-text": FileText,
  "heart-hands": HeartHandshake,
  users: Users,
  download: Download,
  handshake: Handshake,
  globe: Globe,
  heart: Heart,
};

export default function Bronchure({ data }: Props) {
  const { banner, header, features, sectionTitle, brochures, ctaSection } =
    data;

  const getIcon = (name?: string, className = "h-5 w-5") => {
    if (!name) {
      return <SlBookOpen className={className} aria-hidden="true" />;
    }

    const Icon = iconMap[name.toLowerCase()] || SlBookOpen;

    return <Icon className={className} aria-hidden="true" />;
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* ===================== BANNER ===================== */}
      <PageBanner banner={banner} />

      {/* ===================== HEADER ===================== */}
      <section className="mx-auto max-w-4xl px-4 pb-10 sm:pt-12 pt-8 text-center">
        <div className="flex items-center justify-center gap-2">
          <HiOutlineHeart className="text-base text-[#FF4500]" />
          <p className=" text-sm font-semibold tracking-[0.2em] text-orange-600">
            {header.label}
          </p>
        </div>

        <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-4xl">
          {header.heading}
        </h2>

        {/* <div className="mx-auto mb-2 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-gray-300" />

          {getIcon("heart", "h-4 w-4 fill-orange-500 text-orange-500")}

          <div className="h-px w-10 bg-gray-300" />
        </div> */}

        <p className="mx-auto mt-1 max-w-2xl text-sm leading-relaxed text-slate-500 sm:mt-2 sm:text-base">
          {header.description}
        </p>
      </section>

      {/* ===================== FEATURES ===================== */}
      <section className="mx-auto max-w-5xl sm:px-4 px-2 pb-16">
        <div className="grid sm:gap-5 gap-2 rounded-2xl bg-orange-50/70 sm:p-6 p-2 grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center sm:px-3 sm:py-4 p-0 text-center"
            >
              <div className="mb-3 flex h-12 w-12 sm:w-20 sm:h-20 items-center justify-center rounded-full bg-white text-orange-600 shadow-sm">
                {getIcon(feature.icon, "h-6 w-6 sm:w-12 sm:h-12")}
              </div>

              <h3 className="mb-1.5 text-sm font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== SECTION TITLE ===================== */}
      <section className="mx-auto max-w-4xl sm:px-4 px-2 pb-10 text-center">
        <div className="mb-0 flex items-center justify-center gap-2">
          <HiOutlineHeart className="text-base text-[#FF4500]" />

          <p className="text-sm font-semibold tracking-widest text-orange-600">
            {sectionTitle.label}
          </p>

          {/* <div className="h-px w-10 bg-orange-500" /> */}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          {sectionTitle.heading}
        </h2>

        {/* <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" /> */}
      </section>

      {/* ===================== BROCHURE CARDS ===================== */}
      <section className="mx-auto max-w-6xl sm:px-4 px-2 pb-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brochures.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-gray-100  shadow-sm transition hover:shadow-md"
            >
              {/* Image */}
              <div className="relative h-68 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />

                {/* Image overlay */}

                {/* <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-orange-300">
                    {item.title}
                  </p>

                  <p className="mt-0.5 line-clamp-2 text-sm text-white/90">
                    {item.pretitle}
                  </p>
                </div> */}

                {/* Orange curved accent */}
                {/* <div className="absolute -bottom-1 left-0 right-0">
                  <svg
                    viewBox="0 0 400 30"
                    preserveAspectRatio="none"
                    className="h-6 w-full"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 30 L0 15 Q100 0 200 12 T400 8 L400 30 Z"
                      fill="#F97316"
                    />
                  </svg>
                </div> */}
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="mb-1.5 text-base font-bold text-gray-900">
                  {item.name}
                </h3>

                <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>

                <a
                  href={item.downloadUrl}
                  download
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-orange-500 px-4 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-500 hover:text-white"
                >
                  {getIcon("download", "h-4 w-4")}
                  {item.downloadlabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== CTA SECTION ===================== */}
      <section className="mx-auto max-w-6xl sm:px-4 pb-16">
        <div className="overflow-hidden sm:rounded-2xl bg-orange-50">
          <div className="grid grid-cols-1 items-center gap-8 px-2 py-4 sm:p-8 md:grid-cols-2 md:p-10 lg:gap-12">
            {/* Left Content */}
            <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row lg:items-start lg:justify-start lg:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-orange-300 bg-white text-orange-600">
                <img src="/heartImage.png" alt="" />
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <p className="mb-1 text-sm font-semibold tracking-widest text-orange-600">
                  {ctaSection.label}
                </p>

                <h2 className="mb-2 text-2xl font-bold text-gray-900">
                  {ctaSection.title}
                </h2>

                <p className="mb-5 max-w-sm text-sm leading-relaxed text-gray-600">
                  {ctaSection.description}
                </p>

                <div className="flex flex-wrap justify-center gap-1 sm:gap-3 lg:justify-start">
                  <Link
                    href={ctaSection.primaryButton.href}
                    className="inline-flex items-center gap-0.5 rounded-full bg-orange-600 px-2 py-1 text-sm font-semibold text-white transition hover:bg-orange-700 sm:gap-2 sm:px-5 sm:py-2.5"
                  >
                    {ctaSection.primaryButton.label}
                    {getIcon("arrow-right", "h-4 w-4")}
                  </Link>

                  <Link
                    href={ctaSection.secondaryButton.href}
                    className="inline-flex items-center gap-0.5 rounded-full border-2 border-orange-500 px-2 py-1 text-sm font-semibold text-orange-600 transition hover:bg-orange-50 sm:gap-2 sm:px-5 sm:py-2.5"
                  >
                    {ctaSection.secondaryButton.label}
                    {getIcon("arrow-right", "h-4 w-4")}
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
              {ctaSection.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-orange-600 shadow-sm sm:h-16 sm:w-16">
                    {getIcon(stat.icon, "h-5 w-5 sm:h-10 sm:w-10")}
                  </div>

                  <p className="text-lg font-bold text-orange-600">
                    {stat.value}
                  </p>

                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
