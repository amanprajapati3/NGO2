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
  tagline: string;
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

export interface FooterSection {
  label: string;
  href: string;
  links: FooterLink[];
}


export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface FooterData {
  siteTitle?: string;
  tagline?: string;
  footer: FooterSection[];
  socials: SocialLink[];
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
  variant: "primary" | "secondary";
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

// =========================
// Background
// =========================
export interface AboutBackground {
  showGradient: boolean;
  showDecorations: boolean;
}

// =========================
// About Section
// =========================
export interface AboutSection {
  badge: AboutBadge;
  title: AboutTitle;
  description: AboutDescription;
  buttons: AboutButton[];
  gallery: AboutGallery;
  statistics: AboutStatistic[];
  background: AboutBackground;
}

// =========================
// Component Props
// =========================
export interface AboutSectionProps {
  data: AboutSection;
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

export interface ContactInfoItem {
  label: string;
  value: string;
}

export interface ContactOffice {
  title: string;
  description: string;
  address: ContactInfoItem;
  phone: ContactInfoItem;
  email: ContactInfoItem;
  hours: ContactInfoItem;
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
