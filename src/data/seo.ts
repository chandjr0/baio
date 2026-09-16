import { faq } from "./faq";

export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ??
  "https://baiohack.com";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords: string;
  ogImage?: string;
};

const sharedKeywords =
  "BaioHack, personalised wellness, health companion, calm health, adaptive wellness, sleep rhythm, wearable health, private beta";

export const pages = {
  home: {
    title: "BaioHack — Personalised Wellness That Evolves",
    description:
      "A calm health companion that adapts to your sleep, meals, movement, meds, hormones, stress, seasons, and real life.",
    path: "/",
    keywords: `${sharedKeywords}, intelligent wellness, early access`,
  },
  rhythm: {
    title: "Your Rhythm — BaioHack",
    description:
      "Your health is a rhythm, not a checklist. Explore how BaioHack understands sleep, meals, light, movement, meds, stress, travel, and hormones.",
    path: "/rhythm",
    keywords: `${sharedKeywords}, health rhythm, sleep, movement, hormones, stress recovery`,
  },
  howItWorks: {
    title: "How It Works — BaioHack",
    description:
      "Connect your signals, hold a daily rhythm steady, and evolve as life changes — calm rhythms for lives that keep changing.",
    path: "/how-it-works",
    keywords: `${sharedKeywords}, how it works, wearables, labs, daily rhythm, health guidance`,
  },
  why: {
    title: "Why BaioHack — Less Noise, More Signal",
    description:
      "Calm by design, evolving with you, and built as the quiet backbone beneath food, meds, wearables, and care teams.",
    path: "/why",
    keywords: `${sharedKeywords}, why BaioHack, signal over noise, founders, clinicians, athletes`,
  },
  faq: {
    title: "FAQ — BaioHack",
    description:
      "Answers about BaioHack early access, data privacy, beta timing, and how your health information is protected.",
    path: "/faq",
    keywords: `${sharedKeywords}, FAQ, beta access, data privacy, health data security`,
  },
  earlyAccess: {
    title: "Join the Early Wave — BaioHack",
    description:
      "Help shape BaioHack’s first version and be among the first to try a calmer way of doing health. Free beta access.",
    path: "/early-access",
    keywords: `${sharedKeywords}, early access, beta signup, waitlist`,
  },
} as const satisfies Record<string, PageSeo>;

/** @deprecated Use pages.home — kept for backward compatibility */
export const seo = pages.home;

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BaioHack",
  url: SITE_URL,
  description: pages.home.description,
  slogan: "The calm layer beneath the noise.",
  sameAs: [
    "https://www.linkedin.com/company/baiohack/",
    "https://www.instagram.com/baiohack_/",
    "https://www.tiktok.com/@baiohack_",
    "https://x.com/bAIohack",
  ],
};

export const sitemapPaths = [
  pages.home.path,
  pages.rhythm.path,
  pages.howItWorks.path,
  pages.why.path,
  pages.faq.path,
  pages.earlyAccess.path,
] as const;
