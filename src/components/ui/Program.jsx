import React from "react";
import NextArrow from "../../assets/svgs/arrow-right-circle.svg";

const Program = ({ program }) => {
  return (
    // 1. Add the `group` class to the parent `li` element.
    <li className="group border-b border-gray-500/40 transition-all duration-500 ease-in-out hover:border-gray-800 py-4 pt-8 px-1 text-2xl font-medium w-full md:w-[48%] xl:w-[30%] flex justify-between items-center">
      <p>{program}</p>
      {/* 2. Add transition and group-hover classes to the child `img` element. */}
      <img
        src={NextArrow}
        alt="arrow icon"
        className="h-6 transition-transform duration-500 ease-in-out group-hover:-rotate-45"
        loading="lazy"
      />
    </li>
  );
};

export default Program;