import React from "react";
import Main from "../Main/Main";
import { SideBar } from "../Sidebar/Sidebar";
import Info from "../info/info";
import About from "../About/About";
import Education from "../Education/Education";
import Experiencia from "../Experiencia/Experiencia";
import Certificacion from "../Certificado/Certificado";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #000000;
        
    }

`;

const App = () => {
  return (
    <Main>
      <GlobalStyle />
      <SideBar>
        <About />
      </SideBar>
      <Info>
        <Education />
        <Experiencia />
        <Certificacion />
      </Info>
    </Main>
  );
};

export default App;
