// src/components/FillThisPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartPage from './CartPage';
import ItemCard from './ItemCard';

const FillThisPage = ({ cart }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCompleteOrder = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    const { firstName, surname, email, address, city, state, phoneNumber } = formData;
    if (!firstName || !surname || !email || !address || !city || !state || !phoneNumber) {
      alert('Please complete all required fields before submitting your order.');
      return;
    }

    // If all required fields are filled, redirect to the success page
    navigate('/transfer');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Complete Your Order</h1>
      <form className="space-y-4" onSubmit={handleCompleteOrder}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code (Optional)"
          value={formData.postalCode}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
        <div className="mt-4">
          {cart.map((item, index) => (
            <div key={index} className="mb-4 flex items-center">
              <img src={item.image} alt={item.description} className="w-20 h-20 object-cover rounded mr-4" />
              <p>{item.description} - ${item.price * item.quantity}</p>
            </div>
          ))}
        </div>
        <button type="submit" className=" text-white py-2 px-4 rounded fill-hover bg-slate-600">
         <span> Complete Order</span>
        </button>
      </form>
    </div>
  );
};

export default FillThisPage;
