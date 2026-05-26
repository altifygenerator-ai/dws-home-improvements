import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import QuoteSection from "@/components/QuoteSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <ServicesSection />
      <QuoteSection />
      <GallerySection />
      <AboutSection />
      <FinalCTA />
      <Footer />
      <StickyCallButton />
    </main>
  );
}