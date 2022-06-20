import React from 'react'
import { Header } from '../../Layout/Header/Header'
interface Props{
    user:string;
    onLogout: () => void;
}
const Home = ({user, onLogout}: Props) => {

  return (
    <div>
    <Header onLogout={onLogout} />
    <div></div>
    <main>      
      <h1>Welcome {user.split("@")[0] }</h1>
    </main>
  </div>
  )
}

export default Home