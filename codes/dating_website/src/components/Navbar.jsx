import React, { useRef, useState } from "react";
import { people } from "../data/People";
import { IoMdNotifications } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Sidebar from "./Sidebar";
import "../Styles/Navbar.css"; // Import external CSS for animations
import { detailStory } from "../data/detailStory"; // Assuming this array contains the details images

const Navbar = ({ handleAiDate }) => {  // Receive handleAiDate as prop from App

  const [detailImages, setDetailImages] = useState(false);
  const [selectedDetailImage, setSelectedDetailImage] = useState(null);

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Handle clicking on an image to show the detail image
  const handleImageClick = (index) => {
    setSelectedDetailImage(detailStory[index].image); // Get the image from detailStory array
    setDetailImages(true); // Show the detailed image view
  };

  return (
    <>
      <div className="w-full flex flex-wrap border-2 border-b-white justify-between p-5 bg-[#d61856]">
        {/* Logo */}
        <h1 className="font-bold text-3xl md:text-4xl text-white">Logo</h1>

        {/* People Avatars - Instagram Story Slider */}
        <div className="flex items-center gap-2 md:gap-4 w-[60vw]">
          <button
            onClick={scrollLeft}
            className="text-white text-3xl cursor-pointer focus:outline-none"
          >
            <FaArrowAltCircleLeft />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth"
            style={{ width: "1000px", overflow: "hidden" }}
          >
            {people.map((e, i) => (
              <img
                onClick={() => handleImageClick(i)} // Pass index on click
                key={i}
                className="h-24 w-24 md:h-20 md:w-20 rounded-full object-cover cursor-pointer aspect-square hover:border-4 hover:border-green-500 hover:scale-z-110 transition-all duration-300"
                src={e.Image}
                alt="User"
              />
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="text-white text-3xl cursor-pointer focus:outline-none"
          >
            <FaArrowAltCircleRight />
          </button>
        </div>

        {/* Animated Button */}
        <div className="mt-4 md:mt-3  ml-[50px] ">
          <button
            onClick={handleAiDate}  // Trigger the handleAiDate function passed as prop
            className="relative bg-pink-500 px-5 py-2 md:px-7 md:py-3 rounded font-bold text-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 group overflow-hidden">
            Dating Tips <br />
            <span className="text-lg md:text-2xl text-black inline-block wiggle">Using AI</span>
            {/* Sparklesg */}
            <span className="absolute inset-0 pointer-events-none">
              <span className="absolute w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 sparkle top-1 left-1"></span>
              <span className="absolute w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 sparkle top-4 right-4"></span>
              <span className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 sparkle bottom-2 left-6"></span>
            </span>
          </button>
        </div>


        {/* Notification Icons */}
        <div className="flex gap-4 md:gap-6 mt-4 md:mt-0">
          <div className="relative">
            <IoMdNotifications className="text-white text-3xl md:text-4xl cursor-pointer p-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:scale-110 hover:shadow-xl hover:shadow-pink-400 transition-all hover:text-yellow-500 hover:animate-pulse" />
          </div>
          <div className="relative">
            <AiFillMessage className="text-white text-3xl md:text-4xl cursor-pointer p-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:scale-110 hover:shadow-xl hover:shadow-pink-400 transition-all hover:text-yellow-500 hover:animate-pulse" />
          </div>
        </div>
      </div>



      {/* Show the detailed story if `detailImages` is true */}
      {detailImages && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-5 rounded-lg">
            <img
              src={selectedDetailImage} // Show the selected image from detailStory
              alt="Detail"
              className="h-96 w-auto object-cover rounded-md"
            />
            <button
              onClick={() => setDetailImages(false)} // Close the detail view
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
