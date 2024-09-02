import React, { useState } from "react";
import search from "../assets/images/search.png"; // Adjust the path as needed
import closed from "../assets/images/closed.png";   // Adjust the path as needed

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm);
    }
  };

  const handleClearInput = () => {
    setSearchTerm("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="relative flex items-center max-w-md mx-auto">
      {/* Input Field */}
      <input
        type="text"
        className="border border-custom-green text-custom-green bg-white p-2 pl-12 pr-12 rounded-md w-full"
        placeholder="Search by description..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        style={{ color: "custom-green" }}
      />

      {/* Search Icon Inside Input */}
      
      <img
        src={search}
        alt="Search"
        className="absolute left-3 w-7 "
      />

      {/* Clear (X) Icon Inside Input */}
      {searchTerm && (
        <img
          src={closed}
          alt="Clear"
          className="relative right-7 top-3 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
          onClick={handleClearInput}
        />
      )}

      {/* Search Button */}
      <button
        onClick={handleSearchClick}
        className="bg-orange-500 text-white px-4 py-2 rounded-md ml-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
