import React from "react";
import styled from "styled-components";

const StyleH2 = styled.h2`
font-family: 'Lobster', cursive;
  font-weight: 300;
  margin: 1em 0 0 0;
  color: #9300FF;
`;
const H2styled = ({ children }) => {
  return <StyleH2>{children}</StyleH2>;
};

export default H2styled;
