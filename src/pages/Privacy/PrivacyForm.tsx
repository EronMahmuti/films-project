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
import { PrivacyFormik } from "../../lib/hooks/usePrivacyFormik";

interface Props {
  formik: PrivacyFormik;
}

export const PrivacyForm = ({ formik }: Props) => {
  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
        width: "400px",
      }}
    >
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
        label="New Password"
        type="password"
        name="newPassword"
        onChange={formik.handleChange}
        value={formik.values.newPassword}
        error={Boolean(formik.errors.newPassword) && formik.touched.newPassword}
        helperText={formik.touched.newPassword && formik.errors.newPassword}
      />
      <TextField
        label="Confirm Password"
        type="password"
        name="currentPassword"
        onChange={formik.handleChange}
        value={formik.values.currentPassword}
        error={
          Boolean(formik.errors.currentPassword) &&
          formik.touched.currentPassword
        }
        helperText={
          formik.touched.currentPassword && formik.errors.currentPassword
        }
      />
      <Button type="submit" variant="contained">
        Update Profile
      </Button>
    </form>
  );
};
