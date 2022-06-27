import { useState } from 'react';
import {AuthContext, AuthContextFields} from './AuthContext'

interface Props{
    children: React.ReactNode;
}
export const AuthContextProvider = (props:Props) => {
    const [user, setUser] = useState<string | null>(() => {
        const value = localStorage.getItem("user");
        return value;
        //lazy initialization 
        //kur duhet me kalkulu ose me lexu prej dika tjetr 
      })
      
      const handleLogin = (username:string) => {
        setUser(username)
        localStorage.setItem("user",username);
      }
      const handleLogOut = () => {
        setUser(null)
        localStorage.removeItem("user");
        window.location.reload()
      }
      
      const context: AuthContextFields = {
        user,
        onLogin: handleLogin,
        onLogOut: handleLogOut,
      }
      return (
        <AuthContext.Provider value={context}>
            {props.children}
        </AuthContext.Provider>
      )
}
