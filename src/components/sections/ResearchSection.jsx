import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import researchData from "../../data/researchData.js";

import "swiper/css";
import "swiper/css/navigation";

import prevIcon from "../../assets/svgs/prevIcon.svg";
import nextIcon from "../../assets/svgs/nextIcon.svg";
import ResearchCard from "../ui/ResearchCard.jsx";

const ResearchSection = () => {
  return (
    <div className="pt-20 px-8 xl:px-32">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
        <h2 className="text-5xl xl:text-6xl font-kaisei">
          Research & Innovations.
        </h2>
        <div className="hidden md:flex gap-4">
          <img
            src={prevIcon}
            alt="Previous Slide"
            className="research-button-prev cursor-pointer"
            loading="lazy"
          />
          <img
            src={nextIcon}
            alt="Next Slide"
            className="research-button-next cursor-pointer"
            loading="lazy"
          />
        </div>
      </div>

      <div className="py-20">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".research-button-next",
            prevEl: ".research-button-prev",
          }}
          // Default settings for mobile
          slidesPerView={1}
          spaceBetween={10}
          // Responsive settings using breakpoints
          breakpoints={{
            // when window width is >= 768px (md)
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            // when window width is >= 1024px (lg)
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {researchData.map((data) => (
            <SwiperSlide key={data.id}>
                <ResearchCard research={data} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center items-center py-8 gap-4 md:hidden">
          <img
            src={prevIcon}
            alt="Previous Slide"
            className="research-button-prev cursor-pointer"
            loading="lazy"
          />
          <img
            src={nextIcon}
            alt="Next Slide"
            className="research-button-next cursor-pointer"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;
