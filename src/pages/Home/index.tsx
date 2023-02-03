import React from "react"
import { StylesHome } from "./style";
import { StyledTypography } from "../../components/baseTypography/style";
import { TypeAnimation } from "react-type-animation"
import eu from "../../assets/img/perfil/eu.jpg"

export function Home() {
  return (
    <StylesHome>
      <div className="descripition">
        <div className="person">
          <div className="me">
            <TypeAnimation
              sequence={[`Natã Fernandes`, 2000, `Natangaf`, 1000]}
              speed={10}
              wrapper="p"
              repeat={Infinity}
              className="body" />
          </div>
          <StyledTypography tag="h2" classText="Heading1">Front-end Web</StyledTypography>
          <StyledTypography tag="h2" classText="Heading1" className="primary">
            Developer
          </StyledTypography>
        </div>
        <img src={eu} alt="" className="natangaImage">
        </img>
      </div>
    </StylesHome >
  )
}