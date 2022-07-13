import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext/AuthContext";

export type Role = "admin" | "editor" | "user";

interface Props {
  children: JSX.Element;
  routeType: "protected" | "guest";
  role?: Role[];
}

export const RouteWrapper = ({ children, role, routeType }: Props) => {
  const { user, userRole } = useAuthContext();

  if (!user && routeType === "protected") {
    return <Navigate to="login" />;
  }

  if ((user && routeType === "guest") || (role && !role.includes(userRole))) {
    return <Navigate to="/" />;
  }
  return children;
};
