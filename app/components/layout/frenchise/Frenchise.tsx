"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  TrendingUp,
  Coins,
  Users,
  HeartHandshake,
  CheckCircle2,
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  ClipboardList,
  FileText,
  Award,
  GraduationCap,
  Clock,
  Heart,
} from "lucide-react";

import PageBanner from "../../shared/PageBanner";
import type { FranchisePageProps } from "@/type/typeSection";
import { HiOutlineHeart } from "react-icons/hi2";

interface Props {
  data: FranchisePageProps;
}

const iconMap: Record<string, React.ElementType> = {
  handshake: Handshake,
  chart: TrendingUp,
  coin: Coins,
  users: Users,
  "heart-hands": HeartHandshake,
  user: User,
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
  message: MessageSquare,
  send: Send,
  clipboard: ClipboardList,
  document: FileText,
  training: GraduationCap,
  award: Award,
  clock: Clock,
  heart: Heart,
};

export default function FrenchisePage({ data }: Props) {
  const {
    banner,
    header,
    features,
    leftSection,
    form,
    processSection,
    contactBanner,
  } = data;

  const getIcon = (name?: string, className = "h-5 w-5") => {
    if (!name) return null;

    const Icon = iconMap[name.toLowerCase()];

    if (!Icon) return null;

    return <Icon className={className} aria-hidden="true" />;
  };

  const getField = (name: string) =>
    form.fields.find((field) => field.name === name);

  const fullNameField = getField("fullName");
  const emailField = getField("emailAddress");
  const phoneField = getField("phoneNumber");
  const cityField = getField("city");
  const stateField = getField("preferredState");
  const investmentField = getField("investmentCapacity");
  const whyField = getField("whyPartner");
  const hearField = getField("howDidYouHear");
  const contactMethodField = getField("preferredContactMethod");

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* ===================== BANNER ===================== */}
      <PageBanner banner={banner} />

      {/* ===================== HEADER ===================== */}
      <section className="mx-auto max-w-4xl px-3 pb-12  md:pt-10 pt-8 text-center">
        {/* <div className="mb-2 flex items-center justify-center gap-4">

          <div className="flex h-12 sm:h-20 sm:w-20 w-12 items-center justify-center rounded-full border-2 border-orange-500 text-orange-600">
            {getIcon(header.icon, "h-6 w-6 sm:w-12 sm:h-12")}
          </div>

          <div className="h-px w-14 bg-orange-500" />
        </div> */}
        <div className="flex justify-center gap-1">
          <HiOutlineHeart className="text-base text-[#FF4500]" />
          <p className=" text-sm font-semibold tracking-[0.2em] text-orange-600">
            {header.label}
          </p>
        </div>

        {/* JSON DATA */}
        <h2 className="mb-2 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
          {header.heading}
        </h2>

        {/* <div className="mb-2 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-gray-300 sm:w-14" />

          <Heart className="h-4 w-4 fill-orange-500 text-orange-500" />

          <div className="h-px w-10 bg-gray-300 sm:w-14" />
        </div> */}

        <p className="mx-auto mt-1 max-w-2xl text-sm leading-relaxed text-slate-500 sm:mt-2 sm:text-base">
          {header.description}
        </p>
      </section>

      {/* ===================== FEATURES ===================== */}
      <section className="mx-auto max-w-6xl sm:px-4 px-2 pb-16">
        <div className="grid gap-0 grid-cols-2 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center border-r-0 md:border-r-2 md:border-orange-200 md:last:border-r-0 bg-white sm:p-6 p-1 text-center hover:shadow-md transition"
            >
              <div className="mb-4 flex h-14 sm:w-20 sm:h-20 w-14 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                {getIcon(feature.icon, "h-7 sm:w-12 sm:h-12 w-7")}
              </div>

              <h3 className="mb-2 text-base font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== MAIN GRID ===================== */}
      <section className="mx-auto max-w-6xl sm:px-4 px-2 pb-16">
        <div className="grid grid-cols-1 sm:gap-8 gap-4 lg:grid-cols-2 lg:gap-10">
          {/* ================= LEFT SECTION ================= */}
          <div className="relative overflow-hidden rounded-2xl bg-orange-50 sm:p-8 p-3">
            <p className="mb-2 text-sm font-semibold tracking-widest text-orange-600">
              {leftSection.label}
            </p>

            <h3 className="mb-3 text-2xl font-bold leading-snug text-gray-900">
              {leftSection.title}
            </h3>

            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              {leftSection.description}
            </p>

            <ul className="mb-8 sm:space-y-3 space-y-1">
              {leftSection.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />

                  <span className="text-sm text-gray-700">{point}</span>
                </li>
              ))}
            </ul>

            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <Image
                src={leftSection.image.src}
                alt={leftSection.image.alt}
                width={800}
                height={450}
                className="h-52 w-full rounded-b-[150px] border-b-orange-500 border-b-8 object-cover"
              />
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="rounded-2xl border border-gray-100 bg-white sm:p-8 p-2 shadow-sm">
            <h3 className="mb-1 text-xl font-bold text-gray-900">
              {form.title}
            </h3>

            <p className="mb-6 text-sm text-gray-500">{form.pretitle}</p>

            <form className="space-y-5">
              {/* Full Name + Email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[fullNameField, emailField].filter(Boolean).map((field) => (
                  <div key={field!.name}>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      {field!.label}

                      {field!.required && (
                        <span className="ml-1 text-orange-500">*</span>
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

              {/* Phone + City */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[phoneField, cityField].filter(Boolean).map((field) => (
                  <div key={field!.name}>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      {field!.label}

                      {field!.required && (
                        <span className="ml-1 text-orange-500">*</span>
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

              {/* State + Investment */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[stateField, investmentField].filter(Boolean).map((field) => (
                  <div key={field!.name}>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      {field!.label}

                      {field!.required && (
                        <span className="ml-1 text-orange-500">*</span>
                      )}
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

              {/* Why Partner */}
              {whyField && (
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    {whyField.label}

                    {whyField.required && (
                      <span className="ml-1 text-orange-500">*</span>
                    )}
                  </label>

                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">
                      {getIcon(whyField.icon, "h-4 w-4")}
                    </span>

                    <textarea
                      name={whyField.name}
                      rows={3}
                      placeholder={whyField.placeholder}
                      required={whyField.required}
                      className="w-full resize-none rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                    />
                  </div>
                </div>
              )}

              {/* How did you hear + Preferred Contact */}
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
                        defaultValue=""
                        required={field!.required}
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

              {/* Privacy */}
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
                  I agree to the{" "}
                  <Link
                    href={form.privacy.links[0].href}
                    className="font-medium text-orange-600 hover:text-orange-700 hover:underline"
                  >
                    {form.privacy.links[0].label}
                  </Link>{" "}
                  and{" "}
                  <Link
                    href={form.privacy.links[1].href}
                    className="font-medium text-orange-600 hover:text-orange-700 hover:underline"
                  >
                    {form.privacy.links[1].label}
                  </Link>
                  .
                </label>
              </div>

              {/* Submit */}
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

      {/* ===================== PROCESS ===================== */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-10 text-center">
          <div className="mb-0 flex items-center justify-center gap-1">
            <HiOutlineHeart className="text-base text-[#FF4500]" />

            <p className="text-sm font-semibold tracking-widest text-orange-600">
              {processSection.label}
            </p>
            {/* <div className="h-px w-10 bg-orange-500" /> */}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {processSection.title}
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-orange-200 lg:block" />
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {processSection.steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange-200 bg-white text-orange-600 shadow-sm">
                  {getIcon(step.icon, "h-7 w-7")}
                </div>
                <p className="mb-1 text-sm font-bold text-gray-900">
                  {step.number}. {step.title}
                </p>
                <p className="text-sm leading-relaxed text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONTACT BANNER ===================== */}
      <section className="mx-auto max-w-6xl sm:px-4 px-0 md:pb-16">
        <div className="relative overflow-hidden md:rounded-2xl bg-gray-900 sm:px-8 p-4 sm:py-10 text-white md:px-12">
          {/* JSON image */}
          <div className="absolute inset-y-0 right-0 hidden w-1/3  md:block">
            <Image
              src={contactBanner.image.src}
              alt={contactBanner.image.alt}
              fill
              className="object-cover object-center"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900" /> */}
          </div>
          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center ">
            <div className="max-w-md md:border-r-2 md:border-white/50">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                  {getIcon("phone", "h-6 w-6")}
                </div>
                <div>
                  <p className="text-sm font-medium text-orange-400">
                    {contactBanner.title}
                  </p>
                  <h3 className="text-2xl font-bold">
                    {contactBanner.pretitle}
                  </h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                {contactBanner.description}
              </p>
            </div>
            <div className="flex  flex-col gap-4 ">
              <div className="flex items-center gap-3">
                {getIcon("phone", "h-5 w-5 text-orange-400")}
                <span className="text-sm font-medium">
                  {contactBanner.phone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {getIcon("mail", "h-5 w-5 text-orange-400")}
                <span className="text-sm font-medium">
                  {contactBanner.email}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {getIcon("clock", "h-5 w-5 text-orange-400")}
                <span className="text-sm font-medium">
                  {contactBanner.workingHours}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
