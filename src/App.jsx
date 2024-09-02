import React, { useState, useEffect } from 'react'; // Import useEffect here
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemCard from './components/ItemCard';
import Page from './components/Page.jsx';
import CartPage from './components/CartPage';
import FillThisPage from './components/FillThisPage';

import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import TransferPage from './components/TransferPage';
import SuccessPage from './components/Successpage';
import ChatWithUs from './components/ChatWithUs';
import HelpCenter from './components/HelpCenter';
import ContactUs from './components/ContactUs';
import TermsConditions from './components/TermsCondition';
import PrivacyNotice from './components/PrivacyNotice';
import ReportProduct from './components/ReportProduct';
import FirstPage from "./components/FirstPage";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddToCart = (item) => {
    console.log('Item being added:', item); // For debugging
    setSelectedItem(item);
    setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    setShowPopup(true);
  };

  const handleClosePopup = () => setShowPopup(false);
  const handleViewCart = () => setShowPopup(false);

  const handleCheckout = () => {
    setShowPopup(false);
    if (!localStorage.getItem('user')) {
      window.location.href = '/signup';
    } else {
      window.location.href = '/fillThis';
    }
  };

  // Example of useEffect for debugging purposes
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/sign" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/website" element={<HomePage />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/fillThis" element={<FillThisPage cart={cart} />} />
        <Route path="/transfer" element={<TransferPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/" element={<HomePage />} />
      <Route path="/chat-with-us" element={<ChatWithUs />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/privacy-notice" element={<PrivacyNotice />} />
      <Route path="/report-product" element={<ReportProduct />} />
        {/* You can add more routes here if needed */}
        <Route path="/popup" element={
          showPopup && selectedItem && (
            <Page
              item={selectedItem}
              onClose={handleClosePopup}
              onViewCart={handleViewCart}
              onCheckout={handleCheckout}
            />
          )
        } />
      </Routes>
    </Router>
  );
};

export default App;
