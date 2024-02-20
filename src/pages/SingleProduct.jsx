import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hoodie from "../canvas/Hoodie";

// import Hoodie from "../canvas/Hoodie";

const SingleProduct = () => {
  return (
    <div>
      <Navbar />
      <div
        id="hero"
        className="md:flex max-w-[1400px] mt-[-96] w-full h-screen mx-auto gap-10"
      >
        <div
          id="hero-part1"
          className="flex flex-col md:w-[100%] h-[60%] md:h-[100%] py-4 px-10"
        >
          {/* <img src={Main} className="h-[100%]" alt="" /> */}
          <Hoodie />
        </div>

        <div id="hero-part2" className="md:w-[45%] px-4 md:px-0 ">
          {/* <img src={Main} className="h-[100%]" alt="" /> */}
          <p className="mt-6 mb:mt-0 mb-4 text-orange-600 inline-block border border-orange-600 px-2 rounded-xl">
            Hoodie AI
          </p>
          <h2 className="md:text-4xl sm:text-2xl text-xl  pb-2 ">
            Cotton Hoodie
          </h2>
          <h3 className="text-md sm:text-lg md:text-xl pb-2 font-medium mb-6">
            100€
          </h3>
          <h3 className="text-md sm:text-lg md:text-xl pb-2 font-medium  mb-1">
            Write your AI Prompt
          </h3>
          <textarea
            className="border-2 w-full py-1 px-2 rounded-md"
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
          ></textarea>
          <div className="mt-4">
            <h2 className="text-xl font-medium  mb-2">Size</h2>
            <ul className="flex gap-4">
              <li className="border border-orange-600 rounded-3xl px-2 py-1">
                <input type="button" value="XS" />
              </li>
              <li className="border border-orange-600 rounded-3xl px-3 py-1">
                <button>S</button>
              </li>
              <li className="border border-orange-600 rounded-3xl px-3 py-1">
                <button>M</button>
              </li>
              <li className="border border-orange-600 rounded-3xl px-3 py-1">
                <button>L</button>
              </li>
              <li className="border border-orange-600 rounded-3xl px-2 py-1">
                <button>XL</button>
              </li>
              <li className="border border-orange-600 rounded-3xl px-2 py-1">
                <button>2XL</button>
              </li>
            </ul>
          </div>
          <div className="mt-6 md:mt-20 ">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border rounded-lg mt-2 bg-orange-600 text-white hover:text-gray-900   hover:bg-orange-500">
              Generate Design <BsArrowRight />
            </button>

            <NavLink to={"/singleproduct/:id"}>
              <button className=" w-full flex items-center justify-center gap-2 px-4 py-2 border rounded-lg mt-4 Hover:bg-orange-600 hover:text-white hover:bg-orange-500 bg-white ">
                Buy Now <BsArrowRight />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      {/* <NewDesign /> */}
      <Footer />
    </div>
  );
};

export default SingleProduct;
