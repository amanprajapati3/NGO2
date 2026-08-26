"use client";

import PageBanner from "../../shared/PageBanner";
import type { SitemapPageProps } from "@/type/typeSection";
import Link from "next/link";
import {
  Home, Building2, Target, Eye, CheckCircle2, Users, Award,
  HeartHandshake, Newspaper, Settings, Factory, FolderKanban,
  FileText, List, HelpCircle, LifeBuoy, Calendar, Briefcase,
  UserPlus, Network, Zap, CheckSquare, PhoneCall, Heart,
  Image as ImageIcon, ShieldCheck, Shield, ClipboardList,
  RotateCcw, Cookie, AlertTriangle, GitFork, LayoutGrid,
} from "lucide-react";
import React from "react";
import ScrollReveal from "../../shared/ScrollReveal";

const iconMap: Record<string, React.ElementType> = {
  Home, Building2, Target, Eye, CheckCircle2, Users, Award,
  HeartHandshake, Newspaper, Settings, Factory, FolderKanban,
  FileText, List, HelpCircle, LifeBuoy, Calendar, Briefcase,
  UserPlus, Network, Zap, CheckSquare, PhoneCall, Heart,
  Image: ImageIcon, ShieldCheck, Shield, ClipboardList,
  RotateCcw, Cookie, AlertTriangle, GitFork,
};

export default function Sitemap({ data }: SitemapPageProps) {
  const { banner, header, homeNode, categories, legalNode } = data;

  const renderIcon = (name: string, className: string = "w-4 h-4") => {
    const IconComp = iconMap[name] || LayoutGrid;
    return <IconComp className={className} />;
  };

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* ================= Banner ================= */}
      <PageBanner banner={banner} />

      {/* ================= Sitemap Content ================= */}
      <ScrollReveal direction="up">
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Decorative Grid Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          
          {/* Header Title Block */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center justify-center gap-4 w-full max-w-md my-1">
              <h2 className="text-3xl sm:text-4xl font-black tracking-wider text-[#0B132A]">
                {header.title}
              </h2>
            </div>
            <p className="mt-1 text-sm sm:text-base text-slate-600 max-w-2xl">
              {header.pretitle}
            </p>
          </div>

          {/* ================= TREE STRUCTURE ================= */}

          {/* 1. HOME Node */}
          <div className="flex flex-col items-center">
            <Link
              href={homeNode.href}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-[#ff541b] text-white font-bold tracking-wider rounded-xl shadow-lg shadow-orange-500/25 hover:bg-[#e0450e] hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              {renderIcon(homeNode.icon, "w-5 h-5")}
              <span>{homeNode.label}</span>
            </Link>

            {/* Vertical Line down from HOME */}
            <div className="w-[2px] h-10 bg-[#ff541b]" />
          </div>

          {/* 2. Main Horizontal Line & 6 Top Columns */}
          <div className="relative w-full flex flex-col items-center">
            {/* Horizontal Line across 6 category columns */}
            <div className="hidden lg:block absolute top-0 left-[8.33%] right-[8.33%] h-[2px] bg-[#ff541b]" />

            {/* CONTINUOUS VERTICAL CENTER LINE: Passes directly through the grid down to Legal Node */}
            <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-[#ff541b] z-0 pointer-events-none" />

            {/* 6 Category Columns Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10 w-full pt-0 lg:pt-8 pb-10">
              {categories.map((category) => (
                <div key={category.id} className="flex flex-col items-center">
                  {/* Drop line from horizontal bar to column header */}
                  <div className="hidden lg:block w-[2px] h-8 bg-[#ff541b] -mt-8" />

                  {/* Category Header Card */}
                  <div className="w-full bg-[#0B132A] text-white px-3 py-3 rounded-lg flex items-center justify-center gap-2 shadow-md mb-3 border border-slate-800">
                    <span className="text-[#ff541b]">
                      {renderIcon(category.icon, "w-4 h-4")}
                    </span>
                    <span className="font-bold text-sm tracking-wider uppercase">
                      {category.title}
                    </span>
                  </div>

                  {/* Category Items List */}
                  <div className="w-full flex flex-col gap-2.5">
                    {category.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="group flex items-center gap-2.5 px-3.5 py-2.5 bg-white rounded-lg border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-orange-300 hover:bg-orange-50/30 transition-all duration-200"
                      >
                        <span className="text-[#ff541b] group-hover:scale-110 transition-transform">
                          {renderIcon(item.icon, "w-4 h-4")}
                        </span>
                        <span className="text-sm sm:text-sm font-medium text-slate-700 group-hover:text-[#ff541b] transition-colors leading-tight">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 3. LEGAL & POLICIES Node Attached Directly to Center Vertical Line */}
            <div className="relative z-10 inline-flex items-center gap-2 px-6 py-3 bg-[#0B132A] text-white font-bold tracking-wider text-sm sm:text-sm rounded-xl shadow-lg border border-slate-800">
              <ShieldCheck className="w-5 h-5 text-[#ff541b]" />
              <span>{legalNode.title}</span>
            </div>

            {/* Vertical Line down from LEGAL & POLICIES to Legal Horizontal Line */}
            <div className="w-[2px] h-8 bg-[#ff541b]" />
          </div>

          {/* 4. Lower Horizontal Line & 6 Policy Cards */}
          <div className="relative w-full">
            {/* Horizontal Line across 6 policy cards */}
            <div className="hidden lg:block absolute top-0 left-[8.33%] right-[8.33%] h-[2px] bg-[#ff541b]" />

            {/* 6 Policy Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
              {legalNode.items.map((item, idx) => {
                const isCurrentSitemap = item.isCurrent;
                return (
                  <div key={idx} className="flex flex-col items-center">
                    {/* Vertical Line drop from legal horizontal line */}
                    <div className="hidden lg:block w-[2px] h-6 bg-[#ff541b]" />

                    <Link
                      href={item.href}
                      className={`w-full flex items-center justify-center gap-2.5 px-3.5 py-3 rounded-xl border transition-all duration-200 ${
                        isCurrentSitemap
                          ? "bg-[#0B132A] text-white border-[#0B132A] shadow-md hover:bg-[#131f40]"
                          : "bg-white text-slate-700 border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-orange-300 hover:text-[#ff541b]"
                      }`}
                    >
                      <span className="text-[#ff541b]">
                        {renderIcon(item.icon, "w-4 h-4")}
                      </span>
                      <span className="font-semibold text-sm sm:text-sm tracking-wide text-center">
                        {item.label}
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
      </ScrollReveal>
    </main>
  );
}