import React from "react";
import { people } from "../data/People";
import { IoMdNotifications } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import "../Styles/Navbar.css"; // Import external CSS for animations
import Sidebar from "./Sidebar";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div style={{ backgroundColor: "#d61856" }} className="w-full flex justify-evenly gap-2 p-5">
        {/* Logo */}
        <h1 className="font-bold text-4xl text-white">Logo</h1>

        {/* People Avatars */}
        <div className="rounded-full flex gap-3 ml-20 mt-10">
          <FaArrowAltCircleLeft className="mt-6 text-3xl" />
          {people.map((e, i) => (
            <img
              key={i}
              className="h-[80px] w-[80px] rounded-full object-cover cursor-pointer"
              src={e.Image}
              alt=""
            />
          ))}
          <FaArrowAltCircleRight className="mt-6 text-3xl" />
        </div>

        {/* Animated Button */}
        <div className="mt-12 relative">
          <button className="relative bg-pink-500 px-7 py-2 rounded font-bold text-start text-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 group overflow-hidden">
            Dating Tips <br />
            <span className="text-3xl text-black inline-block wiggle">Using AI</span>

            {/* Sparkles */}
            <span className="absolute inset-0 pointer-events-none">
              <span className="absolute w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 sparkle top-1 left-1"></span>
              <span className="absolute w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 sparkle top-4 right-4"></span>
              <span className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 sparkle bottom-2 left-6"></span>
            </span>
          </button>
        </div>

        {/* Notification Icons */}
        <div className="flex gap-6 mt-4">
          <div className="relative">
            <IoMdNotifications className="text-white text-4xl cursor-pointer p-2 rounded-full transition-all duration-300 ease-in-out transform group hover:scale-110 hover:shadow-xl hover:shadow-pink-400 bg-gradient-to-r from-pink-500 to-red-500 hover:text-yellow-500 hover:animate-pulse" />
            <span className="absolute text-xs text-white bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity">Notifications</span>
          </div>

          <div className="relative">
            <AiFillMessage className="text-white text-4xl cursor-pointer p-2 rounded-full transition-all duration-300 ease-in-out transform group hover:scale-110 hover:shadow-xl hover:shadow-pink-400 bg-gradient-to-r from-pink-500 to-red-500 hover:text-yellow-500 hover:animate-pulse" />
            <span className="absolute text-xs text-white bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity">Messages</span>
          </div>
        </div>

      </div>
      <Sidebar />
    </>

  );
};

export default Navbar;
