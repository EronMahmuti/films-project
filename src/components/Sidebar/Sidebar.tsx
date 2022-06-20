import React from 'react'
import {Box} from '@mui/material'
export const Sidebar = () => {
  return (
    <div>
        <Box component="ul" sx={{
                display:"flex",
                flexDirection:"column",
                listStyle:"none",
                columnGap:"20px",
                background:"#333",
                flex: "30%",
                height:"80vh",
                position:"fixed",
            }}>
                    <li>side item</li>
                    <li>side item</li>
                    <li>side item</li>
            </Box>
    </div>
  )
}
