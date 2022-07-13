import { useAccountFormik } from "../../lib/hooks/useAccountFormik";
import { AccountForm } from "./AccountForm";

export const Account = () => {
  const formik = useAccountFormik({
    onSubmit: (values) => {
      console.info("values", values);
    },
  });
  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <AccountForm formik={formik} />
    </div>
  );
};
