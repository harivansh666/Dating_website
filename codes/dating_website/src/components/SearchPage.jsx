import { AiFillHeart } from "react-icons/ai";
import Sidebar from "./Sidebar";
import { useState, useContext } from "react";
import "../Styles/Searchpeople.css";
import Navbar from "./Navbar";
import Scrollbar from "./Scrollbar";
import { Aicontext } from "../context/Main.context";
import { axiosInstance } from "../config/axiosInstance";

const SearchPage = () => {
  const [isred, setred] = useState(false); // ✅ fixed
  const [ProLike, setproLike] = useState(false);

  const [query, setquery] = useState({
    gender: "",
    age: "",
  });

  const { users, setUsers } = useContext(Aicontext); // ✅ bring in setUsers

  const handleQueryChange = (e) => {
    const { name, value } = e.target;
    setquery((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuery = async () => {
    try {
      const response = await axiosInstance.get("/filter", {
        params: query,
      });
      console.log("Query Sent ✅", query);
      console.log("Response ✅", response.data);
      setUsers(response.data); // ✅ update context users
    } catch (err) {
      console.error("Error during filter:", err);
    }
  };

  const proLike = () => {
    setproLike(!ProLike);
  };

  const changeCol = () => {
    setred(!isred);
  };

  return (
    <>
      <Navbar />
      <div className="h-screen w-full flex flex-row">
        <Sidebar />

        <div className="mt-4 w-1/3 max-w-4xl mx-auto px-4">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-2xl overflow-hidden border border-pink-200">
            <div className="flex-1 border-b sm:border-b-0 sm:border-r border-pink-100">
              <select
                name="gender"
                value={query.gender}
                onChange={handleQueryChange}
                className="w-full p-3 sm:p-4 text-gray-700 bg-transparent outline-none appearance-none focus:ring-2 focus:ring-pink-300 rounded-lg sm:rounded-none"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="flex-1">
              <select
                name="age"
                value={query.age}
                onChange={handleQueryChange}
                className="w-full p-3 sm:p-4 text-gray-700 bg-transparent outline-none appearance-none focus:ring-2 focus:ring-pink-300 rounded-lg sm:rounded-none"
              >
                <option value="">Select Age Range</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
                <option value="46-55">46-55</option>
              </select>
            </div>

            <button
              onClick={handleQuery}
              className="hidden md:block bg-pink-500 text-white px-6 hover:bg-pink-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              Filter
            </button>
          </div>

          <button
            onClick={handleQuery}
            className="md:hidden mt-4 w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg active:scale-95"
          >
            Apply Filters
          </button>

          <div className="mt-6">
            <Scrollbar />
          </div>
        </div>

        {/* Search people div */}
        <div className="w-[40vw] min-w-[380px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 overflow-y-auto overflow-x-hidden max-h-[82vh] bg-gradient-to-b from-amber-50 to-amber-100 p-8 hide-scrollbar rounded-2xl shadow-inner">
          {users.map((e, i) => (
            <div
              key={i}
              className="w-full h-28 rounded-xl bg-white flex items-center justify-between p-5 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-amber-50"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="relative">
                  <img
                    className="w-16 h-16 rounded-full object-cover border-2 border-amber-100 group-hover:border-amber-300 transition-colors duration-300"
                    src={e.profilePicture}
                    alt={e.name}
                  />
                  {e.isOnline && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>

                <div className="flex flex-col min-w-0">
                  <h2 className="font-semibold text-gray-800 text-lg truncate">
                    {e.fullName}
                  </h2>
                  <p className="text-sm text-gray-500">{e.age} years</p>
                  <div className="mt-1 flex gap-1">
                    {e.interests?.slice(0, 2).map((interest, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded-full"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={proLike}
                className="p-2 rounded-full hover:bg-rose-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-200"
                aria-label="Like profile"
              >
                <AiFillHeart
                  className={`${
                    ProLike ? "text-rose-500 animate-pulse" : "text-rose-300"
                  } cursor-pointer text-3xl transition-all duration-200 hover:scale-110`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
