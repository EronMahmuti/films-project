import {
   Drawer,
   List,
   ListItem,
   ListItemButton,
   ListItemText,
   Toolbar,
} from "@mui/material";
//import {Link} from 'react-router-dom'


export const Sidebar = () => {
   return (
      <Drawer
         variant="permanent"
         anchor="left"
         sx={{
            width: 250,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 250, top: "auto" },
         }}
      >
         <Toolbar />
         
         <List sx={{
            marginTop: "10px",
         }}>
            {["item 1", "Item 2", "Item 3", "Item 4"].map((text) => (
               <ListItem key={text} disablePadding>
                  <ListItemButton>
                     <ListItemText primary={text}>
                        </ListItemText>
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Drawer>
   );
};
