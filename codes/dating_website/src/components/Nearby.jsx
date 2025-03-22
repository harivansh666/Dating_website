import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import axios from 'axios'

const Nearby = () => {


  return (
    <>
      <Navbar />

      <div className='flex'>
        <Sidebar />
        <div className='flex justify-center items-center w-[1350px] bg-pink-500' >
          <div className='w-[900px] h-[500px] rounded-2xl bg-amber-100'>

          </div>
        </div>

      </div>
    </>
  )
}

export default Nearby