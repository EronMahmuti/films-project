import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";

interface Props {
  onLogOut: () => void;
}
export const Header = () => {
  const authContext = useAuthContext();
  return (
    <div>
      <Box
        component="header"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          position: "fixed",
          width: "100%",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#fff",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          boxSizing: "border-box",
        }}
      >
        <div className="logo">
          <h2>
            <NavLink className="header_logo" to="/">
              Films Logo
            </NavLink>
          </h2>
        </div>
        <nav>
          <Box
            component="ul"
            sx={{
              display: "flex",
              listStyle: "none",
              columnGap: "30px",
            }}
          >
            <li>
              <NavLink className="header_links" to="/admin">
                {authContext.userRole}
              </NavLink>
            </li>
            <li>
              <NavLink className="header_links" to="/">
                My Movies
              </NavLink>
            </li>
            <li>
              <NavLink className="header_links" to="/my-profile">
                My Profile
              </NavLink>
            </li>

            <li className="header_links" onClick={authContext.onLogOut}>
              Logout
            </li>
          </Box>
        </nav>
      </Box>
    </div>
  );
};
