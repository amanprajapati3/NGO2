"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FiArrowRight,
  FiTarget,
  FiShield,
  FiUsers,
  FiEye,
  FiCheckCircle,
} from "react-icons/fi";

import type { MissionSectionProps } from "@/type/typeSection";
import ScrollReveal from "../shared/ScrollReveal";

const getTabIcon = (icon: string) => {
  switch (icon) {
    case "mission":
      return <FiTarget className="text-base text-[#ff5e14]" />;
    case "vision":
      return <FiEye className="text-base text-slate-400" />;
    case "goal":
      return <FiCheckCircle className="text-base text-slate-400" />;
    default:
      return <FiTarget className="text-base text-[#ff5e14]" />;
  }
};

const getFeatureIcon = (icon: string) => {
  switch (icon) {
    case "community":
      return <FiUsers className="text-xl text-[#ff5e14]" />;
    case "shield":
      return <FiShield className="text-xl text-[#ff5e14]" />;
    case "growth":
      return <FiTarget className="text-xl text-[#ff5e14]" />;
    default:
      return <FiTarget className="text-xl text-[#ff5e14]" />;
  }
};

const getPurposeIcon = (icon: string) => {
  switch (icon) {
    case "target":
      return <FiTarget className="text-3xl text-[#ff5e14]" />;
    default:
      return <FiTarget className="text-3xl text-[#ff5e14]" />;
  }
};

export default function MissionSection({ data }: MissionSectionProps) {
  const { badge, title, tabs, imageSection, buttons } = data;

  const initialTab = tabs.find((tab) => tab.active)?.id ?? tabs[0]?.id;
  const [activeTab, setActiveTab] = useState(initialTab);
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="relative w-full bg-white">
      <div className="relative mx-auto">
        {/* Main Section Container */}
        <div className="relative min-h-[660px] w-full overflow-hidden bg-[#0c0f1d] p-0 sm:p-8 lg:p-12">
          {/* ================= ROUGH BRUSH EDGE OVERLAY ================= */}
          {imageSection.showBrushTop && (
            <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-16 w-full overflow-hidden">
              <svg
                className="relative block h-16 w-full text-white"
                viewBox="0 0 1200 160"
                preserveAspectRatio="none"
              >
                <defs>
                  <filter
                    id="rough-brush-edge"
                    x="-10%"
                    y="-30%"
                    width="120%"
                    height="160%"
                  >
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.035 0.12"
                      numOctaves="5"
                      seed="8"
                      result="noise"
                    />

                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="noise"
                      scale="38"
                      xChannelSelector="R"
                      yChannelSelector="G"
                    />
                  </filter>
                </defs>

                <path
                  d="
          M0,0
          L1200,0
          L1200,48

          C1165,40 1150,62 1118,48
          C1085,34 1060,72 1028,52
          C995,30 970,65 938,48
          C900,30 875,75 838,50
          C805,28 780,67 748,46
          C710,25 685,73 650,48
          C615,27 590,68 555,45
          C520,25 495,75 458,48
          C420,25 395,66 360,45
          C325,25 300,72 265,48
          C230,27 205,68 170,46
          C135,27 105,67 75,48
          C45,32 25,60 0,45

          Z
        "
                  fill="currentColor"
                  filter="url(#rough-brush-edge)"
                />

                <path
                  d="M0,0 L1200,0 L1200,25 C1160,38 1135,18 1095,32 C1055,46 1025,18 985,35 C945,50 915,20 875,34 C835,48 805,15 765,32 C725,48 690,18 650,35 C610,50 580,20 540,33 C500,48 470,17 430,34 C390,50 360,20 320,32 C280,47 250,18 210,34 C170,48 140,20 100,33 C60,47 35,22 0,35 Z"
                  fill="currentColor"
                  opacity="0.9"
                  filter="url(#rough-brush-edge)"
                />

                <path
                  d="M0,0 L1200,0 L1200,15 C1140,22 1110,10 1060,20 C1010,30 980,8 930,18 C880,27 840,9 790,20 C740,30 700,8 650,18 C600,28 560,10 510,20 C460,30 420,8 370,18 C320,27 280,9 230,20 C180,29 140,8 90,18 C50,25 25,12 0,20 "
                  fill="currentColor"
                  opacity="0.75"
                  filter="url(#rough-brush-edge)"
                />
              </svg>
            </div>
          )}

          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <Image
              src={imageSection.mainImage.src}
              alt={imageSection.mainImage.alt}
              fill
              priority
              className="object-cover object-left md:object-center"
              sizes="100vw"
            />

            {/* Vignette Overlay (Darker on the right side to enhance card contrast) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/75 to-black/90 lg:from-transparent lg:via-black/60 lg:to-black/90" />

            {/* Concentric Orange Circles */}
            {imageSection.showRings && (
              <div className="absolute -bottom-28 -right-28 pointer-events-none opacity-40">
                <div className="h-96 w-96 rounded-full border border-[#ff5e14]/40" />
                <div className="absolute inset-8 rounded-full border border-[#ff5e14]/30" />
                <div className="absolute inset-16 rounded-full border border-[#ff5e14]/20" />
                <div className="absolute inset-24 rounded-full border border-[#ff5e14]/10" />
              </div>
            )}
          </div>

          {/* Wrapper to center on mobile/tablet and shift to right on desktop */}
          <div className="relative z-10 flex w-full justify-center lg:justify-end items-center">
            {/* Entire Main Content Card Container */}
            <ScrollReveal direction="right" className="w-full md:w-[85%] lg:w-[65%]">
              <div className="relative mx-auto w-full rounded-2xl border border-white/10 bg-[#101426]/95 p-4 sm:p-10 lg:p-12 text-white shadow-2xl backdrop-blur-lg">
                {/* Dot Grid Top Right */}
                <div className="absolute top-6 right-6 grid grid-cols-6 gap-1.5 opacity-20">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-1 w-1 rounded-full bg-slate-300"
                    />
                  ))}
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#ff5e14]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#ff5e14]/30 bg-[#ff5e14]/10">
                    <FiTarget className="text-sm md:text-md text-[#ff5e14]" />
                  </span>
                  <span>{badge.label}</span>
                </div>

                {/* Heading */}
                <h2 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[48px] lg:leading-[1.15]">
                  {title.line1}{" "}
                  <span className="text-[#ff5e14]">{title.highlight}</span>{" "}
                  {title.line2}
                </h2>

                {/* Orange/Grey Underline */}
                <div className="mt-4 flex items-center gap-1.5">
                  <div className="h-0.5 w-10 bg-[#ff5e14]" />
                  <div className="h-0.5 w-3 bg-slate-600" />
                </div>

                {/* Tab Navigation */}
                <div className="mt-4 md:mt-8 flex items-center gap-2 md:gap-6 border-b border-slate-800 pb-3">
                  {tabs.map((tab) => {
                    const isActive = tab.id === activeTab;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative flex items-center cursor-pointer gap-2 pb-1 text-sm md:text-lg font-semibold transition-colors ${
                          isActive
                            ? "text-[#ff5e14]"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        {getTabIcon(tab.icon)}
                        <span>{tab.label}</span>

                        {isActive && (
                          <span className="absolute -bottom-3.5 left-0 right-0 h-0.5 bg-[#ff5e14]" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Content */}
                {activeTabData && (
                  <div className="mt-6 h-[300px] overflow-y-auto space-y-3 text-sm leading-relaxed text-slate-300 sm:h-[220px] sm:text-base md:h-[220px]">
                    <p>{activeTabData.content.primary}</p>

                    {activeTabData.content.secondary && (
                      <p>{activeTabData.content.secondary}</p>
                    )}
                  </div>
                )}

                {/* Features Grid */}
                <div className="mt-0 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {tabs[0]?.content.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="flex flex-col rounded-xl border border-slate-800/80 bg-[#161b30] p-4 transition-all hover:border-[#ff5e14]/40"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#ff5e14]/20 bg-[#ff5e14]/10">
                        {getFeatureIcon(feature.icon)}
                      </div>

                      <h3 className="text-sm md:text-lg font-bold text-white">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-md leading-relaxed text-slate-300">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Purpose Card Included Inside Main Card */}
                <div className="mt-4 rounded-2xl border border-white/10 bg-[#121627]/90 p-5 backdrop-blur-md shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full border border-[#ff5e14]/30 bg-[#ff5e14]/10">
                      {getPurposeIcon(imageSection.purposeCard.icon)}
                    </div>

                    <div>
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ff5e14]">
                        {imageSection.purposeCard.badge}
                      </span>
                      <h4 className="mt-0.5 text-sm sm:text-lg font-bold text-white">
                        {imageSection.purposeCard.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}