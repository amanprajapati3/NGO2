"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Playfair_Display, Caveat } from "next/font/google";
import type { BannerProps } from "@/type/typeSection";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
});

interface BannerSliderProps {
  banners: BannerProps[];
  autoPlay?: boolean;
  interval?: number;
}

const Banner: React.FC<BannerSliderProps> = ({
  banners,
  autoPlay = true,
  interval = 6000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = banners.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!autoPlay || totalSlides <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, totalSlides]);

  if (!banners || banners.length === 0) {
    return null;
  }

  const slide = banners[currentSlide];

  return (
    <section
      className={`${playfair.variable} ${caveat.variable} relative h-[470px] min-h-[470px] sm:h-[570px] sm:min-h-[570px] w-full overflow-hidden bg-black`}
    >
      {/* Background Images */}
      {banners.map((banner, index) => (
        <div
          key={`${banner.bgImageUrl}-${index}`}
          className={`absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "scale-100 opacity-100"
              : "scale-105 opacity-0"
          }`}
          style={{
            backgroundImage: `url("${banner.bgImageUrl}")`,
          }}
          aria-hidden={index !== currentSlide}
        />
      ))}

      {/* Overlays */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          opacity: slide.overlayOpacity ?? 0.55,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-tr from-orange-950/20 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Slider Indicator Dots: Bottom-centered on mobile, Vertical on Desktop */}
      {totalSlides > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-row sm:bottom-auto sm:left-3 md:left-14 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0 sm:flex-col gap-2 sm:gap-3">
          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`relative flex h-3.5 w-3.5 sm:h-5 sm:w-5 items-center justify-center rounded-full border transition-all duration-300 ${
                currentSlide === index
                  ? "border-[#ff521d]"
                  : "border-[#ff521d]/70 hover:border-[#ff521d]"
              }`}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 bg-[#ff521d]"
                    : "h-0 w-0"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {/* Main Content Area - Vertically Centered */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-16 md:px-20">
        <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col items-center justify-center text-center">
          
          {/* Dynamic Content Block */}
          <div className="flex flex-col items-center justify-center">
            {/* Pretitle - Increased size on mobile */}
            {slide.pretitle && (
              <div
                className={`${caveat.variable} mb-1 sm:mb-2 text-xl xs:text-2xl sm:text-[48px] lg:text-[56px] font-medium leading-tight text-white`}
              >
                {slide.pretitle}
              </div>
            )}

            {/* Main Title - Increased size on mobile */}
            <h1
              className={`${playfair.variable} max-w-[900px] text-2xl xs:text-3xl sm:text-[52px] lg:text-[64px] xl:text-[68px] font-bold leading-[1.15] sm:leading-[1.05] tracking-[-0.02em] text-white`}
            >
              {slide.title}
            </h1>

            {/* Description - Increased size on mobile */}
            {slide.desc && (
              <p className="mt-2.5 sm:mt-4 max-w-[700px] text-[13px] xs:text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-relaxed text-white/95 line-clamp-2 sm:line-clamp-none">
                {slide.desc}
              </p>
            )}
          </div>

          {/* CTA Buttons - Strictly One-Line Layout on Mobile */}
          {slide.ctaButtons && slide.ctaButtons.length > 0 && (
            <div className="mt-5 sm:mt-6 flex w-full max-w-[500px] flex-nowrap items-center justify-center gap-2.5 sm:gap-4 px-2">
              {slide.ctaButtons.map((cta, index) => {
                const isPrimary = cta.variant === "primary" || !cta.variant;

                return (
                  <a
                    key={`${cta.href}-${index}`}
                    href={cta.href}
                    className={`inline-flex h-[40px] xs:h-[44px] sm:h-[52px] flex-1 sm:flex-initial min-w-0 sm:min-w-[190px] items-center justify-center rounded-full px-3.5 xs:px-4 sm:px-7 text-[13px] xs:text-[14px] sm:text-[16px] transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 ${
                      isPrimary
                        ? "bg-[#ff521d] text-white font-bold"
                        : "bg-[#3d376d] text-white font-medium"
                    }`}
                  >
                    <span className="truncate whitespace-nowrap">{cta.label}</span>
                    <span className="ml-1.5 sm:ml-2.5 text-[15px] sm:text-[20px] font-normal leading-none">→</span>
                  </a>
                );
              })}
            </div>
          )}

        </div>
      </div>

      {/* Bottom Right Navigation - Hidden on Mobile (sm:flex) */}
      {totalSlides > 1 && (
        <div className="absolute bottom-5 right-4 sm:bottom-8 sm:right-8 z-30 hidden sm:flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="group flex h-[36px] w-[36px] sm:h-[44px] sm:w-[44px] items-center justify-center rounded-full border border-white/25 bg-white/[0.04] text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/15"
          >
            <ChevronLeft
              size={18}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="group flex h-[36px] w-[36px] sm:h-[44px] sm:w-[44px] items-center justify-center rounded-full border border-white/25 bg-white/[0.04] text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/15"
          >
            <ChevronRight
              size={18}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      )}
    </section>
  );
};

export default Banner;