"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Search, Target, MapPin } from "lucide-react";
import PageBanner from "../../shared/PageBanner";
import type { EventDetailsPageProps } from "@/type/typeSection";

export default function EventDetails({ data }: EventDetailsPageProps) {
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
          
          {/* LEFT COLUMN: Event Content (8 Cols) */}
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
            </div>

            {/* Event Meta Bar */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4 pb-1">
              <Calendar className="w-4 h-4 text-[#ff541b]" />
              <span className="font-medium text-slate-500">
                Posted On: {mainContent.meta.publishedDate}
              </span>
            </div>

            {/* Event Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132A] leading-tight mb-6">
              {mainContent.title}
            </h1>

            {/* Intro Paragraphs */}
            {mainContent.introParagraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                {paragraph}
              </p>
            ))}

            {/* Middle Paragraphs */}
            {mainContent.middleParagraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-600 leading-relaxed text-sm sm:text-base mb-8">
                {paragraph}
              </p>
            ))}

            {/* Event Mission Box */}
            {mainContent.mission && (
              <div className="bg-[#fff8f5] rounded-2xl p-6 sm:p-8 mb-8 border border-orange-100/60 flex flex-col sm:flex-row items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#ffece5] flex items-center justify-center text-[#ff541b]">
                  <Target className="w-7 h-7 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B132A] mb-3">
                    {mainContent.mission.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {mainContent.mission.description}
                  </p>
                </div>
              </div>
            )}

            {/* Event Location Box */}
            {mainContent.location && (
              <div className="bg-[#fff8f5] rounded-2xl p-6 sm:p-8 mb-8 border border-orange-100/60 flex flex-col sm:flex-row items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#ffece5] flex items-center justify-center text-[#ff541b]">
                  <MapPin className="w-7 h-7 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B132A] mb-3">
                    {mainContent.location.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {mainContent.location.description}
                  </p>
                </div>
              </div>
            )}

            {/* Embedded Google Map */}
            {mainContent.location?.map && (
              <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-sm border border-slate-200 relative">
                <iframe
                  title="Event Location Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    mainContent.location.map.address
                  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}

          </div>

          {/* RIGHT COLUMN: Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Search Input Box */}
            <div className="bg-[#f8f9fa] p-4 rounded-2xl border border-slate-100 shadow-sm">
              <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
                <input
                  type="text"
                  placeholder={sidebar.searchPlaceholder || "Search..."}
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
                      <span className="text-sm sm:text-sm text-slate-400 font-medium mb-1">
                        {post.date}
                      </span>
                      <h4 className="text-sm font-bold text-[#0B132A] line-clamp-2 leading-snug group-hover:text-[#ff541b] transition-colors">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </section>
    </main>
  );
}