import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import { MyProfile } from "../../pages/MyProfile/MyProfile";
import { Register } from "../../pages/Register/Register";
import { RouteWrapper } from "../RouteWrapper/RouteWrapper";

export const Router = () => {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <RouteWrapper routeType="protected">
          <Home />
        </RouteWrapper>
      ),
    },
    {
      path: "login",
      element: (
        <RouteWrapper routeType="protected">
          <Login />
        </RouteWrapper>
      ),
    },
    {
      path: "my-profile",
      element: (
        <RouteWrapper routeType="protected">
          <MyProfile />
        </RouteWrapper>
      ),
    },
    {
      path: "register",
      element: (
        <RouteWrapper routeType="guest">
          <Register />
        </RouteWrapper>
      ),
    },
  ]);
  return element;
};
