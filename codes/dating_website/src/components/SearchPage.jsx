import { AiFillHeart } from 'react-icons/ai';
import Sidebar from './Sidebar';
import React from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { IoHeartCircle } from 'react-icons/io5';
import { TbXboxXFilled } from 'react-icons/tb';
import { searchPeople } from '../data/SeachPeople';
import "../Styles/SearchPeople.css"
import Navbar from './Navbar';

const SearchPage = () => {
  return (
    <>
    <Navbar className/>
    <div className="flex ">
      <Sidebar  />
      <div className="h-[82vh] flex flex-col bg-yellow-300  w-[45vw] pl-44 justify-center">

        <div className="bg-gray-100 p-4 h-[10vh] w-[30vw] rounded-2xl flex gap-2">
          <select className="p-2 rounded-md outline-none">
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
          <select className="p-2 rounded-md">
            <option value="">Select Age</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-45">36-45</option>
          </select>
        </div>

        {/* image div*/}
        <div className="h-[60vh] w-[24vw] rounded-4xl mt-6 ml-10 relative">
          <img
            className="object-cover w-full h-full rounded-4xl"
            src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0fGVufDB8fDB8fHww"
            alt=""
          />
        <div className="absolute items-center justify-center flex gap-6 right-15  top-96">
          <TbXboxXFilled className="text-white text-6xl cursor-pointer" />
          <IoHeartCircle className="text-white text-8xl cursor-pointer" />
          <BsFillQuestionCircleFill className="text-white text-5xl cursor-pointer" />
        </div>
        </div>

      </div>

      {/* search people div */}
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
      <AiFillHeart className="text-amber-400 hover:text-amber-600 cursor-pointer text-2xl ml-2 transition-colors duration-200" />
    </div>
  ))}
</div>

    </div>

    </>
  );
};

export default SearchPage;