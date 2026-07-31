import PageBanner from "../../shared/PageBanner";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "../../homelayout/ContactSection";
import type { ContactData, ContactSectionProps } from "@/type/typeSection";
import data from "@/data/data.json";

// Import Lucide icons for feature cards and map controls
import { 
  Headphones, 
  ShieldCheck, 
  Users, 
  ThumbsUp, 
  Plus, 
  Minus, 
  ExternalLink 
} from "lucide-react";

const contact = data.contact as unknown as ContactData;

// Map icon names from JSON to Lucide Component icons
const iconMap: Record<string, React.ReactNode> = {
  headset: <Headphones className="w-6 h-6 text-[#f95738]" />,
  "shield-check": <ShieldCheck className="w-6 h-6 text-[#f95738]" />,
  users: <Users className="w-6 h-6 text-[#f95738]" />,
  "thumbs-up": <ThumbsUp className="w-6 h-6 text-[#f95738]" />,
};

export default function ContactUs({ data: propData }: ContactSectionProps) {
  // Fall back to imported data if props are missing
  const activeData = propData || contact;
  const { banner, cards, map } = activeData;

  return (
    <div className="w-full overflow-hidden bg-gray-50/50">
      {/* ================= BANNER SECTION ================= */}
      <PageBanner banner={banner} />


      {/* ================= MAIN CONTACT FORM & DETAILS ================= */}
      <ContactSection data={activeData} />

      {/* ================= FEATURE CARDS BAR ================= */}
      {cards && cards.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-gray-200">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 lg:px-6 first:lg:pl-0 last:lg:pr-0"
                >
                  {/* Icon Circle Container */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f95738]/10">
                    {iconMap[card.icon] || (
                      <Headphones className="w-6 h-6 text-[#f95738]" />
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= MAP SECTION ================= */}
      {map && (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="relative h-[400px] w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm sm:h-[480px] lg:h-[520px]">
            {/* Google Map iFrame */}
            <iframe
              title="Office Location Map"
              src={map.embedUrl}
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Top-Left Location Info Card */}
            {/* <div className="absolute left-4 top-4 z-10 w-[calc(100%-32px)] max-w-xs rounded-lg bg-white p-4 shadow-md sm:left-6 sm:top-6 sm:max-w-sm">
              <h4 className="text-base font-bold text-gray-900">
                {map.locationTitle}
              </h4>
              <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
                {map.locationpretitle}
              </p>
              {/* <a
                href={map.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline"
              >
                View larger map
                <ExternalLink className="h-3 w-3" />
              </a> 
            </div> */}

            {/* Bottom-Right Zoom Controls (Visual Component) */}
            <div className="absolute bottom-6 right-4 z-10 flex flex-col overflow-hidden rounded border border-gray-300 bg-white shadow-md">
              <button
                type="button"
                aria-label="Zoom in"
                className="flex h-8 w-8 items-center justify-center border-b border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Zoom out"
                className="flex h-8 w-8 items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
            </div>

            {/* Map Attribution Bar */}
            {/* <div className="absolute bottom-0 right-0 z-10 hidden items-center gap-2 bg-white/90 px-2 py-0.5 text-[10px] text-gray-600 sm:flex">
              <span>Keyboard shortcuts</span>
              <span>•</span>
              <span>Map data ©2026 Google</span>
              <span>•</span>
              <a href="https://www.google.com/permissions/geoguidelines/" target="_blank" rel="noreferrer" className="hover:underline">
                Terms
              </a>
              <span>•</span>
              <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="hover:underline">
                Report a map error
              </a>
            </div> */}
          </div>
        </section>
      )}
    </div>
  );
}