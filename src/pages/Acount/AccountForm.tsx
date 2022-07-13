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
import { AccountFormik } from "../../lib/hooks/useAccountFormik";

interface Props {
  formik: AccountFormik;
}

export const AccountForm = ({ formik }: Props) => {
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
        label="Address"
        type="address"
        name="address"
        onChange={formik.handleChange}
        value={formik.values.address}
        error={Boolean(formik.errors.address) && formik.touched.address}
        helperText={formik.touched.address && formik.errors.address}
      />
      <Button type="submit" variant="contained">
        Update Profile
      </Button>
    </form>
  );
};
