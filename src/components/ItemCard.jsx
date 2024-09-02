// src/components/ItemCard.jsx
import React from 'react';
import "../App.css"

const ItemCard = ({ item, onAddToCart }) => {
  const { image, oldPrice, price, description, rating, Minimumorder, } = item;

  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 group relative">
      <img src={image} alt={description} className="w-full h-48 object-cover rounded-lg mb-4" />
      <p className="text-gray-500 line-through text-sm">Old Price: ${oldPrice}</p>
      
      <div className="relative inline-block">
        <p className="text-xl font-bold text-custom-green animate-bounce relative z-10">
          Price: ${price}
        </p>
        <span className="absolute inset-0 bg-custom-green rounded-full opacity-75 animate-ping"></span>
      </div>
      
      <p className="mt-1 text-sm text-gray-600">{description}</p>
      <div className="mt-1 text-custom-green">Rating: {rating} ⭐</div>
      <div className="mt-1 text-gray-500">Mini. Order: {Minimumorder} </div>
      
      <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-50">
  <button 
    className="bg-custom-green text-white py-1 px-9 rounded animate-shake"
    onClick={() => onAddToCart(item)}
  >
    Add to Cart
  </button>
</div>

    </div>
  );
};

export default ItemCard;
