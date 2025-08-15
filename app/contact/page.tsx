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
      telephone: "+380689991414",
      contactType: "customer support",
      areaServed: "UA",
      availableLanguage: ["uk", "en"],
    },
    breadcrumb: [
      { name: "Головна", url: "https://blacklight365.com" },
      { name: "Контакти", url: "https://blacklight365.com/contact" },
    ],
    faq: [
      {
        question: "Як зробити замовлення?",
        answer: "Заповніть форму, оберіть послугу та надішліть ескіз.",
      },
      {
        question: "Які формати файлів підтримуються?",
        answer: "Ми приймаємо .jpg, .png, .pdf до 5MB.",
      },
    ],
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
