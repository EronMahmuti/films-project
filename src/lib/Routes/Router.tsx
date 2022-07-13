import React from "react";
import { useRoutes } from "react-router-dom";
import { Account } from "../../pages/Acount/Account";
import { Admin } from "../../pages/Admin/Admin";
import { Comments } from "../../pages/Comments/Comments";
import { DeactivateAccount } from "../../pages/DeactivateAccount/DeactivateAccount";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import { MyProfile } from "../../pages/MyProfile/MyProfile";
import { Photos } from "../../pages/Photos/Photos";
import { Posts } from "../../pages/Posts/Posts";
import { Privacy } from "../../pages/Privacy/Privacy";
import { Register } from "../../pages/Register/Register";
import { User } from "../../pages/User/User";
import { RouteWrapper } from "../RouteWrapper/RouteWrapper";
import { Wrapper } from "../Wrapper/Wrapper";

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
        <RouteWrapper routeType="guest">
          <Login />
        </RouteWrapper>
      ),
    },
    {
      path: "my-profile",
      element: <MyProfile />,
      children: [
        {
          path: "account",
          element: <Account />,
        },
        { path: "privacy", element: <Privacy /> },
        { path: "deactivate", element: <DeactivateAccount /> },
      ],
    },
    {
      path: "register",
      element: (
        <RouteWrapper routeType="guest">
          <Register />
        </RouteWrapper>
      ),
    },
    {
      path: "comments",
      element: (
        <RouteWrapper routeType="protected">
          <Comments />
        </RouteWrapper>
      ),
    },
    {
      path: "posts",
      element: (
        <RouteWrapper routeType="protected">
          <Posts />
        </RouteWrapper>
      ),
    },
    {
      path: "photos",
      element: (
        <RouteWrapper routeType="protected">
          <Photos />
        </RouteWrapper>
      ),
    },
    {
      path: "/admin",
      element: (
        <RouteWrapper routeType="protected">
          <Admin />
        </RouteWrapper>
      ),
    },
    {
      path: "/user",
      element: (
        <RouteWrapper routeType="protected">
          <User />
        </RouteWrapper>
      ),
    },
    {
      path: "*",
      element: <p>Page not found</p>,
    },
  ]);
  return element;
};
