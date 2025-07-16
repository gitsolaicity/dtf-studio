
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <> <Navbar />
    <main className="min-h-screen bg-gray-700 text-gray-900 scroll-smooth">
       <HeroSection />
       <AboutSection />
       <ServicesSection />
       <PortfolioSection />
       <ContactSection />
       <Footer />
       </main>
       </>
  );
}

