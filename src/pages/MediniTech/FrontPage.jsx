import { CtaSection } from "@/components/Medinitech/home/CtaSection";
import ServicesSlider from "@/components/Medinitech/home/FeaturesSection";
import HeroSection from "@/components/Medinitech/home/HeroSection1";
import PartnersSection from "@/components/Medinitech/home/PartnersSection_fixed";
import TestimonialsSection from "@/components/Medinitech/home/TestimonialsSection";

export default function FrontPage() {
  return (
    <div className="flex flex-col w-full md:my-19">
      <HeroSection />
      <ServicesSlider />
      <PartnersSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}
