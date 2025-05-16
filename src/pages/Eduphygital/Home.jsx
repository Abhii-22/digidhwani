import React from "react";
import HeroSection from "@/components/Eduphygital/HeroSection";
import ServicesComponent from "@/components/Eduphygital/Services";
import { FaqSection } from "@/components/Eduphygital/FaqSection";

const Home = () => {
  return (
    <div className="flex flex-col w-full md:my-19">
      <HeroSection />
      <ServicesComponent />
      <FaqSection />
    </div>
  );
};

export default Home;
