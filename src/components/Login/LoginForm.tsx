import { Button, TextField } from '@mui/material'
import React from 'react'
import { LoginFormik } from '../../lib/hooks/useLoginFormik'
interface Props {
    formik: LoginFormik;
}

export const LoginForm = ({formik}: Props) => {

  return (
    <>
            <form onSubmit={formik.handleSubmit} 
            style={{
            display:"flex",
            flexDirection:"column",
            rowGap:"20px",
            width:"400px"
            
        }}>
            <h1>Login </h1>
            <TextField label="Username" type="email" name='username' onChange={formik.handleChange} value={formik.values.username} />
            <TextField label="Password" type="password" name='password' onChange={formik.handleChange} value={formik.values.password} autoComplete='current-password' />
            <Button type="submit" variant="contained" >Log in </Button>
            </form>
    </>
  )
}
