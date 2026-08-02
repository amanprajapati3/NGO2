"use client";

import React from "react";
import Link from "next/link";
import { FiMapPin, FiPhone, FiMail, FiArrowRight } from "react-icons/fi";
import { FooterData } from "@/type/typeSection";

export default function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="bg-[#252525] text-slate-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* NEWSLETTER */}
        <div className="border-b border-dashed border-slate-700 py-8">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">
                {data.newsletter.title}
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-7 text-indigo-200">
                {data.newsletter.description}
              </p>
            </div>

            <form className="flex w-full items-center rounded-full bg-white p-1">
              <input
                type="email"
                placeholder={data.newsletter.placeholder}
                className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button
                type="submit"
                className="flex shrink-0 items-center gap-1 rounded-full bg-[#ff5a1f] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#e94d16]"
              >
                {data.newsletter.buttonLabel}
                <FiArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-10 py-7 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* CONTACT INFO */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-xl font-bold text-white">
              {data.contactInfo.title}
            </h3>

            <div className="space-y-5">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-[#ff5a1f]">
                  <FiMapPin size={16} />
                  <span>{data.contactInfo.location.label}</span>
                </div>

                <p className="text-sm leading-6 text-indigo-200">
                  {data.contactInfo.location.address}
                </p>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-[#ff5a1f]">
                  <FiPhone size={16} />
                  <span>{data.contactInfo.phone.label}</span>
                </div>

                <a
                  href={data.contactInfo.phone.href}
                  className="text-sm text-indigo-200 transition-colors hover:text-[#ff5a1f]"
                >
                  {data.contactInfo.phone.number}
                </a>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-[#ff5a1f]">
                  <FiMail size={16} />
                  <span>{data.contactInfo.email.label}</span>
                </div>

                <a
                  href={data.contactInfo.email.href}
                  className="text-sm text-indigo-200 transition-colors hover:text-[#ff5a1f]"
                >
                  {data.contactInfo.email.address}
                </a>
              </div>
            </div>
          </div>

          {/* OUR SUPPORT */}
          <div className="lg:col-span-3 lg:pl-5">
            <h3 className="mb-6 text-xl font-bold text-white">
              {data.support.title}
            </h3>

            <ul className="space-y-3">
              {data.support.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-indigo-200 transition-colors duration-200 hover:text-[#ff5a1f]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OUR SERVICES */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-xl font-bold text-white">
              {data.services.title}
            </h3>

            <ul className="space-y-3">
              {data.services.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-indigo-200 transition-colors duration-200 hover:text-[#ff5a1f]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RECENT NEWS */}
          <div className="lg:col-span-4">
            <h3 className="mb-6 text-xl font-bold text-white">
              {data.recentNews.title}
            </h3>

            <div className="space-y-6">
              {data.recentNews.items.map((item, index) => (
                <Link key={index} href={item.href} className="group flex gap-5">
                  <div className="relative h-[67px] w-[80px] rounded-md shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                
                  <div className="border-l border-dashed border-slate-700 pl-5">
                      <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-400">
                    {/* <span className="h-2 w-2 rounded-full bg-[#ff5a1f]" /> */}
                    <span>{item.date}</span>
                  </div>
                    <h4 className="text-sm font-medium leading-6 text-white transition-colors group-hover:text-[#ff5a1f]">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-dashed border-slate-700 py-5">
          <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-indigo-200 sm:flex-row sm:justify-between sm:text-left">
            {/* Copyright */}
            <p className="leading-6">{data.bottomBar.copyright}</p>

            {/* Bottom Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              {data.bottomBar.links.map((link, index) => (
                <React.Fragment key={index}>
                  {/* Separator - Desktop/Tablet only */}
                  {index > 0 && (
                    <span className="hidden text-[#ff5a1f] sm:inline">|</span>
                  )}

                  <Link
                    href={link.href}
                    className="whitespace-nowrap transition-colors duration-200 hover:text-[#ff5a1f]"
                  >
                    {link.label}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
