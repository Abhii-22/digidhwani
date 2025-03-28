import { CtaSection } from "@/components/Medinitech/home/CtaSection";
import ServicesSlider from "@/components/Medinitech/home/FeaturesSection";
// import FeaturesSection from "@/components/Medinitech/home/FeaturesSection";
import HeroSection from "@/components/Medinitech/home/HeroSection1";
import ServicessSection from "@/components/Medinitech/home/ServicesSection";
import TestimonialsSection from "@/components/Medinitech/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full md:my-19">
      <HeroSection />
      <ServicesSlider />
      <ServicessSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}

