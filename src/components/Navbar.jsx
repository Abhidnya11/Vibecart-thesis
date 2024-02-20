import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { BsList, BsXCircle } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navHandle = () => {
    setNav(!nav);
  };

  return (
    <>
      <div id="Navbar">
        <div className="flex items-center justify-between h-24 max-w-[1240w] px-4 mx-auto ">
          {/* Logo */}
          <NavLink to={"/"}>
            <h1 id="Logo" className="text-3xl w-full ">
              VibeCart
            </h1>
          </NavLink>
          {/* Categories */}
          <ul id="Categories" className="hidden md:flex">
            <NavLink to={"/hoodies"}>
              <li className="hover:text-orange-600 p-4">Hoodie</li>
            </NavLink>
            <NavLink to={"/hoodies"}>
              <li className="hover:text-orange-600 p-4">Sweatshirt</li>
            </NavLink>
            <NavLink to={"/hoodies"}>
              <li className="hover:text-orange-600 p-4">Jersey</li>
            </NavLink>
          </ul>
          {/* Login and cart */}
          <div id="LoginandCart" className="hidden md:flex gap-10 items-center">
            <NavLink to={"/cart"}>
              <h2 className="relative ">
                <BsCart2 className="h-9 w-6 flex-shrink-0 " size={22} />
                <span className="absolute flex item-center justify-center left-[12px] bottom-6 h-[18px] min-w-[18px] text-sm border border-orange-600 rounded-full">
                  10
                </span>
              </h2>
            </NavLink>
            <NavLink to={"/account"}>
              <button className="flex gap-1 border rounded-lg py-1 px-2 hover:bg-orange-600 hover:text-white">
                <BsPerson size={22} /> Login
              </button>
            </NavLink>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <div
              id="HamburgerMenu"
              onClick={navHandle}
              className="block md:hidden"
            >
              {!nav ? <BsXCircle size={24} /> : <BsList size={24} />}
            </div>
            <div
              id="Menu"
              className={
                !nav
                  ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-grey-900 bg-white"
                  : "fixed left-[-100%] absolute"
              }
            >
              <NavLink to={"/"}>
                <h1 id="Logo" className="text-3xl w-full m-4">
                  VibeCart
                </h1>
              </NavLink>

              <ul id="Categories" className=" uppercase p-4">
                <NavLink to={"/hoodies"}>
                  <li className="hover:text-orange-600 p-4 border-b border-grey-600">
                    Hoodie
                  </li>
                </NavLink>
                <NavLink to={"/hoodies"}>
                  <li className="hover:text-orange-600 p-4 border-b border-grey-600">
                    Sweatshirt
                  </li>
                </NavLink>
                <NavLink to={"/hoodies"}>
                  <li className="hover:text-orange-600 p-4 border-b border-grey-600">
                    Jersey
                  </li>
                </NavLink>
                <NavLink to={"/cart"}>
                  <li className="border-b border-grey-600">
                    <button className="gap-1 border-2 rounded-lg py-1 px-2 hover:bg-orange-600 hover:text-white m-3 border-b border-grey-600 ">
                      <h2 className="relative flex items-center gap-4 ">
                        <BsCart2
                          className="h-9 w-6 flex-shrink-0 "
                          size={22}
                        ></BsCart2>
                        <h3>Cart</h3>
                        <span className="absolute flex item-center justify-center left-[12px] bottom-6 h-[18px] min-w-[18px] text-sm border border-orange-600 rounded-full ">
                          10
                        </span>
                      </h2>
                    </button>
                  </li>
                </NavLink>
                <NavLink to={"/account"}>
                  <li className="border-b border-grey-600">
                    <button className="flex gap-2.5 border-2 rounded-lg py-2.5 px-2 hover:bg-orange-600 hover:text-white m-3 ">
                      <BsPerson size={22} /> Login
                    </button>
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
