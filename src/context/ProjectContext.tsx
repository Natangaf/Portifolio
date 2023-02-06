import { createContext, useRef, useState } from "react";
import { iProjecProviderProps, iProjecProviderValue } from "../interface";
import { useScroll, useTransform, MotionValue } from "framer-motion";
import { ProjectsList } from "../base/baseProjects";

export const ProjectContext = createContext({} as iProjecProviderValue)

export const ProjectProvider = ({ children }: iProjecProviderProps) => {
    const [Idproject, setIdproject] = useState(0)
    const BaseProjects = ProjectsList

    const slide = {
        mostrar: {
            y: 0,
        },
        esconder: {
            y: "-100%",
        },
        inicial: {
            y: "100%",
        },
    }
    return (
        <ProjectContext.Provider
            value={{
                Idproject,
                setIdproject,
                BaseProjects,
                slide
            }}>
            {children}
        </ProjectContext.Provider>
    )
}