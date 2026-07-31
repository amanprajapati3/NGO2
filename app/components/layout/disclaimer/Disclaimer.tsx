import type { disclaimerPolicyprops } from "@/type/typeSection";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "../../shared/PageBanner";

export default function Disclaimer({ data }: disclaimerPolicyprops) {
  const { banner, conditions } = data;
  return (
    <>
      <main className="min-h-screen bg-[#fafafa]">
        {/* ================= Banner ================= */}
      <PageBanner banner={banner} />


        {/* ================= Disclaimer Conditions ================= */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col">
              {conditions.map((section, index) => (
                <div key={section.id} className="group">
                  {/* Heading */}
                  <div className="relative pb-2">
                    <h2 className="font-serif text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                      {section.title}
                    </h2>

                    {/* Orange Accent */}
                    <div className="mt-2 h-[3px] w-10 bg-[#FF4500]" />
                  </div>

                  {/* Content */}
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {section.content}
                  </p>

                  {/* Separator */}
                  {index < conditions.length - 1 && (
                    <hr className="my-8 border-t border-gray-200/60 sm:my-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
