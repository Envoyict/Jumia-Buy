import React from 'react';
import { useNavigate } from 'react-router-dom';
import shoplady from '../assets/images/shoplady.png'; // Adjust the path based on your image location

const FirstPage = () => {
  const navigate = useNavigate();

  const handleShopWithoutSignup = () => {
    localStorage.setItem('shopWithoutSignup', 'true');
    navigate('/website'); // Navigates to the homepage
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="flex flex-col items-center mb-8 text-center md:text-left md:mb-0 md:mr-12">
        <div className='relative text-3xl md:text-4xl font-bold text-custom-green animate-bounce'>
          <h1>WELCOME TO ENVOY-SHOP</h1>
          <span className='absolute -top-2 -left-2 w-full h-full rounded-full border-4 border-custom-green opacity-100 animate-ping'></span>
        </div>
      </div>

      {/* Image */}
      <img 
        src={shoplady} 
        alt="Shopping Lady" 
        className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain mb-8"
      />

      {/* Buttons */}
      <button
        onClick={() => navigate('/sign')}
        className="px-6 py-3 bg-custom-green text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200 mb-4"
      >
        Click to Signup
      </button>

      <p className="text-gray-600 text-center">
        You can{' '}
        <span 
          onClick={handleShopWithoutSignup}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Shop Without Signup
        </span>
      </p>
    </div>
  );
};

export default FirstPage;
