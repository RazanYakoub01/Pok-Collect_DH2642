import React, { useEffect, useState } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { auth } from './firebaseConfig.js';


/*
  RequireAuth Component:
  A higher-order component (HOC) that checks if the user is authenticated.
  If authenticated, it renders the nested Outlet components (child routes).
  If not authenticated, it redirects the user to the login page.
*/
const RequireAuth = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  /* If the user is authenticated, render the child routes using Outlet
  If not authenticated, redirect the user to the login page preserving the current route 
  */
  return auth.currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
