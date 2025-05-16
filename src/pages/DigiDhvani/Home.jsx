import React from "react";
import HeroSection from "@/components/DigiDhvani/HeroSection";
import ServicesComponent from "@/components/DigiDhvani/Services";
import { FaqSection } from "@/components/DigiDhvani/FaqSection";

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