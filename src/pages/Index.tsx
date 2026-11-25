import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TaglineSection from "@/components/TaglineSection";
import BrandsSection from "@/components/BrandsSection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-lime focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
      >
        تخطَّ إلى المحتوى
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <BrandsSection />
        <ProductsSection />
        <TaglineSection />
        <AboutSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
