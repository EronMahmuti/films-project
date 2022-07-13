import React, { useContext } from "react";
import { Role } from "../../RouteWrapper/RouteWrapper";



export interface AuthContextFields{
    user: string | null;
    userRole: Role;
    onLogOut: () => void;
    onLogin:(username: string) => void;
}

export const AuthContext = React.createContext<AuthContextFields>({
    user: null,
    userRole: "admin",
    onLogin:() => {},
    onLogOut:() => {},
})

export const useAuthContext = () => useContext(AuthContext);