import './App.css';
import * as React from "react";
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'
//import { useAuthContext } from './lib/context/AuthContext/AuthContext';
import { Routes, Route,useRoutes  } from 'react-router-dom';
import { MyProfile } from './pages/MyProfile/MyProfile';
import { Register } from './pages/Register/Register';


function App() {
  //const authContext = useAuthContext();
  let element = useRoutes([
    {
      path:"/",
      element:<Home />,
      children:[
        {
          path:"/login",
          element:<Login />,
        },
        {
          path:"/my-profile",
          element:<MyProfile />,
        },
        {
          path:"/register",
          element:<Register />,
        }
      ]
    }
     
  ])
  return (element)
  // return  authContext.user !== null ? <Home /> : <Login />

}

export default App;
