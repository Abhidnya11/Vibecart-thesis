import React from "react";
import {
  BsTwitterX,
  BsSnapchat,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div id="footer">
        <div className="w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 bg-gray-900">
          <div className="">
            <h1 className="w-full text-3xl text-orange-600 ">VibeCart</h1>
            <p className="text-white mt-2 w-[80%] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              incidunt cupiditate porro provident expedita possimus dolore
            </p>
            <div className="flex justify-between md:w-[60%] my-6 text-white ">
              <BsTwitterX size={26} />
              <BsSnapchat size={26} />
              <BsFacebook size={26} />
              <BsInstagram size={26} />
            </div>
          </div>

          {/* <ul className="hidden md:flex">
            <li className="p-4">Home</li>
            <li className="p-4">Company</li>
            <li className="p-4">Resources</li>
            <li className="p-4">About</li>
            <li className="p-4">Contact</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
