import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Perfil from "../pages/Perfil";

function Rotas() {
  return(
    <Routes>
       <Route path="/Home" element={<Home/>}></Route>
       <Route path="/About" element={<About/>}></Route>
       <Route path="/Perfil" element={<Perfil/>}></Route>
    </Routes>
  )
}

export default Rotas;