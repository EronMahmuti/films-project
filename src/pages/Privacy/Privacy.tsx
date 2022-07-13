import { usePrivacyFormik } from "../../lib/hooks/usePrivacyFormik";
import { PrivacyForm } from "./PrivacyForm";

export const Privacy = () => {
  const formik = usePrivacyFormik({
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
      <PrivacyForm formik={formik} />
    </div>
  );
};
