"use client";

import { MediaProps } from "@/type/typeSection";
import PageBanner from "../../shared/PageBanner";
import Image from "next/image";
import ScrollReveal from "../../shared/ScrollReveal";
export default function Media({ data }: MediaProps) {
  const { banner, content } = data;

  return (
    <>
      <div className="bg-white overflow-hidden">
        <PageBanner banner={banner} />
        <ScrollReveal direction="up">
        <section className="max-w-7xl mx-auto px-2 sm:px-4 py-8 ">
          <div className="  rounded-3xl p-0  shadow-sm">
            {/* Header Row: Section Title & View All Link */}
            <div className="text-center mb-8">
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B3D] tracking-tight">
                  {content?.sectionTitle || "Latest Media Highlights"}
                </h2>
                {/* Amber Accent Line under title */}
                {/* <div className="w-16 h-1 bg-[#C4841D] rounded-full mt-2"></div> */}
              </div>

              {/* {content?.viewAllText && (
              <Link
                href={content?.viewAllUrl || "#"}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#C4841D] hover:text-[#A86F16] transition-colors"
              >
                <span>{content.viewAllText}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            )} */}
            </div>

            {/* Media Outlet Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {content?.mediaCards?.map((item, index) => {
                const CardWrapper = item.articleUrl ? "a" : "div";
                return (
                  <CardWrapper
                    key={index}
                    {...(item.articleUrl
                      ? {
                          href: item.articleUrl,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    className=" rounded-2xl  shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group flex flex-col justify-between"
                  >
                    {/* Card Logo Container */}
                    <div className="p-4 h-40 sm:h-44 flex items-center justify-center bg-white overflow-hidden">
                      <Image
                        src={item.logoUrl}
                        alt={item.title || "Partner logo"}
                        width={200}
                        height={120}
                        sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
                        className="h-full w-full object-contain scale-110 transition-transform duration-300 group-hover:scale-115"
                        loading="lazy"
                      />
                    </div>

                    {/* Card Dark Bottom Bar */}
                    <div className="bg-[#3D3E3E] text-white px-4 py-3 text-center">
                      <h3 className="text-sm font-semibold tracking-wide">
                        {item.title}
                      </h3>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </div>
        </section>
        </ScrollReveal>
      </div>
    </>
  );
}
