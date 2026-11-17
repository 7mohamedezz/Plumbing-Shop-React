import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import BrandsSection from "@/components/BrandsSection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaterLoader from "@/components/effects/WaterLoader";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { EFFECTS } from "@/lib/effects";

const Index = () => {
  const revealRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <div ref={revealRef} className={`min-h-screen${EFFECTS.cards ? " motion-cards" : ""}`}>
      <WaterLoader />
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <ProductsSection />
        <AboutSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
