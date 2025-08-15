import { generateStructuredData } from "./seo/generateStructuredData";
import { PageType } from "./seo/types";

interface MetadataOptions {
  type: PageType;
  title: string;
  description: string;
  slug: string;
  logoUrl?: string;
  priceRange?: string;
  dateModified?: string;
  extraStructuredData?: Record<string, any>;
}

export function generateMetadata({
  type,
  title,
  description,
  slug,
  logoUrl,
  priceRange,
  dateModified,
  extraStructuredData = {},
}: MetadataOptions) {
  const url = `https://blacklight365.com/${slug}`;

  // 🧭 Автоматический breadcrumb
  const breadcrumb = [
    { name: "Головна", url: "https://blacklight365.com" },
    { name: title.replace(/ — Blacklight$/, ""), url },
  ];

  const structuredData = generateStructuredData({
    type,
    title,
    description,
    url,
    logoUrl,
    priceRange,
    dateModified,
    extra: {
      ...extraStructuredData,
      breadcrumb,
    },
  });

  const metadata = {
    title,
    description,
    metadataBase: new URL("https://blacklight365.com"),
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Blacklight",
      images: [
        {
          url: logoUrl ?? "https://blacklight365.com/logo.png",
          width: 1200,
          height: 630,
          alt: "Blacklight",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [logoUrl ?? "https://blacklight365.com/logo.png"],
    },
  };

  return { metadata, structuredData };
}
