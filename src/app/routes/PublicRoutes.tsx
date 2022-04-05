import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { checkIsLoggedIn } from "../utils/checkIsLoggedIn";

const PublicRoutes: React.FC<{ Component: React.FC; path: string }> = ({
  Component,
  path,
}) => {
  return (
    <Routes>
      <Route
        element={
          <LoggedInUserRoute>
            <Component />
          </LoggedInUserRoute>
        }
        path={path}
      />
    </Routes>
  );
};

const LoggedInUserRoute = ({ children }: { children: any }) => {
  if (checkIsLoggedIn()) {
    console.log(true)
    return <Navigate to="/posts" replace />;
  }

  return children;
};
export default PublicRoutes;
