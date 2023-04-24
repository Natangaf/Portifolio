import { useContext, useEffect } from "react"
import { StyledTypography } from "../../components/baseTypography/style";
import { Languages } from "../../components/languages";
import { StylesAbout } from "./style";
import { ProjectContext } from "../../context/ProjectContext";

export function About() {
    const { slide } = useContext(ProjectContext)

    return (
        <StylesAbout
            variants={slide}
            animate="mostrar"
            initial="inicial"
            exit="esconder"
            transition={{
                duration: 1,
            }}
        >
            <div className="container">
                <div className="practicingValue">
                    <div className="practicingTime">
                        <StyledTypography tag="p" classText="Number">2</StyledTypography>
                        <StyledTypography tag="p" classText="Heading3" className="color">.</StyledTypography>
                    </div>
                    <StyledTypography tag="p" classText="Body">
                        Anos de pratica</StyledTypography>
                </div>
                <div className="experience">
                    <div>
                        <StyledTypography tag="h2" classText="Heading2" className="experienceTitle">Experiencia</StyledTypography>
                        <StyledTypography tag="p" classText="BodyColor" className="experienceDescripition"> Já pratiquei mais de 1000 horas entre Front-End e back-End para me tornar um programador Full Stack. </StyledTypography>
                    </div>
                    <Languages />
                </div>
            </div>
        </StylesAbout>
    )
}