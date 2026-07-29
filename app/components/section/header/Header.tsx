"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { HeaderDataProps,   TopBarData, SocialLinkItem
 } from "@/type/typeSection";


const renderSocialIcon = (label: SocialLinkItem["label"]) => {
  switch (label) {
    case "facebook":
      return <FaFacebookF size={14} />;
    case "instagram":
      return <FaInstagram size={15} />;
    case "twitter":
      return <FaXTwitter size={14} />;
    case "linkedin":
      return <FaLinkedinIn size={14} />;
    case "youtube":
      return <FaYoutube size={15} />;
    default:
      return null;
  }
};

export default function Header({
  data,
  topBar,
}: {
  data: HeaderDataProps;
  topBar?: TopBarData;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<
    Record<string, boolean>
  >({});

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* FIXED WRAPPER - sticky top-0 z-50 forces sticky behavior on both TopBar and Header */}
      <div className="sticky top-0 z-50 w-full bg-slate-900 shadow-md">
        
        {/* ================= TOP BAR ================= */}
        {topBar && (
          <div className="hidden border-b border-slate-800 bg-slate-800 py-2 text-xs text-slate-300 sm:block">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6 lg:px-8">
              <div className="flex flex-nowrap items-center justify-center gap-2 sm:justify-start sm:gap-4">
                {topBar.address && (
                  <div className="flex items-center gap-1.5 transition-colors hover:text-white">
                    <FiMapPin className="flex-shrink-0 text-orange-500" size={14} />
                    <span>{topBar.address}</span>
                  </div>
                )}
                {topBar.phone && (
                  <a
                    href={topBar.phoneHref || `tel:${topBar.phone}`}
                    className="flex items-center gap-1.5 transition-colors hover:text-white"
                  >
                    <FiPhone className="flex-shrink-0 text-orange-500" size={14} />
                    <span>{topBar.phone}</span>
                  </a>
                )}
              </div>

              {topBar.socialLinks && topBar.socialLinks.length > 0 && (
                <div className="flex items-center gap-3">
                  {topBar.socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="rounded-full p-1.5 transition-colors hover:bg-slate-800 hover:text-orange-400"
                    >
                      {renderSocialIcon(social.label)}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= MAIN HEADER ================= */}
        <header className="bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between sm:h-20">
              <Link href="/" className="group flex items-center gap-3">
                <div className="flex w-16 items-center justify-center rounded-xl shadow-md shadow-rose-500/20 transition duration-300 group-hover:scale-105 sm:w-24">
                  <img src={data.logo} alt="" />
                </div>
              </Link>

              <nav className="hidden md:flex md:items-center md:gap-1 xl:gap-2">
                {data.header?.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;

                  return (
                    <div key={item.label} className="group relative py-6">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-slate-100 transition duration-200 hover:bg-slate-600 hover:text-white focus:outline-none"
                      >
                        <span>{item.label}</span>
                        {hasChildren && (
                          <FiChevronDown
                            size={16}
                            className="text-slate-500 transition-transform duration-300 group-hover:rotate-180 group-hover:text-slate-600"
                          />
                        )}
                      </Link>

                      {hasChildren && (
                        <div className="invisible absolute left-0 top-full z-50 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                          <div
                            className={`mt-0 border border-slate-100 bg-white p-2 shadow-xl ${
                              item.children!.length > 6
                                ? "grid w-[480px] grid-cols-2 gap-1"
                                : "w-[240px]"
                            }`}
                          >
                            {item.children!.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="group/child flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-slate-700 transition duration-100 hover:bg-slate-400 hover:text-black"
                              >
                                <span>{child.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className="flex items-center gap-3">
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-rose-600/20 transition-all duration-200 hover:bg-orange-700 hover:shadow-lg hover:shadow-rose-600/30"
                >
                  Donate Now
                </Link>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open Mobile Menu"
                  className="inline-flex items-center justify-center rounded-xl border border-orange-100 p-2.5 text-slate-100 hover:bg-rose-50 hover:text-orange-400 focus:outline-none md:hidden"
                >
                  <FiMenu size={24} />
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed inset-y-0 left-0 z-50 flex w-[85%] max-w-xs flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-shrink-0 items-center justify-between border-b border-slate-100 p-5">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg">
              <img src={data.logo} alt="" />
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600"
            aria-label="Close Menu"
          >
            <FiX size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          <nav className="flex flex-col space-y-1">
            {data.header?.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = !!openMobileDropdowns[item.label];

              return (
                <div key={item.label} className="last:border-none">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex-1 px-2 py-3 text-base font-semibold text-slate-800 transition duration-200 hover:text-slate-600"
                    >
                      {item.label}
                    </Link>

                    {hasChildren && (
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="p-3 text-slate-400 hover:text-slate-700"
                        aria-label={`Toggle ${item.label} Submenu`}
                      >
                        <FiChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-slate-600" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {hasChildren && isOpen && (
                    <div className="ml-2 space-y-1 border-l-2 border-slate-200 pb-3 pl-4">
                      {item.children!.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition duration-150 hover:bg-slate-50 hover:text-slate-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}