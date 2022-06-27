import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAuthContext } from '../../lib/context/AuthContext/AuthContext';

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
               boxSizing:"border-box"
            }}
         >
            <div className="logo">
               <h2>Films Logo</h2>
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
                  <li style={{
                        cursor: "pointer",
                     }}><NavLink to="register" > Register </NavLink></li>
                  <li style={{
                        cursor: "pointer",
                     }} > <NavLink to="my-profile" > My Profile </NavLink></li>
                  <li
                     onClick={authContext.onLogOut}
                     style={{
                        cursor: "pointer",
                     }}
                  >
                     Logout
                  </li>
               </Box>
            </nav>
         </Box>
      </div>
   );
};
