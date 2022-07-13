import { useFormik, FormikHelpers } from "formik";
import { DefaultFormikOptions } from "./usePrivacyFormik";
import * as Yup from "yup";

const AccountSchema = Yup.object().shape({
  username: Yup.string().required("username is required"),
  email: Yup.string().required("email is required"),
  address: Yup.string().required("address is required"),
});

export interface AccountFields {
  username: string;
  email: string;
  address: string;
}

export const useAccountFormik = (
  props: DefaultFormikOptions<AccountFields>
) => {
  return useFormik({
    initialValues: {
      username: "",
      email: "",
      address: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: AccountSchema,
    onSubmit: props.onSubmit,
  });
};

export type AccountFormik = ReturnType<typeof useAccountFormik>;
