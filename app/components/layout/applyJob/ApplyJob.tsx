"use client";

import PageBanner from "../../shared/PageBanner";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiUploadCloud,
  FiBriefcase,
  FiClock,
  FiFolder,
  FiMapPin,
  FiAward,
  FiDollarSign,
  FiCheck,
  FiUsers,
  FiHeadphones,
  FiChevronDown,
} from "react-icons/fi";

// Import the JSON data directly
import jobApplyData from "@/data/data.json";
import { BsFillLightbulbFill } from "react-icons/bs";
import Image from "next/image";

export default function ApplyJob() {
  const [whyText, setWhyText] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);

  const { formSections, actions, sidebar, banner } = jobApplyData.jobApply;

  const sidebarIcons: Record<string, React.ReactNode> = {
    FiBriefcase: <FiBriefcase className="text-[#ff541b]" />,
    FiClock: <FiClock className="text-[#ff541b]" />,
    FiFolder: <FiFolder className="text-[#ff541b]" />,
    FiMapPin: <FiMapPin className="text-[#ff541b]" />,
    FiAward: <FiAward className="text-[#ff541b]" />,
    FiDollarSign: <FiDollarSign className="text-[#ff541b]" />,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full bg-[#fcfcfd] text-[#0d152e] ">
      <PageBanner banner={banner} />


      <div className="mx-auto max-w-7xl px-3 sm:px-6 py-6 lg:px-8 sm:py-10 lg:py-14">
        {/* FORM CONTAINER & SIDEBAR */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8"
        >
          {/* LEFT SIDE: FORM SECTIONS (8 COLS) */}
          <div className="space-y-6 sm:space-y-8 lg:col-span-8">
            {/* STEP 1: PERSONAL INFORMATION */}
            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-6 lg:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff541b] text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm">
                  {formSections.personalInformation.step}
                </span>
                <h2 className="text-base font-bold text-[#0d152e] sm:text-lg lg:text-xl">
                  {formSections.personalInformation.title}
                </h2>
              </div>
              <div className="mt-2 h-[2px] w-8 bg-[#ff541b]" />

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                {/* Full Name */}
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0d152e] sm:text-sm">
                    {formSections.personalInformation.fields.fullName.label}{" "}
                    {formSections.personalInformation.fields.fullName
                      .required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type="text"
                    required={
                      formSections.personalInformation.fields.fullName.required
                    }
                    placeholder={
                      formSections.personalInformation.fields.fullName
                        .placeholder
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-[#0d152e] outline-none transition-all placeholder:text-slate-400 focus:border-[#ff541b] focus:ring-1 focus:ring-[#ff541b] sm:px-4 sm:py-2.5 sm:text-sm"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0d152e] sm:text-sm">
                    {formSections.personalInformation.fields.emailAddress.label}{" "}
                    {formSections.personalInformation.fields.emailAddress
                      .required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type="email"
                    required={
                      formSections.personalInformation.fields.emailAddress
                        .required
                    }
                    placeholder={
                      formSections.personalInformation.fields.emailAddress
                        .placeholder
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-[#0d152e] outline-none transition-all placeholder:text-slate-400 focus:border-[#ff541b] focus:ring-1 focus:ring-[#ff541b] sm:px-4 sm:py-2.5 sm:text-sm"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0d152e] sm:text-sm">
                    {formSections.personalInformation.fields.phoneNumber.label}{" "}
                    {formSections.personalInformation.fields.phoneNumber
                      .required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type="tel"
                    required={
                      formSections.personalInformation.fields.phoneNumber
                        .required
                    }
                    placeholder={
                      formSections.personalInformation.fields.phoneNumber
                        .placeholder
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-[#0d152e] outline-none transition-all placeholder:text-slate-400 focus:border-[#ff541b] focus:ring-1 focus:ring-[#ff541b] sm:px-4 sm:py-2.5 sm:text-sm"
                  />
                </div>

                {/* Current Location */}
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0d152e] sm:text-sm">
                    {
                      formSections.personalInformation.fields.currentLocation
                        .label
                    }{" "}
                    {formSections.personalInformation.fields.currentLocation
                      .required && <span className="text-red-500">*</span>}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required={
                        formSections.personalInformation.fields.currentLocation
                          .required
                      }
                      placeholder={
                        formSections.personalInformation.fields.currentLocation
                          .placeholder
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 pr-8 text-xs text-[#0d152e] outline-none transition-all placeholder:text-slate-400 focus:border-[#ff541b] focus:ring-1 focus:ring-[#ff541b] sm:px-4 sm:py-2.5 sm:text-sm"
                    />
                    <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 2: PROFESSIONAL INFORMATION */}
            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-6 lg:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff541b] text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm">
                  {formSections.professionalInformation.step}
                </span>
                <h2 className="text-base font-bold text-[#0d152e] sm:text-lg lg:text-xl">
                  {formSections.professionalInformation.title}
                </h2>
              </div>
              <div className="mt-2 h-[2px] w-8 bg-[#ff541b]" />

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                {/* Current Job Title */}
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0d152e] sm:text-sm">
                    {
                      formSections.professionalInformation.fields
                        .currentJobTitle.label
                    }
                  </label>
                  <input
                    type="text"
                    placeholder={
                      formSections.professionalInformation.fields
                        .currentJobTitle.placeholder
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-[#0d152e] outline-none transition-all placeholder:text-slate-400 focus:border-[#ff541b] focus:ring-1 focus:ring-[#ff541b] sm:px-4 sm:py-2.5 sm:text-sm"
                  />
                </div>

                {/* Total Experience */}
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0d152e] sm:text-sm">
                    {
                      formSections.professionalInformation.fields
                        .totalExperience.label
                    }{" "}
                    {formSections.professionalInformation.fields.totalExperience
                      .required && <span className="text-red-500">*</span>}
                  </label>
                  <div className="relative">
                    <select
                      required={
                        formSections.professionalInformation.fields
                          .totalExperience.required
                      }
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 py-2 pr-8 text-xs text-[#0d152e] outline-none transition-all focus:border-[#ff541b] focus:ring-1 focus:ring-[#ff541b] sm:px-4 sm:py-2.5 sm:text-sm"
                    >
                      <option value="" disabled hidden>
                        {
                          formSections.professionalInformation.fields
                            .totalExperience.placeholder
                        }
                      </option>
                      <option value="0-1">0 - 1 Years</option>
                      <option value="1-3">1 - 3 Years</option>
                      <option value="3-5">3 - 5 Years</option>
                      <option value="5+">5+ Years</option>
                    </select>
                    <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                {/* Relevant Experience */}
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0d152e] sm:text-sm">
                    {
                      formSections.professionalInformation.fields
                        .relevantExperience.label
                    }{" "}
                    {formSections.professionalInformation.fields
                      .relevantExperience.required && (
                      <span className="text-red-500">*</span>
                    )}
                  </label>
                  <div className="relative">
                    <select
                      required={
                        formSections.professionalInformation.fields
                          .relevantExperience.required
                      }
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 py-2 pr-8 text-xs text-[#0d152e] outline-none transition-all focus:border-[#ff541b] focus:ring-1 focus:ring-[#ff541b] sm:px-4 sm:py-2.5 sm:text-sm"
                    >
                      <option value="" disabled hidden>
                        {
                          formSections.professionalInformation.fields
                            .relevantExperience.placeholder
                        }
                      </option>
                      <option value="0-1">0 - 1 Years</option>
                      <option value="1-3">1 - 3 Years</option>
                      <option value="3-5">3 - 5 Years</option>
                      <option value="5+">5+ Years</option>
                    </select>
                    <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                {/* Notice Period */}
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0d152e] sm:text-sm">
                    {
                      formSections.professionalInformation.fields.noticePeriod
                        .label
                    }{" "}
                    {formSections.professionalInformation.fields.noticePeriod
                      .required && <span className="text-red-500">*</span>}
                  </label>
                  <div className="relative">
                    <select
                      required={
                        formSections.professionalInformation.fields.noticePeriod
                          .required
                      }
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 py-2 pr-8 text-xs text-[#0d152e] outline-none transition-all focus:border-[#ff541b] focus:ring-1 focus:ring-[#ff541b] sm:px-4 sm:py-2.5 sm:text-sm"
                    >
                      <option value="" disabled hidden>
                        {
                          formSections.professionalInformation.fields
                            .noticePeriod.placeholder
                        }
                      </option>
                      <option value="immediate">Immediate</option>
                      <option value="15-days">15 Days</option>
                      <option value="1-month">1 Month</option>
                      <option value="2-months">2 Months</option>
                    </select>
                    <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 3: UPLOAD DOCUMENTS */}
            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-6 lg:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff541b] text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm">
                  {formSections.uploadDocuments.step}
                </span>
                <h2 className="text-base font-bold text-[#0d152e] sm:text-lg lg:text-xl">
                  {formSections.uploadDocuments.title}
                </h2>
              </div>
              <div className="mt-2 h-[2px] w-8 bg-[#ff541b]" />
              <p className="mt-3 text-xs text-slate-500 sm:text-sm">
                {formSections.uploadDocuments.pretitle}
              </p>

              <div className="mt-5 space-y-4 sm:space-y-5">
                {/* Resume Upload Box */}
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#0d152e] sm:text-sm">
                    {formSections.uploadDocuments.fields.resume.label}{" "}
                    {formSections.uploadDocuments.fields.resume.required && (
                      <span className="text-red-500">*</span>
                    )}
                  </label>
                  <label className="relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-[#fafafa] p-4 text-center transition-all hover:bg-slate-50 sm:p-6">
                    <input
                      type="file"
                      required={
                        formSections.uploadDocuments.fields.resume.required
                      }
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) =>
                        setResumeFile(e.target.files?.[0] || null)
                      }
                    />
                    <FiUploadCloud className="h-7 w-7 text-[#ff541b] sm:h-8 sm:w-8" />
                    <p className="mt-2 text-xs font-medium text-[#0d152e] sm:text-sm">
                      {resumeFile ? (
                        <span className="font-semibold text-[#ff541b]">
                          {resumeFile.name}
                        </span>
                      ) : (
                        <>
                          {formSections.uploadDocuments.fields.resume.label}{" "}
                          <span className="text-red-500">*</span>
                        </>
                      )}
                    </p>
                    <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                      {formSections.uploadDocuments.fields.resume.dragDropText}{" "}
                      <span className="font-semibold text-[#ff541b] underline">
                        {formSections.uploadDocuments.fields.resume.actionText}
                      </span>
                    </p>
                    <p className="mt-1 text-[9px] text-slate-400 sm:text-[11px]">
                      {
                        formSections.uploadDocuments.fields.resume
                          .supportedFormats
                      }
                    </p>
                  </label>
                </div>

                {/* Cover Letter Upload Box */}
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#0d152e] sm:text-sm">
                    {formSections.uploadDocuments.fields.coverLetter.label}
                  </label>
                  <label className="relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-[#fafafa] p-4 text-center transition-all hover:bg-slate-50 sm:p-6">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) =>
                        setCoverLetterFile(e.target.files?.[0] || null)
                      }
                    />
                    <FiUploadCloud className="h-7 w-7 text-[#ff541b] sm:h-8 sm:w-8" />
                    <p className="mt-2 text-xs font-medium text-[#0d152e] sm:text-sm">
                      {coverLetterFile ? (
                        <span className="font-semibold text-[#ff541b]">
                          {coverLetterFile.name}
                        </span>
                      ) : (
                        formSections.uploadDocuments.fields.coverLetter
                          .uploadTitle
                      )}
                    </p>
                    <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                      {
                        formSections.uploadDocuments.fields.coverLetter
                          .dragDropText
                      }{" "}
                      <span className="font-semibold text-[#ff541b] underline">
                        {
                          formSections.uploadDocuments.fields.coverLetter
                            .actionText
                        }
                      </span>
                    </p>
                    <p className="mt-1 text-[9px] text-slate-400 sm:text-[11px]">
                      {
                        formSections.uploadDocuments.fields.coverLetter
                          .supportedFormats
                      }
                    </p>
                  </label>
                </div>
              </div>
            </div>

            {/* STEP 4: ADDITIONAL INFORMATION */}
            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-6 lg:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff541b] text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm">
                  {formSections.additionalInformation.step}
                </span>
                <h2 className="text-base font-bold text-[#0d152e] sm:text-lg lg:text-xl">
                  {formSections.additionalInformation.title}
                </h2>
              </div>
              <div className="mt-2 h-[2px] w-8 bg-[#ff541b]" />

              <div className="mt-5 space-y-4 sm:space-y-5">
                {/* Why Interested */}
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0d152e] sm:text-sm">
                    {
                      formSections.additionalInformation.fields.whyInterested
                        .label
                    }
                  </label>
                  <div className="relative">
                    <textarea
                      rows={4}
                      maxLength={
                        formSections.additionalInformation.fields.whyInterested
                          .maxLength
                      }
                      value={whyText}
                      onChange={(e) => setWhyText(e.target.value)}
                      placeholder={
                        formSections.additionalInformation.fields.whyInterested
                          .placeholder
                      }
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white p-3 text-xs text-[#0d152e] outline-none transition-all placeholder:text-slate-400 focus:border-[#ff541b] focus:ring-1 focus:ring-[#ff541b] sm:p-4 sm:text-sm"
                    />
                    <div className="mt-1 text-right text-[10px] text-slate-400 sm:text-xs">
                      {whyText.length}/
                      {
                        formSections.additionalInformation.fields.whyInterested
                          .maxLength
                      }
                    </div>
                  </div>
                </div>

                {/* How did you hear */}
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#0d152e] sm:text-sm">
                    {
                      formSections.additionalInformation.fields.hearAboutUs
                        .label
                    }
                  </label>
                  <div className="relative">
                    <select
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 py-2 pr-8 text-xs text-[#0d152e] outline-none transition-all focus:border-[#ff541b] focus:ring-1 focus:ring-[#ff541b] sm:px-4 sm:py-2.5 sm:text-sm"
                    >
                      <option value="" disabled hidden>
                        {
                          formSections.additionalInformation.fields.hearAboutUs
                            .placeholder
                        }
                      </option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="website">Company Website</option>
                      <option value="referral">Friend / Referral</option>
                      <option value="other">Other</option>
                    </select>
                    <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM BUTTON BAR */}
            <div className="flex flex-col-reverse items-center justify-between gap-3 pt-2 sm:flex-row sm:gap-4">
              <Link
                href={actions.backButton.href}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-xs font-semibold text-[#0d152e] transition-all hover:bg-slate-50 sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
              >
                <FiArrowLeft className="text-sm" />
                <span>{actions.backButton.label}</span>
              </Link>

              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#ff541b] py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#e0430e] sm:w-auto sm:px-8 sm:py-3 sm:text-sm"
              >
                <span>{actions.submitButton.label}</span>
                <FiArrowRight className="text-sm" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDEBAR (4 COLS) */}
          <div className="space-y-4 sm:space-y-6 lg:col-span-4">
            {/* 1. JOB SUMMARY */}
            <div className="rounded-2xl border border-slate-100 bg-[#fffdfc] p-4 shadow-sm sm:p-6">
              <div className="flex items-center gap-2 text-[#ff541b]">
                <FiBriefcase className="text-base sm:text-lg" />
                <h3 className="text-sm font-bold text-[#0d152e] sm:text-base">
                  {sidebar.jobSummary.title}
                </h3>
              </div>
              <div className="mt-2 h-[2px] w-8 bg-[#ff541b]" />

              <div className="mt-4 space-y-3 divide-y divide-slate-100 text-xs sm:text-sm">
                {sidebar.jobSummary.details.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between pt-2.5 first:pt-0"
                  >
                    <div className="flex items-center gap-2 text-slate-500">
                      {sidebarIcons["FiBriefcase"]}
                      <span>{item.label}</span>
                    </div>
                    <span className="font-medium text-[#0d152e]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. TIPS BEFORE YOU APPLY */}
            <div className="rounded-2xl border border-amber-100/50 bg-[#fffbf5] p-4 shadow-sm sm:p-6">
              <div className="flex items-center gap-2 text-amber-600">
                <BsFillLightbulbFill className="text-base sm:text-lg" />
                <h3 className="text-sm font-bold text-[#0d152e] sm:text-base">
                  {sidebar.tipsBeforeYouApply.title}
                </h3>
              </div>
              <div className="mt-2 h-[2px] w-8 bg-amber-500" />

              <ul className="mt-4 space-y-2.5">
                {sidebar.tipsBeforeYouApply.tips.map((tip, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-slate-600 sm:text-sm"
                  >
                    <FiCheck className="mt-0.5 shrink-0 text-amber-600" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. EQUAL OPPORTUNITY EMPLOYER */}
            <div className="rounded-2xl border border-blue-50 bg-[#f8fbff] p-4 shadow-sm sm:p-6">
              <div className="flex items-center gap-2 text-blue-600">
                <FiUsers className="text-base sm:text-lg" />
                <h3 className="text-sm font-bold text-[#0d152e] sm:text-base">
                  {sidebar.equalOpportunityEmployer.title}
                </h3>
              </div>
              <div className="mt-2 h-[2px] w-8 bg-blue-500" />
              <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {sidebar.equalOpportunityEmployer.description}
              </p>
            </div>

            {/* 4. NEED HELP? */}
            <div className="rounded-2xl border border-slate-100 bg-[#fafafa] p-4 text-center shadow-sm sm:p-6">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm sm:h-12 sm:w-12">
                <FiHeadphones className="text-lg sm:text-xl" />
              </div>
              <h4 className="mt-3 text-sm font-bold text-[#0d152e] sm:text-base">
                {sidebar.needHelp.title}
              </h4>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                {sidebar.needHelp.description}
              </p>
              <a
                href={sidebar.needHelp.button.href}
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[#ff541b] bg-white px-4 py-2 text-xs font-semibold text-[#ff541b] transition-all hover:bg-[#ff541b] hover:text-white sm:text-sm"
              >
                <span>{sidebar.needHelp.button.label}</span>
                <FiArrowRight className="text-xs" />
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
