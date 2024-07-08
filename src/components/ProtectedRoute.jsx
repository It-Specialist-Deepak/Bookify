import React from 'react';
import { Navigate } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';

const ProtectedRoute = ({ children }) => {
  const firebase = useFirebase();

  if (!firebase.isLoggedIn) {
    return <Navigate to="/intro" />;
  }

  return children;
};

export default ProtectedRoute;
