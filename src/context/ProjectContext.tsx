import { createContext, useRef, useState } from "react";
import { ProjectsList } from "../base/BaseProjects";
import { iProjecProviderProps, iProjecProviderValue } from "../interface";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export const ProjectContext = createContext({} as iProjecProviderValue)

export const ProjectProvider = ({ children }: iProjecProviderProps) => {
    const [Idproject, setIdproject] = useState(0)
    const BaseProjects = ProjectsList
    

    return (
        <ProjectContext.Provider
            value={{
                Idproject,
                setIdproject,
                BaseProjects
            }}>
            {children}
        </ProjectContext.Provider>
    )
}