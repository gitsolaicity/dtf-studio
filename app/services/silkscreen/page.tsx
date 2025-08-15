import { generateMetadata } from "@/utils/generateMetadata";
import { StructuredData } from "@/components/seo/StructuredData";
import SilkscreenContent from "./SilkscreenContent";

const { metadata, structuredData } = generateMetadata({
  type: "ServicePage",
  title: "Шовкотрафаретний друк — Blacklight",
  description: "Якісний шовкотрафаретний друк на футболках, худі та іншому текстилі.",
  slug: "services/silkscreen",
  logoUrl: "https://blacklight365.com/logo.png",
  priceRange: "150", // якщо є середня ціна
});

export { metadata };

export default function SilkscreenPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <SilkscreenContent />
    </>
  );
}
