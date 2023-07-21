import { createContext, useRef, useState } from "react";
import { IProductProps, iProjecProviderProps, iProjecProviderValue } from "../interface";
import { ProjectsListFront } from "../base/ProjectsListFront";

export const ProjectContext = createContext({} as iProjecProviderValue)

export const ProjectProvider = ({ children }: iProjecProviderProps) => {
    const [Idproject, setIdproject] = useState<number>(-1)
    const [listProject, setlistProject] = useState<IProductProps[]>(ProjectsListFront)

    return (
        <ProjectContext.Provider
            value={{
                Idproject,
                setIdproject,
                listProject,
                setlistProject,
            }}>
            {children}
        </ProjectContext.Provider>
    )
}