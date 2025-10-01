import React from "react";
import NextArrow from "../../assets/svgs/arrow-right-circle.svg";


const ArrowButton = ({msg}) => {
  return (
    <div className="flex gap-2 text-md items-center ">
    <p>{msg}</p>
      <img src={NextArrow} alt="" className="h-6" />
    </div>
  );
};

export default ArrowButton;
