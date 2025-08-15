import { generateMetadata } from "@/utils/generateMetadata";
import { StructuredData } from "@/components/seo/StructuredData";
import TermsOfUseContent from "./TermsOfUseContent";

const { metadata, structuredData } = generateMetadata({
  type: "TermsOfUse",
  title: "Умови користування — Blacklight",
  description: "Детально про правила користування сайтом та відповідальність сторін.",
  slug: "terms-of-use",
  logoUrl: "https://blacklight365.com/logo.png",
});

export { metadata };

export default function TermsOfUsePage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <TermsOfUseContent />
    </>
  );
}
