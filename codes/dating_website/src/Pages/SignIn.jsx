import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
// import CreateAcc from "./CreateAcc";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Dancers from "../images/exported/artboard 1/Dancers.png";
import facebook from "../images/exported/artboard 1/facebook.png";
import plane from "../images/exported/artboard 1/paper-plane.png";
import search from "../images/exported/artboard 1/search.png";
import tile from "../images/exported/artboard 1/Tile 2 1.png";
import twitter from "../images/exported/artboard 1/twitter.png";
import { axiosInstance } from "../config/axiosInstance";

const SignIn = () => {
  const [email, setEmail] = useState(""); // setenail vich tu jo ve value type krunga us ne teri email de value change kr deni aa.
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // UseNavigate hook use karein

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "/login",
        {
          email,
          password,
        },
        { withCredentials: true } // iss line krke cookies frontend tak ponch rahi aa
      );

      console.log("Login Successful:", response.data); // response vich data, Errors, status aur bhe ate haia
      navigate("/home");
      // Redirect karne ke liye (e.g., useNavigate hook use karein)
    } catch (error) {
      console.error("Login Failed:", error.response?.data || error.message);
      alert("Invalid credentials!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex h-screen bg-pink-600 p-2">
        {/* Left Section */}
        <div className="h-110 w-80 mt-30 ml-4 absolute">
          <img src={Dancers} alt="" className=" h-full w-full ml-[-40px]" />
        </div>

        <div className="w-1/2 flex ml-30 flex-col justify-center items-center p-10 text-white">
          <h1 className="text-4xl font-bold mb-6">SIGN IN</h1>

          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-80 p-3 mb-4 rounded-md border-3 border-white text-white outline-none "
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-80 p-3 mb-6 rounded-md border-3 border-white text-white outline-none"
          />
          <Link to="/createAcc">
            <div className="ml-25 text-1xl">
              <h4 className="text-blue-300 m-2 cursor-pointer ">
                Create an Account?
              </h4>
            </div>
          </Link>

          <div className="flex space-x-4 mb-6 mt-4">
            <button className="bg-white p-3 rounded-full">
              <img src={search} alt="Google" className="w-6 object-cover" />
            </button>
            <button className="bg-white p-3 rounded-full">
              <img src={facebook} alt="Facebook" className="w-6 object-cover" />
            </button>
            <button className="bg-white p-3 rounded-full">
              <img src={twitter} alt="X" className="w-6" />
            </button>
          </div>

          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-md font-bold cursor-pointer"
          >
            SUBMIT
          </button>
        </div>

        {/* Right Section */}
        <div className="w-140 flex items-center justify-center mt-1 relative">
          <div className="absolute top-10 left-10">
            <img src={plane} alt="Smiling man" className="w-full rounded-lg" />
          </div>
        </div>
        <div className="sm:w-30 w-40 absolute left-12 bottom-0 h-fit">
          <img src={tile} alt="" />
        </div>
      </div>
    </form>
  );
};
export default SignIn;
