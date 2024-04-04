import React from "react";
import styled from "styled-components";

const StyleFooter = styled.footer`
padding: 15px 0;
background-color: rgb(6, 6, 71);
color: white;
text-align: center;
`


const Footer = () => {

  return <StyleFooter>&copy; Guilherme Espaniol Schlickmann</StyleFooter>;
}

export default Footer;