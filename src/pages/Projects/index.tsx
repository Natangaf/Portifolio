import { CardProject } from "../../components/cardProject";
import { StylesProjects } from "./style";
import { useContext } from 'react';
import { ProjectContext } from "../../context/ProjectContext";

export function Projects() {
    const { slide } = useContext(ProjectContext)

    return (
        <StylesProjects
            variants={slide}
            animate="mostrar"
            initial="inicial"
            exit="esconder"
            transition={{
                type: "just"
            }}
        >
            <CardProject />
        </StylesProjects>
    )
}