import React, { useEffect, useState } from "react";
import "../App.css";
import ItemCard from "./ItemCard";
import { fetchItems } from "../api";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import Page from "./Page.jsx";
import ImageSlider from "./ImageSlider";
import cart from "../assets/images/cart.png";
import menu from "../assets/images/menu.png";
import close from "../assets/images/closed.png";
import phone from "../assets/images/phone.png";
import chevronDown from "../assets/images/chevronDown.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import chat from "../assets/images/chat.png"; // Import the chat icon image

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      setItems(data);
      setFilteredItems(data);
    };
    fetchData();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (section) => {
    setDropdownOpen(dropdownOpen === section ? null : section);
  };

  const handleAddToCart = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  const handleSearch = (searchTerm) => {
    const filtered = items.filter(item =>
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      {/* Existing code for header, nav, and main content */}

      <header className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between items-center p-2 sm:p-2 text-center sm:text-left fixed top-0 left-0 w-full bg-white z-50">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center">
          {/* Phone Number Section */}
          <div className="w-full sm:w-auto text-xs sm:text-sm flex justify-center sm:justify-start items-center">
            <img src={phone} alt="Phone" className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-2" />
            <p>070 4821 4712</p>
          </div>

          {/* Follow Us Text */}
          <div className="w-full sm:w-auto text-xs sm:text-sm text-center my-4 sm:my-0">
            Follow us and get a chance to win a gift box
          </div>

          {/* Social Media Icons */}
          <div className="w-full sm:w-auto text-xs sm:text-sm flex justify-center sm:justify-end items-center">
            <p className="flex items-center">
              Follow us on
              <a href="/auth/facebook" className="mx-2">
                <img src={facebook} alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="/auth/twitter" className="mx-2">
                <img src={twitter} alt="Twitter" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="/auth/instagram" className="mx-2">
                <img src={instagram} alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </p>
          </div>
        </div>
      </header>

      <nav className="flex flex-col sm:flex-row justify-between items-center bg-custom-green text-white p-2 sm:p-4 sticky top-20 sm:top-8 left-0 w-full z-40">
        {/* Adjusted top position */}
        <h1 className="text-lg sm:text-xl font-bold mb-2 sm:mb-0">EnvoyShop</h1>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <div className="relative">
            <SearchBar onSearch={handleSearch} className="w-20 sm:w-32" />
          </div>
          <img src={cart} className="h-5 sm:h-7 bg-white" alt="Cart" />
          <img
            src={menuOpen ? close : menu}
            className="h-5 sm:h-7 bg-white cursor-pointer"
            alt="Menu"
            onClick={toggleMenu}
          />
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed top-20 left-0 w-39 bg-custom-green text-white p-4 rounded-r shadow-md z-50">
          <ul>
            <li className="text-white">
              <div className="text-black flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('support')}>
                Support
                <img src={chevronDown} alt="Chevron Down" className={`ml-2 w-4 h-4 transition-transform ${dropdownOpen === 'support' ? 'rotate-180 text-white' : 'rotate-0 text-black'}`} />
              </div>
              {dropdownOpen === 'support' && (
                <ul className="pl-4 mt-2">
                  <li><a href="/chat-with-us" target="_blank" rel="noopener noreferrer">Chat With Us</a></li>
                  <li><a href="/help-center" target="_blank" rel="noopener noreferrer">Help Center</a></li>
                  <li><a href="/contact-us" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
                </ul>
              )}
            </li>
            <li className="mt-4 text-white">
              <div className="text-black flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('legal')}>
                Legal
                <img src={chevronDown} alt="Chevron Down" className={`ml-2 w-4 h-4 transition-transform ${dropdownOpen === 'legal' ? 'rotate-180 text-white' : 'rotate-0 text-black'}`} />
              </div>
              {dropdownOpen === 'legal' && (
                <ul className="pl-4 mt-2">
                  <li><a href="/terms-conditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
                  <li><a href="/privacy-notice" target="_blank" rel="noopener noreferrer">Privacy Notice</a></li>
                </ul>
              )}
            </li>
            <li className="mt-4 text-white">
              <div className="text-black flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('business')}>
                Business
                <img src={chevronDown} alt="Chevron Down" className={`ml-2 w-4 h-4 transition-transform ${dropdownOpen === 'business' ? 'rotate-180 text-white' : 'rotate-0 text-black'}`} />
              </div>
              {dropdownOpen === 'business' && (
                <ul className="pl-4 mt-2">
                  <li><a href="/report-product" target="_blank" rel="noopener noreferrer">Report a Product</a></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}

      <ImageSlider />

      <main className="relative pt-24"> {/* Ensures the main content does not overlap with the menu */}
        <div className="container mx-auto p-2 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {filteredItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </main>

      {selectedItem && (
        <Page item={selectedItem} onClose={handleClosePopup} />
      )}

      <Footer />

      {/* Chat Icon with Circular Background */}
      <a href="/chat-with-us" className="fixed bottom-4 right-4 z-12000">
  <img
    src={chat}
    alt="Chat With Us"
    className="w-12 h-12 rounded-full shadow-custom-green bg-white p-2 shadow-lg cursor-pointer animate-pulse"
  />
</a>

    </div>
  );
};

export default HomePage;
