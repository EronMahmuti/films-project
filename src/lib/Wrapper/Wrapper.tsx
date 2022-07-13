import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext/AuthContext";
import { Role } from "../RouteWrapper/RouteWrapper";
import { useLocation } from "react-router-dom";

interface Props {
  children: JSX.Element;
  role?: Role[];
}

export const Wrapper = ({ children, role }: Props) => {
  const {userRole} = useAuthContext();

  if(role?.includes(userRole)){
    return children;
  }

  return null;
};
