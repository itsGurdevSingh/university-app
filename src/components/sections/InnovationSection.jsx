import React from "react";
import inovation from "../../assets/images/programs_1.png";
import ArrowButton from "../ui/arrowButton";

const InnovationSection = () => {
  return (
    <div className="pt-20 md:pt-24 px-8 xl:px-32 flex flex-col md:flex-row items-center gap-5">
      <div className="w-full md:w-1/2">
        <img src={inovation} alt="" loading="lazy"/>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-12 justify-center items-center md:items-start text-center md:text-start pl-4 md:pl-12 xl:pl-14">
        <h2 className="text-5xl lg:text-6xl font-kaisei ">Where Knowledge Meets Innovation.</h2>
        <p>
          At Harbor University, we believe in nurturing minds and in for
          empowering future leaders through world-class education and a
          commitment to community impact.
        </p>

        <ArrowButton msg={'Get Started Now'}/>
      </div>
    </div>
  );
};

export default InnovationSection;
