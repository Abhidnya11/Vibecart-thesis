import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

import img1 from "../components/assets/Main.jpeg";

const Productcard = () => {
  return (
    <div className="py-6 ">
      <div className="md:w-full md:h-[100%] hover:scale-105 duration-300">
        <img className=" h-[100%] shadow-xl rounded-lg " src={img1} alt="" />
        <div className="flex justify-between pt-6 pb-2">
          <h2 className="text-lg md:text-xl">Hello</h2>
          <div className="">
            <div className="flex justify-end mb-1">
              <BsStarFill size={12} />
              <BsStarFill size={12} />
              <BsStarFill size={12} />
              <BsStarFill size={12} />
              <BsStarHalf size={12} />
            </div>
            <h4 className="text-xs">Reviews(40+)</h4>
          </div>
        </div>
        <h2 className="text-lg md:text-xl">400$</h2>
      </div>
    </div>
  );
};

export default Productcard;
