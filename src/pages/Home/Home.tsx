import { Box, Toolbar } from '@mui/material';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { useAuthContext } from '../../lib/context/AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';
import { Header } from '../../Layout/Header/Header';
// interface Props{
//     user:string;
//     onLogout: () => void;
// }

const Home = () => {
  const {user} = useAuthContext();
  if( user === null ){
    return <Navigate to="/login" />
  }
  return(
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
        }}>
        <Toolbar/>
        <h1>Welcome {user?.split("@")[0]}!!!</h1>
      </Box>
  </Box>
  )
}

export default Home