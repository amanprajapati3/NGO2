import Image from "next/image";
import Link from "next/link";
import EventSection from "../../homelayout/EventSection";
import type { EventsSection } from "@/type/typeSection";

interface EventsPageLayoutProps {
  data: EventsSection;
}

export default function EventsPageLayout({ data }: EventsPageLayoutProps) {
  const banner = data?.banner;

  return (
    <div className="w-full overflow-hidden bg-gray-50/50">
      <section className="relative flex min-h-[280px] items-center justify-center overflow-hidden sm:min-h-[330px] lg:min-h-[350px]">
        <Image
          src={banner?.backgroundImage || "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"}
          alt={banner?.breadcrumbCurrent || "Events"}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#120a1a]/70" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {banner?.breadcrumbCurrent || "Events"}
          </h1>

          <div className="flex items-center justify-center gap-2 text-sm text-white/80">
            <Link href="/" className="transition-colors hover:text-[#ff541b]">
              {banner?.breadcrumbHome || "Home"}
            </Link>
            <span>/</span>
            <span className="text-[#ff541b]">{banner?.breadcrumbCurrent || "Events"}</span>
          </div>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#ff541b]" />
        </div>
      </section>

      <EventSection data={data} />
    </div>
  );
}
