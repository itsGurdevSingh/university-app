import React from "react";
import Profile from "../ui/Profile";
import Reating from "../ui/Reating.jsx";

const stroies = ({data}) => {
  return (
    <div className="relative w-full flex flex-col gap-12 lg:gap-28">
      <div className="flex gap-6">
        {/* placeholder */}
        <div className="hidden lg:block lg:top-0 lg:left-32 lg:w-1/3 lg:h-44 relative"></div>
        {/* comment */}
        <p className="w-full lg:w-2/3 px-6 text-center lg:text-start text-lg lg:text-xl font-semibold">
          {data.comment}
        </p>
      </div>

      {/* profile */}
      <div className="w-full lg:w-3/4 xl:w-1/2 py-4 md:py-8 lg:py-12 flex gap-4 flex-col md:flex-row md:max-w-[75vw] justify-between items-center ">
        <Profile data={data} />

        <Reating className="lg:translate-x-1/2" rating={data.rating} />
      </div>
    </div>
  );
};

export default stroies;
