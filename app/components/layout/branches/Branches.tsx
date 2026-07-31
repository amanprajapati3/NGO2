"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Users,
  Handshake,
  Target,
  MapPin,
  Phone,
  Mail,
  Globe,
  Headphones,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

import type { BranchesPageProps } from "@/type/typeSection";

interface Props {
  data: BranchesPageProps;
}

const iconMap: Record<string, React.ElementType> = {
  building: Building2,
  users: Users,
  handshake: Handshake,
  target: Target,
  "map-pin": MapPin,
  phone: Phone,
  mail: Mail,
  globe: Globe,
  headset: Headphones,
  "heart-hands": HeartHandshake,
};

export default function Branches({ data }: Props) {
  const { banner, header, stats, locationsSection, ctaBanner, contactBar } =
    data;

  const getIcon = (name?: string, className = "h-5 w-5") => {
    if (!name) {
      return <Building2 className={className} />;
    }

    const Icon = iconMap[name.toLowerCase()] || Building2;
    return <Icon className={className} aria-hidden="true" />;
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* ===================== BANNER ===================== */}
      <section className="relative flex h-[280px] items-center justify-center overflow-hidden md:h-[320px]">
        <Image
          src={banner.backgroundImage}
          alt={banner.title}
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">
            {banner.title}
          </h1>

          <nav className="flex items-center justify-center gap-2 text-sm text-white/90">
            <Link href="/" className="transition hover:text-white">
              {banner.breadcrumbHome}
            </Link>

            <span className="text-orange-400">/</span>

            <span className="font-medium text-orange-400">
              {banner.breadcrumbCurrent}
            </span>
          </nav>
        </div>
      </section>

      {/* ===================== HEADER ===================== */}
      <section className="mx-auto max-w-4xl sm:px-4 px-2 pb-10 pt-10 text-center">
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-orange-600">
          {header.label}
        </p>

        <div className="mb-1 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-orange-400" />

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-400 text-orange-600">
            {getIcon(header.icon, "h-5 w-5")}
          </div>

          <div className="h-px w-10 bg-orange-400" />
        </div>

        <h2 className="mb-2 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
          {header.heading}
        </h2>

        <div className="mx-auto mb-2 h-1 w-16 rounded-full bg-orange-500" />

        <p className="mx-auto max-w-2xl leading-relaxed text-gray-600">
          {header.description}
        </p>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="mx-auto max-w-5xl sm:px-4 px-2 sm:pb-16 pb-10">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-100 bg-white sm:p-6 p-2 shadow-sm md:grid-cols-4 md:gap-0 md:divide-x md:divide-gray-100">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center sm:px-4 sm:py-3 p-2 text-center"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                {getIcon(stat.icon, "h-6 w-6")}
              </div>

              <p className="text-2xl font-bold text-orange-600 md:text-3xl">
                {stat.value}
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-900">
                {stat.label}
              </p>

              <p className="mt-0.5 text-xs text-gray-500">{stat.subLabel}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== LOCATIONS ===================== */}
      <section className="mx-auto max-w-6xl sm:px-4 px-2 sm:pb-16 pb-10">
        <div className="mb-10 text-center">
          <div className="mb- flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-orange-500" />

            <p className="text-sm font-semibold tracking-widest text-orange-600">
              {locationsSection.label}
            </p>

            <div className="h-px w-10 bg-orange-500" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {locationsSection.title}
          </h2>

          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* ===================== BRANCH CARDS ===================== */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:col-span-3">
            {locationsSection.branches.map((branch) => (
              <div
                key={branch.city}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                  {getIcon("map-pin", "h-5 w-5")}
                </div>

                <h3 className="mb-1.5 text-base font-bold text-gray-900">
                  {branch.city}
                </h3>

                <p className="mb-3 text-sm leading-relaxed text-gray-600">
                  {branch.address}
                </p>

                <a
                  href={`tel:${branch.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm font-medium text-orange-600 hover:underline"
                >
                  {getIcon("phone", "h-4 w-4")}
                  {branch.phone}
                </a>
              </div>
            ))}
          </div>

          {/* ===================== MAP SIDE ===================== */}
          {/* Map Side */}
          <div className="rounded-2xl bg-orange-50 p-6 lg:col-span-2">
            <div className="">
              {/* INDIA MAP */}
              <div className="relative flex min-h-[280px] items-center justify-center">
                <svg
                  viewBox="0 0 500 560"
                  className="h-auto w-full max-w-[320px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Dot pattern */}
                    <pattern
                      id="indiaDots"
                      width="12"
                      height="12"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="3"
                        cy="3"
                        r="1.8"
                        fill="#f97316"
                        opacity="0.45"
                      />
                    </pattern>

                    {/* India shape */}
                    <clipPath id="indiaClip">
                      <path
                        d="
                M210 20
                L195 34
                L180 38
                L171 51
                L157 57
                L153 72
                L139 81
                L142 96
                L128 108
                L130 121
                L116 130
                L105 145
                L92 153
                L82 169
                L68 178
                L62 193
                L70 207
                L82 212
                L75 224
                L63 231
                L67 243
                L79 249
                L84 263
                L94 276
                L99 293
                L108 309
                L113 326
                L121 344
                L126 362
                L132 383
                L141 402
                L146 423
                L154 447
                L166 470
                L174 493
                L185 514
                L199 528
                L211 532
                L222 522
                L227 505
                L234 489
                L238 469
                L244 449
                L250 429
                L257 410
                L266 393
                L277 377
                L290 363
                L303 350
                L315 337
                L327 325
                L339 310
                L350 296
                L362 284
                L374 272
                L385 257
                L398 244
                L410 230
                L422 215
                L435 202
                L447 189
                L452 176
                L443 166
                L433 162
                L426 151
                L430 139
                L421 132
                L410 135
                L399 129
                L389 118
                L379 109
                L367 102
                L355 94
                L342 88
                L330 83
                L316 78
                L303 72
                L291 66
                L280 59
                L267 53
                L256 46
                L246 38
                L235 30
                Z
              "
                      />
                    </clipPath>
                  </defs>

                  {/* Dotted India */}
                  <g clipPath="url(#indiaClip)">
                    <rect
                      x="40"
                      y="10"
                      width="430"
                      height="530"
                      fill="url(#indiaDots)"
                    />

                    {/* subtle orange background */}
                    <rect
                      x="40"
                      y="10"
                      width="430"
                      height="530"
                      fill="#f97316"
                      opacity="0.035"
                    />
                  </g>

                  {/* India outline */}
                  <path
                    d="
            M210 20
            L195 34
            L180 38
            L171 51
            L157 57
            L153 72
            L139 81
            L142 96
            L128 108
            L130 121
            L116 130
            L105 145
            L92 153
            L82 169
            L68 178
            L62 193
            L70 207
            L82 212
            L75 224
            L63 231
            L67 243
            L79 249
            L84 263
            L94 276
            L99 293
            L108 309
            L113 326
            L121 344
            L126 362
            L132 383
            L141 402
            L146 423
            L154 447
            L166 470
            L174 493
            L185 514
            L199 528
            L211 532
            L222 522
            L227 505
            L234 489
            L238 469
            L244 449
            L250 429
            L257 410
            L266 393
            L277 377
            L290 363
            L303 350
            L315 337
            L327 325
            L339 310
            L350 296
            L362 284
            L374 272
            L385 257
            L398 244
            L410 230
            L422 215
            L435 202
            L447 189
            L452 176
            L443 166
            L433 162
            L426 151
            L430 139
            L421 132
            L410 135
            L399 129
            L389 118
            L379 109
            L367 102
            L355 94
            L342 88
            L330 83
            L316 78
            L303 72
            L291 66
            L280 59
            L267 53
            L256 46
            L246 38
            L235 30
            Z
          "
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />

                  {/* Location pins */}

                  {/* Delhi */}
                  <g transform="translate(235 195)">
                    <circle
                      r="13"
                      fill="white"
                      stroke="#f97316"
                      strokeWidth="2"
                    />
                    <circle r="5" fill="#f97316" />
                  </g>

                  {/* Mumbai */}
                  <g transform="translate(155 340)">
                    <circle
                      r="13"
                      fill="white"
                      stroke="#f97316"
                      strokeWidth="2"
                    />
                    <circle r="5" fill="#f97316" />
                  </g>

                  {/* Bengaluru */}
                  <g transform="translate(218 407)">
                    <circle
                      r="13"
                      fill="white"
                      stroke="#f97316"
                      strokeWidth="2"
                    />
                    <circle r="5" fill="#f97316" />
                  </g>

                  {/* Kolkata */}
                  <g transform="translate(360 265)">
                    <circle
                      r="13"
                      fill="white"
                      stroke="#f97316"
                      strokeWidth="2"
                    />
                    <circle r="5" fill="#f97316" />
                  </g>

                  {/* Hyderabad */}
                  <g transform="translate(255 350)">
                    <circle
                      r="13"
                      fill="white"
                      stroke="#f97316"
                      strokeWidth="2"
                    />
                    <circle r="5" fill="#f97316" />
                  </g>

                  {/* Chennai */}
                  <g transform="translate(265 440)">
                    <circle
                      r="13"
                      fill="white"
                      stroke="#f97316"
                      strokeWidth="2"
                    />
                    <circle r="5" fill="#f97316" />
                  </g>
                </svg>
              </div>

              <div className="text-center md:text-left">
                <div className="mb-3 flex items-center justify-center gap-3 md:justify-start">
                  <span className="h-px w-10 bg-orange-400" />

                  <span className="text-xs font-semibold tracking-[0.2em] text-orange-600">
                    {locationsSection.label}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-bold leading-tight text-gray-900">
                  {locationsSection.mapSide.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-gray-600">
                  {locationsSection.mapSide.description}
                </p>

                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <MapPin className="h-5 w-5 text-orange-600" />

                  <span className="text-sm font-semibold text-orange-600">
                    6 Active Branch Locations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="relative overflow-hidden rounded-2xl bg-orange-50">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2">
            {/* Left Content */}
            <div className="relative z-10 p-8 md:p-10 lg:p-12">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white text-orange-600">
                  <img
                    src="/heartImage.png"
                    alt=""
                    className="w-10 h-10 sm:w-16 sm:h-16"
                  />
                </div>

                <p className="text-xs font-semibold tracking-widest text-orange-600">
                  {ctaBanner.label}
                </p>
              </div>

              <h2 className="mb-3 text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
                {ctaBanner.title}
              </h2>

              <p className="mb-6 max-w-md text-sm leading-relaxed text-gray-600">
                {ctaBanner.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={ctaBanner.primaryButton.href}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700"
                >
                  {ctaBanner.primaryButton.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={ctaBanner.secondaryButton.href}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-orange-600 px-6 py-2.5 text-sm font-semibold text-orange-600 transition hover:bg-orange-50"
                >
                  {ctaBanner.secondaryButton.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[280px] h-64 lg:h-full">
              <Image
                src={ctaBanner.image.src}
                alt={ctaBanner.image.alt}
                fill
                className="object-cover"
              />

              <svg
                className="absolute left-0 top-0 hidden h-full w-24 lg:block"
                viewBox="0 0 100 400"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M100 0 C40 80 40 320 100 400 L0 400 L0 0 Z"
                  fill="#FFF7ED"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT BAR ===================== */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-6 rounded-2xl border border-gray-100 bg-orange-50/50 p-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-orange-100">
          {contactBar.items.map((item) => (
            <div key={item.label} className="flex items-center gap-4 px-4 py-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-orange-600 shadow-sm">
                {getIcon(item.icon, "h-5 w-5")}
              </div>

              <div>
                <p className="text-sm text-gray-500">{item.label}</p>

                <p className="font-semibold text-orange-600">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
