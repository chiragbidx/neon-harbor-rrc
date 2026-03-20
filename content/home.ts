import type {
  HeroContent,
  SponsorItem,
  SponsorsContent,
  BenefitItem,
  BenefitsContent,
  FeatureItem,
  FeaturesContent,
  ServiceItem,
  ServicesContent,
  TestimonialItem,
  TestimonialsContent,
  SocialLink,
  TeamMember,
  TeamContent,
  PricingPlan,
  PricingContent,
  ContactInfoBlock,
  ContactContent,
  FaqItem,
  FaqContent,
  FooterLink,
  FooterColumn,
  FooterContent,
  NavRoute,
  NavFeature,
  NavbarContent,
  HomeContent
} from "./home";

// ─── Defaults - ClientFlow Brand ────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "",
    badgeOuter: "",
    titleBefore: "",
    titleHighlight: "All-in-One Internal CRM for Teams",
    titleAfter: "",
    subtitle:
      "ClientFlow helps your team manage customer relationships, track deals, and organize interactions—all in one secure platform.",
    primaryCta: { label: "Get Started Free", href: "/auth#signup" },
    secondaryCta: { label: "See How It Works", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "ClientFlow dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Trusted integrations",
    items: [
      { icon: "Vercel", name: "Vercel" },
      { icon: "Stripe", name: "Stripe" },
      { icon: "OpenAI", name: "OpenAI" },
      { icon: "Supabase", name: "Supabase" }
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why ClientFlow",
    heading: "Streamline your customer relationships",
    description:
      "Built to help your team centralize customer info, manage deals, and keep activities organized—all in a collaborative dashboard.",
    items: [
      {
        icon: "UserCheck",
        title: "Centralized Customer Data",
        description: "Keep all your customer information and history in one organized place.",
      },
      {
        icon: "Handshake",
        title: "Track Deals & Interactions",
        description: "Monitor deals, record interactions, and never lose track of your sales pipeline.",
      },
      {
        icon: "Users",
        title: "Built for Teams",
        description: "Collaborate seamlessly with your teammates. Assign customers, share notes, and work together.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Why Choose ClientFlow?",
    subtitle:
      "A modern CRM platform for teams that want to stay organized and win more deals.",
    items: [
      { icon: "UserCheck", title: "Centralized Customer Data", description: "Keep all your customer information and history in one organized place." },
      { icon: "Handshake", title: "Track Deals & Interactions", description: "Monitor deals, record interactions, and never lose track of your sales pipeline." },
      { icon: "Users", title: "Built for Teams", description: "Collaborate seamlessly with your teammates. Assign customers, share notes, and work together." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "What ClientFlow Does",
    heading: "Core CRM capabilities",
    subtitle:
      "Everything your team needs to stay organized, from first contact to closed deal.",
    items: [
      { title: "Customer Management", description: "Store and update customer details, notes, and activity timeline.", pro: false },
      { title: "Pipeline Tracking", description: "Create and manage deals in a visual sales pipeline.", pro: false },
      { title: "Team Collaboration", description: "Assign customers, share notes, and keep your team aligned.", pro: false },
      { title: "Secure & Reliable", description: "Your CRM data is always secure and accessible.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "",
    heading: "Trusted by Growing Teams",
    reviews: [
      { image: "/team1.jpg", name: "Sarah L.", role: "Operations Manager", comment: "ClientFlow transformed how we manage our client data and sales process.", rating: 5.0 },
      { image: "/team2.jpg", name: "James K.", role: "Sales Lead", comment: "Finally, a CRM that our whole team actually enjoys using.", rating: 4.9 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the ClientFlow Team",
    members: [],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple pricing for growing teams",
    subtitle: "Start your free trial. Upgrade or cancel anytime.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free Trial",
        popular: true,
        price: 0,
        description: "Get started with all core CRM features for free.",
        buttonText: "Start Free Trial",
        benefits: [
          "Unlimited customers",
          "Pipeline & deal tracking",
          "Team collaboration",
          "Secure data"
        ],
      }
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to ClientFlow",
    description:
      "Looking to learn more or need help setting up ClientFlow? Reach out and our team will get in touch.",
    mailtoAddress: "chirag+4@bidx.ai",
    info: {
      address: { label: "Office", value: "Remote-first • ClientFlow HQ" },
      phone: { label: "Phone", value: "" },
      email: { label: "Email", value: "chirag+4@bidx.ai" },
      hours: { label: "Business Hours", value: ["Monday - Friday", "9AM - 6PM IST"] },
    },
    formSubjects: ["CRM Demo", "Sales Inquiry", "Partnership", "Support"],
    formSubmitLabel: "Send",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions",
    items: [
      { question: "Is ClientFlow easy to set up?", answer: "Absolutely! Get your workspace ready in minutes, no training required." },
      { question: "Can multiple users use the same account?", answer: "Yes, invite your teammates and collaborate together." },
      { question: "Can I import existing customers?", answer: "You’ll be able to import via CSV soon." },
      { question: "How secure is my data?", answer: "We use the latest standards to keep your business and customer data safe." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "ClientFlow",
    columns: [
      {
        heading: "Get in Touch",
        links: [
          { label: "chirag+4@bidx.ai", href: "mailto:chirag+4@bidx.ai" }
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Social",
        links: [
          { label: "GitHub", href: "https://github.com" }
        ],
      },
    ],
    copyright: "© 2026 ClientFlow. All rights reserved.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "ClientFlow",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#faq", label: "FAQ" },
      { href: "/#contact", label: "Contact" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/hero-image-light.jpeg", alt: "ClientFlow dashboard preview" },
    features: [
      { title: "Centralized Customer Data", description: "All your customer details and interaction history in one place." },
      { title: "Track Deals & Pipeline", description: "From initial contact to closed deal, your entire journey in one view." },
      { title: "Collaboration-Ready", description: "Assign and share with your teammates—no more siloed data!" },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Get Started Free",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}