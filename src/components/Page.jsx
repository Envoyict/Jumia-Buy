import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Page = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(item.price);
  const navigate = useNavigate();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setPrice(item.price * (quantity + 1));
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice(item.price * (quantity - 1));
    }
  };

  const handleCheckout = () => {
    const isAuthenticated = localStorage.getItem('user');
    const shopWithoutSignup = localStorage.getItem('shopWithoutSignup') === 'true';

    if (!isAuthenticated && shopWithoutSignup) {
      navigate('/sign'); // Redirect to Signup if user is not authenticated
    } else {
      navigate('/fillThis'); // Proceed to checkout page if authenticated
    }
  };

  const handleViewCart = () => {
    navigate('/cart'); // Navigate to /cart
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <img
          src={item.image}
          alt={item.description}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p className="text-xl font-bold text-custom-green">Price: ${price}</p>
        <div className="flex justify-between mt-4">
          <button
            className={`bg-gray-300 text-gray-700 py-1 px-3 rounded ${
              quantity === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={decreaseQuantity}
            disabled={quantity === 1}
          >
            -
          </button>
          <p className="text-xl font-bold">Quantity: {quantity}</p>
          <button
            className="bg-custom-green text-white py-1 px-3 rounded"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
        <p className="mt-4 text-xl font-bold">
          Total Price: ${price}
        </p>
        <div className="flex justify-between mt-4 gap-8">
          <button
            className="bg-gray-300 text-gray-700 py-1 px-3 rounded"
            onClick={handleViewCart}
          >
            View Cart
          </button>
          <button
            className="bg-gray-700 text-white py-1 px-3 rounded"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
        <button
          className="bg-gray-700 text-white py-2 w-full rounded-full mt-4"
          onClick={onClose}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Page;
