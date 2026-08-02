"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import type { CaseDetailPageProps } from "@/type/typeSection";
import PageBanner from "../../shared/PageBanner";

export default function CaseDetails({ data }: CaseDetailPageProps) {
  const { banner, pageTitle, mainContent, sidebar } = data;
  const { primaryArticle, secondaryArticle } = mainContent;

  return (
    <div className="w-full overflow-hidden bg-[#fafafa]">
      {/* Page Banner */}
      <PageBanner banner={banner} />

      {/* Main Section */}
      <section className="mx-auto max-w-7xl px-2 py-8 md:py-12 sm:px-6 lg:px-8 ">
        {/* Page Section Title */}
        <h1 className="mb-8 text-center text-3xl font-extrabold text-[#1a0c2e] sm:text-4xl md:text-5xl">
          {pageTitle}
        </h1>

        {/* Layout Grid: Main Content (Left) + Sidebar (Right) */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column - Articles */}
          <main className="lg:col-span-8">
            {/* Primary Article */}
            <article className="rounded-xl border border-gray-100 bg-white  shadow-sm transition-shadow hover:shadow-md ">
              {/* Main Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                <Image
                  src={primaryArticle.mainImage.src}
                  alt={primaryArticle.mainImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>

              {/* Title */}
              <h2 className="mt-6 p-2 sm:p-3 text-xl font-bold tracking-tight text-[#1a0c2e] sm:text-2xl md:text-3xl">
                {primaryArticle.title}
              </h2>

              {/* Article Paragraphs */}
              <div className="mt-0 p-2 sm:p-3 space-y-4 text-sm leading-relaxed text-gray-600">
                {primaryArticle.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>

            {/* Secondary Article Card */}
            <article className="mt-8 rounded-xl border border-gray-100 bg-[#fefaf9] p-2 shadow-sm sm:p-3">
              {/* Posted Date Label */}
              <p className="text-sm font-semibold text-[#ff5a36]">
                Posted On:{" "}
                <span className="font-normal text-gray-600">
                  {secondaryArticle.postedOn}
                </span>
              </p>

              {/* Title */}
              <h2 className="mt-2 text-xl font-bold tracking-tight text-[#1a0c2e] sm:text-2xl md:text-3xl">
                {secondaryArticle.title}
              </h2>

              {/* Paragraphs */}
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-600 ">
                {secondaryArticle.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          </main>

          {/* Right Column - Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-6 space-y-8">
              {/* Search Box Widget */}
              <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-sm sm:p-6">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex items-center overflow-hidden rounded-md border border-gray-200 bg-gray-50 focus-within:border-[#ff5a36]"
                >
                  <input
                    type="text"
                    placeholder={sidebar.searchPlaceholder}
                    className="w-full bg-transparent px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Search"
                    className="flex h-11 w-12 shrink-0 items-center justify-center bg-[#ff5a36] text-white transition-colors hover:bg-[#e04825]"
                  >
                    <FiSearch className="text-lg" />
                  </button>
                </form>
              </div>

              {/* Popular Posts Widget */}
              <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-sm sm:p-6">
                <h3 className="relative pb-3 text-lg font-extrabold text-[#1a0c2e] sm:text-xl">
                  {sidebar.popularPostsTitle}
                  <span className="absolute bottom-0 left-0 h-[2px] w-10 bg-[#ff5a36]" />
                </h3>

                <div className="mt-6 space-y-5">
                  {sidebar.popularPosts.map((post) => (
                    <div
                      key={post.id}
                      className="group flex items-center gap-4 transition-transform hover:-translate-y-0.5"
                    >
                      {/* Post Thumbnail */}
                      <Link
                        href={post.slug}
                        className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-gray-100"
                      >
                        <Image
                          src={post.image.src}
                          alt={post.image.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="80px"
                        />
                      </Link>

                      {/* Post Info */}
                      <div className="flex flex-1 flex-col">
                        {/* Meta Category & Date */}
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 sm:text-sm">
                          <span>{post.date}</span>
                          {post.category && (
                            <>
                              <span className="h-1 w-1 rounded-full bg-[#ff5a36]" />
                              <span className="text-[#ff5a36]">
                                {post.category}
                              </span>
                            </>
                          )}
                        </div>

                        {/* Title */}
                        <Link
                          href={post.slug}
                          className="mt-1 line-clamp-2 text-sm font-bold text-[#1a0c2e] transition-colors group-hover:text-[#ff5a36] sm:text-base"
                        >
                          {post.title}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}