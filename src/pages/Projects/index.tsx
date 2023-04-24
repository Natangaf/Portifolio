import { CardProject } from "../../components/cardProject";
import { StylesProjects } from "./style";
import { useContext } from 'react';
import { ProjectContext } from "../../context/ProjectContext";
import { ProjectsList } from './../../base/BaseProjects/index';
import { IProductprops } from "../../interface";

export function Projects() {
    const { slide } = useContext(ProjectContext)

    return (
        <StylesProjects
            variants={slide}
            animate="mostrar"
            initial="inicial"
            exit="esconder"
            transition={{
                duration: 1,
            }}
        >
            <ul>
                {

                    ProjectsList.map((project: IProductprops) => <CardProject project={project} key={project.id} />)
                }

            </ul>
        </StylesProjects>
    )
}
