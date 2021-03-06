import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";

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

      <List
        sx={{
          marginTop: "10px",
        }}
      >
        <Link className="sidebar_links" to="posts">
          <ListItemButton>
            <ListItem>Posts</ListItem>
          </ListItemButton>
        </Link>
        <Link className="sidebar_links" to="comments">
          <ListItemButton>
            <ListItem>Comments</ListItem>
          </ListItemButton>
        </Link>
        <Link className="sidebar_links" to="photos">
          <ListItemButton>
            <ListItem>Photos</ListItem>
          </ListItemButton>
        </Link>
      </List>
      <Outlet />
    </Drawer>
  );
};
