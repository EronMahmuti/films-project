import React from 'react'
import { Box, Button, TextField } from '@mui/material'
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
          
            
            <TextField label="Username" type="email" name='username'
             onChange={formik.handleChange} value={formik.values.username} 
             error={Boolean(formik.errors.username) && formik.touched.username} />
            {formik.errors.username && formik.touched.username && (
              <Box sx={{color:"red", fontSize:"12px"}} > {formik.errors.username} </Box>
            )}
            <TextField 
              label="Password" 
              type="password" 
              name='password' 
              onChange={formik.handleChange} 
              value={formik.values.password} 
              autoComplete='current-password' 
              error={Boolean(formik.errors.password) && formik.touched.password} />
            {formik.errors.password && formik.touched.password && 
            (
              <Box sx={{color:"red", fontSize:"12px"}} > {formik.errors.password} </Box>
            )}
            <Button type="submit" variant="contained" >Log in </Button>
            </form>
    </>
  )
}
