"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Users,
  Handshake,
  Target,
  MapPin,
  Phone,
  Mail,
  Globe,
  Headphones,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

import PageBanner from "../../shared/PageBanner";
import type { BranchesPageProps } from "@/type/typeSection";
import { HiOutlineHeart } from "react-icons/hi2";

interface Props {
  data: BranchesPageProps;
}

const iconMap: Record<string, React.ElementType> = {
  building: Building2,
  users: Users,
  handshake: Handshake,
  target: Target,
  "map-pin": MapPin,
  phone: Phone,
  mail: Mail,
  globe: Globe,
  headset: Headphones,
  "heart-hands": HeartHandshake,
};

export default function Branches({ data }: Props) {
  const { banner, header, stats, locationsSection, ctaBanner, contactBar } =
    data;

  const getIcon = (name?: string, className = "h-5 w-5") => {
    if (!name) {
      return <Building2 className={className} />;
    }

    const Icon = iconMap[name.toLowerCase()] || Building2;
    return <Icon className={className} aria-hidden="true" />;
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* ===================== BANNER ===================== */}
      <PageBanner banner={banner} />

      {/* ===================== HEADER ===================== */}
      <section className="mx-auto max-w-4xl sm:px-4 px-2 pb-10 pt-10 md:pt-14 text-center ">
        <div className="flex justify-center gap-1">
          <HiOutlineHeart className="text-base  text-[#FF4500]" />

          <p className="mb-0 -mt-0.5 text-sm font-semibold tracking-[0.2em] text-orange-600">
            {header.label}
          </p>
        </div>

        {/* <div className="mb-1 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-orange-400" />

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-400 text-orange-600">
            {getIcon(header.icon, "h-5 w-5")}
          </div>

          <div className="h-px w-10 bg-orange-400" />
        </div> */}

        <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
          {header.heading}
        </h2>

        {/* <div className="mx-auto mb-2 h-1 w-16 rounded-full bg-orange-500" /> */}

        <p className="mx-auto max-w-2xl leading-relaxed text-gray-600">
          {header.description}
        </p>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="mx-auto max-w-5xl px-2 pb-10 sm:px-4 sm:pb-16">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative flex  gap-4 px-5 py-5 text-left sm:px-6 sm:py-6 md:py-5 ${
                index !== stats.length - 1
                  ? "border-b border-gray-100 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              {/* ICON - Fixed height and centered */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                {getIcon(stat.icon, "h-7 w-7")}
              </div>

              {/* CONTENT - Flex column centered to maintain stable positioning */}
              <div className="flex min-w-0 flex-1 flex-col justify-center">
                <p className="text-2xl font-bold text-orange-600 md:text-3xl">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  {stat.label}
                </p>

                <p className="mt-0.5 text-sm  min-h-9 text-gray-500">
                  {stat.subLabel}
                </p>
              </div>

              {/* RIGHT VERTICAL DIVIDER */}
              {index !== stats.length - 1 && (
                <div className="absolute bottom-5 right-0 hidden h-[calc(100%-40px)] w-px bg-orange-600 md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===================== LOCATIONS ===================== */}
      <section className="mx-auto max-w-6xl sm:px-4 px-2 sm:pb-16 pb-10">
        <div className="mb-10 text-center">
          <div className="mb- flex items-center justify-center gap-3">
            {/* <div className="h-px w-10 bg-orange-500" /> */}
            <HiOutlineHeart className="text-base  text-[#FF4500]" />

            <p className="text-sm font-semibold tracking-widest text-orange-600">
              {locationsSection.label}
            </p>

            {/* <div className="h-px w-10 bg-orange-500" /> */}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {locationsSection.title}
          </h2>

          {/* <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" /> */}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* ===================== BRANCH CARDS ===================== */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:col-span-3">
            {locationsSection.branches.map((branch) => (
              <div
                key={branch.city}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition hover:shadow-md"
              >
                {/* Icon */}
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                  {getIcon("map-pin", "h-5 w-5")}
                </div>

                {/* City */}
                <h3 className="mb-1.5 text-base font-bold text-gray-900">
                  {branch.city}
                </h3>

                {/* Address - fixed area */}
                <div className="mb-3 flex  min-h-24 items-start justify-center">
                  <p className="text-sm leading-relaxed text-gray-600">
                    {branch.address}
                  </p>
                </div>

                {/* Phone */}
                <a
                  href={`tel:${branch.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 text-sm font-medium text-orange-600 hover:underline"
                >
                  {getIcon("phone", "h-4 w-4")}
                  {branch.phone}
                </a>
              </div>
            ))}
          </div>

          {/* ===================== MAP SIDE ===================== */}
          {/* Map Side */}
          <div className=" p-0 lg:col-span-2">
            <div className="">
              {/* INDIA MAP */}
              <div className="relative flex min-h-[280px] items-center justify-center">
                <img src="/Indianmap.png" alt="" />
              </div>

              {/* <div className="text-center md:text-left">
                <div className="mb-3 flex items-center justify-center gap-3 md:justify-start">
                  <span className="h-px w-10 bg-orange-400" />

                  <span className="text-sm font-semibold tracking-[0.2em] text-orange-600">
                    {locationsSection.label}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-bold leading-tight text-gray-900">
                  {locationsSection.mapSide.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-gray-600">
                  {locationsSection.mapSide.description}
                </p>

                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <MapPin className="h-5 w-5 text-orange-600" />

                  <span className="text-sm font-semibold text-orange-600">
                    6 Active Branch Locations
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="mx-auto max-w-6xl sm:px-4 px-2 pb-10">
        <div className="relative overflow-hidden rounded-2xl bg-orange-50">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2">
            {/* Left Content */}
            <div className="relative z-10 sm:p-8 p-2 md:p-10 lg:p-12">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white text-orange-600">
                  <img
                    src="/heartImage.png"
                    alt=""
                    className="w-10 h-10 sm:w-16 sm:h-16"
                  />
                </div>

                <p className="text-sm font-semibold tracking-widest text-orange-600">
                  {ctaBanner.label}
                </p>
              </div>

              <h2 className="mb-3 text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
                {ctaBanner.title}
              </h2>

              <p className="mb-6 max-w-md text-sm leading-relaxed text-gray-600">
                {ctaBanner.description}
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start mb-2 sm:gap-3 gap-1">
                <Link
                  href={ctaBanner.primaryButton.href}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-600 sm:px-6 sm:py-2.5 p-2 text-sm font-semibold text-white transition hover:bg-orange-700"
                >
                  {ctaBanner.primaryButton.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={ctaBanner.secondaryButton.href}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-orange-600 sm:px-6 sm:py-2.5 p-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-50"
                >
                  {ctaBanner.secondaryButton.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[280px] h-64 lg:h-full">
              <Image
                src={ctaBanner.image.src}
                alt={ctaBanner.image.alt}
                fill
                className="object-cover"
              />

              <svg
                className="absolute left-0 top-0 hidden h-full w-24 lg:block"
                viewBox="0 0 100 400"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M100 0 C40 80 40 320 100 400 L0 400 L0 0 Z"
                  fill="#FFF7ED"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT BAR ===================== */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-6 rounded-2xl border border-gray-100 bg-orange-50/50 p-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-orange-100">
          {contactBar.items.map((item) => (
            <div key={item.label} className="flex items-center gap-4 px-4 py-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-orange-600 shadow-sm">
                {getIcon(item.icon, "h-5 w-5")}
              </div>

              <div>
                <p className="text-sm text-gray-500">{item.label}</p>

                <p className="font-semibold text-orange-600">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
