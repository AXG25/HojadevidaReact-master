import styled from "styled-components";
// @import url('https://fonts.googleapis.com/css2?family=Allison&display=swap');
const AboutStyle = styled.div`
 text-align: center;
`;

const AboutAvatar = styled.div`
 padding: 2em 0 0 0;
`;
const AboutImg = styled.img`
 border-radius: 100%;
 width:160px;
 height: 160px;
 border: 2px  solid #9300FF;
 margin: 0 auto;
 display: block;
 box-shadow: 0 0 10px rgba(0,0,0,0,0.6);
 object-fit: cover;
`;

const AboutNombre = styled.div`
    text-align: center;
`;
 
const AboutH2 = styled.h2`
    font-family: 'Allison', cursive;
    font-weight: 700;
    font-size: 42px;
    letter-spacing: 1.2px;
    margin: 2em 0 0 0;
    color: #9300FF;
`;
 
const AboutProfesion = styled.p`
    margin: 2em 0 1em 0;
    font-family: 'Pacifico', cursive;
    font-weight: 300;
    color: #9300FF;
`;
 
const AboutLocation = styled.p`
    color: #757575;
    font-family: 'Lobster', cursive;
    font-size: 1em;
    font-weight: 400;
`;

export const AboutS = AboutStyle;
export const Avatar = AboutAvatar
export const Img = AboutImg
export const Nombre = AboutNombre
export const H2 = AboutH2
export const Profesion = AboutProfesion
export const Location = AboutLocation