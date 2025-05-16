import React from "react";
import HeroSection from "@/components/BuilddSpace/HeroSection";
import ServicesComponent from "@/components/BuilddSpace/Services";
import { FaqSection } from "@/components/BuilddSpace/FaqSection";

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
