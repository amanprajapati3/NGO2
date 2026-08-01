"use client";
import PageBanner from "../../shared/PageBanner";


import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiLock,
  FiFileText,
  FiAward,
  FiHeart,
  FiUser,
  FiMail,
  FiPhone,
  FiGlobe,
  FiCreditCard,
} from "react-icons/fi";

import {
  FaHandHoldingHeart,
  FaUniversity,
  FaWallet,
  FaUsers,
  FaProjectDiagram,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";

import type {
  DonateNowProps,
  DonationAmountOption,
} from "@/type/typeSection";
import { HiOutlineHeart } from "react-icons/hi2";

export default function DonatePage({ data }: DonateNowProps) {
  // Form States
  const [selectedAmount, setSelectedAmount] = useState<number | null>(500);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
  const [selectedPayment, setSelectedPayment] = useState<string>("upi");
  const [receiveUpdates, setReceiveUpdates] = useState<boolean>(false);

  // Form Input States
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
  });

  const handleAmountSelect = (option: DonationAmountOption) => {
    if (option.isOther) {
      setIsOtherSelected(true);
      setSelectedAmount(null);
    } else {
      setIsOtherSelected(false);
      setSelectedAmount(option.amount);
      setCustomAmount("");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Icon mapping for "Why Donate" section
  const featureIcons = [
    <FiLock key="1" className="text-xl text-orange-400" />,
    <FiFileText key="2" className="text-xl text-orange-400" />,
    <FiAward key="3" className="text-xl text-orange-400" />,
    <FiHeart key="4" className="text-xl text-orange-400" />,
  ];

  // Icon mapping for Bottom Impact Stats
  const statIcons = [
    <FaUsers key="1" className="text-3xl text-orange-400" />,
    <FaHandHoldingHeart key="2" className="text-3xl text-orange-400" />,
    <FaProjectDiagram key="3" className="text-3xl text-orange-400" />,
    <FaHeart key="4" className="text-3xl text-orange-400" />,
  ];

  return (
    <div className="w-full overflow-hidden bg-[#fafafa]">
      {/* ================= 1. HERO BANNER ================= */}
      <PageBanner banner={data.banner} />


      {/* ================= MAIN CONTENT ================= */}
      <section className="relative py-12 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ================= 2. TOP HEADER ================= */}
          <div className="flex flex-col items-center text-center">
            {/* <div className="flex items-center justify-center gap-4">
              <span className="h-[1.5px] w-12 bg-orange-400/60" />
              <FaHandHoldingHeart className="text-2xl text-orange-400" />
              <span className="h-[1.5px] w-12 bg-orange-400/60" />
            </div> */}

            <div className="flex justify-center gap-1">

             <HiOutlineHeart className="text-base text-[#FF4500]" />
            
            <span className=" text-xs font-bold uppercase tracking-widest text-orange-400">
              {data.header.badge}
            </span>
            </div>

            <h2 className="mt-0 font-serif text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              {data.header.title.line1}{" "}
              <span className="text-[#0F172A]">
                {data.header.title.highlight}
              </span>
            </h2>

            {/* <div className="mt-3 flex items-center justify-center gap-3">
              <span className="h-[1px] w-10 bg-orange-300" />
              <FaRegHeart className="text-xs text-orange-5--" />
              <span className="h-[1px] w-10 bg-orange-300" />
            </div> */}

            <p className="mt-3 max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm">
              {data.header.description}
            </p>
          </div>

          {/* ================= 3. DONATION SECTION ================= */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">

            {/* ------------ WHY DONATE ------------ */}
            <div className="flex flex-col justify-between rounded-3xl border border-red-100/50 bg-gradient-to-b from-red-50/60 via-pink-50/30 to-red-50/70 p-0 lg:col-span-4">
              <div className="p-5">
                <h3 className="font-serif text-2xl font-bold text-[#0F172A]">
                  {data.whyDonate.title.line1}{" "}
                  <span className="text-orange-400">
                    {data.whyDonate.title.highlight}
                  </span>
                </h3>

                <div className="mt-2 h-[3px] w-10 bg-orange-500" />

                <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {data.whyDonate.description}
                </p>

                <div className="mt-8 space-y-6">
                  {data.whyDonate.features.map((feature, idx) => (
                    <div
                      key={feature.id}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-100/70 shadow-sm">
                        {featureIcons[idx % featureIcons.length]}
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A]">
                          {feature.title}
                        </h4>

                        <p className="mt-1 text-xs leading-relaxed text-slate-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Illustration */}
              <div className="relative mt-8 flex  justify-center pt-4">
                <div className="relative w-full  h-52">
                  <Image
                    src={data.whyDonate.illustration.src}
                    alt={data.whyDonate.illustration.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* ------------ DONATION FORM ------------ */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10 lg:col-span-8">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-8"
              >

                {/* --- A. AMOUNT --- */}
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                    {data.donationForm.amountSection.title}
                  </h3>

                  <div className="mt-1.5 h-[3px] w-10 bg-orange-400" />

                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {data.donationForm.amountSection.options.map(
                      (opt, idx) => {
                        const isSelected =
                          (!opt.isOther &&
                            selectedAmount === opt.amount) ||
                          (opt.isOther && isOtherSelected);

                        return (
                          <button
                            key={`${opt.label}-${idx}`}
                            type="button"
                            onClick={() => handleAmountSelect(opt)}
                            className={`flex flex-col items-center justify-center rounded-xl border p-4 text-center transition-all duration-200 ${
                              isSelected
                                ? "border-orange-500 bg-white shadow-sm ring-1 ring-orange-500"
                                : "border-gray-200 bg-white hover:border-orange-300"
                            }`}
                          >
                            <span className="text-base font-extrabold text-[#0F172A]">
                              {opt.isOther
                                ? "Other"
                                : `${opt.currencySymbol}${opt.amount?.toLocaleString()}`}
                            </span>

                            <span className="mt-1 text-[11px] font-medium text-slate-500">
                              {opt.isOther
                                ? opt.pretitle
                                : opt.label}
                            </span>
                          </button>
                        );
                      }
                    )}
                  </div>

                  {isOtherSelected && (
                    <div className="mt-4">
                      <div className="relative rounded-xl border border-gray-200 shadow-sm focus-within:border-orange-400 focus-within:ring-1 focus-within:ring-orange-500">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-sm font-bold text-slate-500">
                          ₹
                        </span>

                        <input
                          type="number"
                          placeholder="Enter custom amount"
                          value={customAmount}
                          onChange={(e) =>
                            setCustomAmount(e.target.value)
                          }
                          className="w-full rounded-xl py-3 pl-8 pr-4 text-sm font-semibold text-gray-900 outline-none"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* --- B. DONOR INFORMATION --- */}
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                    {data.donationForm.donorInfoSection.title}
                  </h3>

                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A]">
                        {data.donationForm.donorInfoSection.fields.fullName.label}{" "}
                        <span className="text-orange-500">*</span>
                      </label>

                      <div className="relative mt-2">
                        <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

                        <input
                          type="text"
                          name="fullName"
                          required
                          placeholder={
                            data.donationForm.donorInfoSection.fields.fullName.placeholder
                          }
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-xs font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A]">
                        {data.donationForm.donorInfoSection.fields.email.label}{" "}
                        <span className="text-orange-500">*</span>
                      </label>

                      <div className="relative mt-2">
                        <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

                        <input
                          type="email"
                          name="email"
                          required
                          placeholder={
                            data.donationForm.donorInfoSection.fields.email.placeholder
                          }
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-xs font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-orange-400 focus:ring-1 focus:orange-500"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A]">
                        {data.donationForm.donorInfoSection.fields.phone.label}{" "}
                        <span className="text-orange-500">*</span>
                      </label>

                      <div className="relative mt-2">
                        <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder={
                            data.donationForm.donorInfoSection.fields.phone.placeholder
                          }
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-xs font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A]">
                        {data.donationForm.donorInfoSection.fields.country.label}{" "}
                        <span className="text-orange-500">*</span>
                      </label>

                      <div className="relative mt-2">
                        <FiGlobe className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

                        <select
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-8 text-xs font-medium text-slate-800 outline-none transition-all focus:border-orange-400 focus:ring-1 focus:ring-orange-500"
                        >
                          <option value="" disabled>
                            {
                              data.donationForm.donorInfoSection.fields
                                .country.placeholder
                            }
                          </option>

                          <option value="IN">India</option>
                          <option value="US">United States</option>
                          <option value="UK">United Kingdom</option>
                          <option value="CA">Canada</option>
                          <option value="AU">Australia</option>
                        </select>

                        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- C. PAYMENT METHOD --- */}
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                    {data.donationForm.paymentMethodSection.title}
                  </h3>

                  <div className="mt-1.5 h-[3px] w-10 bg-orange-500" />

                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {data.donationForm.paymentMethodSection.methods.map(
                      (method) => {
                        const isSelected =
                          selectedPayment === method.id;

                        return (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() =>
                              setSelectedPayment(method.id)
                            }
                            className={`flex flex-col items-center justify-center rounded-xl border p-4 text-center transition-all ${
                              isSelected
                                ? "border-orange-400 bg-white ring-1 ring-orange-500"
                                : "border-gray-200 bg-white hover:border-gray-300"
                            }`}
                          >
                            <div className="mb-2 flex h-8 items-center justify-center">
                              {method.id === "upi" && (
                                <span className="text-xs font-black italic tracking-wider text-slate-800">
                                  UPI
                                </span>
                              )}

                              {method.id === "card" && (
                                <FiCreditCard className="text-2xl text-blue-600" />
                              )}

                              {method.id === "net-banking" && (
                                <FaUniversity className="text-xl text-slate-700" />
                              )}

                              {method.id === "wallet" && (
                                <FaWallet className="text-xl text-slate-700" />
                              )}
                            </div>

                            <span className="text-xs font-bold text-[#0F172A]">
                              {method.title}
                            </span>

                            <span className="mt-1 text-[10px] text-slate-400">
                              {method.pretitle}
                            </span>
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>

                {/* --- D. NEWSLETTER & SUBMIT --- */}
                <div className="space-y-6 pt-2">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={receiveUpdates}
                      onChange={(e) =>
                        setReceiveUpdates(e.target.checked)
                      }
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-orange-400 focus:ring-orange-500"
                    />

                    <span className="text-xs leading-normal text-slate-600">
                      {data.donationForm.newsletterConsent.label}
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 py-4 text-base font-bold text-white shadow-lg shadow-red-600/20 transition-all hover:bg-orange-600 cursor-pointer active:scale-[0.99]"
                  >
                    <FaHeart className="text-sm" />
                    <span>
                      {data.donationForm.submitButton.label}
                    </span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
                    <FiLock className="text-slate-600" />
                    <span>
                      {data.donationForm.securityNote.text}
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* ================= 4. IMPACT STATS ================= */}
          <div className="mt-16 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-gray-100">
              {data.impactStats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center p-6 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50">
                    {statIcons[idx % statIcons.length]}
                  </div>

                  <h4 className="mt-4 font-serif text-3xl font-extrabold text-orange-500">
                    {stat.value}
                  </h4>

                  <p className="mt-1 text-sm font-bold text-[#0F172A]">
                    {stat.label}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-400">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
