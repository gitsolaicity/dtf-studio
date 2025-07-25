
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import RoughDivider from "@/components/RoughDivider";
import RoughDivider2 from "@/components/RoughDivider2";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-900 scroll-smooth">
       <Navbar />
       <HeroSection />
       <AboutSection />
       <ServicesSection />
       <PortfolioSection />
       <RoughDivider2 />
       <ContactSection />
       <RoughDivider />
       <Footer />
    </main>
  );
}

