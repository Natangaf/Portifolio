import { createContext, useEffect, useState } from "react";
import { iProjecProviderProps, iProjecProviderValue } from "../interface";
import { ProjectsList } from "../base/baseProjects";
import { useNavigate } from 'react-router-dom';

export const ProjectContext = createContext({} as iProjecProviderValue)

export const ProjectProvider = ({ children }: iProjecProviderProps) => {
    const [Idproject, setIdproject] = useState<number>(-1)
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

    //     const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    //     const currentPage = pages.findIndex(page => page === location.pathname);
    //     const nextPage = currentPage + 1;
    //     const previusPage = currentPage - 1;

    //     if (scrollTop + clientHeight >= scrollHeight &&
    //         pages[nextPage] !== location.pathname &&
    //         pages[nextPage] !== undefined &&
    //         location.pathname !== "/Project"
    //     ) {
    //         navigate(pages[nextPage]);
    //         window.scrollTo(0, 1)
    //     }
    //     if (scrollTop == 0 &&
    //         pages[previusPage] !== location.pathname &&
    //         pages[previusPage] !== undefined &&
    //         location.pathname !== "/Project"
    //     ) {
    //         navigate(pages[previusPage]);
    //         window.scrollTo(0, 1)
    //     }

    // };
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
                BaseProjects,
                slide,
            }}>
            {children}
        </ProjectContext.Provider>
    )
}