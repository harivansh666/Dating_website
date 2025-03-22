import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";



export default function Matchbutton({ scrollRight, scrollLeft }) {
    return (
        <>

            <FaArrowAltCircleLeft

                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl  text-white cursor-pointer z-10"
                onClick={scrollLeft}
            />

            <FaArrowAltCircleRight
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl  text-white cursor-pointer z-10"
                onClick={scrollRight}
            />

        </>
    )
}
