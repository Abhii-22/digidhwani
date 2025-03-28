import TeamechFeedbackSection from "@/components/Teamech/Feedback";
import TeamechHeroSection from "@/components/Teamech/HeroSection";
import TeamechServicesComponent from "@/components/Teamech/Services";
import ContactSection from "@/components/TechVritti/Contact";

export default function TeamechHome() {
  return (
    <div className="flex flex-col w-full md:my-19">
      <TeamechHeroSection />
      {/* <CoursesHero /> */}
      <TeamechServicesComponent />
      <TeamechFeedbackSection />
      <ContactSection />
    </div>
  )
}

