import { useContext, ReactElement, useState } from "react"
import { useNavigate } from "react-router-dom";
import { StylesCardProject } from "./style";
import { StyledTypography } from "../baseTypography/style";
import { StyledButtons } from "../../styles/Buttons";
import { ProjectContext } from "../../context/ProjectContext";
import { ImgLanguages } from '../imgLanguages/imgLanguages';
import { ICardProjectProps } from "../../interface";


export function CardProject({ project, listProject }: ICardProjectProps) {
    const navigate = useNavigate()
    const { setIdproject ,setlistProject } = useContext(ProjectContext)

    function pageProject(id: number) {
        setIdproject(id)
        setlistProject(listProject)
        return navigate("/Project")
    }


    return (
        <StylesCardProject background={project.background} key={project.id} >
            <div className="background">
                <div className="projectContainer">
                    <StyledTypography tag="h2" classText="Heading2">
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