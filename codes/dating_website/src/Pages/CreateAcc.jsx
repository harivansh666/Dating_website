import React from 'react'
import { Link } from 'react-router-dom'; // Import Link
import dancer from "../"

const CreateAcc = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-600">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-bold text-center text-pink-600">
        Create Account
      </h2>
      <p className="text-center text-gray-600 mt-2">Find your perfect match ❤️</p>

      <form className="mt-6">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
        />

        <input
          type="password"
          placeholder="Create Password"
          className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
        />

        <input
          type="date"
          placeholder="Date of Birth"
          className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
        />

        <select className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <button className="w-full bg-pink-600 text-white p-3 rounded-lg font-bold hover:bg-pink-700 transition duration-300">
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
        <Link to="/signIn"  className="text-pink-600 font-bold hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  </div>

  )
}

export default CreateAcc