"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Users,
  Shield,
  ShieldCheck,
  Headphones,
  HeartHandshake,
  User,
  Phone,
  Pencil,
  Send,
  Clock,
  ArrowRight,
  ChevronRight,
  Heart,
} from "lucide-react";
import { FaRegHeart } from "react-icons/fa";

import PageBanner from "../../shared/PageBanner";
import type { EnquiryNowPageProps } from "@/type/typeSection";
import { HiOutlineHeart } from "react-icons/hi2";

interface Props {
  data: EnquiryNowPageProps;
}

const iconMap: Record<string, React.ElementType> = {
  envelope: Mail,
  mail: Mail,
  users: Users,
  shield: Shield,
  "shield-check": ShieldCheck,
  headset: Headphones,
  "heart-hands": HeartHandshake,
  heart: Heart,
  user: User,
  phone: Phone,
  edit: Pencil,
  pencil: Pencil,
  "paper-plane": Send,
  clock: Clock,
  "arrow-right": ArrowRight,
};

export default function EnquiryPage({ data }: Props) {
  const { banner, header, leftSection, form, contactSection, footerBanner } =
    data;

  const getIcon = (name?: string, className = "h-5 w-5") => {
    if (!name) {
      return <Mail className={className} />;
    }
    const normalizedName = name.trim().toLowerCase();
    const Icon = iconMap[normalizedName] || Mail;
    return <Icon className={className} aria-hidden="true" />;
  };

  const getField = (name: string) =>
    form.fields.find((field) => field.name === name);

  const fullNameField = getField("fullName");
  const emailField = getField("emailAddress");
  const phoneField = getField("phoneNumber");
  const subjectField = getField("subject");
  const messageTypeField = getField("messageType");
  const messageField = getField("message");
  const hearField = getField("howDidYouHear");
  const contactMethodField = getField("preferredContactMethod");

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <PageBanner banner={banner} />

      <section className="mx-auto max-w-4xl px-2 pb-10 sm:pt-12 pt-3 text-center">
        {/* Icon + line */}

        {/* <div className="mb-0 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-orange-500" />
          <div className="relative flex h-20 w-20 items-center font-light justify-center text-orange-600">
           
          

            <span className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full bg-white text-orange-500">
              <FaRegHeart className="h-5 w-5" />
            </span>
          </div>

          <div className="h-px w-12 bg-orange-500" />
        </div> */}

        <div className="flex justify-center gap-1">
          <HiOutlineHeart className="text-base text-[#FF4500]" />
          <p className="mb-0 text-sm font-semibold tracking-widest text-orange-600">
            {header.label}
          </p>
        </div>

        <h2 className="mb-0 text-3xl font-bold text-gray-900 md:text-4xl">
          {header.heading}
        </h2>

        {/* <div className="mb-2 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-orange-500 sm:w-16" />
          <Heart className="h-5 w-5 fill-orange-500 text-orange-500 sm:h-6 sm:w-6" />
          <div className="h-px w-10 bg-orange-500 sm:w-16" />
        </div> */}

        {/* Description */}
        <p className="mx-auto max-w-2xl leading-relaxed text-gray-600">
          {header.description}
        </p>
      </section>

      <section className="mx-auto max-w-6xl sm:px-4 pb-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* LEFT SECTION*/}

          <div className="relative overflow-hidden rounded-2xl bg-orange-50 sm:p-8 p-3">
            {/* Decorative grid */}
            <div className="absolute right-0 top-0 opacity-70">
              <svg
                width="150"
                height="150"
                viewBox="0 0 150 150"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Triangle: hypotenuse slopes from top-left down to bottom-right */}
                <defs>
                  <clipPath id="dotTriangle">
                    <polygon points="0,0 150,0 150,150" />
                  </clipPath>
                </defs>

                {/* Light gray dotted grid */}
                <g clipPath="url(#dotTriangle)" fill="#d1d5db">
                  {Array.from({ length: 12 }).map((_, row) =>
                    Array.from({ length: 12 }).map((_, col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={12 + col * 12}
                        cy={12 + row * 12}
                        r="1.6"
                      />
                    )),
                  )}
                </g>
              </svg>
            </div>
            <div className="relative z-10 mb-5 flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                {getIcon("heart-hands", "h-6 w-6")}
              </div>

              <div>
                <h3 className="text-xl font-bold leading-snug text-gray-900">
                  {leftSection.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="relative z-10 mb-8 text-sm leading-relaxed text-gray-600">
              {leftSection.description}
            </p>

            {/* Features */}
            <div className="relative z-10 mb-8 space-y-5">
              {leftSection.features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-orange-600 shadow-sm">
                    {getIcon(feature.icon, "h-5 w-5")}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {feature.title}
                    </h4>

                    <p className="mt-0.5 text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative overflow-hidden ">
              <Image
                src={leftSection.image.src}
                alt={leftSection.image.alt}
                width={800}
                height={450}
                className="h-56 w-full rounded-b-[150px] border-b-orange-500 border-b-8 object-cover"
              />
              <div className="absolute inset-x-0 bottom-0  h-20 " />
            </div>
          </div>

          {/* RIGHT FORM */}

          <div className="rounded-2xl border border-gray-100 bg-white sm:p-8 p-3 shadow-sm">
            <h3 className="mb-6 text-xl font-bold text-gray-900">
              {form.title}
            </h3>

            <form className="space-y-5">
              {/*FULL NAME + EMAIL */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[fullNameField, emailField].filter(Boolean).map((field) => (
                  <div key={field!.name}>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      {field!.label}

                      {field!.required && (
                        <span className="ml-1 text-orange-600">*</span>
                      )}
                    </label>

                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {getIcon(field!.icon, "h-4 w-4")}
                      </span>

                      <input
                        type={field!.type}
                        name={field!.name}
                        placeholder={field!.placeholder}
                        required={field!.required}
                        className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* =============================================
                  PHONE + SUBJECT
              ============================================= */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[phoneField, subjectField].filter(Boolean).map((field) => (
                  <div key={field!.name}>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      {field!.label}

                      {field!.required && (
                        <span className="ml-1 text-orange-600">*</span>
                      )}
                    </label>

                    {field!.type === "select" ? (
                      <select
                        name={field!.name}
                        required={field!.required}
                        defaultValue=""
                        className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-500 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                      >
                        <option value="" disabled>
                          {field!.placeholder}
                        </option>

                        {field!.options?.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          {getIcon(field!.icon, "h-4 w-4")}
                        </span>

                        <input
                          type={field!.type}
                          name={field!.name}
                          placeholder={field!.placeholder}
                          required={field!.required}
                          className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* =============================================
                  MESSAGE TYPE
              ============================================= */}

              {messageTypeField && (
                <div>
                  <label className="mb-2.5 block text-sm font-medium text-gray-700">
                    {messageTypeField.label}

                    {messageTypeField.required && (
                      <span className="ml-1 text-orange-600">*</span>
                    )}
                  </label>

                  <div className="flex flex-wrap gap-5">
                    {messageTypeField.options?.map((option) => (
                      <label
                        key={option.value}
                        className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
                      >
                        <input
                          type="radio"
                          name={messageTypeField.name}
                          value={option.value}
                          defaultChecked={option.default}
                          required={messageTypeField.required}
                          className="h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-500"
                        />

                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* MESSAGE */}

              {messageField && (
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    {messageField.label}

                    {messageField.required && (
                      <span className="ml-1 text-orange-600">*</span>
                    )}
                  </label>

                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">
                      {getIcon(messageField.icon, "h-4 w-4")}
                    </span>

                    <textarea
                      name={messageField.name}
                      rows={4}
                      placeholder={messageField.placeholder}
                      required={messageField.required}
                      className="w-full resize-none rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                    />
                  </div>
                </div>
              )}

              {/* =============================================
                  HOW DID YOU HEAR + CONTACT METHOD
              ============================================= */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[hearField, contactMethodField]
                  .filter(Boolean)
                  .map((field) => (
                    <div key={field!.name}>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        {field!.label}
                      </label>

                      <select
                        name={field!.name}
                        required={field!.required}
                        defaultValue=""
                        className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-500 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                      >
                        <option value="" disabled>
                          {field!.placeholder}
                        </option>

                        {field!.options?.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
              </div>

              {/* =============================================
                  PRIVACY
              ============================================= */}

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="privacy"
                  required={form.privacy.required}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />

                <label
                  htmlFor="privacy"
                  className="text-sm leading-relaxed text-gray-600"
                >
                  {form.privacy.text}
                </label>
              </div>

              {/* =============================================
                  SUBMIT
              ============================================= */}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 py-3.5 font-semibold text-white shadow-md shadow-orange-200 transition-colors hover:bg-orange-700"
              >
                {getIcon(form.submitButton.icon, "h-5 w-5")}

                {form.submitButton.label}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===================================================
          4. CONTACT SECTION
      =================================================== */}

      <section className="mx-auto max-w-6xl sm:px-4 px-0 pb-12">
        <div className="flex flex-col items-start gap-8 rounded-2xl bg-orange-50 sm:p-6 p-3 md:flex-row md:items-center md:gap-12 md:p-10">
          {/* Contact Heading */}

          <div className="flex shrink-0 items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              {getIcon(contactSection.items[0]?.icon || "phone", "h-7 w-7")}
            </div>

            <div>
              <p className="text-sm font-medium text-orange-600">
                {contactSection.title}
              </p>

              <h3 className="mt-1 text-2xl font-bold text-gray-900">
                {contactSection.pretitle}
              </h3>

              <p className="mt-2 max-w-xs text-sm text-gray-600">
                {contactSection.description}
              </p>
            </div>
          </div>

          {/* Contact Items */}

          <div className="flex flex-1 flex-wrap gap-8 md:gap-12">
            {contactSection.items.map((item) => (
              <div
                key={`${item.label}-${item.value}`}
                className="flex items-start gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-orange-600 shadow-sm">
                  {getIcon(item.icon, "h-5 w-5")}
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {item.label}
                  </p>

                  <p className="mt-0.5 whitespace-pre-line text-sm font-semibold text-gray-900">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          5. FOOTER BANNER
      =================================================== */}

      <section className="mx-auto max-w-6xl sm:px-4 pb-16">
        <div className="flex flex-col items-center justify-between gap-6 sm:rounded-2xl bg-orange-600 sm:px-8 px-3 sm:py-7 py-3 text-white sm:flex-row">
          {/* Text */}

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
              {getIcon(footerBanner.icon, "h-6 w-6")}
            </div>

            <div>
              <p className="text-lg font-semibold">{footerBanner.text}</p>

              <p className="mt-0.5 text-sm text-white/85">
                {footerBanner.subtext}
              </p>
            </div>
          </div>

          {/* Button */}

          <button
            type="button"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
          >
            {footerBanner.button.label}

            {getIcon(footerBanner.button.icon, "h-4 w-4")}
          </button>
        </div>
      </section>
    </main>
  );
}
