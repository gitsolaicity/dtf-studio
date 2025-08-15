import { generateMetadata } from "@/utils/generateMetadata";
import { StructuredData } from "@/components/seo/StructuredData";
import PublicOfferContent from "./PublicOfferContent";

const { metadata, structuredData } = generateMetadata({
  type: "PublicOffer",
  title: "Публічна оферта — Blacklight",
  description: "Ознайомтесь з умовами використання наших послуг та правовими зобов’язаннями.",
  slug: "public-offer",
  logoUrl: "https://blacklight365.com/logo.png",
});

export { metadata };

export default function PublicOfferPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <PublicOfferContent />
    </>
  );
}
