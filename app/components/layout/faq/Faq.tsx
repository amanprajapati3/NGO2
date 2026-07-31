import Image from "next/image";
import Link from "next/link";
import FAQSection from "../../homelayout/FaqsSection";
import type { FAQData } from "@/type/typeSection";

interface FaqPageLayoutProps {
  data: FAQData;
}

export default function FaqPageLayout({ data }: FaqPageLayoutProps) {
  const banner = data?.banner;

  return (
    <div className="w-full overflow-hidden bg-gray-50/50">
      <section className="relative flex min-h-[280px] items-center justify-center overflow-hidden sm:min-h-[330px] lg:min-h-[350px]">
        <Image
          src={banner?.backgroundImage || "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop"}
          alt={banner?.breadcrumbCurrent || "FAQ"}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#120a1a]/70" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {banner?.breadcrumbCurrent || "FAQ"}
          </h1>

          <div className="flex items-center justify-center gap-2 text-sm text-white/80">
            <Link href="/" className="transition-colors hover:text-[#ff541b]">
              {banner?.breadcrumbHome || "Home"}
            </Link>
            <span>/</span>
            <span className="text-[#ff541b]">{banner?.breadcrumbCurrent || "FAQ"}</span>
          </div>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#ff541b]" />
        </div>
      </section>

      <FAQSection data={data} />
    </div>
  );
}
