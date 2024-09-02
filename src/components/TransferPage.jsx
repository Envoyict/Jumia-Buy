import React from 'react';
import { useNavigate } from 'react-router-dom';

const TransferPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-orange-600">
            ENVOY E-COMMERCE SHOP
          </h1>
          <div className="border-t mt-2 mb-4"></div>
          <h2 className="text-sm font-medium">ACCOUNT DETAILS</h2>
          
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="flex justify-between items-center mb-3">
            <span className="font-semibold">Account Name:</span>
            <span className="text-gray-800">CHIBUOKE NKEMAKONAM</span>
          </p>
          <p className="flex justify-between items-center mb-3">
            <span className="font-semibold">Account Number:</span>
            <span className="text-gray-800">7048214712</span>
            <button className="ml-2 text-blue-500 hover:underline" onClick={() => navigator.clipboard.writeText("4555524868")}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-3M8 7h3m-3 0v3m0-3H5m0 0v3m0-3h10M12 8V5a2 2 0 012-2h3m-3 3h3M12 8v3m0 0h3M9 3v2m6-2v2M9 3h6m-6 0a2 2 0 012-2h3a2 2 0 012 2v3M15 5h-3M8 21h8" />
              </svg>
            </button>
          </p>
          <p className="flex justify-between items-center mb-3">
            <span className="font-semibold">Bank Name:</span>
            <span className="text-gray-800">OPAY</span>
          </p>
          <p className="flex justify-between items-center mb-3">
            <span className="font-semibold">Total Amount:</span>
            <span className="text-gray-800">NGN 9,000,000,000</span>
          </p>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          *Please make a transfer to the account details above.
        </p>
        <div className="mt-6">
          <button
            className="w-full  text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition fill-hover bg-slate-600"
            onClick={() => navigate('/success')}
          ><span>
            I've sent the money</span>
          </button>
          <button
  className="w-full mt-3 text-gray-600 py-3 rounded-lg font-semibold border border-gray-300 bg-gray-200 opacity-50 cursor-not-allowed"
  disabled
>
  Change payment method
</button>

        </div>
      </div>
    </div>
  );
};

export default TransferPage;
