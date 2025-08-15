// utils/seo/generateStructuredData.ts

import {
  getOrganization,
  getMainEntity,
  getBreadcrumb,
  getFAQ,
} from "./structuredBlocks";
import type { PageType, StructuredDataOptions } from "./types";

export function generateStructuredData({
  type,
  title,
  description,
  url,
  dateModified,
  logoUrl,
  priceRange,
  extra = {},
}: StructuredDataOptions) {
  const organization = getOrganization(logoUrl);

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
      ...(extra.contactPoint && { contactPoint: extra.contactPoint }),
      ...(extra.faq && { mainEntity: getFAQ(extra.faq) }),
      ...(extra.breadcrumb && { breadcrumb: getBreadcrumb(extra.breadcrumb) }),
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
      mainEntity: getMainEntity(logoUrl),
      ...(extra.contactPoint && { contactPoint: extra.contactPoint }),
      ...(extra.faq && { mainEntity: getFAQ(extra.faq) }),
      ...(extra.breadcrumb && { breadcrumb: getBreadcrumb(extra.breadcrumb) }),
    };
  }

  // fallback
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
    ...(extra.faq && { mainEntity: getFAQ(extra.faq) }),
    ...(extra.breadcrumb && { breadcrumb: getBreadcrumb(extra.breadcrumb) }),
  };
}
