import React, { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuthenticated({
  children,
}: {
  children: ReactNode;
}) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/" /> : children;
}
