"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  User, 
  Clock, 
  Search, 
  Check, 
  Quote, 
  Heart 
} from "lucide-react";
import PageBanner from "../../shared/PageBanner";
import type { BlogDetailsPageProps } from "@/type/typeSection";

export default function BlogDetails({ data }: BlogDetailsPageProps) {
  const { banner, mainContent, sidebar } = data;

  return (
    <main className="bg-white min-h-screen text-slate-800">
      {/* Banner Section */}
      <div className="w-full overflow-hidden">
        <PageBanner banner={banner} />
      </div>

      {/* Main Content Area */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* LEFT COLUMN: Article Content (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Main Featured Image Card */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-sm mb-6 aspect-[16/9] sm:aspect-[2/1]">
              <Image
                src={mainContent.mainImage.src}
                alt={mainContent.mainImage.alt}
                fill
                className="object-cover"
                priority
              />
              {/* Category Badge */}
              <div className="absolute bottom-4 left-4 z-10">
                <span className="px-4 py-1.5 bg-[#ff541b] text-white text-sm font-semibold rounded-md shadow-md tracking-wide uppercase">
                  {mainContent.category}
                </span>
              </div>
            </div>

            {/* Article Meta Bar */}
            <div className="flex flex-wrap items-center gap-6 text-sm sm:text-sm text-slate-500 mb-4 pb-1">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#ff541b]" />
                <span>{mainContent.meta.publishedDate}</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#ff541b]" />
                <span>By {mainContent.meta.author}</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#ff541b]" />
                <span>{mainContent.meta.readTime}</span>
              </div>
            </div>

            {/* Article Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132A] leading-tight mb-6">
              {mainContent.title}
            </h1>

            {/* Intro Paragraphs */}
            {mainContent.introParagraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                {paragraph}
              </p>
            ))}

            {/* Blockquote Card */}
            {mainContent.quote && (
              <div className="relative bg-[#faf7f5] border-l-4 border-[#ff541b] rounded-r-2xl p-6 sm:p-8 my-6">
                <p className="text-slate-800 italic font-semibold text-base sm:text-lg leading-relaxed text-slate-700">
                  &ldquo;{mainContent.quote.quoteText}&rdquo;
                </p>
              </div>
            )}

            {/* Middle Paragraphs */}
            {mainContent.middleParagraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-600 leading-relaxed text-sm sm:text-base mb-8">
                {paragraph}
              </p>
            ))}

            {/* Gallery Grid (3 Columns) */}
            {mainContent.galleryImages && mainContent.galleryImages.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {mainContent.galleryImages.map((img, idx) => (
                  <div key={idx} className="relative h-48 sm:h-40 md:h-48 rounded-xl overflow-hidden shadow-sm group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Four Major Elements Card Container */}
            {mainContent.keyElements && (
              <div className="bg-[#faf7f5] rounded-2xl p-6 sm:p-8 my-6 border border-orange-100/50">
                <h3 className="text-lg sm:text-xl font-bold text-[#0B132A] mb-6">
                  {mainContent.keyElements.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mainContent.keyElements.items.map((element) => (
                    <div key={element.id} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-[#ff541b] stroke-[3]" />
                      </div>
                      <span className="text-sm sm:text-sm font-medium text-slate-700">
                        {element.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Dynamic Subsections */}
            {mainContent.subSections && mainContent.subSections.map((section, index) => (
              <div key={index} className="mt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B132A] mb-3">
                  {section.title}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
                    {p}
                  </p>
                ))}
              </div>
            ))}

          </div>

          {/* RIGHT COLUMN: Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Search Input Box */}
            <div className="bg-[#f8f9fa] p-4 rounded-2xl border border-slate-100 shadow-sm">
              <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
                <input
                  type="text"
                  placeholder={sidebar.searchPlaceholder || "Search here..."}
                  className="w-full pl-4 pr-12 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#ff541b] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="absolute right-1.5 p-2.5 bg-[#ff541b] text-white rounded-lg hover:bg-[#e0450e] transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Popular Posts Widget */}
            <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#0B132A] mb-6 pb-2 border-b border-slate-200 relative">
                {sidebar.popularPostsTitle}
                <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-[#ff541b]" />
              </h3>

              <div className="flex flex-col gap-5">
                {sidebar.popularPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={post.slug || "#"}
                    className="group flex items-center gap-4 hover:opacity-90 transition-opacity"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                      <Image
                        src={post.image.src}
                        alt={post.image.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-slate-400 font-medium mb-1">
                        {post.date}
                      </span>
                      <h4 className="text-sm sm:text-sm font-bold text-[#0B132A] line-clamp-2 leading-snug group-hover:text-[#ff541b] transition-colors">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Donation Box Widget */}
            {sidebar.ctaWidget && (
              <div className="relative overflow-hidden bg-gradient-to-br from-[#faf0eb] to-[#fcebe3] p-8 rounded-2xl border border-orange-100 text-center flex flex-col items-center">
                {/* Background Pattern Deco */}
                <div className="absolute inset-0 bg-[radial-gradient(#ff541b_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                {/* Heart Icon Badge */}
                <div className="w-14 h-14 rounded-full bg-white text-[#ff541b] flex items-center justify-center shadow-md mb-5 relative z-10 border border-orange-100">
                  <Heart className="w-7 h-7 fill-[#ff541b]/10 stroke-[2]" />
                </div>

                <h3 className="text-xl font-extrabold text-[#0B132A] mb-3 relative z-10">
                  {sidebar.ctaWidget.title}
                </h3>
                
                <p className="text-sm sm:text-sm text-slate-600 leading-relaxed mb-6 relative z-10 max-w-xs">
                  {sidebar.ctaWidget.description}
                </p>

                <Link
                  href={sidebar.ctaWidget.buttonHref}
                  className="relative z-10 inline-flex items-center justify-center px-8 py-3 bg-[#ff541b] text-white font-bold text-sm sm:text-sm rounded-xl shadow-lg shadow-orange-500/20 hover:bg-[#e0450e] hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wider"
                >
                  {sidebar.ctaWidget.buttonLabel}
                </Link>
              </div>
            )}

          </aside>

        </div>
      </section>
    </main>
  );
}