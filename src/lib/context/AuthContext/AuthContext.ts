import React, { useContext } from "react";



export interface AuthContextFields{
    user: string | null;
    onLogOut: () => void;
    onLogin:(username: string) => void;
}

export const AuthContext = React.createContext<AuthContextFields>({
    user: null,
    onLogin:() => {},
    onLogOut:() => {},
})

export const useAuthContext = () => useContext(AuthContext);