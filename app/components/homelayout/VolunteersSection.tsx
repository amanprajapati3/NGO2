"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiHeart, FiUser } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi2";

import type { TeamMember, TeamSectionProps } from "@/type/typeSection";

const getSocialIcon = (icon: string) => {
  switch (icon) {
    case "facebook":
      return <FaFacebookF className="text-[10px]" />;
    case "linkedin":
      return <FaLinkedinIn className="text-[10px]" />;
    case "twitter":
      return <FaTwitter className="text-[10px]" />;
    default:
      return null;
  }
};

export default function VolunteerSection({ data }: TeamSectionProps) {
  const { badge, heading, description, members, cta } = data;

  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-0 py-12 lg:py-16">
      {/* Background Soft Glow Orbs */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-orange-100/60 blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-orange-100/40 blur-[120px] pointer-events-none" />

      {/* Decorative Grid Dots */}
      <div className="absolute top-10 left-6 grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        ))}
      </div>
      <div className="absolute top-10 right-6 grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col items-center text-center">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF4500]">
            <HiOutlineUsers className="text-base text-[#FF4500]" />
            <span>{badge.label}</span>
          </div>

          {/* Main Title */}
          <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            {heading.title}
          </h2>

          {/* Subheading Line Divider */}
          <div className="mt-3 flex items-center justify-center gap-3 text-xs font-semibold tracking-wide text-slate-500">
            <span className="h-[1px] w-12 bg-orange-300" />
            <FiHeart className="text-[10px] text-[#FF4500]" />
            <span className="h-[1px] w-12 bg-orange-300" />
          </div>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm">
            {description}
          </p>
        </div>

        {/* ================= TEAM MEMBERS GRID ================= */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member: TeamMember) => (
            <div
              key={member.name}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              {/* Image & Centered Overlapping Avatar Icon */}
              <div className="relative h-56 w-full bg-slate-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Overlapping Centered Circle Badge */}
             <div className="absolute -bottom-5 z-40 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-[#FF4500] text-white shadow-md ring-4 ring-transparent">
                  <FiUser className="text-base" />
                </div>
              </div>

              {/* Card Details Area */}
              <div className="flex flex-1 flex-col justify-between pt-8 px-2 text-center">
                <div>
                   
                  {/* Name */}
                  <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-[#FF4500]">
                    {member.name}
                  </h3>

                  {/* Designation */}
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#FF4500]">
                    {member.designation}
                  </p>

                  {/* Description */}
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {member.description}
                  </p>
                </div>

                {/* Social Icons Row */}
                <div className="mt-5 flex items-center justify-center gap-2 py-2">
                  {member.socials?.map((social) => (
                    <Link
                      key={social.icon}
                      href={social.href}
                      target="_blank"
                      className="flex h-7 w-7 items-center justify-center border  rounded-full bg-slate-100 text-slate-900 transition-all hover:bg-[#FF4500] hover:text-white"
                    >
                      {getSocialIcon(social.icon)}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom Red Accent Line */}
              <div className="h-1.5 w-full bg-[#FF4500]" />
            </div>
          ))}
        </div>

        {/* ================= BOTTOM CTA BANNER ================= */}
        {cta && (
          <div className="relative mt-12 overflow-hidden rounded-2xl bg-[#fdf4f0] px-6 py-8 shadow-sm sm:px-10 lg:px-12">
            {/* Foliage / Floral Corner Accents */}
            <div className="absolute left-2 bottom-0 text-orange-200/40 pointer-events-none">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                <path d="M10,90 Q 50,10 90,90 Z" />
              </svg>
            </div>
            <div className="absolute right-2 top-0 text-orange-200/40 pointer-events-none">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                <path d="M10,10 Q 90,50 10,90 Z" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
              {/* Left Side: Heart Avatar + Text */}
              <div className="flex items-center gap-5 text-center sm:text-left">
                {/* Layered Heart Icon Badge */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-100/70 p-2 ring-8 ring-orange-100/30">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#FF4500] text-white shadow-md">
                    <FiHeart className="text-2xl" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                    {cta.title}
                  </h3>
                  <p className="mt-1 max-w-md text-xs text-slate-600 sm:text-sm">
                    {cta.description}
                  </p>
                </div>
              </div>

              {/* Right Side: Donate Button */}
              <Link
                href={cta.button.href}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#FF4500] px-7 py-3 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-[#e03d00] hover:shadow-lg"
              >
                <span>{cta.button.label}</span>
                <FiArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}