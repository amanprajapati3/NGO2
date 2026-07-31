import type { cookiePolicyprops } from "@/type/typeSection";
import Image from "next/image";
import Link from "next/link";

export default function CookiePolicy({ data }: cookiePolicyprops) {
  const { banner, conditions } = data;
  return (
    <>
      <main className="min-h-screen bg-[#fafafa]">
        {/* ================= Banner ================= */}
        <section className="relative flex min-h-[280px] items-center justify-center overflow-hidden sm:min-h-[330px] lg:min-h-[350px]">
          <Image
            src={banner.backgroundImage}
            alt={banner.breadcrumbCurrent}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#120a1a]/70" />

          {/* Banner Content */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {banner.breadcrumbCurrent}
            </h1>

            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-white/80">
              <Link href="/" className="transition-colors hover:text-[#ff541b]">
                {banner.breadcrumbHome}
              </Link>

              <span>/</span>

              <span className="text-[#ff541b]">{banner.breadcrumbCurrent}</span>
            </div>

            {/* Accent */}
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#ff541b]" />
          </div>
        </section>

        {/* ================= Cookie Policy Conditions ================= */}
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
