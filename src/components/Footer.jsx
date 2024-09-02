import React from "react";
import "../App.css";
import phoneImage from "../assets/images/phone.png";
import facebookImage from "../assets/images/facebook.png";
import twitterImage from "../assets/images/twitter.png";
import instagramImage from "../assets/images/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-custom-green text-white p-6 mt-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-lg font-bold text-custom-black mb-2">
          Envoy Shop Nigeria - Nigeria's No. 45 Shopping Destination
        </h2>
        <p className="mt-2 text-sm">
          Shop for Everything You Need on Envoy Shop Nigeria
        </p>
        <p className="mt-2 text-sm">
          Envoy Shop Nigeria is the largest online shopping website in Nigeria.
          We offer a platform where customers in any part of Nigeria can find
          and shop for all they need in one online store.
        </p>
        <button className="bg-white text-custom-green px-9 py-2 mt-4 rounded font-bold hover:bg-gray-200 transition-all duration-300">
          SHOW MORE
        </button>
      </div>
      <div className="border-t border-gray-300 mt-8 pt-6">
        <div className="flex flex-wrap justify-center text-center md:text-left">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="font-semibold text-custom-black">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/chat-with-us" className="hover:text-orange-500">Chat With Us</a></li>
              <li><a href="/help-center" className="hover:text-orange-500">Help Center</a></li>
              <li><a href="/contact-us" className="hover:text-orange-500">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="font-semibold text-custom-black">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/terms-conditions" className="hover:text-orange-500">Terms & Conditions</a></li>
              <li><a href="/privacy-notice" className="hover:text-orange-500">Privacy Notice</a></li>
              <li><a href="/cookies" className="hover:text-orange-500">Cookie Notice</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="font-semibold text-custom-black">Business</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/become-a-seller" className="hover:text-orange-500">Become a Seller</a></li>
              <li><a href="/report-product" className="hover:text-orange-500">Report a Product</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="mb-4">Envoy Shop 2024</p>
        <div className="flex justify-center items-center text-xs sm:text-sm mb-4">
          <img src={phoneImage} alt="Phone" className="inline-block w-4 h-4 mr-2" />
          <span>070 4821 4712</span>
        </div>
        <div className="text-xs sm:text-sm mb-2">
          Follow us and get a chance to win a gift box
        </div>
        <div className="flex justify-center space-x-4">
          <a href="/auth/facebook">
            <img src={facebookImage} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="/auth/twitter">
            <img src={twitterImage} alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="/auth/instagram">
            <img src={instagramImage} alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
