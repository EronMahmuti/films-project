import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'
//import { useAuthContext } from './lib/context/AuthContext/AuthContext';
import { Routes, Route } from 'react-router-dom';
import { MyProfile } from './pages/MyProfile/MyProfile';
import { Register } from './pages/Register/Register';


function App() {
  //const authContext = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
  // return  authContext.user !== null ? <Home /> : <Login />

}

export default App;
