import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { RegisterFormik } from '../../lib/hooks/useRegisterFormik'
import { useRegisterFormik } from '../../lib/hooks/useRegisterFormik'
import { RegisterForm } from './RegisterForm';


export const Register = () => {
    const formik = useRegisterFormik({
        onSubmit:(values) => {
             console.info("values", values);
        }
    })
  return (
    <div style={{
        margin:"50px"
    }} >
      <RegisterForm formik={formik} />     
    </div>
  )
}
