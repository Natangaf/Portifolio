import React, { useContext } from "react"
import "react-alice-carousel/lib/alice-carousel.css";
import { ReactElement } from "react"
import { StylesCardProject } from "./style";
import { StyledTypography } from "../baseTypography/style";
import { StyledButtons } from "../../styles/Buttons";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../../context/ProjectContext";
import { ImgLanguages } from './../imgLanguages/imgLanguages';
import { TProductprops } from "../../interface";

export function CardProject({ project }: TProductprops) {
    const navigate = useNavigate()
    const { setIdproject } = useContext(ProjectContext)

    function pageProject(id: number) {
        setIdproject(id)
       return navigate("/Project")
    }

    return (
<StylesCardProject background={project.background} key={project.id} >
                <div className="background">
                    <div className="projectContainer">
                    <StyledTypography tag="h2" classText="Heading1">
                        {project.name}
                    </StyledTypography>
                    <StyledTypography tag="p" classText="BodyColor">
                        {project.description}
                    </StyledTypography>
                    <figure>
                        {project.usedLanguages.map(language =>
                            <ImgLanguages language={language} key={language} />
                        )}
                    </figure>
                    <StyledButtons
                        nameButtons="buttonsections"
                        onClick={() => pageProject(project.id)}
                    >
                        Ver Projeto
                        </StyledButtons>
                    </div>
                </div>
            </ StylesCardProject>
        
    )
}