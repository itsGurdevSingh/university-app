import React from "react";
import heplImg from "../../assets/images/help_1.png";
import ButtonArrow from "../../assets/svgs/svg-image-4.svg";

const HelpSection = () => {
  return (
    <div className="relative w-full aspect-video md:aspect-[16/6] lg:aspect-[16/7] overflow-hidden">
      <img
        src={heplImg}
        alt="hero image"
        className="w-full h-full relative brightness-75 object-cover object-bottom"
        loading="lazy"
      />

      <div className="w-[90vw] lg:w-1/2 text-center flex flex-col justify-center items-center text-white gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-4xl md:text-6xl font-kaisei leading-tight">
          We’re here to help you.
        </h2>
        <p className="text-lg lg:text-xl lg:px-16">
          We’re here to help you achieve your goals, overcome challenges and
          make every step smoother along the way.
        </p>
        <button className="bg-[#151515] px-6 py-3 flex gap-1 w-fit mx-auto hover:bg-red-600 transition-colors ">
          Get Started
          <img src={ButtonArrow} alt="arrow" loading="lazy"/>
        </button>
      </div>
    </div>
  );
};

export default HelpSection;
