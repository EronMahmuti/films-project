import React,{useState} from 'react'
import { Button, TextField } from '@mui/material'
import { LoginForm } from './LoginForm'
import { useLoginFormik } from '../../lib/hooks/useLoginFormik'
interface Props{
  onLogin: (username: string) => void;
}
const Login = (props:Props) => {
  
  const formik = useLoginFormik({
    onSubmit: (values) => {
      //console.info("values", values);
      props.onLogin(values.username);
    }
  })

  return (
    <div style={{
        margin:"50px"
    }} >
      <LoginForm formik={formik} />
      
      
    </div>
  )
}

export default Login