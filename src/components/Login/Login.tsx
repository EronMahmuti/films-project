import React from 'react'
import { Button, TextField } from '@mui/material'
import { useLoginFormik } from '../../lib/hooks/useLoginFormik'

const Login = () => {

  const formik = useLoginFormik({
    onSubmit(values, formikHelpers){
      console.info("values", values);
    }
  })

  return (
    <div style={{
        margin:"50px"
    }} >
      <form onSubmit={formik.handleSubmit} style={{
        display:"flex",
        flexDirection:"column",
        rowGap:"20px",
        width:"400px"
    }} >
        <h1>Login </h1>
        <TextField label="Username" />
        <TextField label="Password" type="password" autoComplete='current-password' />
        <Button type="submit" variant="contained" >Log in </Button>
        </form>
    </div>
  )
}

export default Login