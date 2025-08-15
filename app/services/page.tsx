import { generateMetadata } from "@/utils/generateMetadata";
import { StructuredData } from "@/components/seo/StructuredData";
import ServicesContent from "./ServicesContent";

const { metadata, structuredData } = generateMetadata({
  type: "ServiceCollection",
  title: "Послуги друку та брендування — Blacklight",
  description: "Всі послуги Blacklight: DTF друк, машинна вишивка, шовкотрафарет і більше.",
  slug: "services",
  logoUrl: "https://blacklight365.com/logo.png",
});

export { metadata };

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <ServicesContent />
    </>
  );
}
