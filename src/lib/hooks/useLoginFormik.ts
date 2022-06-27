import {useFormik, FormikHelpers} from "formik"
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
    username: Yup.string().email("Please enter a valid email").required("email is required!"),
    password: Yup.string().required("Password is required"),
});

export interface LoginFields{
    username: string;
    password: string;
}

interface UseLoginFormOptions{
    onSubmit:(
        values:LoginFields,
        formikHelpers: FormikHelpers<LoginFields>
    ) => void;
}

export const useLoginFormik = (props: UseLoginFormOptions ) => {
    return useFormik({
        initialValues:{
            username:"",
            password:"",
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: LoginSchema,
        onSubmit: props.onSubmit
    });
}

export type LoginFormik = ReturnType<typeof useLoginFormik>;


