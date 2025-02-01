import React from 'react'
import { people } from '../data/People'
import { IoMdNotifications } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";

const Navbar = () => {
  return (
     <div style={{backgroundColor: "#d61856"}} className='w-full flex justify-evenly  gap-2 p-5'>
      <h1 className='font-bold text-4xl'>Logo</h1>
    
      <div className='rounded-full flex gap-3 ml-20 mt-4'>
      {people.map((e,i)=>{
        return <img key={i}
        className='h-25 w-25  rounded-full object-cover cursor-pointer'
        src={e.Image}alt="" />
       })}
      </div>

       <div className='mt-12 '>
       <button className='bg-pink-500 px-7 py-1  rounded  font-bold text-start text-white cursor-pointer'>Dating Tips <br /> 
       <span className='text-3xl text-black'>Using AI</span></button>
       </div>
        
        <div className='flex gap-4'>
        <IoMdNotifications className='text-white text-4xl  cursor-pointer'/>
        <AiFillMessage className="text-white     text-4xl  cursor-pointer "    />
        </div>

     </div>
     
  )
}

export default Navbar