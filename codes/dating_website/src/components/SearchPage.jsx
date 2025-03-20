import { AiFillHeart } from 'react-icons/ai';
import Sidebar from './Sidebar';
import { React, useState } from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { IoIosHeart } from "react-icons/io";
import { TbXboxXFilled } from 'react-icons/tb';
import { searchPeople } from '../data/SeachPeople';
import "../Styles/SearchPeople.css"

import Navbar from './Navbar';
import Scrollbar from './Scrollbar';

const SearchPage = () => {

  const [isred, setred] = useState(false);
  const [ProLike, setproLike] = useState(false);

  const proLike = () => {
    setproLike(!ProLike);
  }

  const changeCol = () => {
    setred(!isred);
  }

  return (
    <>
      <Navbar />
      <div className=" h-screen w-full flex flex-row ">
        <Sidebar />
        <div className=" mt-1 w-[45vw]   justify-start">

          <div className="flex bg-gray-100 h-[10vh] w-[30vw] ml-30   justify-center items-center rounded-2xl  gap-2 sm:gap-0 md:h-[12vh] md:text-[18px]">
            <select className="p-2 rounded-md outline-none  md:p-1 ">
              <option value="">Select Location</option>
              <option value="new_york">New York</option>
              <option value="los_angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
            <div>
              <h1 className="text-3xl ">|</h1>
            </div>
            <select className="p-2 rounded-md">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <div>
              <h1 className="text-3xl ">|</h1>
            </div>
            <select className="p-2 rounded-md ">
              <option value="">Select Age</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36-45">36-45</option>
            </select>
          </div>

          {/* image div*/}
          <div className='ml-1'>

          </div>

            <Scrollbar />
        </div>

        {/* Search people div */}
        <div className="w-[40vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 overflow-y-auto overflow-x-hidden max-h-[82vh] bg-gradient-to-b from-amber-50 to-amber-100 p-6 hide-scrollbar">
          {searchPeople.map((e, i) => (
            <div
              key={i}
              className="w-full h-24 rounded-xl bg-white flex items-center justify-between p-4 shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Profile Image */}
              <div className="flex items-center gap-4 flex-1">
                <img
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-200"
                  src={e.Image}
                  alt={e.name}
                />

                {/* User Info */}
                <div className="flex flex-col">
                  <h2 className="font-bold text-gray-800 text-lg">{e.name}</h2>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-600">{e.age}</p>
                    <span className="text-gray-300">•</span>
                    <p className="text-sm text-gray-600 truncate max-w-[100px]">{e.location}</p>
                  </div>
                </div>
              </div>

              {/* Heart Icon */}
              <AiFillHeart onClick={proLike} className={`${ProLike ? 'text-rose-500' : 'text-rose-300'} "ProLikecursor-pointer text-2xl ml-2 transition-colors duration-200`} />
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default SearchPage;