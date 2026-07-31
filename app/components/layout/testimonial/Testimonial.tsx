import Image from "next/image";
import Link from "next/link";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import type { TestimonialData } from "@/type/typeSection";

interface TestimonialPageLayoutProps {
  data: TestimonialData;
}

export default function TestimonialPageLayout({ data }: TestimonialPageLayoutProps) {
  const { banner, badge, title, subtitle, description, testimonials } = data || {};

  return (
    <div className="w-full overflow-hidden bg-[#fafafa]">
      {/* ================= HERO BANNER ================= */}
      <section className="relative flex min-h-[280px] items-center justify-center overflow-hidden sm:min-h-[330px] lg:min-h-[350px]">
        <Image
          src={
            banner?.backgroundImage ||
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
          }
          alt={banner?.breadcrumbCurrent || "Testimonials"}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#120a1a]/70" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {banner?.breadcrumbCurrent || "Testimonials"}
          </h1>

          <div className="flex items-center justify-center gap-2 text-sm text-white/80">
            <Link href="/" className="transition-colors hover:text-[#ff541b]">
              {banner?.breadcrumbHome || "Home"}
            </Link>
            <span>/</span>
            <span className="text-[#ff541b]">
              {banner?.breadcrumbCurrent || "Testimonials"}
            </span>
          </div>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#ff541b]" />
        </div>
      </section>

      {/* ================= TESTIMONIAL CONTENT SECTION ================= */}
      <section className="relative py-12">
        {/* Background Soft Glow Orbs */}
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-orange-100/60 blur-[100px] pointer-events-none" />
        <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-orange-100/40 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Info */}
          <div className="flex flex-col items-center text-center">
            {/* Badge Label */}
            {badge?.label && (
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF4500]">
                <span className="h-[1px] w-8 bg-orange-200" />
                <span>{badge.label}</span>
                <span className="h-[1px] w-8 bg-orange-200" />
              </div>
            )}

            {/* Main Title */}
            <h2 className="mt-1 font-serif text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              {title?.line1 || "Don't Believe Us?"}{" "}
              <span className="text-[#FF4500]">
                {title?.highlight || "See Review"}
              </span>
            </h2>

            {/* Subheading Heart Line Divider */}
            <div className="mt-2 flex items-center justify-center gap-3 text-xs font-semibold tracking-wide text-slate-500">
              <span className="h-[1px] w-10 bg-orange-300" />
              <FiHeart className="text-[10px] text-[#FF4500]" />
              <span className="h-[1px] w-10 bg-orange-300" />
            </div>

            {/* Subtitle / Description */}
            {subtitle && (
              <p className="mt-2 text-sm font-semibold text-slate-700">
                {subtitle}
              </p>
            )}

            {description && (
              <p className="mt-1 max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm">
                {description}
              </p>
            )}
          </div>

          {/* ================= TESTIMONIAL CARDS GRID ================= */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {testimonials?.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  {/* Top Header: Quote Icon & Star Ratings */}
                  <div className="flex items-center justify-between">
                    {/* Big Soft Quote Icon with Circular Background */}
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-orange-100/50">
                      <FaQuoteLeft className="text-2xl text-[#FF4500]" />
                    </div>

                    {/* 5-Star Rating */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: item.rating || 5 }).map((_, i) => (
                        <FaStar key={i} className="text-sm text-[#FF4500]" />
                      ))}
                    </div>
                  </div>

                  {/* Message Content */}
                  <p className="mt-6 text-sm leading-relaxed text-slate-600 font-normal">
                    {item.message}
                  </p>
                </div>

                {/* Bottom Section: Author Avatar & Details */}
                <div className="mt-8 flex items-center gap-3.5 pt-2">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    {/* Divider line above text matching reference design */}
                    <div className="mb-1 h-[2px] w-6 bg-orange-200" />
                    <h3 className="text-base font-bold text-[#0F172A] line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 line-clamp-1">
                      {item.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}