import React,{useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import Sheet from "./components/Sheet";
import Login from "./components/Login";
import AuthContext from "./hooks/authContext";
import PrivateRoute from "./route-config/PrivateRoute";

const App = () => {
  //i will make it the root component for the application
 //consume the Context Api  React-context 
 const [auth,setAuth]=useState(false) ;
 const login=()=>{
   setAuth(true)
 };
 const logout=()=>{
   setAuth(false)
 }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{status:auth,loggedIn:login,loggedOut:logout}}>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Sheet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<PrivateRoute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;
