"use client";

import React from "react";
import Link from "next/link";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiHeart,
  FiArrowUpRight,
} from "react-icons/fi";
import { FooterData } from "@/type/typeSection";

const renderSocialIcon = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case "facebook":
      return <FiFacebook size={18} />;
    case "twitter":
    case "x":
      return <FiTwitter size={18} />;
    case "instagram":
      return <FiInstagram size={18} />;
    case "linkedin":
      return <FiLinkedin size={18} />;
    case "youtube":
      return <FiYoutube size={18} />;
    default:
      return <FiArrowUpRight size={18} />;
  }
};

export default function Footer({ data }: { data: FooterData }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP BRAND & CONTACT INFORMATION ROW */}
        <div className="grid grid-cols-1 gap-10 pb-12 border-b border-slate-800 lg:grid-cols-12 lg:gap-8">
          {/* BRAND / HEADLINE */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-orange-600 to-orange-500 text-white shadow-md shadow-amber-500/20 transition duration-300 group-hover:scale-105">
                <FiHeart size={22} className="fill-current" />
              </div>
              <div>
                <span className="block text-2xl font-extrabold tracking-tight text-white transition duration-300 group-hover:text-orange-400">
                  {data.siteTitle || "Ashray Foundation"}
                </span>
                {data.tagline && (
                  <span className="text-xs font-medium text-slate-200">
                    {data.tagline}
                  </span>
                )}
              </div>
            </Link>

            {/* CONTACT DETAILS FROM JSON */}
            {/* {data.contact && (
              <div className="pt-2 space-y-3 text-sm text-slate-400">
                {data.contact.address && (
                  <div className="flex items-start gap-3">
                    <FiMapPin className="text-rose-500 mt-1 shrink-0" size={16} />
                    <span>{data.contact.address}</span>
                  </div>
                )}
                {data.contact.phone && (
                  <div className="flex items-center gap-3">
                    <FiPhone className="text-rose-500 shrink-0" size={16} />
                    <a
                      href={`tel:${data.contact.phone}`}
                      className="hover:text-rose-400 transition-colors"
                    >
                      {data.contact.phone}
                    </a>
                  </div>  
                )}
                {data.contact.email && (
                  <div className="flex items-center gap-3">
                    <FiMail className="text-rose-500 shrink-0" size={16} />
                    <a
                      href={`mailto:${data.contact.email}`}
                      className="hover:text-rose-400 transition-colors"
                    >
                      {data.contact.email}
                    </a>
                  </div>
                )}
              </div>
            )} */}
          </div>

          {/* SOCIAL MEDIA LINKS FROM JSON */}
          <div className="lg:col-span-7 flex flex-col justify-between items-start lg:items-end">
            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                {data.socials?.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:-translate-y-1 shadow-sm"
                  >
                    {renderSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DYNAMIC FOOTER SECTIONS GRID FROM JSON */}
        <div className="flex justify-center">
          <div className="py-5 flex justify-center flex-col-2 md:col-end-4 gap-5 md:gap-16">
            {data.footer?.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <Link
                  href={section.href}
                  className="inline-block text-sm font-bold text-white uppercase tracking-wider hover:text-orange-400 transition-colors"
                >
                  {section.label}
                </Link>

                <ul className="space-y-2">
                  {section.links
                    ?.filter((_, linkIdx) => {
                      // Remove first 3 links only from Legal section
                      if (section.label === "Legal") {
                        return linkIdx > 2;
                      }
                      return true;
                    })
                    .map((link, linkIdx) => {
                      const isExternal = link.href.startsWith("http");

                      return (
                        <li key={linkIdx}>
                          <Link
                            href={link.href}
                            target={isExternal ? "_blank" : "_self"}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center text-xs text-slate-400 hover:text-orange-400 transition-colors duration-200"
                          >
                            <span>{link.label}</span>

                            {isExternal && (
                              <FiArrowUpRight
                                size={12}
                                className="ml-0.5 text-slate-500"
                              />
                            )}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="pt-8 border-t border-slate-800/80 text-center sm:flex sm:items-center sm:justify-between text-xs text-slate-500">
          <p>
            © {currentYear} {data.siteTitle || "Ashray Foundation"}. All rights
            reserved.
          </p>
          <div className="flex justify-center sm:justify-end items-center gap-4">
            {data.footer
              ?.find((section) => section.label === "Legal")
              ?.links?.slice(0, 3)
              .map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="hover:text-orange-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
