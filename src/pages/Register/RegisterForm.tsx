import React from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { RegisterFormik } from "../../lib/hooks/useRegisterFormik";

interface Props {
  formik: RegisterFormik;
}

export const RegisterForm = ({ formik }: Props) => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Register User</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
            width: "400px",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Username"
            type="text"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            error={Boolean(formik.errors.username) && formik.touched.username}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={Boolean(formik.errors.email) && formik.touched.email}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={Boolean(formik.errors.password) && formik.touched.password}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            label="Confirm-Password"
            type="password"
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            error={
              Boolean(formik.errors.confirmPassword) &&
              formik.touched.confirmPassword
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <TextField
            label="Age"
            type="text"
            name="age"
            onChange={formik.handleChange}
            value={formik.values.age}
            error={Boolean(formik.errors.age) && formik.touched.age}
            helperText={formik.touched.age && formik.errors.age}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
              error={Boolean(formik.errors.gender) && formik.touched.gender}
              label="Gender"
            >
              {formik.errors.gender && formik.touched.gender && (
                <Box sx={{ color: "red", fontSize: "12px" }}>
                  {" "}
                  {formik.errors.gender}{" "}
                </Box>
              )}
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained">
            Register
          </Button>
        </form>
      </div>
    </>
  );
};
