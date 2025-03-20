import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { IoMdHome, IoMdSearch } from 'react-icons/io';
import { GiCompass } from "react-icons/gi";
import { AiFillSetting, AiOutlineUser } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <>
      <div className='w-[15vw] h-screen sm:justify-center flex border-r-2 border-white  ' style={{ backgroundColor: "#d61856" }}>
        <div className='flex flex-col  pt-18 ml-10'>
          <ul className='flex flex-col items-center sm:mr-12 sm:gap-2'>

            <li className='flex items-center justify-center gap-6 mb-5 mt-5  sm:text-4xl '>
              <IoMdHome className='text-4xl sm:text-4xl' />
              <Link to='/home'>
                <h1 className='font-bold text-2xl text-white cursor-pointer'>Home</h1>
              </Link>
            </li>

            <li className='flex items-center justify-center gap-6 mb-5 mt-4'>
              <IoMdSearch className='text-4xl' />
              <Link to='/search'>
                <h1 className='font-bold text-2xl text-white cursor-pointer'>Search</h1>
              </Link>
            </li>

            <li className='flex items-center justify-center gap-6 mb-5 mt-4'>
              <GiCompass className='text-4xl' />
              <Link to='/Nearby'>
                <h1 className='font-bold text-2xl text-white cursor-pointer'>Nearby</h1>
              </Link>
            </li>
            <li className='flex items-center justify-center gap-6 mb-5 mt-4'>
              <AiOutlineUser className='text-4xl' />
              <Link to='/profile'>
                <h1 className='font-bold text-2xl text-white cursor-pointer'>Profile</h1>
              </Link>
            </li>
            <li className='flex items-center justify-center gap-6 mb-5 mt-4'>
              <AiFillSetting className='text-4xl' />
              <h1 className='font-bold text-2xl text-white cursor-pointer'>Settings</h1>
            </li>


          </ul >
        </div >
      </div >
    </>
  );
};

export default Sidebar;
