import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
     <header>
        <Link to="/Home">Home</Link>
        <Link to="/About">Sobre</Link>
        <Link to="/Perfil">Perfil</Link>
    </header>
    )
};

export default Header;