import React, { useState, useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";
import { IoIosHeart } from "react-icons/io";

import { BsFillQuestionCircleFill } from "react-icons/bs";
import { mainHomeSlider } from "../data/MainHomeSlider";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";



const MainHome = ({ aiRender }) => {
  const slider = useRef(null);

  const [isred, setred] = useState(false);

  const changeCol = () => {

    setred(!isred);
  }

  const scrollLeft = () => {
    if (slider.current) {
      slider.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (slider.current) {
      slider.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-[85vw] h-[82vh] bg-white p-5 flex items-center justify-center gap-10 relative">

          {/* Scrollable Image Slider */}
          <div className="relative w-[26vw] overflow-hidden">
            <FaArrowAltCircleLeft
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl text-white cursor-pointer z-10"
              onClick={scrollLeft}
            />
            <div ref={slider} className=" image section   flex  overflow-x-hidden scroll-smooth snap-x snap-mandatory no-scrollbar">
              {mainHomeSlider.map((e, i) => (
                <img
                  key={i}
                  className="rounded-2xl h-[34vw] w-[26vw] object-cover shrink-0 snap-center"
                  src={e.image}
                  alt=""
                />
              ))}
              {/* Floating Icons at Bottom */}
              <div className=" absolute top-100  mt-15 flex justify-center items-center  gap-2 bottom-6 w-full">

                <TbXboxXFilled className="text-white text-5xl  cursor-pointer" />

                <IoIosHeart onClick={changeCol} className={`${isred ? 'text-red-500 ' : 'text-white'} cursor-pointer text-8xl `} />

                <BsFillQuestionCircleFill className="text-white text-[41px]  cursor-pointer" />

              </div>
            </div>
            <FaArrowAltCircleRight
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl text-white cursor-pointer z-10"
              onClick={scrollRight}
            />
          </div>

          {/* AI Tips Section - Always rendered but visibility controlled */}

          <div className={`h-[68vh] w-[24vw] border-2 object-cover
                border-gray-300 rounded-4xl p-6 flex flex-col items-center bg-pink-500 shadow-lg transition-opacity
                ${aiRender ? "opacity-100" : "opacity-0 "}`}>
            <h2 className="font-bold text-2xl text-white text-center mb-4">AI Dating Tips</h2>
            <div className=" object-cover  rounded-lg  shadow-lg p-1">
              <h3 className="text-lg font-semibold mb-2">Tip #1: Be Yourself!</h3>
              <p className="text-gray-700 mb-4">
                It's important to be authentic in your conversations. Don't try
                to be someone you're not. Genuine connections are built on
                honesty.
              </p>
              <h3 className="text-lg font-semibold mb-2">Tip #2: Listen Actively</h3>
              <p className="text-gray-700">
                Pay attention to what the other person is saying. Active listening
                helps build rapport and trust, making your conversations more
                meaningful.
              </p>
            </div>
          </div>


        </div>

      </div>

    </>
  );
};

export default MainHome;