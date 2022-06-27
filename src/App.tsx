import { Router } from "./lib/Routes/Router";
import "./App.css";

function App() {
  //const authContext = useAuthContext();

  return (
    <>
      <Router />
    </>
  );
  // return  authContext.user !== null ? <Home /> : <Login />
}

export default App;
