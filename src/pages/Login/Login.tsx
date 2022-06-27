import React,{useState} from 'react'
import { Button, TextField } from '@mui/material'
import { LoginForm } from './LoginForm'
import { useLoginFormik } from '../../lib/hooks/useLoginFormik'
import {  useAuthContext } from '../../lib/context/AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';

// interface Props{
//   onLogin: (username: string) => void;
// }

const Login = () => {
  
  const authContext = useAuthContext();
  const formik = useLoginFormik({
    onSubmit: (values) => {
      //console.info("values", values);
      authContext.onLogin(values.username);
    }
  })
  if( authContext.user !== null ){
    return <Navigate to="/" />
  }
  return (
    <div style={{
        margin:"50px"
    }} >
      <LoginForm formik={formik} />     
    </div>
  )
}

export default Login