import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
     <header>
        <Link to="/Home">Home</Link>
        <Link to="/AdicionaDados">Sobre</Link>
        <Link to="/Perfil">Perfil</Link>
        <Link to="/Enderecos">Busca Endereco</Link>
    </header>
    )
};

export default Header;