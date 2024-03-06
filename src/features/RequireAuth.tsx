import React from "react";

import { Navigate, useLocation } from "react-router-dom";
import { selectAuth } from "../redux/slices/authSlice";
import PageLoader from "../components/UI/PageLoader";

import { useAppSelector } from "../redux/hooks";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const auth = useAppSelector(selectAuth);
  const location = useLocation();

  if (auth.pending) return <PageLoader />;

  return auth.currentUser ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
};

export default RequireAuth;
