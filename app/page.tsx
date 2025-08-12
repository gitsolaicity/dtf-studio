
import HeroSection from "@/components/herosection/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import RoughDivider from "@/components/decor/RoughDivider";
import RoughDividerInvert from "@/components/decor/RoughDividerInvert";
import OrderFormSection from "@/components/forms/OrderFormSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-900 scroll-smooth">
       <HeroSection />
       <RoughDivider />
       <AboutSection />
       <RoughDividerInvert />
       <ServicesSection />
       <RoughDivider />
       <PortfolioSection />
       <RoughDividerInvert />
       <OrderFormSection />
    </main>
  );
}

