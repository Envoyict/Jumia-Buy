import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('user');
  const shopWithoutSignup = localStorage.getItem('shopWithoutSignup') === 'true';

  return !isAuthenticated && shopWithoutSignup ? (
    <Navigate to="/signup" />
  ) : (
    children
  );
};

export default PrivateRoute;
