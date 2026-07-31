import Banner from "../../homelayout/Banner";
import data from "@/data/data.json";
import type {
  BannerProps,
  AboutSection as AboutSectionType, MissionData, CausesData,
  ProjectSectionData, TeamSectionData, SupportSection, EventsSection, GalleryData,
  PartnersData, TestimonialData, NewsSectionData, ContactData, FAQData, SuccessStoriesData
} from "@/type/typeSection";
import AboutSection from "../../homelayout/AboutSection";
// import MissionSection from "../../homelayout/Mission";
import CausesSection from "../../homelayout/CausesSection";
import ProjectSection from "../../homelayout/ProjectsSection";
// import VolunteerSection from "../../homelayout/VolunteersSection";
// import DonationSection from "../../homelayout/DonationSection";
import EventSection from "../../homelayout/EventSection";
// import GallerySection from "../../homelayout/GallerySection";
// import PartnersSection from "../../homelayout/PartnerSection";
import TestimonialSection from "../../homelayout/TestimonialSection";
import NewsSection from "../../homelayout/NewsSection";
// import ContactSection from "../../homelayout/ContactSection";
// import FAQSection from "../../homelayout/FaqsSection";
// import SuccessStories from "../../homelayout/SuccessStorySection";

export default function HomePage(){

const banner = data.banner[0] as BannerProps;
const about = data.about as AboutSectionType;
// const mission = data.mission as MissionData;
const causes = data.causes as CausesData;
const project = data.projects as ProjectSectionData;
// const team = data.team as TeamSectionData;
// const support = data.supportSection as SupportSection
const event = data.events as EventsSection
// const gallery = data.gallery as GalleryData
// const partners = data.partners as PartnersData
const testimonial = data.testimonial as TestimonialData
const news = data.news as NewsSectionData
// const contact = data.contact as ContactData
// const faq = data.faq as  FAQData
// const story = data.successStories as SuccessStoriesData

    return(
        <>
        <Banner {...banner}/>
        <AboutSection data={about}/>
        {/* <MissionSection data={mission} /> */}
        <CausesSection data={causes}/>
        <ProjectSection data={project}/>
        {/* <VolunteerSection data={team}/> */}
        {/* <DonationSection data={support}/> */}
        <EventSection data={event}/>
        {/* <GallerySection data={gallery}/> */}
        {/* <PartnersSection data={partners}/> */}
        {/* <SuccessStories data={story}/> */}
        <TestimonialSection data={testimonial}/>
        <NewsSection data={news}/>
        {/* <FAQSection data={faq}/> */}
        {/* <ContactSection data={contact}/> */}
        </>
    )
}