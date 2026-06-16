import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import GallerySection from '../components/GallerySection';
import Hero from '../components/Hero';
import PriceSection from '../components/PriceSection';
import PromotionSection from '../components/PromotionSection';
import ServicesPreview from '../components/ServicesPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesPreview />
      <PriceSection />
      <PromotionSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
