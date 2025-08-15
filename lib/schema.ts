// lib/schema.ts

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Black Light",
  url: "https://blacklight365.com",
  logo: "https://blacklight365.com/logo.png",
  sameAs: [
    "https://instagram.com/blacklight365",
    "https://facebook.com/blacklight365"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+380689991414",
    contactType: "customer service",
    areaServed: "UA",
    availableLanguage: ["Ukrainian"]
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Black Light",
  url: "https://blacklight365.com",
  inLanguage: "uk",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://blacklight365.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  hasPart: [
    {
      "@type": "WebPage",
      name: "Послуги",
      url: "https://blacklight365.com/services"
    },
    {
      "@type": "WebPage",
      name: "Портфоліо",
      url: "https://blacklight365.com/portfolio"
    },
    {
      "@type": "WebPage",
      name: "Контакти",
      url: "https://blacklight365.com/contact"
    },
    {
      "@type": "WebPage",
      name: "Політика конфіденційності",
      url: "https://blacklight365.com/privacy-policy"
    },
    {
      "@type": "WebPage",
      name: "Публічна оферта",
      url: "https://blacklight365.com/public-offer"
    },
    {
      "@type": "WebPage",
      name: "Умови використання",
      url: "https://blacklight365.com/terms-of-use"
    }
  ]
}

export const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Black Light — Преміальний DTF-друк та вишивка",
  url: "https://blacklight365.com",
  mainEntityOfPage: {
    "@type": "Organization",
    name: "Black Light",
    url: "https://blacklight365.com"
  }
}
