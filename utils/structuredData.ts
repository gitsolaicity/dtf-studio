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
  priceRange?: string; // тільки для ServicePage
  extra?: Record<string, any>; // для ContactPoint, FAQ, BreadcrumbList тощо
}

export function generateStructuredData({
  type,
  title,
  description,
  url,
  dateModified,
  logoUrl,
  priceRange,
  extra,
}: StructuredDataOptions) {
  const organization = {
    "@type": "Organization",
    name: "Blacklight",
    url: "https://blacklight365.com",
    ...(logoUrl && {
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    }),
  };

  // 🎯 Спеціальні типи
  if (type === "ServicePage") {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: title,
      description,
      serviceType: title,
      url,
      provider: organization,
      areaServed: {
        "@type": "Country",
        name: "Ukraine",
      },
      ...(priceRange && {
        offers: {
          "@type": "Offer",
          priceCurrency: "UAH",
          price: priceRange,
          url,
        },
      }),
      ...(extra ?? {}),
    };
  }

  if (type === "ServiceCollection") {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: title,
      description,
      url,
      publisher: organization,
      hasPart: [],
      ...(extra ?? {}),
    };
  }

  if (type === "ContactPage") {
    return {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: title,
      description,
      url,
      publisher: organization,
      ...(extra ?? {}),
    };
  }

  // 🧭 Мапінг для типів в `about`
  const typeMap: Record<PageType, string> = {
    PrivacyPolicy: "PrivacyPolicy",
    PublicOffer: "TermsOfService",
    TermsOfUse: "TermsOfService",
    AboutPage: "AboutPage",
    ContactPage: "ContactPage",
    ServicePage: "Service",
    ServiceCollection: "CollectionPage",
  };

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    ...(dateModified && { dateModified }),
    about: {
      "@type": typeMap[type],
      name: title,
      description,
    },
    publisher: organization,
    ...(extra ?? {}),
  };
}
