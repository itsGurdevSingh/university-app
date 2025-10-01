import React from "react";
import NextArrow from "../../assets/svgs/arrow-right-circle.svg";


const ResearchCard = ({ research }) => {

     const {date, category, title, description } = research
  return (
    <div className="w-full bg-[#E3E5E5] aspect-square px-8 py-6 flex flex-col gap-4 relative">
      <div className="flex items-center gap-2">
        <span className="bg-white rounded-full px-4 py-1 text-sm text-gray-800">{date}</span>
        <h5 className="text-sm text-gray-700">{category}</h5>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600 font-medium">{description}</p>
      </div>

      <div>
        <img src={NextArrow} alt="" className="h-7 absolute right-8 bottom-8" />
      </div>
    </div>
  );
};

export default ResearchCard;
