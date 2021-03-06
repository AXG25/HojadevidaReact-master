import React from "react";
import styled from "styled-components";

const StyleP = styled.p`
  color: #757575;
  font-weight: 300;
  margin: 0.5em 0 1.2em 0;
  font-family: 'Pacifico', cursive;
`;

const PStyled = ({ children }) => <StyleP> {children} </StyleP>;

export default PStyled;
