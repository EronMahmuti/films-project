import React from 'react'
import {Box} from '@mui/material'
interface Props{
    onLogout:() => void;
}
export const Header = (props:Props) => {
  return (
    <Box component="header" sx={{
        display:"flex",
        padding:"0 20px",
        alignItems:"center",
        justifyContent:"space-between"
    }} >
        <div className="logo">
            <h2>Films Logo</h2>
        </div>
        <nav>
            <Box component="ul" sx={{
                display:"flex",
                listStyle:"none",
                columnGap:"20px",
                cursor:"pointer",
            }}>
                <li>My movies</li>
                <li>My profile</li>
                <li onClick={props.onLogout} > Logout</li>
            </Box>
        </nav>
    </Box>
  )
}
