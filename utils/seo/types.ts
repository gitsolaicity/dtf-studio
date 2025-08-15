// utils/seo/types.ts

export type PageType =
  | "ServicePage"
  | "ServiceCollection"
  | "PrivacyPolicy"
  | "PublicOffer"
  | "ContactPage"
  | "TermsOfUse"
  | "AboutPage";

export interface StructuredDataOptions {
  type: PageType;
  title: string;
  description: string;
  url: string;
  dateModified?: string;
  logoUrl?: string;
  priceRange?: string;
  extra?: {
    contactPoint?: Record<string, any>;
    breadcrumb?: { name: string; url: string }[];
    faq?: { question: string; answer: string }[];
    [key: string]: any;
  };
}
