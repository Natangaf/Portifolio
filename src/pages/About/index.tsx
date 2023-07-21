import { useContext, useEffect } from "react"
import { StyledTypography } from "../../components/baseTypography/style";
import { Languages } from "../../components/languages";
import { StylesAbout } from "./style";
import { ProjectContext } from "../../context/ProjectContext";
export function About() {

    return (
        <StylesAbout>
            <div className="container">
                <div className="practicingValue">
                    <div className="practicingTime">
                        <StyledTypography tag="p" classText="Number">1</StyledTypography>
                        <StyledTypography tag="p" classText="Heading3" className="color">.</StyledTypography>
                    </div>
                    <StyledTypography tag="p" classText="Body">
                        Ano de pratica</StyledTypography>
                </div>
                <div className="experience">
                    <div>
                        <StyledTypography tag="h2" classText="Heading2" className="experienceTitle">Experiencia</StyledTypography>
                        <StyledTypography tag="p" classText="BodyColor" className="experienceDescripition"> Já pratiquei mais de 2000 horas entre Front-End e back-End para me tornar um programador Full Stack. </StyledTypography>
                    </div>
                    <Languages />
                </div>
            </div>
        </StylesAbout>
    )
}