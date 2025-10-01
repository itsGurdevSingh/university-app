import React from "react";

// Import our new, powerful wrapper component
import AnimatedList from "../components/animations/AnimatedList.jsx";

// Import all of your section components
import HeroSection from "../components/sections/HeroSection";
import NewsSection from "../components/sections/NewsSection";
import ProgramsSection from "../components/sections/ProgramsSection";
import InnovationSection from "../components/sections/InnovationSection";
import EventsSection from "../components/sections/EventsSection";
import VideoSection from "../components/sections/VideoSection";
import StoriesSection from "../components/sections/StoriesSection";
import ResearchSection from "../components/sections/ResearchSection";
import HelpSection from "../components/sections/HelpSection";

const Home = () => {
  return (
    <>
        <HeroSection />
      <AnimatedList>
        <NewsSection />
        <div className="border-t border-gray-400/40 mx-12"></div>
        <ProgramsSection />
        <InnovationSection />
        <EventsSection />
        <VideoSection />
        <StoriesSection />
        <div className="border-t border-gray-400/40 mx-12"></div>
        <ResearchSection />
        <HelpSection />
      </AnimatedList>
    </>
  );
};

export default Home;

