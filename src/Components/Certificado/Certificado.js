import React from "react";
import H2Styled from "../Styled/H2Styled";
import H3Styled from "../Styled/H3Styled";
import PStyled from "../Styled/PStyled";

const Certificacion = () => (
  <div className="Certificates">
    <H2Styled>Certificaciones</H2Styled>
    <div className="Certificates-container">
      <div className="Certificates-item">
        <H3Styled>Certificacion de Diseño Web Responsivo</H3Styled>
        <PStyled>(300 horas) Freecode Camp</PStyled>
        <H3Styled>Certificacion de Estructuras de Datos y Algoritmos</H3Styled>
        <PStyled>(300 horas) Freecode Camp</PStyled>
        <H3Styled>Certificacion de Bibliotecas de Desarrolo Front-end</H3Styled>
        <PStyled>(300 horas) Freecode Camp</PStyled>
      </div>
    </div>
  </div>
);

export default Certificacion;
