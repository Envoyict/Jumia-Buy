import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api';
import "../App.css";
import facebook from '../assets/images/facebook.png';
import google from '../assets/images/google.png';
import twitter from '../assets/images/twitter.png';
import email from '../assets/images/email.png';

const SignupPage = () => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!profilePicture) {
      window.alert('Please upload a profile picture.');
      return;
    }
    try {
      const response = await signup({ ...userData, profilePicture });
      if (response.success) {
        localStorage.removeItem('shopWithoutSignup'); // Clear the flag
        navigate('/website'); // Redirect back to homepage after signup
      } else {
        window.alert('Signup failed. Please try again.');
      }
    } catch (error) {
      window.alert('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-blue-100 p-4">
      {/* ENVOY SHOP Header */}
      <div className="flex flex-col md:flex-row items-center mb-8 md:mb-0 md:mr-12 text-center md:text-left">
        <div className='relative text-3xl md:text-4xl font-bold text-custom-green animate-bounce'>
          <h1>WELCOME TO ENVOY-SHOP</h1>
          <span className='absolute -top-2 -left-2 w-full h-full rounded-full border-4 border-custom-green opacity-100 animate-ping'></span>
        </div>
      </div>

      {/* Signup Form */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-custom-green">Signup</h2>

        {/* Profile Picture Upload */}
        <div className="flex justify-center items-center relative mb-4">
          {/* Animated Rings */}
          <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-red-300 animate-spin-slow"></div>
          <div className="absolute w-30 h-30 md:w-36 md:h-36 rounded-full border-2 border-red-400 animate-spin-medium"></div>
        
          {/* Profile Picture */}
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              required
            />
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-custom-green bg-gray-200 flex justify-center items-center">
              {profilePicture ? (
                <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <p className="text-gray-500 text-sm text-center px-2">Upload Picture</p>
              )}
            </div>
          </div>
        </div>
        <p className="text-center text-[#ff4a4a] text-sm mb-4">
          <span className='p-1.5 rounded-2xl bg-custom-green text-white'>Warning!</span> Please do not upload inappropriate pictures. Users without a profile picture will not be able to sign up.
        </p>
        
        {/* Signup Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-slate-600 text-white font-semibold rounded-lg transition duration-300 hover:bg-slate-700"
          >
            Signup
          </button>
        </form>

        {/* Or Sign Up with... */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <hr className="flex-1 border-t border-gray-300" />
          <p className="px-4 text-gray-500">Or Signup with</p>
          <hr className="flex-1 border-t border-gray-300" />
        </div>
        <div className="flex flex-wrap justify-between mt-4 space-x-4">
          <button className="flex-1 md:flex-initial p-3 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-2 md:mb-0">
            <img src={facebook} alt="Facebook" className="w-5 h-5" />
          </button>
          <button className="flex-1 md:flex-initial p-3 bg-red-500 text-white rounded-lg flex items-center justify-center mb-2 md:mb-0">
            <img src={google} alt="Google" className="w-5 h-5" />
          </button>
          <button className="flex-1 md:flex-initial p-3 bg-blue-400 text-white rounded-lg flex items-center justify-center mb-2 md:mb-0">
            <img src={twitter} alt="Twitter" className="w-5 h-5" />
          </button>
          <button className="flex-1 md:flex-initial p-3 bg-gray-400 text-white rounded-lg flex items-center justify-center mb-2 md:mb-0">
            <img src={email} alt="Email" className="w-5 h-5" />
          </button>
        </div>

        {/* Already have an account? Login here */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <a href="/login" className="text-custom-green font-semibold hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
