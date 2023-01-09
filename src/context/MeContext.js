import { createContext, useEffect, useState } from "react";

export const MeContext = createContext()

export const MeProvider = ({children}) => {
  const [me,setMe] = useState(JSON.parse(localStorage.getItem("me")) || "")

  useEffect(() => {
    if(me){
      localStorage.setItem("me", JSON.stringify(me))
    }else{
      localStorage.removeItem("me")
    }
  },[me])


  return <MeContext.Provider value={{me, setMe}}>
    {children}
  </MeContext.Provider>
}