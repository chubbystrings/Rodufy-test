import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { checkIsLoggedIn } from "../utils/checkIsLoggedIn";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Signup from "../pages/Signup";
import {AnimatePresence} from 'framer-motion';


const AllRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence >
      <Routes location={location} key={location.key}>
        <Route element={<Home />} path="/" />
        <Route
          element={
            <LoggedInUserRoute>
              <Login />
            </LoggedInUserRoute>
          }
          path="/login"
        />
        <Route
          element={
            <LoggedInUserRoute>
              <Signup />
            </LoggedInUserRoute>
          }
          path="/signup"
        />
        <Route
          element={
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          }
          path="/posts"
        />
      </Routes>
    </AnimatePresence>
  );
};

const ProtectedRoute = ({ children }: { children: any }) => {
  if (!checkIsLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const LoggedInUserRoute = ({ children }: { children: any }) => {
  if (checkIsLoggedIn()) {
    return <Navigate to="/posts" replace />;
  }

  return children;
};

export default AllRoutes;
