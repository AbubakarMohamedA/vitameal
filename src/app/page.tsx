import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import {ProcessSection} from "@/components/ProcessSection";
import {ContactSection} from "@/components/ContactSection";
import {Footer} from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />     
    </>
  );
}
