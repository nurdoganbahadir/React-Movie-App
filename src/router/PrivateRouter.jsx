import React from "react";
import { useAuthContext } from "../context/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { currentUser } = useAuthContext();
  return currentUser ? <Outlet /> : <Navigate replace to="/login" />;
};

export default PrivateRouter;
