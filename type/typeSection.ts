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
  description: string;
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
  category: string;
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
  subtitle: string;
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
export interface AboutBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  backgroundImage: string;
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
  description: string;
  button: AboutCTAButton;
  secondaryButton: AboutCTAButton;
}

export interface AboutSection {
  badge: AboutBadge;
  title: AboutTitle;
  description: AboutDescription;
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
  description: string;
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
  description: string;
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
  backgroundImage: string;
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

export interface ProjectBanner{
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  backgroundImage: string;
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
  designation: string;
  description: string;
  image: string;
  socials: TeamSocial[];
}

export interface teamBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  backgroundImage: string;
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
  backgroundImage: string;
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
  subtitle: string;
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
  backgroundImage: string;
}

export interface EventButton {
  label: string;
  variant?: "primary" | "secondary";
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
  backgroundImage: string;
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
  backgroundImage: string;
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
  backgroundImage: string;
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
  subtitle: string;
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
  backgroundImage: string;
}

export interface NewsTitle {
  line1: string;
  highlight: string;
}

export interface NewsButton {
  label: string;
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
  subtitle: string;
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
  locationSubtitle: string;
  mapUrl: string;
  embedUrl: string;
  coordinates: MapCoordinates;
}

export interface ContactBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  backgroundImage: string;
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
  subtitle: string;
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
  backgroundImage: string;
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
  subtitle: string;
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
  backgroundImage: string;
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
  backgroundImage: string;
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
  subtitle: string;
  buttonLabel: string;
  email: string;
}

export interface ShareSection {
  title: string;
  subtitle: string;
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
  backgroundImage: string;
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
        subtitle: string;
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
  backgroundImage: string;
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

export interface ServiceDetailFeature {
  id: string;
  title: string;
  icon: string;
}

export interface ServiceDetailAbout {
  tag: string;
  title: string;
  paragraphs: string[];
  features: ServiceDetailFeature[];
  image: string;
  imageAlt: string;
}

export interface ServiceDetailProgram {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceDetailWhatWeDo {
  tag: string;
  title: string;
  cards: ServiceDetailProgram[];
}

export interface ServiceDetailStat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface ServiceDetailImpact {
  tag: string;
  title: string;
  stats: ServiceDetailStat[];
}

export interface ServiceDetailsBanner {
  backgroundImage: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
}

export interface ServiceDetailButton {
  label: string;
  href: string;
}

export interface ServiceDetailGetInvolved {
  tag: string;
  title: string;
  description: string;
  buttons: {
    primary: ServiceDetailButton;
    secondary: ServiceDetailButton;
  };
  image: string;
  imageAlt: string;
}

export interface ServiceDetailPageData {
  aboutSection: ServiceDetailAbout;
  whatWeDoSection: ServiceDetailWhatWeDo;
  impactSection: ServiceDetailImpact;
  banner: ServiceDetailsBanner;
  getInvolvedSection: ServiceDetailGetInvolved;
}

export interface ServiceDetailPageProps {
  data: ServiceDetailPageData;
}
export type TermsBanner = {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  backgroundImage: string;
};
export type TermsCondition = { id: string; title: string; content: string };
export type TermsData = { banner: TermsBanner; conditions: TermsCondition[] };

export interface TermsConditionProps {
  data: TermsData
}

export type PrivacyBanner = {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  backgroundImage: string;
};
export type privacyPolicy = { id: string; title: string; content: string };
export type privacyPolicydata = { banner: PrivacyBanner; conditions: privacyPolicy[] };

export interface privacyPolicyprops {
  data: privacyPolicydata
}

//Donate Now Banner 
export type DonateNowBanner = {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  backgroundImage: string;
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
  subtitle?: string;
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
  subtitle: string;
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
  subtitle: string;
  sectionTag: string;
}

export interface IndustryBanner {
  breadcrumbCurrent: string;
  breadcrumbHome: string;
  backgroundImage: string;
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
  backgroundImage: string;
}

// ================= PAGE HEADER =================
export interface HeaderTitle {
  part1: string;
  part2: string;
}

export interface AwardsHeader {
  topBadge: string;
  title: HeaderTitle;
  subtitle: string;
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

export interface SupportBanner {
  topBadge: string;
  title: SupportBannerTitle;
  description: string;
  cta: CTAButton;
  iconName: string;
  trophyImage: AwardImage;
}

export interface TransparencyBanner {
  title: string;
  subtitle: string;
  iconName: string;
  cta: CTAButton;
}

export interface AwardsPageData {
  banner: awardBanner;
  header: AwardsHeader;
  stats: AwardStat[];
  awardsSection: AwardsSection;
  supportBanner: SupportBanner;
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
  backgroundImage: string;
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
  subtitle: string;
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