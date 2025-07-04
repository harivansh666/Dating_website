import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { searchPeople } from "../data/SeachPeople";
import { TbXboxXFilled } from "react-icons/tb";
import { IoIosHeart } from "react-icons/io";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Matchbutton from "./Buttons/Match.button";
import axios from "axios";
import { Aicontext } from "../context/Main.context";
import { axiosInstance } from "../config/axiosInstance";

export default function Scrollbar() {
  const [isred, setred] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slider = useRef(null);

  const { Aibio, setAibio, users, setUsers } = useContext(Aicontext);

  const changeCol = () => {
    setred(!isred);
  };

  const fetchUsers = useCallback(async () => {
    const response = await axiosInstance.get("/home");
    setUsers(response.data);
  }, [setUsers]);

  // const fetchUsers = async () => {
  //   const response = await axiosInstance.get("http://localhost:5000/api/home");
  //   console.log(response);
  // };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const scrollLeft = async () => {
    if (slider.current) {
      slider.current.scrollBy({ left: -200, behavior: "smooth" });
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
    const ProfileUser = users[currentIndex].fullName;
    // console.log(ProfileUser);

    try {
      const response = await axiosInstance.post(
        "/home/swipeL",
        {
          ProfileUser,
        },

        {
          withCredentials: true,
        }
      );

      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const scrollRight = async () => {
    if (slider.current) {
      slider.current.scrollBy({ left: 300, behavior: "smooth" });
    }
    setCurrentIndex((prevIndex) =>
      prevIndex < users.length - 1 ? prevIndex + 1 : prevIndex
    );
    const ProfileUser = users[currentIndex].fullName;
    console.log(ProfileUser);

    try {
      const response = await axiosInstance.post(
        "/home/swipeR",
        {
          ProfileUser,
        },

        {
          withCredentials: true,
        }
      );
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (users.length > 0 && users[currentIndex]) {
      setAibio(users[currentIndex].bio);
    }
  }, [currentIndex, users, setAibio]);

  return (
    <>
      {/* Scrollable Image Slider */}
      <div className=" relative  w-[26vw] h-[18vw] sm:w-[22vw] sm:h-[30vw] rounded-2xl justify-center items-center  bg-blue-800 ml-40 mt-4">
        <div
          ref={slider}
          className=" image section  flex  overflow-x-hidden scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {Array.isArray(users) &&
            users.map((e, i) => (
              <img
                key={i}
                className="rounded-2xl h-[34vw] w-[26vw] sm:w-[22vw] sm:h-[30vw] object-cover shrink-0 snap-center"
                src={e.profilePicture}
                alt=""
              />
            ))}

          <h1 className=" absolute w-40 h-20  mt-3 ml-2 left-2 flex  font-bold text-white text-lg">
            {users.length > 0 && users[currentIndex]?.fullName}
          </h1>

          <div className=" absolute left-1/2  md:top-75 top-90 transform -translate-x-1/2  flex items-center gap-4 p-3 rounded-lg">
            <TbXboxXFilled className="text-white text-5xl md:text-4xl  cursor-pointer" />

            <IoIosHeart
              onClick={changeCol}
              className={`${
                isred ? "text-red-500 " : "text-white"
              } cursor-pointer text-8xl md:text-7xl `}
            />

            <BsFillQuestionCircleFill className="text-white text-[41px] md:text-4xl  cursor-pointer" />
          </div>
        </div>

        <Matchbutton scrollRight={scrollRight} scrollLeft={scrollLeft} />
      </div>
    </>
  );
}
