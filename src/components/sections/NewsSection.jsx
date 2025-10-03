import React from "react";
import NewsCard from "../ui/NewsCard";
import newsData from "../../data/newsData.js";
import ArrowButton from "../ui/ArrowButton.jsx";

const NewsSection = () => {
  return (
    <div className="pt-20 md:pt-24 px-8 xl:px-32">
      {/* heading */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <h2 className="text-5xl xl:text-6xl font-kaisei">Campus News.</h2>
        <ArrowButton msg={"See All News"} />
      </div>

      <div className="flex flex-col xl:flex-row gap-6 w-full min-h-[90vh] py-16">
        {/* left section */}
        <div className=" w-full xl:w-[47%]">
          <NewsCard newsData={newsData[0]} />
        </div>
        {/* right side */}
        <div className="flex flex-col gap-6 py-2 w-full xl:w-[53%]">
          {newsData.map((data) => {
            if (data.type !== "primary")
              return (
                <div key={data.id} className="w-full  min-h-52">
                  <NewsCard newsData={data} />
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
