import HeroSection from "@/components/MediniSchool/HeroSection";
import { FaqSection } from "@/components/MediniSchool/FaqSection";
import { Contact } from "@/components/MediniSchool/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full md:my-19">
      <HeroSection />
      <FaqSection />
      <Contact />
    </div>
  )
}

