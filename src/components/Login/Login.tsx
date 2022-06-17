import React from 'react'
import { Button, TextField } from '@mui/material'


const Login = () => {
  return (
    <div style={{
        margin:"50px",
        display:"flex",
        flexDirection:"column",
        rowGap:"20px",
        width:"400px"
    }} >
        <h1>Login </h1>
        <TextField label="Username" />
        <TextField label="Password" type="password" autoComplete='current-password' />
        <Button variant="contained" >Log in </Button>
    </div>
  )
}

export default Login