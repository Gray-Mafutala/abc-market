import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const currentUser = useSelector((state) => state.user.user);
  const location = useLocation();

  return currentUser?.accessToken ? (
    children
  ) : (
    <Navigate to="/auth" replace state={{ path: location.pathname }} />
  );
};

export default RequireAuth;
