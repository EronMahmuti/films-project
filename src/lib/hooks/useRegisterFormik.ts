import {useFormik, FormikHelpers} from "formik"
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
    username: Yup.string().required("username is required!"),
    email: Yup.string().email("Please enter a valid email").required("email is required!"),
    password: Yup.string().required("password is required!").min(8,"Password should be at least 8 characters long"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password should be the same'),
    age: Yup.number().min(16,"You are not allowed to register").max(70,"You are to old to watch movies here").typeError('age must be a number').required("age is required!"),
    gender: Yup.string().required("gender is required!"),
    preferences: Yup.string()
});

export interface RegisterFields{
    username: string;
    email:string;
    password:string;
    confirmPassword:string;
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
            password:"",
            confirmPassword:"",
            age:"",
            gender:"",
            preferences:"",
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: RegisterSchema,
        onSubmit: props.onSubmit
    });
}


export type RegisterFormik = ReturnType<typeof useRegisterFormik>;


