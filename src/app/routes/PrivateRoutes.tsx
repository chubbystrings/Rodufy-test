import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { checkIsLoggedIn } from "../utils/checkIsLoggedIn";


const PrivateRoutes: React.FC<{ Component: React.FC; path: string }> = ({
  Component,
  path,
}) => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <Component />
          </ProtectedRoute>
        }
        path={path}
      />
    </Routes>
  );
};

const ProtectedRoute = ({ children }: {children: any}) => {
  if (!checkIsLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoutes;
