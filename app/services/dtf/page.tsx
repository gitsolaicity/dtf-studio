// app/services/dtf/page.tsx

import { generateMetadata } from "@/utils/generateMetadata";
import { StructuredData } from "@/components/seo/StructuredData";
import DTFContent from "./DTFContent";

const { metadata, structuredData } = generateMetadata({
  type: "ServicePage",
  title: "DTF-друк — Blacklight",
  description: "Преміальний DTF-друк на замовлення",
  slug: "services/dtf",
  logoUrl: "https://blacklight365.com/logo.png",
  priceRange: "150",
});

export { metadata };

export default function DTFPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <DTFContent />
    </>
  );
}
