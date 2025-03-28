import FeaturesSection from "@/components/Medinitech/home/FeaturesSection";
import HeroSection from "@/components/MediniSchool/HeroSection";
import ServicessSection from "@/components/Medinitech/home/ServicesSection";
import TestimonialsSection from "@/components/Medinitech/home/TestimonialsSection";
import { Courses } from "@/components/MediniSchool/Courses";
import { CoursesHero } from "@/components/MediniSchool/CoursesHero";
import { FaqSection } from "@/components/MediniSchool/FaqSection";
import { Contact } from "@/components/MediniSchool/Contact";
import CoursesPage from "./CoursePage";

export default function Home() {
  return (
    <div className="flex flex-col w-full md:my-19">
      <HeroSection />
      {/* <CoursesHero /> */}
      <CoursesPage />
      {/* <ServicessSection /> */}
      <FaqSection />
      <Contact />
      {/* <TestimonialsSection /> */}
      {/* <CtaSection /> */}
    </div>
  )
}

