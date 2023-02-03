import { StylesProject } from "./style";
import { useContext, useEffect } from 'react';
import { ProjectContext } from "../../context/ProjectContext"
import { useNavigate } from 'react-router-dom';
import { ProjectsList } from "../../base/BaseProjects";
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from 'react';
import { IProductprops, iImagesProject } from "../../interface"
import { StyledTypography } from "../../components/baseTypography/style";
import { ImgLanguages } from "../../components/imgLanguages/imgLanguages";
import { StyledButtons } from "../../styles/Buttons";

export function Project() {
    const { Idproject } = useContext(ProjectContext)
    const [project, setProject] = useState({} as IProductprops)
    const navigate = useNavigate()

    const { scrollYProgress, scrollY } = useScroll()
    // useEffect(() => {
    //     if (Idproject === 0) {
    //         return navigate("/")
    //     }
    //     const findProject = ProjectsList.find(project => project.id == Idproject)
    //     if (findProject) {
    //         setProject(findProject)
    //         setSelectedTab(findProject.images[0])
    //     }
    // }, [project])

    // const nextProject = () => {
    //     const findProject = ProjectsList.find(project => project.id == Idproject + 1)
    //     if (!findProject) {
    //         setProject(ProjectsList[0])
    //         setSelectedTab(ProjectsList[0].images[0])
    //     } else {
    //         console.log(findProject);
    //         setProject(findProject)
    //     }
    // }
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", scrollY)
    })

    return (project && (
        <StylesProject >
            <motion.div style={{ scaleX: scrollYProgress }} />
        </StylesProject >)
    )
}