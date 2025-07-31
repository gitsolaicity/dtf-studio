
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import RoughDivider from "@/components/decor/RoughDivider";
import RoughDividerInvert from "@/components/decor/RoughDividerInvert";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-900 scroll-smooth">
       <Navbar />
       <HeroSection />
       <RoughDivider />
       <AboutSection />
       <RoughDividerInvert />
       <ServicesSection />
       <RoughDivider />
       <PortfolioSection />
       <RoughDividerInvert />
       <ContactSection />
       <RoughDivider />
       <Footer />
    </main>
  );
}

