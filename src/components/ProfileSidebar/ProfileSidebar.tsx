import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../../App.css"

export const ProfileSidebar = () => {
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
      <List
        sx={{
          marginTop: "10px",
          textDecoration: "none",
        }}
      >
        <Link className="sidebar_links" to="account">
          <ListItemButton>
            <ListItem>Account</ListItem>
          </ListItemButton>
        </Link>
        <Link className="sidebar_links" to="privacy">
          <ListItemButton>
            <ListItem>Password</ListItem>
          </ListItemButton>
        </Link>
        <Link className="sidebar_links" to="deactivate">
          <ListItemButton>
            <ListItem>Deactivate Account</ListItem>
          </ListItemButton>
        </Link>
      </List>
    </Drawer>
  );
};
