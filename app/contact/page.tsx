import { generateMetadata } from "@/utils/generateMetadata";
import { StructuredData } from "@/components/seo/StructuredData";
import ContactContent from "./ContactContent";

const { metadata, structuredData } = generateMetadata({
  type: "ContactPage",
  title: "Контакти — Blacklight",
  description: "Зв’яжіться з нами для замовлення друку, вишивки або консультації.",
  slug: "contact",
  logoUrl: "https://blacklight365.com/logo.png",
  extraStructuredData: {
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+380 68 999 1414",
      contactType: "customer support",
      areaServed: "UA",
      availableLanguage: ["uk", "en"],
    },
  },
});

export { metadata };

export default function ContactPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <ContactContent />
    </>
  );
}
