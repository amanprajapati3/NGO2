"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiHeart, FiPlay, FiX, FiCheck } from "react-icons/fi";
import { FaUsers, FaShieldAlt } from "react-icons/fa";
import { BsAwardFill } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi2";
import { LuSmile, LuGraduationCap, LuActivity } from "react-icons/lu";
import type {
  AboutSectionProps,
  AboutStatistic,
  TrustBadge,
} from "@/type/typeSection";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import ScrollReveal from "../shared/ScrollReveal";

// Helper to format YouTube links into embed URLs suitable for iframe
const getEmbedUrl = (url: string) => {
  if (!url) return "";

  if (url.includes("youtube.com/watch?v=")) {
    return url.replace("watch?v=", "embed/") + "?autoplay=1";
  }

  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1`;
  }

  return url;
};

// ==========================================
// BACKGROUND DECORATION COMPONENT
// ==========================================
const BackgroundDecorations = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      <div className="absolute -right-24 -top-12 h-[750px] w-[600px] rounded-[40%] bg-[#fff2ed]/80 blur-0 md:-right-16 md:h-[850px] md:w-[700px] lg:-right-20 lg:h-[950px] lg:w-[800px]" />
    </div>
  );
};

// ==========================================
// HELPER FUNCTIONS FOR ICONS & THEMING
// ==========================================

const getButtonIcon = (icon: string) => {
  switch (icon) {
    case "heart":
      return <FiHeart className="text-sm sm:text-base" />;
    case "users":
      return <FaUsers className="text-sm sm:text-base" />;
    default:
      return null;
  }
};

const getTrustBadgeIcon = (icon?: string) => {
  switch (icon) {
    case "check":
      return (
        <FiCheck className="h-5 md:w-8 md:h-8 w-5 text-[#10b981] stroke-[3]" />
      );
    case "star":
      return <BsAwardFill className="h-5 md:w-8 md:h-8 w-5 text-[#f59e0b]" />;
    case "heart":
      return <FaUsers className="h-5 md:w-8 md:h-8 w-5 text-[#8b5cf6]" />;
    default:
      return (
        <FiCheck className="h-5 md:w-8 md:h-8 w-5 text-[#10b981] stroke-[3]" />
      );
  }
};

const getStatIconAndTheme = (icon: string, index: number) => {
  const themes = [
    { bg: "bg-[#ffebe5]", text: "text-[#ff5a36]" },
    { bg: "bg-[#e2f5d8]", text: "text-[#10b981]" },
    { bg: "bg-[#e3effd]", text: "text-[#2563eb]" },
    { bg: "bg-[#f3e5f5]", text: "text-[#9333ea]" },
  ];

  const theme = themes[index % themes.length];

  switch (icon) {
    case "children":
    case "child":
      return {
        icon: <LuSmile className="h-7 w-7 text-[#ff5a36]" />,
        theme: { bg: "bg-[#ffebe5]", text: "text-[#ff5a36]" },
      };
    case "education":
      return {
        icon: <LuGraduationCap className="h-7 w-7 text-[#10b981]" />,
        theme: { bg: "bg-[#e2f5d8]", text: "text-[#10b981]" },
      };
    case "healthcare":
    case "heart":
      return {
        icon: <LuActivity className="h-7 w-7 text-[#2563eb]" />,
        theme: { bg: "bg-[#e3effd]", text: "text-[#2563eb]" },
      };
    case "people":
    case "users":
      return {
        icon: <FaUsers className="h-7 w-7 text-[#9333ea]" />,
        theme: { bg: "bg-[#f3e5f5]", text: "text-[#9333ea]" },
      };
    default:
      return {
        icon: <LuSmile className="h-7 w-7 text-[#ff5a36]" />,
        theme,
      };
  }
};

const AnimatedNumber = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const number = Number(value.replace(/\D/g, "")) || 0;
  const prefix = value.match(/^[^\d]+/)?.[0] || "";
  const suffix = value.match(/[^\d]+$/)?.[0] || "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const increment = number / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, number]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function AboutSection({ data }: AboutSectionProps) {
  const pathname = usePathname();
  const {
    badge,
    title,
    desc,
    buttons,
    trustBadges,
    gallery,
    statistics,
    statistics2,
    background,
  } = data;

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVideoOpen]);

  const statsToRender = statistics || statistics2 || [];

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-12">
      {background?.showDecorations !== false && <BackgroundDecorations />}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ================= LEFT CONTENT ================= */}
          <ScrollReveal direction="left" className="lg:col-span-6 w-full">
            <div className="md:text-left text-center">
              <div className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#ff5a36]">
                <HiOutlineHeart className="text-base text-[#ff5a36]" />
                <span>{badge?.label}</span>
              </div>

              <h2 className="md:mt-3 mt-1 text-3xl font-extrabold leading-tight text-[#1a0c2e] sm:text-4xl md:text-[42px] lg:leading-[1.18]">
                {title?.line1}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#666666] sm:text-base">
                {desc?.primary}
              </p>
              {desc?.secondary && (
                <p className="mt-3 text-sm leading-relaxed text-[#666666] sm:text-base">
                  {desc.secondary}
                </p>
              )}

              <div className="mt-6 flex flex-wrap justify-center md:justify-start items-center gap-3 sm:mt-8">
                {buttons?.map((button) => {
                  if (
                    pathname === "/about-us" &&
                    button.label.toLowerCase().includes("more about")
                  ) {
                    return null;
                  }
                  const primary = button.variant === "primary";

                  return (
                    <Link
                      key={button.label}
                      href={button.href}
                      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 sm:px-7 sm:py-3.5 ${
                        primary
                          ? "bg-[#ff5a36] text-white shadow-md shadow-[#ff5a36]/20 hover:bg-[#1a0c2e]"
                          : "bg-[#1a0c2e] text-white shadow-md hover:bg-[#ff5a36]"
                      }`}
                    >
                      {getButtonIcon(button.icon)}

                      <span>{button.label}</span>

                      <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1 sm:text-base" />
                    </Link>
                  );
                })}
              </div>

              {/* Dynamic Trust Badges */}
              {trustBadges && trustBadges.length > 0 && (
                <div className="mt-8 pt-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-2 sm:divide-x sm:divide-slate-200">
                    {trustBadges.map((tb: TrustBadge, idx: number) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-3 md:justify-start ${
                          idx !== 0 ? "sm:pl-4" : ""
                        }`}
                      >
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                            tb.bgColor || "bg-emerald-100"
                          }`}
                        >
                          {getTrustBadgeIcon(tb.icon)}
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-base font-bold leading-tight text-[#1a0c2e]">
                            {tb.text}
                          </span>
                          {tb.desc && (
                            <span className="text-sm font-medium leading-tight text-gray-500 mt-0.5">
                              {tb.desc}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* ================= RIGHT GALLERY ================= */}
          <ScrollReveal direction="right" className="lg:col-span-6 w-full">
            <div className="relative mt-4 lg:mt-0">
              <div className="relative mx-auto h-[380px] w-full max-w-lg sm:h-[460px] lg:max-w-none">
                <div className="absolute right-12 top-0 z-0 h-[170px] w-[65%] overflow-hidden rounded-2xl shadow-sm sm:h-[210px]">
                  <Image
                    src={gallery?.topImage?.src || gallery?.mainImage?.src || ""}
                    alt={gallery?.topImage?.alt || "Gallery top image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 65vw, 30vw"
                    priority
                  />
                </div>

                {gallery?.floatingCard && (
                  <div className="absolute right-0 top-4 z-20 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-xl sm:px-4 sm:py-3 border border-slate-100">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fff2ed] text-[#ff5a36]">
                      <FiHeart className="text-xl fill-current" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[11px] font-medium text-gray-500 sm:text-sm">
                        {gallery.floatingCard.pretitle}
                      </span>
                      <span className="text-sm font-bold text-[#1a0c2e]">
                        {gallery.floatingCard.title}
                      </span>
                      <span className="text-sm font-bold text-[#ff5a36]">
                        {gallery.floatingCard.highlight}
                      </span>
                    </div>
                  </div>
                )}

                <div className="absolute right-0 top-24 z-0 h-[280px] w-[30%] overflow-hidden rounded-2xl shadow-md sm:h-[330px]">
                  <Image
                    src={gallery?.sideImage?.src || gallery?.mainImage?.src || ""}
                    alt={gallery?.sideImage?.alt || "Gallery side image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 30vw, 15vw"
                  />
                </div>

                <div className="absolute bottom-2 left-0 z-10 h-[220px] w-[78%] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:h-[280px] sm:w-[75%]">
                  <Image
                    src={gallery?.mainImage?.src || ""}
                    alt={gallery?.mainImage?.alt || "Main program photo"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 35vw"
                  />

                  {gallery?.playButton && (
                    <button
                      type="button"
                      onClick={() => setIsVideoOpen(true)}
                      aria-label="Play Video"
                      className="group absolute cursor-pointer inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 bg-white/30 backdrop-blur-md shadow-2xl transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-16"
                    >
                      <span className="absolute h-full w-full animate-ping rounded-full bg-white opacity-40" />
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff5a36] text-white shadow-md transition-transform group-hover:scale-105 sm:h-12 sm:w-12">
                        <FiPlay className="ml-0.5 text-lg sm:text-xl fill-current" />
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ================= STATISTICS CONTAINER ================= */}
        {statsToRender.length > 0 && (
          <div className="mt-6 sm:mt-16">
            <div className="rounded-3xl sm:border sm:border-slate-100/80 sm:bg-white sm:px-6 py-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] sm:px-10 sm:py-8">
              <div className="grid gap-2 sm:gap-6 grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-slate-200/80">
                {statsToRender.map((item: AboutStatistic, index: number) => {
                  const statDelay = 0.2 + index * 0.1;
                  const { icon, theme } = getStatIconAndTheme(item.icon, index);

                  return (
                    <ScrollReveal key={item.label} direction="up" delay={statDelay} className="w-full">
                      <div
                        className={`flex items-center gap-4 ${
                          index !== 0 ? "lg:pl-8" : ""
                        }`}
                      >
                        <div
                          className={`flex sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full ${theme.bg}`}
                        >
                          {icon}
                        </div>

                        <div className="flex flex-col text-left">
                          <h3 className="text-xl sm:text-2xl font-black text-[#1a0c2e] sm:text-3xl">
                            <AnimatedNumber value={item.value} />
                          </h3>
                          <p className="text-sm font-medium text-gray-500 mt-0.5">
                            {item.label}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ================= VIDEO MODAL ================= */}
      {isVideoOpen && gallery?.playButton && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div
            className="absolute inset-0"
            onClick={() => setIsVideoOpen(false)}
          />

          <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl border border-white/10">
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close modal"
              className="absolute cursor-pointer right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white border border-white/20 transition-all hover:bg-[#ff5a36] hover:border-[#ff5a36]"
            >
              <FiX className="text-xl" />
            </button>

            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={getEmbedUrl(gallery.playButton.videoUrl)}
                title="Video player"
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}