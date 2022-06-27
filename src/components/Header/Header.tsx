import { Box } from "@mui/material";
import {Link} from 'react-router-dom'
interface Props {
   onLogOut: () => void;
}
export const Header = (props: Props) => {
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
               width: "95%",
               zIndex: (theme) => theme.zIndex.drawer + 1,
               backgroundColor: "#fff",
               borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            }}
         >
            <div className="logo">
               <h2>Films Loooogo</h2>
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
                     }}><Link to="/movies"> My Movies </Link> </li>
                  <li style={{
                        cursor: "pointer",
                     }}> <Link to="/my-profile"> Mys Profile-1 </Link> </li>
                  <li
                     onClick={props.onLogOut}
                     style={{
                        cursor: "pointer",
                     }}>
                     Logout
                  </li>
               </Box>
            </nav>
         </Box>
      </div>
   );
};
