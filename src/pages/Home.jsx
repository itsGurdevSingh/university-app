import NewsSection from "../components/sections/NewsSection";
import ProgramsSection from "../components/sections/ProgramsSection";
import InnovationSection from "../components/sections/InnovationSection";
import EventsSection from "../components/sections/EventsSection";
import VideoSection from "../components/sections/VideoSection";
import StoriesSection from "../components/sections/StoriesSection";
import ResearchSection from "../components/sections/ResearchSection";
import HelpSection from "../components/sections/HelpSection";
import HeroSection from "../components/sections/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
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
    </>
  );
};

export default Home;
