import React from "react";
import { Link } from 'react-router-dom'; // Import Link
// import Dancers from './public/Dancers.csh.jpg'

const SignIn = () => {

const handleSumbit = (e)=>{
 e.prevent.default()
}

  return (
    <>
    <form action="">
    <div className="flex h-screen bg-pink-600 p-10">
      {/* Left Section */}
      <div className="h-110 w-80 mt-30 ml-4 absolute">
      <img src='/Dancers.png' alt="" 
      className="h-full w-full" />
      </div>

      <div className="w-1/2 flex ml-30 flex-col justify-center items-center p-10 text-white">
        <h1 className="text-4xl font-bold mb-6">SIGN IN</h1>
      
        <input
          type="text"
          placeholder="Email"
          className="w-80 p-3 mb-4 rounded-md border-3 border-white text-white outline-none "
        />
        <input
          type="password"
          placeholder="Password"
          className="w-80 p-3 mb-6 rounded-md border-3 border-white text-white outline-none"
        />
        <Link to="/createAcc">
          <div className="ml-25 text-1xl">
            <h4 className="text-blue-300 m-2 cursor-pointer ">Create an Account?</h4>
          </div>
          </Link>
          

        <div className="flex space-x-4 mb-6 mt-4" >
          <button className="bg-white p-3 rounded-full">
            <img src="/search.png" alt="Google" className="w-6 object-cover" />
          </button>
          <button className="bg-white p-3 rounded-full">
            <img src="/facebook.png" alt="Facebook" className="w-6 object-cover" />
          </button>
          <button className="bg-white p-3 rounded-full">
            <img src="/twitter.png" alt="X" className="w-6" />
          </button>
        </div>
        <button 
        onSubmit={handleSumbit}
        className="bg-white text-black px-6 py-3 rounded-md font-bold cursor-pointer">
          SUBMIT
        </button>
      </div>

      {/* Right Section */}
      <div className="w-140 flex items-center justify-center relative">
        <div className="absolute top-10 left-10">
          <img src="/paper-plane.png" alt="Smiling man" className="w-full rounded-lg" />
        </div>
      </div>
    <div className="w-40 h-40 absolute left-12 bottom-0 h-fit">
      <img src="Tiles1.png" alt="" />
    </div>
    </div>
    </form>
      </>
  );
};

export default SignIn;
