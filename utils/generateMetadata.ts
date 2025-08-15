import { generateStructuredData, PageType } from "./structuredData";

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
  extraStructuredData,
}: MetadataOptions) {
  const url = `https://blacklight365.com/${slug}`;

  const metadata = {
    title,
    description,
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

  const structuredData = generateStructuredData({
    type,
    title,
    description,
    url,
    logoUrl,
    priceRange,
    dateModified,
    extra: extraStructuredData, // 👈 прокидаємо сюди
  });

  return { metadata, structuredData };
}
