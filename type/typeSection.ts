export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface PopupAbout {
  title: string;
  desc: string;
}

export interface PopupInstagramImage {
  src: string;
  alt: string;
}

export interface PopupInstagram {
  title: string;
  images: PopupInstagramImage[];
}

export interface PopupContact {
  phone: string;
  phoneHref: string;
  separator: string;
  email: string;
  emailHref: string;
}

export interface PopupSocialLink {
  label: string;
  href: string;
}

export interface PopupData {
  aboutpopup: PopupAbout;
  instagram: PopupInstagram;
  contactpopup: PopupContact;
  socialLinkspopup: PopupSocialLink[];
}

export interface HeaderDataProps {
  siteTitle: string;
  logo: string;
  header: NavItem[];
  PopupData: PopupData;
}

export interface SocialLinkItem {
  label: string;
  href: string;
}

export interface HeaderCTA {
  label: string;
  href: string;
}

export interface TopBarData {
  address: string;
  phone: string;
  phoneHref: string;
  socialLinks: SocialLinkItem[];
  headerCta: HeaderCTA;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface NewsletterData {
  title: string;
  description: string;
  placeholder: string;
  buttonLabel: string;
  buttonIcon: string;
}

export interface ContactInfoItem {
  label: string;
  icon: string;
  address?: string;
  number?: string;
  href?: string;
}

export interface ContactInfoData {
  title: string;
  location: ContactInfoItem;
  phone: ContactInfoItem;
  email: ContactInfoItem;
}

export interface FooterSupportData {
  title: string;
  links: FooterLink[];
}

export interface FooterServicesData {
  title: string;
  links: FooterLink[];
}

export interface RecentNewsItem {
  title: string;
  date: string;
  image: string;
  href: string;
}

export interface RecentNewsData {
  title: string;
  items: RecentNewsItem[];
}

export interface BottomBarData {
  copyright: string;
  links: FooterLink[];
}

export interface FooterData {
  newsletter: NewsletterData;
  contactInfo: ContactInfoData;
  support: FooterSupportData;
  services: FooterServicesData;
  recentNews: RecentNewsData;
  bottomBar: BottomBarData;
}

export interface BannerCTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface BannerProps {
  title: string;
  pretitle?: string;
  desc: string;
  bgImageUrl: string;
  ctaButtons?: BannerCTA[];
  overlayOpacity?: number; // 0 to 1, e.g., 0.5 for 50% darkness
}

// =========================
// About Badge
// =========================
export interface AboutBadge {
  icon: string;
  label: string;
}

// =========================
// About Title
// =========================
export interface AboutTitle {
  line1: string;
}

// =========================
// About Description
// =========================
export interface AboutDescription {
  primary: string;
  secondary: string;
}

// =========================
// About Buttons
// =========================
export interface AboutButton {
  label: string;
  href: string;
  variant: string;
  icon: string;
}

// =========================
// Gallery Images
// =========================
export interface AboutImage {
  src: string;
  alt: string;
}

// =========================
// Video
// =========================
export interface AboutVideo {
  videoUrl: string;
}

// =========================
// Floating Card
// =========================
export interface FloatingCard {
  icon: string;
  title: string;
  pretitle: string;
  highlight: string;
}

// =========================
// Gallery
// =========================
export interface AboutGallery {
  mainImage: AboutImage;
  topImage: AboutImage;
  sideImage: AboutImage;
  playButton: AboutVideo;
  floatingCard: FloatingCard;
}

// =========================
// Statistics
// =========================
export interface AboutStatistic {
  icon: string;
  value: string;
  label: string;
}

export interface AboutStatistic2 {
  icon: string;
  value: string;
  label: string;
}

// Background
export interface AboutBackground {
  showGradient: boolean;
  showDecorations: boolean;
}

// ABOUT PAGE - BREADCRUMB
export interface PageBannerData {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
  title?: string;
  alt?: string;
}

export interface AboutBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
  alt: string;
  overlay: boolean;
}

export interface AboutCTAButton {
  label: string;
  href: string;
  icon: string;
}

export interface AboutCTA {
  badge: string;
  title: string;
  desc: string;
  button: AboutCTAButton;
  secondaryButton: AboutCTAButton;
}

export interface AboutSection {
  badge: AboutBadge;
  title: AboutTitle;
  desc: AboutDescription;
  buttons: AboutButton[];
  gallery: AboutGallery;
  statistics: AboutStatistic[];
  statistics2: AboutStatistic2[];
  background: AboutBackground;
  cta: AboutCTA;
  // About Page additions
  banner: AboutBanner;
}

// =========================
// Component Props
// =========================
export interface AboutSectionProps {
  data: AboutSection;
}

// why choose us
export interface WhyChooseCard {
  icon: string;
  title: string;
  desc: string;
}

export interface WhyChooseImageOverlay {
  icon: string;
  text: string;
  highlight: string;
}

export interface WhyChooseUsData {
  badge: string;
  title: {
    line1: string;
    line2: string;
  };
  desc: string;
  image: string;
  imageAlt: string;
  imageOverlay: WhyChooseImageOverlay;
  cards: WhyChooseCard[];
}
// ================= Mission Section =================

export interface MissionBadge {
  icon: string;
  label: string;
}

export interface MissionTitle {
  line1: string;
  highlight: string;
  line2: string;
}

export interface MissionFeature {
  icon: string;
  title: string;
  description: string;
}

export interface MissionTabContent {
  primary: string;
  secondary: string;
  features: MissionFeature[];
}

export interface MissionTab {
  id: string;
  label: string;
  icon: string;
  active: boolean;
  content: MissionTabContent;
}

export interface MissionImage {
  src: string;
  alt: string;
}

export interface MissionPurposeCard {
  icon: string;
  badge: string;
  title: string;
}

export interface MissionImageSection {
  mainImage: MissionImage;
  purposeCard: MissionPurposeCard;
  showRings: boolean;
  showBrushTop: boolean;
}

export interface MissionButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon: string;
}

export interface MissionBackground {
  darkCard: string;
  showDots: boolean;
  showGradient: boolean;
}

export interface MissionData {
  badge: MissionBadge;
  title: MissionTitle;
  tabs: MissionTab[];
  imageSection: MissionImageSection;
  buttons: MissionButton[];
  background: MissionBackground;
}

export interface MissionSectionProps {
  data: MissionData;
}

// ================= Causes Section =================

export interface CauseBadge {
  icon: string;
  label: string;
}

export interface CausesBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
}

export interface CauseTitle {
  line1: string;
  highlight: string;
  line2: string;
}

export interface CauseImage {
  src: string;
  alt: string;
}

export interface CauseButton {
  label: string;
  href: string;
  icon: string;
}

export interface CauseItem {
  image: CauseImage;
  icon: string;
  category: string;
  title: string;
  titleLink: string;
  description: string;
  button: CauseButton;
}

export interface ExploreCausesButton {
  label: string;
  href: string;
  icon: string;
}

export interface CausesCTAButton {
  label: string;
  href: string;
  icon: string;
}

export interface CausesDecorations {
  showLeaves: boolean;
  showDots: boolean;
}

export interface CausesCTA {
  bgImageUrl: string;
  title: string;
  description: string;
  button: CausesCTAButton;
  decorations: CausesDecorations;
}

export interface CausesData {
  badge: CauseBadge;
  title: CauseTitle;
  description: string;
  items: CauseItem[];
  exploreButton: ExploreCausesButton;
  cta: CausesCTA;
  banner: CausesBanner;
}

export interface CausesSectionProps {
  data: CausesData;
}

// ==============================
// Projects Section
// ==============================

export interface ProjectButton {
  label: string;
  href: string;
}

export interface ProjectCard {
  category: string;
  title: string;
  description: string;
  image: string;
  icon: "book" | "heart" | "drop" | "women";
  color: "orange" | "purple";
  button: ProjectButton;
}

export interface ProjectCTA {
  icon: "heart";
  title: string;
  description: string;
  button: ProjectButton;
}

export interface ProjectBanner {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
}

export interface ProjectSectionData {
  badge: {
    label: string;
  };

  heading: {
    title: string;
    highlight: string;
  };

  description: string;

  items: ProjectCard[];

  cta: ProjectCTA;
  banner: ProjectBanner;
}

export interface ProjectSectionProps {
  data: ProjectSectionData;
}

// ==============================
// Team Section
// ==============================

export interface TeamSocial {
  icon: "facebook" | "linkedin" | "instagram";
  href: string;
}

export interface TeamMember {
  name: string;
  textLink: string;
  designation: string;
  description: string;
  image: string;
  socials: TeamSocial[];
}

export interface teamBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
}

export interface TeamButton {
  label: string;
  href: string;
}

export interface TeamCTA {
  icon: "heart";
  title: string;
  description: string;
  button: TeamButton;
}

export interface TeamSectionData {
  badge: {
    label: string;
  };
  heading: {
    title: string;
    highlight: string;
  };
  description: string;
  banner: teamBanner;
  members: TeamMember[];
  cta: TeamCTA;
}

export interface TeamSectionProps {
  data: TeamSectionData;
}
// ================= Support Section =================

export interface SupportBadge {
  label: string;
  icon: string;
}

export interface SupportTitle {
  line1: string;
  highlight: string;
}

export interface SupportBanner {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
  title: string;
}

export interface SupportButton {
  label: string;
  href: string;
  icon: string;
}

export interface SupportTrustItem {
  icon: string;
  text: string;
}

export interface SupportImage {
  src: string;
  alt: string;
}

export interface SupportFloatingCard {
  title: string;
  pretitle: string;
  icon: string;
}

export interface SupportBackground {
  showDots: boolean;
  showCircle: boolean;
}

export interface SupportSection {
  badge: SupportBadge;
  title: SupportTitle;
  description: string;
  button: SupportButton;
  trustItems: SupportTrustItem[];
  image: SupportImage;
  floatingCard: SupportFloatingCard;
  signature: string;
  background: SupportBackground;
  banner: SupportBanner;
}

export interface SupportSectionProps {
  data: SupportSection;
}

// ================= Events Section =================

export interface EventBadge {
  label: string;
}

export interface EventTitle {
  line1: string;
  highlight: string;
}

export interface EventBanner {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
}

export interface EventButton {
  label: string;
  variant?: "primary" | "secondary";
  href: string;
}

export interface EventCard {
  title: string;
  image: string;
  href: string;
  button: EventButton;
}

export interface EventsSection {
  badge: EventBadge;
  title: EventTitle;
  description: string;
  events: EventCard[];
  banner: EventBanner;
}

export interface EventsSectionProps {
  data: EventsSection;
}

// ================= Gallery Section =================

export interface GalleryBadge {
  label: string;
}

export interface GalleryTitle {
  line1: string;
  highlight: string;
}

export interface Gallerybanner {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
}

export interface GalleryCategory {
  label: string;
  value: string;
  active?: boolean;
}

export interface GalleryImage {
  title: string;
  category: string;
  image: string;
}

export interface GalleryVideo {
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
}

export interface GalleryData {
  badge: GalleryBadge;
  title: GalleryTitle;
  description: string;
  categories: GalleryCategory[];
  images: GalleryImage[];
  videos: GalleryVideo[];
  banner: Gallerybanner;
}

export interface GallerySectionProps {
  data: GalleryData;
}

// ================= Partners Section =================

export interface PartnerBadge {
  label: string;
}

export interface PartnerTitle {
  line1: string;
  highlight: string;
}

export interface PartnersBanner {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
}

export interface PartnerItem {
  name: string;
  logo: string;
  website: string;
}

export interface PartnersData {
  badge: PartnerBadge;
  title: PartnerTitle;
  description: string;
  sectionTitle: string;
  partnersList: PartnerItem[];
  banner: PartnersBanner;
}

export interface PartnersSectionProps {
  data: PartnersData;
}

// ====================== TESTIMONIAL ======================

export interface TestimonialBadge {
  label: string;
}

export interface TestimonialTitle {
  line1: string;
  highlight: string;
}

export interface TestimonialBanner {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
}

export interface TestimonialReview {
  name: string;
  designation: string;
  image: string;
  rating: number;
}

export interface TestimonialItem {
  name: string;
  designation: string;
  image: string;
  rating: number;
  message: string;
}

export interface TestimonialData {
  badge: TestimonialBadge;
  title: TestimonialTitle;
  pretitle: string;
  description: string;
  review: TestimonialReview;
  testimonials: TestimonialItem[];
  banner: TestimonialBanner;
}

export interface TestimonialSectionProps {
  data: TestimonialData;
}

/* ===========================
   BLOG / NEWS SECTION
=========================== */

export interface NewsBadge {
  label: string;
}

export interface BlogBanner {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
}

export interface NewsTitle {
  line1: string;
  highlight: string;
}

export interface NewsButton {
  label: string;
  href: string;
}

export interface NewsArticle {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  author: string;
  href: string;
}

export interface NewsSectionData {
  badge: NewsBadge;
  title: NewsTitle;
  pretitle: string;
  button: NewsButton;
  articles: NewsArticle[];
  banner: BlogBanner;
}

export interface NewsSectionProps {
  data: NewsSectionData;
}
/* ===========================
   CONTACT SECTION
=========================== */

export interface ContactBadge {
  label: string;
}

export interface ContactTitle {
  line1: string;
  highlight: string;
}
export interface ContactCard {
  icon: string;
  title: string;
  description: string;
}

export interface MapCoordinates {
  lat: number;
  lng: number;
}

export interface ContactMap {
  locationTitle: string;
  locationpretitle: string;
  mapUrl: string;
  embedUrl: string;
  coordinates: MapCoordinates;
}

export interface ContactBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
}

export interface ContactInfoitem {
  label: string;
  value: string;
}

export interface ContactOffice {
  title: string;
  description: string;
  address: ContactInfoitem;
  phone: ContactInfoitem;
  email: ContactInfoitem;
  hours: ContactInfoitem;
}

export interface ContactField {
  label: string;
  placeholder: string;
}

export interface ContactFields {
  name: ContactField;
  email: ContactField;
  phone: ContactField;
  subject: ContactField;
  message: ContactField;
}

export interface ContactButton {
  label: string;
}

export interface ContactForm {
  title: string;
  pretitle: string;
  fields: ContactFields;
  button: ContactButton;
}

export interface ContactData {
  badge: ContactBadge;
  title: ContactTitle;
  description: string;
  office: ContactOffice;
  form: ContactForm;
  cards: ContactCard[];
  map: ContactMap;
  banner: ContactBanner;
}

export interface ContactSectionProps {
  data: ContactData;
}

/* ===========================
   FAQ SECTION
=========================== */

export interface FAQBadge {
  label: string;
}

export interface FAQTitle {
  line1: string;
  highlight: string;
}

export interface FAQImage {
  src: string;
  alt: string;
}

export interface FaqBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  badge: FAQBadge;
  title: FAQTitle;
  description: string;
  image: FAQImage;
  questions: FAQItem[];
  banner: FaqBanner;
}

export interface FAQSectionProps {
  data: FAQData;
}

/* ===========================
   SUCCESS STORIES SECTION
=========================== */

export interface SuccessStoriesBadge {
  label: string;
}

export interface SuccessStoriesTitle {
  line1: string;
  highlight: string;
}

export interface SuccessStoriesButton {
  label: string;
  href: string;
}

export interface SuccessStory {
  name: string;
  age: string;
  location: string;
  category: string;
  image: string;
  title: string;
  story: string;
  before: string;
  after: string;
  year: string;
}

export interface SuccessStoriesData {
  badge: SuccessStoriesBadge;
  title: SuccessStoriesTitle;
  pretitle: string;
  button: SuccessStoriesButton;
  stories: SuccessStory[];
}

export interface SuccessStoriesProps {
  data: SuccessStoriesData;
}

// career
export interface CareerBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
}

export interface CareerBadge {
  label: string;
}

export interface CareerHeading {
  title: string;
  highlight: string;
}

export interface CareerJob {
  id: string;
  title: string;
  location: string;
  employmentType: string;
  department: string;
  experience: string;
  description: string;
  image: string;
  href: string;
  label: string;
}

export interface CareerButton {
  label: string;
  href: string;
}

export interface CareerWhyWorkBenefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface CareerWhyWorkWithUs {
  badge: string;
  title: string;
  description: string;
  benefits: CareerWhyWorkBenefit[];
}

export interface CareerCTA {
  badge: string;
  title: string;
  description: string;
  button: CareerButton;
}

export interface CareerPageData {
  banner: CareerBanner;
  badge: CareerBadge;
  heading: CareerHeading;
  description: string;
  whyWorkWithUs: CareerWhyWorkWithUs;
  jobs: CareerJob[];
  cta: CareerCTA;
}

export interface CareerPageProps {
  data: CareerPageData;
}

// job details
export interface JobDetailsBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
}

export interface JobDetailsButton {
  label: string;
  href: string;
}

export interface JobPerk {
  title: string;
  icon: string;
}

export interface QuestionsSection {
  title: string;
  pretitle: string;
  buttonLabel: string;
  phone: string;
}

export interface ShareSection {
  title: string;
  pretitle: string;
  links: {
    linkedin: string;
    facebook: string;
    twitter: string;
    whatsapp: string;
  };
}

export interface JobDetailsLabels {
  home: string;
  jobOverview: string;
  keyResponsibilities: string;
  requirements: string;
  whatWeOffer: string;
  jobSummary: string;
  jobTitle: string;
  jobType: string;
  department: string;
  location: string;
  experience: string;
  vacancies: string;
  salary: string;
}

export interface CareerCTA {
  title: string;
  description: string;
  button: JobDetailsButton;
}

export interface JobDetailsData {
  id: string;

  labels: JobDetailsLabels;

  banner: JobDetailsBanner;

  title: string;

  location: string;
  employmentType: string;
  department: string;
  experience: string;
  vacancies?: string;

  salary: string;
  applicationDeadline: string;

  description: string;
  overview: string;

  responsibilities: string[];
  requirements: string[];
  skills: string[];

  perks?: JobPerk[];

  questionsSection?: QuestionsSection;

  shareSection?: ShareSection;

  cta?: CareerCTA;

  applyButton: JobDetailsButton;
}

export interface JobDetailsProps {
  data: JobDetailsData;
}
// application form
export type CareerApplicationFieldType =
  | "text"
  | "email"
  | "tel"
  | "select"
  | "file"
  | "textarea";

export interface CareerApplicationOption {
  label: string;
  value: string;
}

export interface CareerApplicationField {
  name: string;
  label: string;
  type: CareerApplicationFieldType;
  placeholder: string;
  required: boolean;
  options?: CareerApplicationOption[];
}

export interface CareerApplicationBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
}

export interface CareerApplicationBadge {
  label: string;
}

export interface CareerApplicationHeading {
  title: string;
  highlight: string;
}

export interface CareerApplicationButton {
  label: string;
  icon: string;
}

export interface CareerApplicationData {
  banner: CareerApplicationBanner;
  badge: CareerApplicationBadge;
  heading: CareerApplicationHeading;
  description: string;
  fields: CareerApplicationField[];
  button: CareerApplicationButton;
  note: string;
}

export interface CareerApplicationProps {
  data: CareerApplicationData;
}

export interface InputField {
  label: string;
  required: boolean;
  placeholder: string;
}

export interface TextareaField extends InputField {
  maxLength?: number;
  counterText?: string;
}

export interface FileUploadField {
  label: string;
  required: boolean;
  uploadTitle?: string;
  dragDropText: string;
  actionText: string;
  supportedFormats: string;
}

export interface JobSummaryDetail {
  label: string;
  value: string;
}

export interface JobApplyData {
  jobApply: {
    formSections: {
      personalInformation: {
        step: number;
        title: string;
        fields: {
          fullName: InputField;
          emailAddress: InputField;
          phoneNumber: InputField;
          currentLocation: InputField;
        };
      };
      professionalInformation: {
        step: number;
        title: string;
        fields: {
          currentJobTitle: InputField;
          totalExperience: InputField;
          relevantExperience: InputField;
          noticePeriod: InputField;
        };
      };
      uploadDocuments: {
        step: number;
        title: string;
        pretitle: string;
        fields: {
          resume: FileUploadField;
          coverLetter: FileUploadField;
        };
      };
      additionalInformation: {
        step: number;
        title: string;
        fields: {
          whyInterested: TextareaField;
          hearAboutUs: InputField;
        };
      };
    };
    actions: {
      backButton: {
        label: string;
        href: string;
      };
      submitButton: {
        label: string;
      };
    };
    sidebar: {
      jobSummary: {
        title: string;
        details: JobSummaryDetail[];
      };
      tipsBeforeYouApply: {
        title: string;
        tips: string[];
      };
      equalOpportunityEmployer: {
        title: string;
        description: string;
      };
      needHelp: {
        title: string;
        description: string;
        button: {
          label: string;
          href: string;
        };
      };
    };
  };
}

export interface ServiceHeader {
  subTag: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  sectionTag: string;
}

export interface ServicesBanner {
  bgImageUrl: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  link: string;
  label: string;
}

export interface CallToActionData {
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bannerImage: string;
}

export interface ServicesPageData {
  header: ServiceHeader;
  items: ServiceItem[];
  callToAction: CallToActionData;
  banner: ServicesBanner;
}

export interface ServicesPageProps {
  data: ServicesPageData;
}

export interface ServiceDetailPageData {
  banner: {
    bgImageUrl: string;
    breadcrumbCurrent: string;
    breadcrumbHome: string;
  };

  aboutSection: {
    tag: string;
    title: string;
    paragraphs: string[];

    features: {
      id: string;
      title: string;
      icon: string;
    }[];

    image: string;
    imageAlt: string;
  };

  whatWeDoSection: {
    tag: string;
    title: string;

    cards: {
      id: string;
      title: string;
      description: string;
      icon: string;
    }[];
  };

  impactSection: {
    tag: string;
    title: string;

    stats: {
      id: string;
      value: string;
      label: string;
      icon: string;
    }[];
  };

  getInvolvedSection: {
    tag: string;
    title: string;
    description: string;

    buttons: {
      primary: {
        label: string;
        href: string;
      };

      secondary: {
        label: string;
        href: string;
      };
    };

    image: string;
    imageAlt: string;
  };
}

export type TermsBanner = {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
};
export type TermsCondition = { id: string; title: string; content: string };
export type TermsData = { banner: TermsBanner; conditions: TermsCondition[] };

export interface TermsConditionProps {
  data: TermsData;
}

export type PrivacyBanner = {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
};
export type privacyPolicy = { id: string; title: string; content: string };
export type privacyPolicydata = {
  banner: PrivacyBanner;
  conditions: privacyPolicy[];
};

export interface privacyPolicyprops {
  data: privacyPolicydata;
}

export type refundBanner = {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
};
export type refundPolicy = { id: string; title: string; content: string };
export type refundPolicydata = {
  banner: refundBanner;
  conditions: refundPolicy[];
};

export interface refundPolicyprops {
  data: refundPolicydata;
}

export type cookieBanner = {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
};
export type cookiePolicy = { id: string; title: string; content: string };
export type cookiePolicydata = {
  banner: cookieBanner;
  conditions: cookiePolicy[];
};

export interface cookiePolicyprops {
  data: cookiePolicydata;
}

export type disclaimerBanner = {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
};
export type disclaimerPolicy = { id: string; title: string; content: string };
export type disclaimerPolicydata = {
  banner: disclaimerBanner;
  conditions: disclaimerPolicy[];
};

export interface disclaimerPolicyprops {
  data: disclaimerPolicydata;
}

export type SitemapBanner = {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
};

export type SitemapHeader = {
  title: string;
  pretitle: string;
};

export type SitemapHomeNode = {
  label: string;
  href: string;
  icon: string;
};

export type SitemapLinkItem = {
  label: string;
  href: string;
  icon: string;
  isCurrent?: boolean;
};

export type SitemapCategory = {
  id: string;
  title: string;
  icon: string;
  items: SitemapLinkItem[];
};

export type SitemapLegalNode = {
  title: string;
  icon: string;
  items: SitemapLinkItem[];
};

export type SitemapData = {
  banner: SitemapBanner;
  header: SitemapHeader;
  homeNode: SitemapHomeNode;
  categories: SitemapCategory[];
  legalNode: SitemapLegalNode;
};

export interface SitemapPageProps {
  data: SitemapData;
}

//Donate Now Banner
export type DonateNowBanner = {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
};

export type DonateNowHeaderTitle = {
  line1: string;
  highlight: string;
};

export type DonateNowHeader = {
  badge: string;
  title: DonateNowHeaderTitle;
  description: string;
};

export type WhyDonateTitle = {
  line1: string;
  highlight: string;
};

export type WhyDonateFeature = {
  id: string;
  title: string;
  description: string;
};

export type WhyDonateIllustration = {
  alt: string;
  src: string;
};

export type WhyDonate = {
  title: WhyDonateTitle;
  description: string;
  features: WhyDonateFeature[];
  illustration: WhyDonateIllustration;
};

export type DonationAmountOption = {
  amount: number | null;
  currencySymbol: string | null;
  label: string;
  pretitle?: string;
  isOther: boolean;
};

export type DonationAmountSection = {
  title: string;
  options: DonationAmountOption[];
};

export type DonorField = {
  label: string;
  placeholder: string;
  required: boolean;
};

export type DonorInfoFields = {
  fullName: DonorField;
  email: DonorField;
  phone: DonorField;
  country: DonorField;
};

export type DonorInfoSection = {
  title: string;
  fields: DonorInfoFields;
};

export type PaymentMethod = {
  id: string;
  title: string;
  pretitle: string;
};

export type PaymentMethodSection = {
  title: string;
  methods: PaymentMethod[];
};

export type NewsletterConsent = {
  label: string;
};

export type SubmitButton = {
  label: string;
};

export type SecurityNote = {
  text: string;
};

export type DonationForm = {
  amountSection: DonationAmountSection;
  donorInfoSection: DonorInfoSection;
  paymentMethodSection: PaymentMethodSection;
  newsletterConsent: NewsletterConsent;
  submitButton: SubmitButton;
  securityNote: SecurityNote;
};

export type ImpactStat = {
  value: string;
  label: string;
  description: string;
};

export type DonateNowData = {
  header: DonateNowHeader;
  banner: DonateNowBanner;
  whyDonate: WhyDonate;
  donationForm: DonationForm;
  impactStats: ImpactStat[];
};

export interface DonateNowProps {
  data: DonateNowData;
}

// Industry Page Types
export interface IndustryHeader {
  topBadge: string;
  title: {
    part1: string;
    part2: string;
  };
  pretitle: string;
  sectionTag: string;
}

export interface IndustryBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
}

export interface IndustrySectorImage {
  src: string;
  alt: string;
}

export interface IndustrySectorCTA {
  text: string;
  url: string;
}

export interface IndustrySector {
  id: string;
  title: string;
  description: string;
  image: IndustrySectorImage;
  iconName: string;
  cta: IndustrySectorCTA;
}

export interface IndustryPartnerBannerTitle {
  line1: string;
  line2: string;
}

export interface IndustryPartnerBannerCTA {
  text: string;
  url: string;
}

export interface IndustryPartnerMetric {
  id: string;
  value: string;
  label: string;
  iconName: string;
}

export interface IndustryPartnerBanner {
  title: IndustryPartnerBannerTitle;
  description: string;
  cta: IndustryPartnerBannerCTA;
  metrics: IndustryPartnerMetric[];
}
export interface IndustryPageData {
  header: IndustryHeader;
  banner: IndustryBanner;
  sectors: IndustrySector[];
  partnerBanner: IndustryPartnerBanner;
}

// ================= HERO BREADCRUMB =================
export interface awardBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
}

// ================= PAGE HEADER =================
export interface HeaderTitle {
  part1: string;
  part2: string;
}

export interface AwardsHeader {
  topBadge: string;
  title: HeaderTitle;
  pretitle: string;
}

// ================= STATS METRICS =================
export interface AwardStat {
  id: string;
  value: string;
  label: string;
  iconName: string;
}

// ================= INDIVIDUAL AWARD ITEM =================
export interface AwardImage {
  src: string;
  alt: string;
}

export interface AwardItem {
  id: string;
  title: string;
  description: string;
  year: string;
  image: AwardImage;
}

export interface AwardsSection {
  topBadge: string;
  title: string;
  awards: AwardItem[];
}

// ================= CALL TO ACTION BANNERS =================
export interface CTAButton {
  text: string;
  url: string;
}

export interface SupportBannerTitle {
  line1: string;
  line2: string;
}

export interface Supportbanner {
  topBadge: string;
  title: SupportBannerTitle;
  description: string;
  cta: CTAButton;
  iconName: string;
  trophyImage: AwardImage;
}

export interface TransparencyBanner {
  title: string;
  pretitle: string;
  iconName: string;
  cta: CTAButton;
}

export interface AwardsPageData {
  banner: awardBanner;
  header: AwardsHeader;
  stats: AwardStat[];
  awardsSection: AwardsSection;
  supportBanner: Supportbanner;
  transparencyBanner: TransparencyBanner;
}

export interface AwardsDataProps {
  data: AwardsPageData;
}

// ================= support =================

export interface SupportHeroLogo {
  src: string;
  alt: string;
}

export interface SupportHeroBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
}

export interface SupportHero {
  title: string;
  logo: SupportHeroLogo;
  banner: SupportHeroBanner;
}

export interface SupportIntroductionHeading {
  plainText: string;
  highlightedText: string;
}

export interface SupportIntroduction {
  topBadge: string;
  heading: SupportIntroductionHeading;
  description: string;
}

export interface SupportKeyValue {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface SupportKeyValues {
  values: SupportKeyValue[];
}

export interface SupportAction {
  label: string;
  url: string;
}

export interface SupportCard {
  id: string;
  iconName: string;
  title: string;
  description: string;
  action: SupportAction;
}

export interface WaysToSupport {
  topBadge: string;
  heading: string;
  supportCards: SupportCard[];
}

export interface SupportImpactStat {
  id: string;
  iconName: string;
  value: string;
  label: string;
}

export interface SupportImpactStats {
  topBadge: string;
  heading: string;
  stats: SupportImpactStat[];
  closingText: string;
}

export interface SupportCtaHeading {
  plainText: string;
  highlightedText: string;
}

export interface SupportCtaAction {
  label: string;
  url: string;
}

export interface SupportCtaBannerImage {
  src: string;
  alt: string;
}

export interface SupportCtaBanner {
  topBadge: string;
  heading: SupportCtaHeading;
  description: string;
  primaryAction: SupportCtaAction;
  secondaryAction: SupportCtaAction;
  bannerImage: SupportCtaBannerImage;
}

export interface SupportTransparencyAction {
  label: string;
  url: string;
}

export interface SupportTransparencyBar {
  iconName: string;
  title: string;
  pretitle: string;
  action: SupportTransparencyAction;
}

export interface SupportPageData {
  hero: SupportHero;
  introduction: SupportIntroduction;
  keyValues: SupportKeyValues;
  waysToSupport: WaysToSupport;
  impactStats: SupportImpactStats;
  ctaBanner: SupportCtaBanner;
  transparencyBar: SupportTransparencyBar;
}

export interface SupportDataProps {
  data: SupportPageData;
}

export interface CSRPageProps {
  banner: {
    breadcrumbCurrent: string;
    breadcrumbHome: string;
    bgImageUrl: string;
  };

  header: {
    topBadge: string;

    title: {
      part1: string;
      part2: string;
    };

    pretitle: string;
  };

  stats: {
    id: string;
    value: string;
    label: string;
    iconName: string;
  }[];

  focusAreas: {
    topBadge: string;
    title: string;
    description: string;

    items: {
      id: string;
      title: string;
      description: string;
      image: string;
      iconName: string;
    }[];
  };

  ourImpact: {
    topBadge: string;
    title: string;
    description: string;

    ctaButton: {
      text: string;
      action: string;
      href: string;
    };

    pillars: {
      id: string;
      title: string;
      description: string;
      iconName: string;
    }[];
  };

  csrProjects: {
    topBadge: string;
    title: string;
    description: string;

    items: {
      id: string;
      title: string;
      description: string;
      image: string;
    }[];
  };

  bannerCta: {
    title: string;
    description: string;
    buttonText: string;
    buttonAction: string;
    href: string;
  };

  coreValues: {
    topBadge: string;
    title: string;
    description: string;

    items: {
      id: string;
      title: string;
      description: string;
      iconName: string;
    }[];
  };
}

export interface EnquiryNowPageProps {
  type: "enquiryNowPage";

  banner: {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    bgImageUrl: string;
    title: string;
  };

  header: {
    icon: string;
    label: string;
    heading: string;
    description: string;
  };

  leftSection: {
    title: string;
    description: string;

    features: {
      icon: string;
      title: string;
      description: string;
    }[];

    image: {
      src: string;
      alt: string;
    };
  };

  form: {
    title: string;

    fields: {
      name: string;
      label: string;
      placeholder?: string;
      type: "text" | "email" | "tel" | "select" | "radio" | "textarea";
      required: boolean;
      icon?: string;

      options?: {
        value: string;
        label: string;
        default?: boolean;
      }[];
    }[];

    privacy: {
      prefix:string;
      text: string;
      links: {
        label: string;
        href: string;
      }[];
      required: boolean;
    };

    submitButton: {
      label: string;
      icon: string;
    };
  };

  contactSection: {
    title: string;
    pretitle: string;
    description: string;

    items: {
      icon: string;
      label: string;
      value: string;
    }[];
  };

  footerBanner: {
    icon: string;
    text: string;
    subtext: string;

    button: {
      label: string;
      icon: string;
      href: string;
    };
  };
}

export interface FranchisePageProps {
  banner: {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    bgImageUrl: string;
  };

  header: {
    icon: string;
    label: string;
    heading: string;
    description: string;
  };

  features: {
    icon: string;
    title: string;
    description: string;
  }[];

  leftSection: {
    label: string;
    title: string;
    description: string;
    points: string[];

    image: {
      src: string;
      alt: string;
    };
  };

  form: {
    title: string;
    pretitle: string;

    fields: {
      name: string;
      label: string;
      placeholder?: string;
      type: "text" | "email" | "tel" | "select" | "textarea";
      required: boolean;
      icon?: string;

      options?: {
        value: string;
        label: string;
      }[];
    }[];

    privacy: {
      prefix: string;
      links: {
        label: string;
        href: string;
      }[];
      required: boolean;
    };

    submitButton: {
      label: string;
      icon: string;
    };
  };

  processSection: {
    label: string;
    title: string;

    steps: {
      number: number;
      icon: string;
      title: string;
      description: string;
    }[];
  };

  contactBanner: {
    title: string;
    pretitle: string;
    description: string;
    phone: string;
    email: string;
    workingHours: string;

    image: {
      src: string;
      alt: string;
    };
  };
}

export interface BranchesPageProps {
  banner: {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    bgImageUrl: string;
    title: string;
  };

  header: {
    label: string;
    icon: string;
    heading: string;
    description: string;
  };

  stats: {
    icon: string;
    value: string;
    label: string;
    subLabel: string;
  }[];

  locationsSection: {
    label: string;
    title: string;

    branches: {
      city: string;
      address: string;
      phone: string;
    }[];

    mapSide: {
      title: string;
      description: string;
      mapImage: string;
    };
  };

  ctaBanner: {
    label: string;
    title: string;
    description: string;

    primaryButton: {
      label: string;
      href: string;
    };

    secondaryButton: {
      label: string;
      href: string;
    };

    image: {
      src: string;
      alt: string;
    };
  };

  contactBar: {
    items: {
      icon: string;
      label: string;
      value: string;
    }[];
  };
}

export interface BrochurePageProps {
  banner: {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    bgImageUrl: string;
    title: string;
  };

  header: {
    icon: string;
    label: string;
    heading: string;
    description: string;
  };

  features: {
    icon: string;
    title: string;
    description: string;
  }[];

  sectionTitle: {
    label: string;
    heading: string;
  };

  brochures: {
    id: string;
    title: string;
    pretitle: string;
    name: string;
    description: string;
    image: string;
    downloadUrl: string;
    downloadlabel: string;
  }[];

  ctaSection: {
    label: string;
    title: string;
    description: string;

    primaryButton: {
      label: string;
      href: string;
    };

    secondaryButton: {
      label: string;
      href: string;
    };

    stats: {
      icon: string;
      value: string;
      label: string;
    }[];
  };
}
export interface TeamDetailStat {
  value: string;
  label: string;
}

export interface TeamDetailContactInfo {
  email: string;
  phone: string;
  location: string;
  qualification: string;
  languages: string[];
}

export interface TeamDetailsBanner {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
  title: string;
}

export interface TeamDetailSocialLinks {
  facebook: string;
  linkedin: string;
  twitter: string;
}

export interface TeamDetailSkill {
  skill: string;
  percentage: number;
}

export interface TeamDetailExperience {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export interface TeamDetailAchievement {
  title: string;
  description: string;
}

export interface TeamDetailsData {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  banner: TeamDetailsBanner;
  stats: TeamDetailStat[];
  contactInfo: TeamDetailContactInfo;
  socialLinks: TeamDetailSocialLinks;
  about: string[];
  skills: TeamDetailSkill[];
  experience: TeamDetailExperience[];
  achievements: TeamDetailAchievement[];
}

export interface TeamDetailsProps {
  data: TeamDetailsData;
}

// Interfaces for the Sidebar Widgets
export interface CasedetailsPost {
  id: string;
  title: string;
  date: string;
  category?: string;
  image: {
    src: string;
    alt: string;
  };
  slug: string;
}

export interface SidebarCaseDetailsData {
  searchPlaceholder: string;
  popularPostsTitle: string;
  popularPosts: CasedetailsPost[];
}

// Interfaces for Main Content
export interface PrimaryArticle {
  title: string;
  mainImage: {
    src: string;
    alt: string;
  };
  paragraphs: string[];
}

export interface CaseDetailsBanner {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
}

export interface SecondaryArticle {
  postedOn: string;
  title: string;
  paragraphs: string[];
}

export interface CaseDetailPageMainContent {
  primaryArticle: PrimaryArticle;
  secondaryArticle: SecondaryArticle;
  pageTitle: string;
  mainContent: CaseDetailPageMainContent;
  sidebar: SidebarCaseDetailsData;
  banner: CaseDetailsBanner;
}

// Complete Page Data Interface
export interface CaseDetailPageProps {
  data: CaseDetailPageMainContent;
}

export interface BlogDetailImage {
  src: string;
  alt: string;
}

export interface BlogDetailsBanner {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
}

export interface BlogDetailMeta {
  publishedDate: string;
  author: string;
  readTime: string;
}

export interface BlogDetailQuote {
  quoteText: string;
}

export interface BlogDetailKeyElement {
  id: string;
  label: string;
}

export interface BlogDetailKeyElements {
  title: string;
  items: BlogDetailKeyElement[];
}

export interface BlogDetailSubSection {
  title: string;
  paragraphs: string[];
}

export interface BlogDetailMainContent {
  category: string;
  mainImage: BlogDetailImage;
  meta: BlogDetailMeta;
  title: string;
  introParagraphs: string[];
  quote: BlogDetailQuote;
  middleParagraphs: string[];
  galleryImages: BlogDetailImage[];
  keyElements: BlogDetailKeyElements;
  subSections: BlogDetailSubSection[];
}

export interface BlogDetailPopularPost {
  id: string;
  title: string;
  date: string;
  image: BlogDetailImage;
  slug: string;
}

export interface BlogDetailCtaWidget {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export interface BlogDetailSidebar {
  searchPlaceholder: string;
  popularPostsTitle: string;
  popularPosts: BlogDetailPopularPost[];
  ctaWidget: BlogDetailCtaWidget;
}

export interface BlogDetailData {
  pageTitle: string;
  mainContent: BlogDetailMainContent;
  sidebar: BlogDetailSidebar;
  banner: BlogDetailsBanner;
}

export interface BlogDetailsPageProps {
  data: BlogDetailData;
}

export interface EventDetailImage {
  src: string;
  alt: string;
}

export interface EventDetailsBanner {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
}

export interface EventDetailMeta {
  publishedDate: string;
}

export interface EventMapDetails {
  locationName: string;
  address: string;
  embedUrl: string;
}

export interface EventMissionSection {
  icon: string;
  title: string;
  description: string;
}

export interface EventLocationSection {
  icon: string;
  title: string;
  description: string;
  map: EventMapDetails;
}

export interface EventDetailMainContent {
  mainImage: EventDetailImage;
  meta: EventDetailMeta;
  title: string;
  introParagraphs: string[];
  middleParagraphs: string[];
  mission: EventMissionSection;
  location: EventLocationSection;
}

export interface EventDetailPopularPost {
  id: string;
  title: string;
  date: string;
  image: EventDetailImage;
  slug: string;
}

export interface EventDetailSidebar {
  searchPlaceholder: string;
  popularPostsTitle: string;
  popularPosts: EventDetailPopularPost[];
}

export interface EventDetailData {
  pageTitle: string;
  banner: EventDetailsBanner;
  mainContent: EventDetailMainContent;
  sidebar: EventDetailSidebar;
}

export interface EventDetailsPageProps {
  data: EventDetailData;
}

export interface ProjectDetailsBanner {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bgImageUrl: string;
}

export interface MetaDetail {
  label: string;
  value: string;
}

export interface Impactstat {
  icon?: string;
  value: string;
  label: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
}

export interface SidebarCallToAction {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface ProjectDetailsData {
  banner: ProjectDetailsBanner;

  badge: string;

  title: string;

  mainImage: {
    url: string;
    alt: string;
    badgeText: string;
  };

  summary: string;

  meta: {
    projectStarted: MetaDetail;
    location: MetaDetail;
    beneficiaries: MetaDetail;
  };

  overview: {
    title: string;
    paragraphs: string[];

    goalCard: {
      title: string;
      description: string;
    };
  };

  impactSoFar: {
    title: string;
    stats: Impactstat[];
  };

  gallery: {
    title: string;
    images: GalleryItem[];
  };

  keyHighlights: {
    title: string;
    items: string[];
  };

  ctaSidebar: SidebarCallToAction;
}

export type ProjectDetailsMap = Record<
  string,
  ProjectDetailsData
>;

export interface ProjectDetailsProps {
  data: ProjectDetailsData;
}

export interface MediaBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  bgImageUrl: string;
  title: string;
}

export interface MediaCardItem {
  title: string;
  logoUrl: string;
  articleUrl?: string;
}

export interface MediaContent {
  sectionTitle: string;
  viewAllText?: string;
  viewAllUrl?: string;
  mediaCards: MediaCardItem[];
}

export interface MediaData {
  banner: MediaBanner;
  content?: MediaContent;
}

export interface MediaProps {
  data: MediaData;
}
