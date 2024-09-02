// src/components/SuccessPage.jsx
import React from 'react';

const SuccessPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 animate-fadeIn">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4 animate-bounce">
          Order Successful!
        </h1>
        <p className="text-lg mb-4">Thank you for your purchase. Here are your payment details:</p>
        <div className="bg-gray-100 p-4 rounded-lg text-left">
          <p><strong>Name:</strong> Remember it for me please</p>
          <p><strong>Phone:</strong> 123456789</p>
          <p><strong>Order ID:</strong> 123</p>
          <p><strong>Transaction ID:</strong> TX1234567890</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
