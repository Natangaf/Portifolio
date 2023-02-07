import { createContext, useEffect, useState } from "react";
import { iProjecProviderProps, iProjecProviderValue } from "../interface";
import { ProjectsList } from "../base/baseProjects";
import { Navigate, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const ProjectContext = createContext({} as iProjecProviderValue)

export const ProjectProvider = ({ children }: iProjecProviderProps) => {
    const [Idproject, setIdproject] = useState<number>(0)
    const navigate = useNavigate()
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

    const pages = ["/", "/About", "/Projects", "/Education", "/Contact"]

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const currentPage = pages.findIndex(page => page === location.pathname);
        const nextPage = currentPage + 1;
        const previusPage = currentPage - 1;

        if (scrollTop + clientHeight >= scrollHeight && pages[nextPage] !== location.pathname && pages[nextPage] !== undefined) {
            navigate(pages[nextPage]);
            window.scrollTo(0, 1)
        }
        if (scrollTop == 0 && pages[previusPage] !== location.pathname && pages[previusPage] !== undefined){
            navigate(pages[previusPage]);
            window.scrollTo(0, 1)
        }

    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ProjectContext.Provider
            value={{
                Idproject,
                setIdproject,
                BaseProjects,
                slide,
            }}>
            {children}
        </ProjectContext.Provider>
    )
}