import { Box, Toolbar } from "@mui/material";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";
import { Header } from "../../Layout/Header/Header";
import { Role } from "../../lib/RouteWrapper/RouteWrapper";
// interface Props{
//     user:string;
//     onLogout: () => void;
// }

const userText: { [key in Role]: string } = {
  admin: "Hello drejtor",
  editor: "Hello puntor",
  user: "Hello shef",
};

const Home = () => {
  const { user, userRole } = useAuthContext();

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Header />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
        }}
      >
        <Toolbar />
        <h1>Welcome {user?.split("@")[0]}!!!</h1>

        <h2> {userText[userRole]} </h2>
      </Box>
    </Box>
  );
};

export default Home;
