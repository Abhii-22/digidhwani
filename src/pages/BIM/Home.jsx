
import BimContactSection from "@/components/BIM/Contact";
import HeroSection from "@/components/BIM/HeroSection";
import Feedback from "@/components/BIM/Feedback";

export default function BIMHome() {
  return (
    <div className="flex flex-col w-full md:my-19">
      <HeroSection />
      {/* <CoursesHero /> */}
      {/* <ServicessSection /> */}
      <Feedback />
      <BimContactSection />
    </div>
  )
}

