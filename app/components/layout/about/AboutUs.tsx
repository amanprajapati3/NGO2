"use client";

import PageBanner from "../../shared/PageBanner";
import data from "@/data/data.json";
import AboutSection from "../../homelayout/AboutSection";
import MissionSection from "../../homelayout/Mission";
import WhyChooseUs from "../choose/Choose";

import type {
  AboutSection as AboutSectionType,
  MissionData,
  WhyChooseUsData,
} from "@/type/typeSection";

const about = data.about as AboutSectionType;
const mission = data.mission as MissionData;
const whychooseus = data.whyChooseUs as WhyChooseUsData;

export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* Page Banner */}
      {about?.banner && <PageBanner banner={about.banner} />}

      {/* Rendered About Us Section */}
      <AboutSection data={about} />

      {/* Mission Section */}
      <div className="mt-5">
        <MissionSection data={mission} />
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUs data={whychooseus} />
    </main>
  );
}