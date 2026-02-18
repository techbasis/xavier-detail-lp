import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { VideoSection } from "@/components/video-section";
import { AboutSection } from "@/components/about-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { StarField } from "@/components/star-field";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <StarField />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <VideoSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
