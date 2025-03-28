
// import { FaqSection } from "@/components/MediniSchool/FaqSection";
import HeroSection from "@/components/TechVritti/HeroSection";
import Feedback from "@/components/TechVritti/Feedback";
import ServicesPage from "@/components/TechVritti/Services";
import ContactSection from "@/components/TechVritti/Contact";

export default function TechvrittiHome() {
  return (
    <div className="flex flex-col w-full md:my-19">
      <HeroSection />
      {/* <CoursesHero /> */}
      <ServicesPage />
      <Feedback />
      <ContactSection />
    </div>
  )
}

