import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AdicionaDados from "../pages/AdicionaDados";
import Perfil from "../pages/Perfil";
import BuscaEnderecos from "../pages/BuscaEndereco";

function Rotas() {
  return(
    <Routes>
       <Route path="/Home" element={<Home/>}></Route>
       <Route path="/AdicionaDados" element={<AdicionaDados/>}></Route>
       <Route path="/Perfil" element={<Perfil/>}></Route>
       <Route path="/Enderecos" element={<BuscaEnderecos/>}></Route>
    </Routes>
  )
}

export default Rotas;