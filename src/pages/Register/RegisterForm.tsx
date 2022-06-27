import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { RegisterFormik } from '../../lib/hooks/useRegisterFormik'

interface Props {
    formik: RegisterFormik;
}

export const RegisterForm = ({formik}: Props) => {

  return (
    <div>
        <form onSubmit={formik.handleSubmit}
            style={{
                display:"flex",
                flexDirection:"column",
                rowGap:"20px",
                width:"400px"
            }}
        >
            <TextField 
                label="Username" 
                type="text"
                name="username"
                onChange={formik.handleChange} value={formik.values.username}
                error={
                    Boolean(formik.errors.username) && formik.touched.username
                }/>
                {formik.errors.username && 
                formik.touched.username && 
                (
                    <Box sx={{color:"red", fontSize:"12px"}} > {formik.errors.username} </Box>
                )}
                <TextField 
                label="Email" 
                type="email"
                name="email"
                onChange={formik.handleChange} value={formik.values.email}
                error={
                    Boolean(formik.errors.email) && formik.touched.email
                }/>
                {formik.errors.email && 
                formik.touched.email && 
                (
                    <Box sx={{color:"red", fontSize:"12px"}} > {formik.errors.email} </Box>
                )}
                <TextField 
                label="Age" 
                type="text"
                name="age"
                onChange={formik.handleChange} value={formik.values.age}
                error={
                    Boolean(formik.errors.age) && formik.touched.age
                }/>
                {formik.errors.age && 
                formik.touched.age && 
                (
                    <Box sx={{color:"red", fontSize:"12px"}} > {formik.errors.age} </Box>
                )}
                <TextField 
                label="Gender" 
                type="text"
                name="gender"
                onChange={formik.handleChange} value={formik.values.gender}
                error={
                    Boolean(formik.errors.gender) && formik.touched.gender
                }/>
                {formik.errors.gender && 
                formik.touched.gender && 
                (
                    <Box sx={{color:"red", fontSize:"12px"}} > {formik.errors.gender} </Box>
                )}
                <TextField 
                label="Preferences" 
                type="text"
                name="preferences"
                onChange={formik.handleChange} value={formik.values.preferences}
                error={
                    Boolean(formik.errors.preferences) && formik.touched.preferences
                }/>
                {formik.errors.preferences && 
                formik.touched.preferences && 
                (
                    <Box sx={{color:"red", fontSize:"12px"}} > {formik.errors.preferences} </Box>
                )}
                <Button type="submit" variant="contained" >Register</Button>
        </form>
    </div>
  )
}
