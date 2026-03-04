import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import PortfolioSection from '../sections/PortfolioSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import ClientsSection from '../sections/ClientsSection';
import CTASection from '../sections/CTASection';
import ContactSection from '../sections/ContactSection';
import Footer from '../sections/Footer';
import StatsBanner from '../sections/StatsBanner';
import ClientLogoSlider from '../sections/ClientLogoSlider';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useEffect(() => {
    // Initialize global scroll snap for pinned sections
    const setupGlobalSnap = () => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);

      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
            if (!inPinned) return value;

            const target = pinnedRanges.reduce((closest, r) =>
              Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: "power2.out"
        }
      });
    };

    // Delay to ensure all ScrollTriggers are created
    const timer = setTimeout(setupGlobalSnap, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative bg-navy-900">
      <Navbar />

      <main className="relative">
        {/* Section 1: Hero - pin: true */}
        <HeroSection />

        {/* Section 1.5: Logo Slider & Stats */}
        <ClientLogoSlider />
        <StatsBanner />

        {/* Section 2: About - pin: false (flowing) */}
        <AboutSection />

        {/* Section 3: Services - pin: false (flowing) */}
        <ServicesSection />

        {/* Section 4: Portfolio - pin: false (flowing) */}
        <PortfolioSection />

        {/* Section 5: Why Choose Us - pin: false (flowing) */}
        <WhyChooseUsSection />

        {/* Section 6: Testimonials - pin: false (flowing) */}
        <TestimonialsSection />

        {/* Section 7: Clients - pin: false (flowing) */}
        <ClientsSection />

        {/* Section 8: CTA - pin: false (flowing) */}
        <CTASection />

        {/* Section 9: Contact - pin: false (flowing) */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
