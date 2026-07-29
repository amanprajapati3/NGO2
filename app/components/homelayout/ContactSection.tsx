"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { HiOutlineHeart } from "react-icons/hi2";

import type { ContactSectionProps} from "@/type/typeSection";

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
    <section className="relative bg-white overflow-hidden py-8">
      {/* Decorative Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-orange-100 blur-[140px]" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-50 blur-[150px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mb-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-orange-500">
            <HiOutlineHeart />
            {badge.label}
          </div>
          <h2 className="mt-1 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            {title.line1}{" "}
            <span className="text-orange-500">{title.highlight}</span>
          </h2>
          <div className="mx-auto mt-1 h-1 w-16 rounded-full bg-orange-500" />
          <p className="mx-auto mt-1 max-w-2xl text-md leading-7 text-slate-900">
            {description}
          </p>
        </div>
        <div className="grid gap-1 lg:grid-cols-[580px_1fr]">
          {/* ================= LEFT : Office Information ================= */}
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-orange-600 p-2 text-whitemd:p-8">
            {/* Decorative Circles */}
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full border border-white/10" />
            <div className="absolute right-10 bottom-16 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
            <div className="relative z-10">
              {/* Title */}
              <h3 className="text-3xl font-bold">{office.title}</h3>
              <p className="mt-5 leading-8 text-white/80">
                {office.description}
              </p>

              {/* Contact Cards */}
              <div className="mt-10 space-y-5">
                {/* Address */}
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-xl">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4 className="font-semibold">{office.address.label}</h4>
                    <p className="mt-1 text-sm leading-6 text-white/80">
                      {office.address.value}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-xl">
                    <FiPhone />
                  </div>
                  <div>
                    <h4 className="font-semibold">{office.phone.label}</h4>
                    <p className="mt-1 text-white/80">{office.phone.value}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-xl">
                    <FiMail />
                  </div>
                  <div>
                    <h4 className="font-semibold">{office.email.label}</h4>
                    <p className="mt-1 text-white/80">{office.email.value}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-xl">
                    <FiClock />
                  </div>
                  <div>
                    <h4 className="font-semibold">{office.hours.label}</h4>
                    <p className="mt-1 text-white/80">{office.hours.value}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT : Contact Form ================= */}
          <div className=" border border-slate-200 bg-white p-2  md:p-7">
            <h3 className="text-3xl font-bold text-slate-900">{form.title}</h3>
            <p className="mt-4 text-slate-900 leading-7">{form.subtitle}</p>
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              {/* Name & Email */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-semibold text-slate-900">
                    {form.fields.name.label}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={form.fields.name.placeholder}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-semibold text-slate-700">
                    {form.fields.email.label}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={form.fields.email.placeholder}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />
                </div>
              </div>

              {/* Phone & Subject */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-semibold text-slate-700">
                    {form.fields.phone.label}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={form.fields.phone.placeholder}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-semibold text-slate-700">
                    {form.fields.subject.label}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={form.fields.subject.placeholder}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block font-semibold text-slate-700">
                  {form.fields.message.label}
                </label>
                <textarea
                  rows={7}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={form.fields.message.placeholder}
                  className="w-full resize-none rounded-2xl border border-slate-200 px-5 py-4 outline-none transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-300/40 transition-all duration-300 hover:scale-105 hover:bg-orange-600"
              >
                <FiSend />
                {form.button.label}
                <FiSend className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
