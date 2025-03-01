import { React, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'; // Import Link
import axios from "axios";

const CreateAcc = () => {
  {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      password: '',
      dateOfBirth: '',
      gender: '',
      location: { lat: null, lng: null },
    });


    useEffect(() => {

      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) =>
          setFormData(prev => ({
            ...prev,
            location: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          }))
        )
      }
      else {
        console.log("Geolocation not available");
      }


    }, []);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:5000/createAcc", formData);
        console.log("Account created:", response.data);
        navigate('/'); // Sign In page pe redirect
      } catch (error) {
        console.error("Error:", error);
        alert("Account creation failed!");
      }
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-pink-600">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-pink-600">
            Create Account
          </h2>
          <p className="text-center text-gray-600 mt-2">Find your perfect match ❤️</p>

          <form className="mt-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create Password"
              className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            />

            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              placeholder="Date of Birth"
              className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <button type='submit' className="w-full bg-pink-600 text-white p-3 rounded-lg font-bold hover:bg-pink-700 transition duration-300">
              Create Account
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-600">Or sign up with</p>
            <div className="flex justify-center gap-4 mt-2">
              <button className="bg-white border p-2 rounded-full shadow hover:bg-gray-100">
                <img src="/search.png" alt="Google" className="w-6" />
              </button>
              <button className="bg-white border p-2 rounded-full shadow hover:bg-gray-100">
                <img src="/facebook.png" alt="Facebook" className="w-6" />
              </button>
              <button className="bg-white border p-2 rounded-full shadow hover:bg-gray-100">
                <img src="/twitter.png" alt="Twitter" className="w-6" />
              </button>
            </div>
          </div>

          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/signIn" className="text-pink-600 font-bold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    )
  }
}
export default CreateAcc