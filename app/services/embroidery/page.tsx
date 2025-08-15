import { generateMetadata } from "@/utils/generateMetadata";
import { StructuredData } from "@/components/seo/StructuredData";
import EmbroideryContent from "./EmbroideryContent";

const { metadata, structuredData } = generateMetadata({
  type: "ServicePage",
  title: "Машинна вишивка — Blacklight",
  description: "Преміальна машинна вишивка логотипів та дизайнів на текстилі.",
  slug: "services/embroidery",
  logoUrl: "https://blacklight365.com/logo.png",
  priceRange: "200", // якщо є середня ціна
});

export { metadata };

export default function EmbroideryPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <EmbroideryContent />
    </>
  );
}
