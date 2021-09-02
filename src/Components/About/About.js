import React from "react";
import {
  AboutS,
  Avatar,
  Img,
  Nombre,
  H2,
  Profesion,
  Location,
} from "../Styled/style";

const About = () => {
  return (
    <AboutS>
      <div className="About-container">
        <Avatar>
          <figure>
            <Img src="../img/img.jpg" alt="mi-avatar" />
          </figure>
        </Avatar>
        <Nombre>
          <H2>Abi-ezer Guerra</H2>
        </Nombre>
        <Profesion>
          <p>Desarrollador front-end</p>
        </Profesion>
        <Location>
          <p>Bogota,Colombia</p>
        </Location>
        <div className="About-social"><a href="https://github.com/AXG25?tab=repositories" target="_blank">Redes Sociales</a></div>
      </div>
    </AboutS>
  );
};

export default About;
