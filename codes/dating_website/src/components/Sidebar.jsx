import React from 'react'
import { IoMdHome, IoMdSearch } from 'react-icons/io'
import { GiCompass } from "react-icons/gi";
import { AiFillProfile, AiFillSetting, AiOutlineUser } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className='w-[20vw] h-[80vh] 'style={{backgroundColor :"#d61856"}} >
       <div className='flex flex-col pt-'>
        <ul className='flex flex-col items-center'>
            <li className='flex items-center justify-center gap-3 mb-5 mt-5'>
            <IoMdHome className='text-6xl' />
            <h1 className='font-bold text-3xl text-white cursor-pointer'>Home</h1>
            </li>
            <li className='flex items-center justify-center gap-3 mb-5 mt-4'>
            <IoMdSearch className='text-6xl' />
            <h1 className='font-bold text-3xl text-white cursor-pointer'>Search</h1>
            </li>
            <li className='flex items-center justify-center gap-3 mb-5 mt-4'>
            <GiCompass className='text-6xl' />
            <h1 className='font-bold text-3xl text-white cursor-pointer'>Nearby</h1>
            </li>
            <li className='flex items-center justify-center gap-3 mb-5 mt-4'>
            <AiOutlineUser className='text-6xl' />
            <h1 className='font-bold text-3xl text-white cursor-pointer'>Profile</h1>
            </li>
            <li className='flex items-center justify-center gap-3 mb-5 mt-4'>
            <AiFillSetting  className='text-6xl' />
            <h1 className='font-bold text-3xl text-white cursor-pointer'>Settings</h1>
            </li>
        </ul>
       </div>
    </div>
  )
}

export default Sidebar