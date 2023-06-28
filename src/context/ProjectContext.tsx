import { createContext, useEffect, useState } from "react";
import { IProductProps, iProjecProviderProps, iProjecProviderValue } from "../interface";
import { useNavigate } from 'react-router-dom';
import { ProjectsListFront } from "../base/ProjectsListFront";

export const ProjectContext = createContext({} as iProjecProviderValue)

export const ProjectProvider = ({ children }: iProjecProviderProps) => {
    const [Idproject, setIdproject] = useState<number>(-1)
    const [listProject, setlistProject] = useState<IProductProps[]>(ProjectsListFront)
    const navigate = useNavigate()


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
        const currentPageIndex = pages.findIndex(page => page === location.pathname);

        if (scrollTop + clientHeight >= scrollHeight) {
            const nextPageIndex = currentPageIndex + 1;
            const nextPage = pages[nextPageIndex];
            if (nextPage !== location.pathname && nextPage !== undefined && location.pathname !== "/Project") {
                navigate(nextPage);
                window.scrollTo(0, 1);
            }
        } else if (scrollTop === 0) {
            const prevPageIndex = currentPageIndex - 1;
            const prevPage = pages[prevPageIndex];
            if (prevPage !== location.pathname && prevPage !== undefined && location.pathname !== "/Project") {
                navigate(prevPage);
                window.scrollTo(0, 1);
            }
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
                slide,
                listProject,
                setlistProject
            }}>
            {children}
        </ProjectContext.Provider>
    )
}