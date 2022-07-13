import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { LoginForm } from "./LoginForm";
import { useLoginFormik } from "../../lib/hooks/useLoginFormik";
import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";
import { Link, Navigate } from "react-router-dom";
import { Register } from "../Register/Register";

const Login = () => {
  const authContext = useAuthContext();
  const formik = useLoginFormik({
    onSubmit: (values) => {
      // console.info("values", values);
      authContext.onLogin(values.username);
    },
  });
  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <LoginForm formik={formik} />
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
