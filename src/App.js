import { useContext } from "react";
import { Private } from "./apps/Private";
import { Public } from "./apps/Public";
import { AuthContext } from "./context/AuthContext";
import { Login } from "./pages/Login/Login";
import { Registr } from "./pages/Registr/Registr";


function App() {
  const {token, setToken} = useContext(AuthContext)

  if(token){
    return <Private/>
  }
  return  <Public/>
}

//  {/* <Registr /> */}
//     {/* <Login/> */}

export default App;
