// utils/seo/structuredBlocks.ts

export const getOrganization = (logoUrl?: string) => ({
  "@type": "Organization",
  "@id": "https://blacklight365.com/#organization",
  name: "Blacklight",
  url: "https://blacklight365.com",
  ...(logoUrl && {
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
  }),
  sameAs: [
    "https://instagram.com/blacklight365",
    "https://facebook.com/blacklight365",
  ],
});

export const getMainEntity = (logoUrl?: string) => getOrganization(logoUrl);

export const getBreadcrumb = (items: { name: string; url: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const getFAQ = (faqItems: { question: string; answer: string }[]) =>
  faqItems.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  }));
