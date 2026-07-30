import React from 'react';
import { BannerProps } from '@/type/typeSection';
import { Playfair_Display } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const Banner: React.FC<BannerProps> = ({
  title,
  pretitle,
  desc,
  bgImageUrl,
  ctaButtons = [],
  overlayOpacity = 0.5,
}) => {
  return (
    <section 
      className="relative w-full h-[85dvh] overflow-hidden flex items-center bg-zinc-950 text-white"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover  bg-center bg-no-repeat transition-transform duration-700 ease-out scale-105 hover:scale-100"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
        aria-hidden="true"
      />

      {/* Darkened Overlay (Ensures text visibility) */}
      <div 
        className="absolute inset-0 bg-black/100"
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />

      {/* Rose-themed subtle gradient accent */}
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-rose-950/40 via-transparent to-transparent mix-blend-color-dodge pointer-events-none" 
        aria-hidden="true"
      />

      {/* Content Container (Left Aligned & Responsive) */}
      <div className="relative z-10  mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl text-center">
          
          {/* Subtitle / Tag */}
          {pretitle && (
            <span className={`inline-block px-3 mb-0 text-2xl sm:text-5xl font-semibold tracking-widest ${playfair.variable}`}>
              {pretitle}
            </span>
          )}

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-white  leading-tight sm:leading-none">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-white">
            {desc}
          </p>

          {/* Action Buttons */}
          {ctaButtons.length > 0 && (
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {ctaButtons.map((cta, index) => {
                const isPrimary = cta.variant === 'primary' || !cta.variant;
                return (
                  <a
                    key={index}
                    href={cta.href}
                    className={`px-5 py-2.5 sm:px-7 sm:py-4 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ease-in-out shadow-lg ${
                      isPrimary
                        ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/30  hover:-translate-y-0.5'
                        : 'bg-orange-700 hover:bg-orange-600 text-white backdrop-blur-md hover:-translate-y-0.5 '
                    }`}
                  >
                    {cta.label}
                  </a>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Banner;