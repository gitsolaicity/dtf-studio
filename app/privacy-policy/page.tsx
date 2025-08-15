import { generateMetadata } from "@/utils/generateMetadata";
import { StructuredData } from "@/components/seo/StructuredData";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

const { metadata, structuredData } = generateMetadata({
  type: "PrivacyPolicy",
  title: "Політика конфіденційності — Blacklight",
  description: "Дізнайтесь, як ми збираємо, використовуємо та захищаємо ваші дані.",
  slug: "privacy-policy",
  logoUrl: "https://blacklight365.com/logo.png",
});

export { metadata };

export default function PrivacyPolicyPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <PrivacyPolicyContent />
    </>
  );
}
