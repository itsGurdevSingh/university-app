import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import EventCard from "../ui/EventCard";
import events from "../../data/eventsData.js";

import "swiper/css";
import "swiper/css/navigation";

import prevIcon from "../../assets/svgs/prevIcon.svg";
import nextIcon from "../../assets/svgs/nextIcon.svg";

const EventsSection = () => {
  return (
    <div className="pt-20 px-8 xl:px-32">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
        <h2 className="text-5xl xl:text-6xl font-kaisei">Upcoming Events.</h2>
        <div className="flex gap-4">
          <img
            src={prevIcon}
            alt="Previous Slide"
            className="image-swiper-button-prev cursor-pointer"
            loading="lazy"
          />
          <img
            src={nextIcon}
            alt="Next Slide"
            className="image-swiper-button-next cursor-pointer"
            loading="lazy"
          />
        </div>
      </div>

      <div className="py-6">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
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
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <div className=" w-full">
                <EventCard event={event} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EventsSection;
