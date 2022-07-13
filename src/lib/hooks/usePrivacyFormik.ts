import {useFormik, FormikHelpers} from "formik"
import * as Yup from "yup";

const PrivacySchema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
    newPassword: Yup.string().required("Password is required"),
    currentPassword: Yup.string().required("Password is required"),
});

export interface PrivacyFields{
    password: string;
    newPassword: string;
    currentPassword: string;
}

export interface DefaultFormikOptions<Fields>{
    onSubmit:(
        values:Fields,
        formikHelpers: FormikHelpers<Fields>
    ) => void;
}

export const usePrivacyFormik = (props: DefaultFormikOptions<PrivacyFields> ) => {
    return useFormik({
        initialValues:{
            password:"",
            newPassword:"",
            currentPassword:"",
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: PrivacySchema,
        onSubmit: props.onSubmit
    });
}

export type PrivacyFormik = ReturnType<typeof usePrivacyFormik>;


