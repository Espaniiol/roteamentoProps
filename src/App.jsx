import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Rotas from "./config/routes";
import GlobalStyle from "./style-components/GlobalStyle";

const App = () => {

  return(
    <>
      <Header/>
      <Rotas/>
      <Footer/>
      <GlobalStyle/>
    </>
  );
}

export default App;