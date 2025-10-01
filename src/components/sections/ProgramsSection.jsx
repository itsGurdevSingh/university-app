import React from "react";
import programs from "../../data/programs";
import ArrowButton from "../ui/arrowButton";
import Program from "../ui/Program";

const ProgramsSection = () => {
  return (
    <div className="pt-20 md:pt-24 px-8 xl:px-32">
      {/* heading */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-5xl xl:text-6xl font-kaisei">
            Browse programs by.
          </h2>
          <p>
            This user-friendly tool offers options to filter programs by field
            of study,
            <br className="hidden md:block" /> degree level, and even learning
            formats like online or on-campus.
          </p>
        </div>
        <ArrowButton msg={"Explore All"} />
      </div>

      <div className="py-12">
        <ul className="w-full flex flex-wrap justify-between">
          {programs.map((prog) => (
            <Program program={prog} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgramsSection;
