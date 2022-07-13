import React from "react";

import { useRegisterFormik } from "../../lib/hooks/useRegisterFormik";
import { RegisterForm } from "./RegisterForm";

export const Register = () => {
  const formik = useRegisterFormik({
    onSubmit: (values) => {
      console.info("values", values);
      console.log("submit clicked");
    },
  });
  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <RegisterForm formik={formik} />
    </div>
  );
};
