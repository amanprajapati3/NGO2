import Image from "next/image";
import Link from "next/link";
import { TeamDetailsProps } from "@/type/typeSection";
import PageBanner from "../../shared/PageBanner";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Globe,
  Send,
  Trophy,
  Users,
  Target,
  Handshake,
  Briefcase,
  CheckCircle,
  Award,
  Heart,
} from "lucide-react";

import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function TeamDetails({ data }: TeamDetailsProps) {
  const {
    banner,
    name,
    role,
    bio,
    image,
    stats,
    contactInfo,
    socialLinks,
    about,
    skills,
    experience,
    achievements,
  } = data;

  // Map icons for stats overlaid on top of image
  const statIcons = [
    <Briefcase key="exp" className="w-5 h-5 text-orange-500 mb-1 mx-auto" />,
    <CheckCircle
      key="projects"
      className="w-5 h-5 text-orange-500 mb-1 mx-auto"
    />,
    <Award key="rate" className="w-5 h-5 text-orange-500 mb-1 mx-auto" />,
  ];

  // Map achievement icons dynamically
  const achievementIcons = [
    <Trophy key="award" className="w-8 h-8 text-orange-500" />,
    <Users key="users" className="w-8 h-8 text-orange-500" />,
    <Target key="target" className="w-8 h-8 text-orange-500" />,
    <Handshake key="handshake" className="w-8 h-8 text-orange-500" />,
  ];

  return (
    <>
      {/* Banner Section */}
      <div className="bg-white overflow-hidden">
        <PageBanner banner={banner} />
      </div>

      {/* Main Team Details Container */}
      <section className="py-10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Top Profile Card Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Image & Overlay Stats Card */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="h-[580px] w-full relative">
                  <Image
                    src={image || "/images/team-member.jpg"}
                    alt={name}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Overlaid Stats Section with Icons */}
                <div className="grid absolute bottom-4 left-4 right-4 rounded-xl grid-cols-3 divide-x divide-slate-800 bg-slate-950/70 backdrop-blur-sm text-white p-4 sm:p-5 text-center shadow-lg border border-slate-800/50">
                  {stats?.map((stat, idx) => (
                    <div
                      key={idx}
                      className="px-2 flex flex-col items-center justify-center"
                    >
                      {statIcons[idx % statIcons.length]}
                      <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-orange-500">
                        {stat.value}
                      </h4>
                      <p className="text-[10px] min-h-8 sm:text-sm text-slate-400 mt-0.5 uppercase tracking-wider font-medium">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Details Header & Contact Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-slate-900 font-semibold text-sm uppercase tracking-wider">
                  {role}
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
                  {name}
                </h1>
                {/* <div className="w-12 h-1 bg-orange-500 my-4 rounded-full" /> */}
                <p className="text-slate-900 text-lg leading-relaxed">{bio}</p>
              </div>

              {/* Contact Info List */}
              <div className="flex flex-col gap-4 py-4 border-y border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm font-semibold text-slate-800 hover:text-orange-600 transition"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Phone</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-sm font-semibold text-slate-800 hover:text-orange-600 transition"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">
                      Qualification
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      {contactInfo.qualification}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:col-span-2">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">
                      Language
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      {contactInfo.languages.join(", ")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links and Action CTA */}
              <div className="flex flex-col gap-4 pt-2">
                <div className="flex items-center gap-3">
                  {socialLinks.facebook && (
                    <Link
                      href={socialLinks.facebook}
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-600 flex items-center justify-center transition"
                    >
                      <FaFacebookF className="w-5 h-5" />
                    </Link>
                  )}
                  {socialLinks.linkedin && (
                    <Link
                      href={socialLinks.linkedin}
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-600 flex items-center justify-center transition"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </Link>
                  )}
                  {socialLinks.twitter && (
                    <Link
                      href={socialLinks.twitter}
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-600 flex items-center justify-center transition"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </Link>
                  )}
                </div>

                {/* <a
                  href="#contact"
                  className="inline-flex w-fit items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-full transition shadow-md shadow-orange-500/20"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </a> */}
              </div>
            </div>
          </div>

          {/* About Section & Expertise Progress Bars */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-0">
            {/* About Text */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                About {name}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {about?.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Expertise Progress Bars */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Expertise & Skills
              </h2>
              <div className="space-y-5">
                {skills?.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-semibold text-slate-800">
                        {item.skill}
                      </span>
                      <span className="text-sm font-bold text-slate-600">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-orange-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Experience Section */}
          <div className="pt-0">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-slate-900">Experience</h2>

              {/* Horizontal line with heart between */}
              {/* <div className="flex items-center justify-center gap-3 my-3">
                <div className="w-12 h-[2px] bg-orange-500 rounded-full" />
                <Heart className="w-4 h-4 text-orange-500 fill-orange-500" />
                <div className="w-12 h-[2px] bg-orange-500 rounded-full" />
              </div> */}
            </div>

            {/* Dotted Line with 4 Big Dots above Experience Content */}
            <div className="relative flex items-center justify-between my-8 px-4 sm:px-20">
              <div className="absolute inset-x-0 border-b-2 border-dashed border-orange-300" />
              <div className="relative z-10 w-5 h-5 rounded-full bg-orange-500 border-4 border-slate-50 ring-2 ring-orange-400" />
              <div className="relative z-10 w-5 h-5 rounded-full bg-orange-500 border-4 border-slate-50 ring-2 ring-orange-400" />
              <div className="relative z-10 w-5 h-5 rounded-full bg-orange-500 border-4 border-slate-50 ring-2 ring-orange-400" />
              <div className="relative z-10 w-5 h-5 rounded-full bg-orange-500 border-4 border-slate-50 ring-2 ring-orange-400" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {experience?.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col justify-between rounded-xl  border-slate-100 bg-white p-3 shadow-sm transition hover:shadow-md md:flex-row md:items-start md:gap-5"
                >
                  {/* Icon */}
                  <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full  bg-orange-100 text-orange-600 md:mb-0">
                    <Briefcase className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 md:mt-0">
                    <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700">
                      {exp.period}
                    </span>

                    <h3 className="mt-4 text-lg font-bold text-slate-900">
                      {exp.role}
                    </h3>

                    <p className="mb-3 text-sm font-medium text-orange-600">
                      {exp.organization}
                    </p>

                    <p className="text-sm leading-relaxed text-slate-600">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Grid Section */}
          <div className="pt-0">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">
                Achievements
              </h2>

              {/* Horizontal line with heart between */}
              {/* <div className="flex items-center justify-center gap-3 my-3">
                <div className="w-12 h-[2px] bg-orange-500 rounded-full" />
                <Heart className="w-4 h-4 text-orange-500 fill-orange-500" />
                <div className="w-12 h-[2px] bg-orange-500 rounded-full" />
              </div> */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements?.map((achievement, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm text-center flex flex-col items-center hover:-translate-y-1 transition duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-5">
                    {achievementIcons[idx % achievementIcons.length]}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
