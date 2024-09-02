import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const handleIncrease = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const handleDecrease = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    }
    setCart(newCart);
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    const shopWithoutSignup = localStorage.getItem('shopWithoutSignup') === 'true';
    if (!localStorage.getItem('user') && shopWithoutSignup) {
      navigate("/signup");
    } else {
      navigate("/fillThis");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="mb-4 flex items-center">
            <img
              src={item.image}
              alt={item.description}
              className="w-20 h-20 object-cover rounded mr-4"
            />
            <div>
              <p>{item.description}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <div className="flex items-center">
                <button
                  className={`px-4 py-2 bg-gray-200 text-gray-700 rounded-l ${
                    item.quantity === 1 && "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={() => handleDecrease(index)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <div className="px-4 py-2">{item.quantity}</div>
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r"
                  onClick={() => handleIncrease(index)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <p className="font-bold">Total: ${totalPrice.toFixed(2)}</p>
      <button
        onClick={handleCheckout}
        className="bg-green-500 text-white py-2 px-4 mt-4 rounded"
      >
        Checkout
      </button>
    </div>
  );
};

export default CartPage;
