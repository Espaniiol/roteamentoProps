import React from "react";
import styled from "styled-components";

const StyleButton = styled.button`
  background-color: blue;
  color: #000;

  &:hover{
      background-color:red;
  }
`

const Button = ({onclick}) => {
  return<StyleButton onclick={onclick}>button styled</StyleButton>
}

export default Button;