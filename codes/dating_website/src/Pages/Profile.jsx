import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { FaPencil } from "react-icons/fa6";
import UpdateProfile from "../components/UpdateProfile";
import { FaCamera } from "react-icons/fa";
import { axiosInstance } from "../config/axiosInstance";

export default function Profile() {
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isUpdatingProfile, setisUpdatingProfile] = useState(false);
  const [user, setuser] = useState({
    fullName: "",
    image: "",
    bio: "",
    location: "",
  });
  const [responseData, setrespond] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axiosInstance.get("/profile", {
          withCredentials: true,
        });
        setrespond(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        if (err.response && err.response.status === 401) {
          setError("Unauthorized access! Please log in.");
        }
      }
    };
    fetchdata();
  }, [responseData]);

  const sendData = async () => {
    try {
      if (user.fullName === "") return alert("Please enter Full Name");
      if (user.bio === "") return alert("Please enter Bio");

      const response = await axiosInstance.post("/profile", user, {
        withCredentials: true,
      });
      setrespond(response.data);
      setIsEditPopupOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const uploadImage = async (base64Image) => {
    try {
      setisUpdatingProfile(true);

      const response = await axiosInstance.post(
        "/update-profile-picture",
        { profilePicture: base64Image },
        { withCredentials: true }
      );

      setrespond(response.data);
      setSelectedImg(response.data.profilePicture);
    } catch (err) {
      console.error("❌ Error uploading image:", err);
      alert("Image upload failed");
    } finally {
      setisUpdatingProfile(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await uploadImage(base64Image);
    };
  };

  const closeSubmit = async () => {
    setIsEditPopupOpen(false);
  };

  return (
    <>
      {error ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">{error}</h2>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600"
            >
              Go to Login
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="flex ">
            <Sidebar />

            <div className="w-full h-[calc(100vh-10px)] flex-row  p-5 text-center font-sans">
              <div className="w-full h-60 flex flex-row gap-10">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <img
                      src={
                        selectedImg ||
                        responseData.profilePicture ||
                        "https://res.cloudinary.com/desslvu1w/image/upload/v1750687040/avatar_jnlvx7.png"
                      }
                      alt="Profile"
                      className="size-42 rounded-full object-cover"
                    />
                    <label
                      htmlFor="avatar-upload"
                      className={`absolute bottom-2 right-4 bg-pink-200 hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${
                        isUpdatingProfile
                          ? "animate-pulse pointer-events-none"
                          : ""
                      }`}
                    >
                      <FaCamera className="w-5 h-5 text-white" />
                      <input
                        type="file"
                        id="avatar-upload"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={isUpdatingProfile}
                      />
                    </label>
                  </div>
                  <p className="text-sm text-zinc-400">
                    {isUpdatingProfile
                      ? "Uploading..."
                      : "Click the camera icon to update your photo"}
                  </p>
                </div>

                <div className="w-100 h-40 flex mt-8 gap-1 flex-col">
                  <h1 className="text-3xl font-bold text-left uppercase">
                    {responseData.fullName}
                  </h1>
                  <p className="text-start w-86 h-42 outline-2 p-1 rounded-md outline-zinc-300">
                    {responseData.bio}
                  </p>
                </div>

                <button
                  onClick={() => setIsEditPopupOpen(true)}
                  className="flex justify-center items-center w-12 h-10 rounded-md p-1 mt-2 bg-zinc-300 hover:bg-zinc-200"
                >
                  <FaPencil size={20} />
                </button>

                {isEditPopupOpen && (
                  <UpdateProfile
                    setuser={setuser}
                    user={user}
                    sendData={sendData}
                    closeSubmit={closeSubmit}
                  />
                )}
              </div>

              <div className="w-full h-[calc(100vh-300px)] p-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div
                      key={n}
                      className="bg-pink-500 p-4 rounded-lg shadow-md"
                    >
                      Post {n}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
