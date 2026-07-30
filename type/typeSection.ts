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

export interface HeaderCTA{
  label: string;
  href: string;
}

export interface TopBarData {
  address: string;
  phone: string;
  phoneHref: string;
  socialLinks: SocialLinkItem[];
  headerCta: HeaderCTA
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
  variant?: 'primary' | 'secondary';
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

export interface teamBanner{
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

export interface GalleryData {
  badge: GalleryBadge;
  title: GalleryTitle;
  description: string;
  categories: GalleryCategory[];
  images: GalleryImage[];
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
export interface ContactBreadcrumbItem {
  label: string;
  href: string;
}

export interface ContactBreadcrumbImage {
  src: string;
  alt: string;
}

export interface ContactBreadcrumb {
  home: ContactBreadcrumbItem;
  current: ContactBreadcrumbItem;
  title: string;
  backgroundImage: ContactBreadcrumbImage;
  overlay: boolean;
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
  breadcumb:ContactBreadcrumb;
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

export interface ServicesBanner{
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
  label:string;
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

export interface ServiceDetailsBanner{
  backgroundImage:string;
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
  banner : ServiceDetailsBanner;
  getInvolvedSection: ServiceDetailGetInvolved;
}

export interface ServiceDetailPageProps {
  data: ServiceDetailPageData;
}