import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home'


function App() {
  const [user, setUser] = useState<string | null>(() => {
    const value = localStorage.getItem("user");
    return value;
  })
  
  const handleLogin = (username:string) => {
    setUser(username)
    localStorage.setItem("user",username);
  }
  const handleLogout = () => {
    setUser(null)
    localStorage.remove("user");
  }

  return  user !== null ? <Home user={user} onLogout={handleLogout} /> : <Login onLogin={handleLogin}  />
}

export default App;
