import React from 'react'
import { Box, Button, MenuItem, Select, TextField,InputLabel } from '@mui/material'
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
                label="Password" 
                type="password"
                name="password"
                onChange={formik.handleChange} value={formik.values.password}
                error={
                    Boolean(formik.errors.password) && formik.touched.password
                }/>
                {formik.errors.password && 
                formik.touched.password && 
                (
                    <Box sx={{color:"red", fontSize:"12px"}} > {formik.errors.password} </Box>
                )}
                <TextField 
                label="Confirm-Password" 
                type="password"
                name="confirmPassword"
                onChange={formik.handleChange} value={formik.values.confirmPassword}
                error={
                    Boolean(formik.errors.confirmPassword) && formik.touched.confirmPassword
                }/>
                {formik.errors.confirmPassword && 
                formik.touched.confirmPassword && 
                (
                    <Box sx={{color:"red", fontSize:"12px"}} > {formik.errors.confirmPassword} </Box>
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
                
                <Select
                name="gender"
                onChange={formik.handleChange} value={formik.values.gender}
                error={
                    Boolean(formik.errors.gender) && formik.touched.gender
                    
                }
                label="Gender">
                {formik.errors.gender && 
                formik.touched.gender && 
                (
                    <Box sx={{color:"red", fontSize:"12px"}} > {formik.errors.gender} </Box>
                )}
                <MenuItem value={"Male"} >Male</MenuItem>
                    <MenuItem value={"Female"} >Female</MenuItem>
                </Select>
                <Select 
                    label="Preferences"
                    name="preferences"
                    onChange={formik.handleChange} value={formik.values.preferences}
                    error={
                        Boolean(formik.errors.preferences) && formik.touched.preferences
                    }>
                    <MenuItem value={"Action"} >Action</MenuItem>
                    <MenuItem value={"Comedy"} >Comedy</MenuItem>
                    <MenuItem value={"Sci-Fi"} >Sci-Fi</MenuItem>
                    <MenuItem value={"Drama"} >Drama</MenuItem>
                    <MenuItem value={"Thriller"} >Thriller</MenuItem>
                </Select>
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
