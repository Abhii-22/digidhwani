import { CtaSection } from "@/components/home/CtaSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection1";
import ServicessSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <FeaturesSection />
      <ServicessSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}

