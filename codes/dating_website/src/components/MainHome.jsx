import { React, useState, useRef, useEffect } from "react";
import AItips from "./AItips";
import Scrollbar from "./Scrollbar";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { mainHomeSlider } from "../data/MainHomeSlider";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import axios from "axios";
import { io } from "socket.io-client";

const 


const MainHome = ({ }) => {
  const slider = useRef(null);
  const [userData, setUserData] = useState(null);
  const [isAiopen, isAiclosed] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/home", {
      withCredentials: true,
    })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          setError("Please login to access this page");
          // You can redirect to login page here
        } else {
          setError("Something went wrong");
        }
      });

    io.on('connect', (socket) => {
      console.log('user connected form frontend side');
    })

  }, []);

  console.log(userData);
  return (
    <>
      {error ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">{error}</h2>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600"
            >
              Go to Login
            </button>
          </div>
        </div>
      ) : (

        <div>
          <Navbar />

          <div className=" flex  h-[calc(100vh-140px)] ">
            <Sidebar />
            <AItips />
            <Scrollbar />

          </div>
        </div>
      )}
    </>
  );
};

export default MainHome;