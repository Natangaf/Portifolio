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
                    <div>
                        <StyledTypography tag="h2" classText="Heading2" className="experienceTitle">
                            Experiencia
                        </StyledTypography>
                        <StyledTypography tag="p" classText="BodyColor" className="experienceDescripition">
                            Desenvolvedor Web Full Stack com mais de 2000 horas de prática. Habilidades sólidas em HTML5, CSS, JavaScript e experiência com React, React Native, APIs e versionamento com Git. Especializando-se em Back-End com Node.js e SQL. Entusiasta de metodologias ágeis e comprometido em entregar projetos de alta qualidade. Busco constantemente novos desafios e mantenho-me atualizado com as tendências da indústria. Apaixonado por tecnologia e sempre em busca de excelência.
                        </StyledTypography>
                    </div>
                    <div className="practicingTime">
                        <StyledTypography tag="p" classText="Number">1</StyledTypography>
                        <StyledTypography tag="p" classText="Heading3" className="color">.</StyledTypography>
                    </div>
                    <StyledTypography tag="p" classText="Body">
                        Ano de pratica</StyledTypography>
                </div>
                <div className="experience">
                    <StyledTypography tag="h2" classText="Heading2" className="experienceTitle">
                        Conhecimentos
                    </StyledTypography>
                    <Languages />
                </div>
            </div>
        </StylesAbout>
    )
}