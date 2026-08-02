import Image from "next/image";
import Link from "next/link";
import type { PageBannerData } from "@/type/typeSection";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  banner: PageBannerData;
  title?: string;
  breadcrumbs?: BreadcrumbItem[];
  overlayOpacity?: number;
  className?: string;
}

export default function PageBanner({
  banner,
  title,
  breadcrumbs,
  overlayOpacity = 0.7,
  className = "",
}: PageBannerProps) {
  const heading = title || banner.title || banner.breadcrumbCurrent || "";
  const altText = banner.alt || heading || banner.breadcrumbCurrent || "Banner image";
  const breadcrumbItems = breadcrumbs ?? [
    { label: banner.breadcrumbHome || "Home", href: "/" },
    { label: banner.breadcrumbCurrent || heading, href: undefined },
  ];

  return (
    <section
      className={`relative flex min-h-[280px] items-center justify-center overflow-hidden sm:min-h-[330px] lg:min-h-[350px] ${className}`}
    >
      <Image
        src={banner.bgImageUrl}
        alt={altText}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div
        className="absolute inset-0 bg-[#120a1a]/70"
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {heading}
        </h1>

        <div className="flex items-center justify-center gap-2 text-sm text-white/80">
          {breadcrumbItems.map((item, index) => (
            <span key={index} className="inline-flex items-center gap-2">
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-[#ff541b]">
                  {item.label}
                </Link>
              ) : (
                <span className="text-orange-500">{item.label}</span>
              )}
              {index < breadcrumbItems.length - 1 && <span>/</span>}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-[#ff541b]" />
      </div>
    </section>
  );
}
