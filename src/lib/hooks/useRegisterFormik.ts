import {useFormik, FormikHelpers} from "formik"
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
    username: Yup.string().required("username is required!"),
    email: Yup.string().email("Please enter a valid email").required("email is required!"),
    age: Yup.string().required("age is required!"),
    gender: Yup.string().required("gender is required!"),
    preferences: Yup.string().required("preferences is required!")
});

export interface RegisterFields{
    username: string;
    email:string;
    age:string;
    gender:string;
    preferences:string;
}


interface UseRegisterFormOptions{
    onSubmit:(
        values: RegisterFields,
        formikHelpers: FormikHelpers<RegisterFields>
    ) => void;
}


export const useRegisterFormik = (props: UseRegisterFormOptions ) => {
    return useFormik({
        initialValues:{
            username:"",
            email:"",
            age:"",
            gender:"",
            preferences:"",
        },
        // validateOnBlur: true,
        // validateOnChange: true,
        // validationSchema: RegisterSchema,
        onSubmit: props.onSubmit
    });
}


export type RegisterFormik = ReturnType<typeof useRegisterFormik>;


