"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiArrowRight } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { HiOutlineHeart } from "react-icons/hi2";

import type { ContactSectionProps } from "@/type/typeSection";

export default function ContactSection({ data }: ContactSectionProps) {
  const { badge, title, description, office, form } = data;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="relative overflow-hidden bg-white py-3 sm:py-8">
      {/* Decorative Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-orange-100 blur-[140px]" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-50 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">

        {/* ================= HEADING ================= */}
        <div className="mb-6 flex flex-col items-center text-center sm:mb-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-500 sm:px-4 sm:py-2 sm:text-sm">
            <HiOutlineHeart className="text-base sm:text-lg" />
            {badge.label}
          </div>

          {/* Title */}
          <h2 className="md:mt-4 max-w-3xl text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl lg:mt-3">
            {title.line1}{" "}
            <span className="text-orange-500">
              {title.highlight}
            </span>
          </h2>

          {/* Accent */}
          <div className="mt-3 h-1 w-14 rounded-full bg-orange-500 sm:w-16" />

          {/* Description */}
          <p className="mt-3 max-w-2xl text-md md:leading-7 text-slate-900 sm:text-base sm:leading-8">
            {description}
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid gap-5 lg:grid-cols-[580px_1fr] lg:gap-0">

          {/* ================= LEFT : OFFICE ================= */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-orange-600 p-4 text-white sm:p-6 md:p-8 lg:rounded-none lg:rounded-l-2xl">

            {/* Decorative Circles */}
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full border border-white/10" />
            <div className="absolute bottom-16 right-10 h-24 w-24 rounded-full bg-white/5 blur-2xl" />

            <div className="relative z-10">

              {/* Office Title */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold sm:text-3xl">
                  {office.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/80 sm:mt-5 sm:text-base sm:leading-8 lg:mx-0">
                  {office.description}
                </p>
              </div>

              {/* Contact Cards */}
              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4 lg:mt-10 lg:space-y-5">

                {/* Address */}
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md sm:gap-4 sm:p-4 md:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-lg sm:h-12 sm:w-12 sm:text-xl md:h-14 md:w-14">
                    <FiMapPin />
                  </div>

                  <div className="min-w-0 text-left">
                    <h4 className="text-sm font-semibold sm:text-base">
                      {office.address.label}
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-white/80 sm:text-sm sm:leading-6">
                      {office.address.value}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md sm:gap-4 sm:p-4 md:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-lg sm:h-12 sm:w-12 sm:text-xl md:h-14 md:w-14">
                    <FiPhone />
                  </div>

                  <div className="min-w-0 text-left">
                    <h4 className="text-sm font-semibold sm:text-base">
                      {office.phone.label}
                    </h4>

                    <p className="mt-1 break-words text-xs text-white/80 sm:text-sm">
                      {office.phone.value}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md sm:gap-4 sm:p-4 md:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-lg sm:h-12 sm:w-12 sm:text-xl md:h-14 md:w-14">
                    <FiMail />
                  </div>

                  <div className="min-w-0 text-left">
                    <h4 className="text-sm font-semibold sm:text-base">
                      {office.email.label}
                    </h4>

                    <p className="mt-1 break-words text-xs text-white/80 sm:text-sm">
                      {office.email.value}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md sm:gap-4 sm:p-4 md:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-lg sm:h-12 sm:w-12 sm:text-xl md:h-14 md:w-14">
                    <FiClock />
                  </div>

                  <div className="min-w-0 text-left">
                    <h4 className="text-sm font-semibold sm:text-base">
                      {office.hours.label}
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-white/80 sm:text-sm sm:leading-6">
                      {office.hours.value}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ================= RIGHT : FORM ================= */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 md:p-8 lg:rounded-l-none lg:rounded-r-2xl">

            {/* Form Heading */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                {form.title}
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-900 sm:mt-4 sm:text-base sm:leading-7 lg:mx-0">
                {form.subtitle}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4 sm:mt-8 sm:space-y-5 lg:mt-10 lg:space-y-6"
            >

              {/* Name & Email */}
              <div className="grid gap-4 md:grid-cols-2 md:gap-5">

                <div>
                  <label className="mb-2 block text-left text-sm font-semibold text-slate-900">
                    {form.fields.name.label}
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={form.fields.name.placeholder}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-left text-sm font-semibold text-slate-700">
                    {form.fields.email.label}
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={form.fields.email.placeholder}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
                  />
                </div>

              </div>

              {/* Phone & Subject */}
              <div className="grid gap-4 md:grid-cols-2 md:gap-5">

                <div>
                  <label className="mb-2 block text-left text-sm font-semibold text-slate-700">
                    {form.fields.phone.label}
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={form.fields.phone.placeholder}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-left text-sm font-semibold text-slate-700">
                    {form.fields.subject.label}
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={form.fields.subject.placeholder}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
                  />
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-left text-sm font-semibold text-slate-700">
                  {form.fields.message.label}
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={form.fields.message.placeholder}
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center lg:justify-start">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-300/40 transition-all duration-300 hover:bg-orange-600 sm:px-8 sm:py-4 sm:text-base"
                >
                  <FiSend />

                  {form.button.label}

                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
