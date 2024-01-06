import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Login } from "./components/Login";
import { Contact } from "./components/Contact";
import { Signup } from "./components/Signup";
import {Navbar} from "./components/Navbar";
import { Errorpage } from "./components/Errorpage";
import { Logout } from "./components/Logout";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./components/reducer/UseReducer";


export const UserContext = createContext();

const Routing = ()=>{
  return(
  
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route path="/" element={<Home/>}/>
          <Route path="/about"element={<About/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout/>} />


          <Route path="*" element={<Errorpage/>}/>

          </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

const App=()=>{
  const[state,dispatch]=useReducer(reducer,initialState);
  return(

    
    <UserContext.Provider value={{state,dispatch}}>
      <Routing/>
   

    </UserContext.Provider>
    
  )

}
export default App;