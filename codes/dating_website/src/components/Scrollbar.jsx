import React, { useRef, useState } from 'react'
import { mainHomeSlider } from "../data/MainHomeSlider";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";
import { IoIosHeart } from "react-icons/io";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Matchbutton from "./Buttons/Match.button";



export default function Scrollbar() {
    const [isred, setred] = useState(false);
    const slider = useRef(null);

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
            {/* Scrollable Image Slider */}
            <div className="  w-[26vw] h-[18vw] rounded-2xl  bg-blue-800 ml-40 mt-4">

                <div ref={slider} className=" image section  flex  overflow-x-hidden scroll-smooth snap-x snap-mandatory no-scrollbar">
                    {mainHomeSlider.map((e, i) => (
                        <img
                            key={i}
                            className="rounded-2xl h-[34vw] w-[26vw] object-cover shrink-0 snap-center"
                            src={e.image}
                            alt=""
                        />
                    ))}

                    {/* Floating Icons at Bottom */}
                    <div className=" absolute  mt-15 flex  bg-amber-700 items-center  gap-2  bottom-18">

                        <TbXboxXFilled className="text-white text-5xl  cursor-pointer" />

                        <IoIosHeart onClick={changeCol} className={`${isred ? 'text-red-500 ' : 'text-white'} cursor-pointer text-8xl `} />

                        <BsFillQuestionCircleFill className="text-white text-[41px]  cursor-pointer" />

                    </div>
                </div>
                <Matchbutton scrollRight={scrollRight} scrollLeft={scrollLeft} />

            </div >
        </>

    )
}
