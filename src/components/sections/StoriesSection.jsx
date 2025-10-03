import React from "react";
import Stories from "../ui/Stroies.jsx";
import storiesData from "../../data/storiesData.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import prevIcon from "../../assets/svgs/prevIcon.svg";
import nextIcon from "../../assets/svgs/nextIcon.svg";

const StoriesSection = () => {
  return (
    <div className="py-20 px-8 md:py-24 lg:px-32 ">
      {/* heading */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-8 items-center lg:absolute z-10">
        <h2 className="text-5xl xl:text-6xl font-kaisei bg-white lg:w-1/4 lg:h-44 ">Stories.</h2>
      </div>

      {/* 1. Create a wrapper div with position: relative */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".stories-button-next",
            prevEl: ".stories-button-prev",
          }}
          slidesPerView={1}
          spaceBetween={10}
        >
          {storiesData.map((data) => (
            <SwiperSlide key={data.id}>
              {/* This component renders the story, comment, profile etc. */}
              <Stories data={data} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/*navigation buttons */}
        <div className="flex gap-4 justify-center md:justify-end mt-4 lg:absolute lg:right-0 lg:bottom-16 z-10">
          <img
            src={prevIcon}
            alt="Previous Slide"
            className="stories-button-prev cursor-pointer"
            loading="lazy"
          />
          <img
            src={nextIcon}
            alt="Next Slide"
            className="stories-button-next cursor-pointer"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default StoriesSection;