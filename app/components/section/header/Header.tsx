"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa6";
import { BsGrid3X3GapFill } from "react-icons/bs";
import {
  HeaderDataProps,
  TopBarData,
  SocialLinkItem,
} from "@/type/typeSection";

const renderSocialIcon = (label: string) => {
  switch (label.toLowerCase()) {
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
    case "pinterest":
      return <FaPinterestP size={14} />;
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
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<
    Record<string, boolean>
  >({});

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const pathname = usePathname();
  useEffect(() => {
    document.body.style.overflow =
      isMobileMenuOpen || isPopupOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isPopupOpen]);

  // Safely alias popup data with optional chaining
  const popup = data?.PopupData;

  return (
    <>
      {/* ================= HEADER WRAPPER ================= */}
      <div className="fixed top-0 z-50 w-full bg-slate-900 shadow-md">
        {/* ================= TOP BAR ================= */}
        {topBar && (
          <div className="hidden bg-white text-xs text-slate-900 sm:block">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6 lg:px-8">
              <div className="ml-44 flex flex-nowrap items-center justify-center gap-2 py-1 sm:justify-start sm:gap-4">
                {topBar.address && (
                  <div className="flex items-center gap-1.5 transition-colors">
                    <FiMapPin
                      className="flex-shrink-0 text-orange-500"
                      size={14}
                    />
                    <span>{topBar.address}</span>
                  </div>
                )}

                {topBar.phone && (
                  <a
                    href={topBar.phoneHref || `tel:${topBar.phone}`}
                    className="flex items-center gap-1.5 transition-colors"
                  >
                    <FiPhone
                      className="flex-shrink-0 text-orange-500"
                      size={14}
                    />
                    <span>{topBar.phone}</span>
                  </a>
                )}

                {topBar.headerCta && (
                  <Link
                    href={topBar.headerCta.href}
                    className="inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-1 text-sm font-bold text-white shadow-md shadow-rose-600/20 transition-all duration-200 hover:bg-orange-700 hover:shadow-lg hover:shadow-rose-600/30"
                  >
                    {topBar.headerCta.label}
                  </Link>
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
        <header className="bg-indigo-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between sm:h-20">
              {/* Logo */}
              <Link href="/" className="group flex items-center gap-3">
                <div className="flex w-16  items-center justify-center transition duration-300 group-hover:scale-105 sm:-mt-8 sm:w-40">
                  <img
                    src={data?.logo}
                    alt="Logo"
                    className="w-full object-cover rounded-br-2xl [clip-path:polygon(0_0,_100%_0,_100%_95%,_0_100%)]"
                  />
                </div>
              </Link>
              <div className="flex h-full items-center gap-4">
                {/* Desktop / Tablet Navigation & Grid Box */}
                <div className="hidden h-full items-center gap-3 md:flex">
                  <nav className="flex items-center md:gap-1 xl:gap-2">
                    {data?.header?.map((item) => {
                      const hasChildren =
                        item.children && item.children.length > 0;

                      // Define active state logic
                      // It's active if the pathname exactly matches item.href, or
                      // if item is a root parent and pathname starts with its href (for active subpages)
                      const isActive =
                        pathname === item.href ||
                        (item.href !== "/" && pathname.startsWith(item.href));

                      return (
                        <div key={item.label} className="group relative py-6">
                          <Link
                            href={item.href}
                            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition duration-200 focus:outline-none 
              ${isActive ? "text-orange-600 font-semibold" : "text-slate-100 hover:bg-white/10 hover:text-white"}`}
                          >
                            <span>{item.label}</span>

                            {hasChildren && (
                              <FiChevronDown
                                size={16}
                                className={`transition-transform duration-300 group-hover:rotate-180 
                  ${isActive ? "text-orange-600" : "text-slate-100"}`}
                              />
                            )}
                          </Link>

                          {hasChildren && (
                            <div className="invisible absolute left-0 top-full z-50 translate-y-0 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                              <div
                                className={`mt-0 border border-slate-100 bg-white p-2 shadow-xl ${
                                  item.children!.length > 6
                                    ? "grid w-[480px] grid-cols-2 gap-1"
                                    : "w-[240px]"
                                }`}
                              >
                                {item.children!.map((child) => {
                                  const isChildActive = pathname === child.href;

                                  return (
                                    <Link
                                      key={child.label}
                                      href={child.href}
                                      className={`group/child flex items-center justify-between px-3.5 py-2.5 text-sm font-medium transition duration-100 hover:bg-slate-400 hover:text-black
                        ${isChildActive ? "text-orange-600 font-semibold bg-orange-50/50" : "text-slate-700"}`}
                                    >
                                      <span>{child.label}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </nav>

                  {/* Grid Icon Button - Opens About Popup Drawer */}
                  <button
                    type="button"
                    onClick={() => setIsPopupOpen(true)}
                    aria-label="Open About Information"
                    className="flex cursor-pointer h-full w-14 items-center justify-center bg-orange-500 text-white transition-all duration-200 hover:bg-orange-600 focus:outline-none"
                  >
                    <BsGrid3X3GapFill size={28} />
                  </button>
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center gap-3 md:hidden">
                  {topBar?.headerCta && (
                    <Link
                      href={topBar.headerCta.href}
                      className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-rose-600/20 transition-all duration-200 hover:bg-orange-700 hover:shadow-lg hover:shadow-rose-600/30"
                    >
                      {topBar.headerCta.label}
                    </Link>
                  )}

                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open Mobile Menu"
                    className="inline-flex items-center justify-center rounded-xl border border-orange-100 p-2.5 text-slate-100 hover:bg-rose-50 hover:text-orange-400 focus:outline-none"
                  >
                    <FiMenu size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* ================= ABOUT POPUP SIDE DRAWER ================= */}
      <div
        className={`fixed inset-0 z-[100] bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          isPopupOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        onClick={() => setIsPopupOpen(false)}
      />

      <div
        className={`fixed inset-y-0 right-0 z-[101] flex w-full max-w-md flex-col bg-white text-black shadow-2xl transition-transform duration-300 ease-in-out ${
          isPopupOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 pt-5">
          <h3 className="text-xl pt-16 font-bold text-black">
            {popup?.aboutpopup?.title || "About Us"}
          </h3>
          <button
            type="button"
            onClick={() => setIsPopupOpen(false)}
            className="rounded-full cursor-pointer p-2 text-slate-900 "
          >
            <FiX size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5">
          {/* About Description */}
          {popup?.aboutpopup?.description && (
            <p className="text-sm text-slate-500">
              {popup.aboutpopup.description}
            </p>
          )}

          {/* Instagram Grid */}
          {popup?.instagram && (
            <div>
              <h4 className="mb-4 text-base font-semibold text-white">
                {popup.instagram.title}
              </h4>
              <div className="grid grid-cols-4 gap-2">
                {popup.instagram.images?.map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-square overflow-hidden  bg-slate-800"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Popup Info */}
          {popup?.contactpopup && (
            <div className="rounded-xl flex justify-center py-8 text-center space-y-6 ">
              <div>
                <a
                  href={popup.contactpopup.phoneHref}
                  className="flex items-center gap-3 text-sm text-slate-900 hover:text-orange-400"
                >
                  <FiPhone className="text-orange-500" size={16} />
                  <span>{popup.contactpopup.phone}</span>
                </a>

                <p className="text-xs pt-5 text-slate-500 uppercase font-semibold">
                  {popup.contactpopup.separator}
                </p>

                <a
                  href={popup.contactpopup.emailHref}
                  className="flex items-center gap-3 text-sm text-slate-900 hover:text-orange-400"
                >
                  <FiMail className="text-orange-500" size={16} />
                  <span>{popup.contactpopup.email}</span>
                </a>
              </div>
            </div>
          )}

          {/* Social Links */}
          {popup?.socialLinkspopup && popup.socialLinkspopup.length > 0 && (
            <div className="flex justify-center items-center gap-3 pt-2">
              {popup.socialLinkspopup.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-8 w-8 items-center justify-center rounded-full border text-slate-600 transition-all hover:bg-orange-500 hover:text-white"
                >
                  {renderSocialIcon(social.label)}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed inset-0 z-50 bg-indigo-950/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
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
              <img src={data?.logo} alt="Logo" />
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
            {data?.header?.map((item) => {
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
