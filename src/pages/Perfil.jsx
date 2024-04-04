import React from "react";
import Button from "../components/Button";
import ButtonStyled from "../style-components/ButtonStyled";
import Info from "../components/info";

const Perfil = () => {

  const handleClick = () =>{
    alert("Funcionou!");
  };

  return <main>
          <Info titulo="Informacoes" descricao="Essa e a disciplina de programacao Web"/>
          <br/>
          Clique no botao abaixo <br/>
          <Button tipo="primary" titulo="Clique aqui"/>
          <ButtonStyled onclick={handleClick}/>
          </main>
}

export default Perfil;