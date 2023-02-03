import { createContext, useRef, useState } from "react";
import { ProjectsList } from "../base/BaseProjects";
import { iProjecProviderProps, iProjecProviderValue } from "../interface";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export const ProjectContext = createContext({} as iProjecProviderValue)

export const ProjectProvider = ({ children }: iProjecProviderProps) => {
    const [Idproject, setIdproject] = useState(0)
    const BaseProjects = ProjectsList

    function useParallax(value: MotionValue<number>, distance: number) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

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