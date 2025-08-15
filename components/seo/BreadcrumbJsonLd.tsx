"use client";

import { usePathname } from "next/navigation";
import { breadcrumbMap } from "@/app/config/breadcrumbs.config";


export default function BreadcrumbJsonLd() {
  const pathname = usePathname();
  const items = breadcrumbMap[pathname];

  if (!items) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
