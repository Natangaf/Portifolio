import { StylesProjectDetails } from "./style";
import { useContext, useEffect } from 'react';
import { ProjectContext } from "../../context/ProjectContext"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IProductProps, iImagesProject } from "../../interface"
import { ProjectsListFront } from "../../base/ProjectsListFront"
import { delay, motion } from 'framer-motion';
import { StyledTypography } from '../../components/baseTypography/style';
import { Link } from 'react-router-dom';
import github from '../../assets/icons/github.svg'
import word from '../../assets/icons/word.svg'
import home from '../../assets/icons/home.svg'

export function ProjectDetails() {
    const { slide } = useContext(ProjectContext)
    const { Idproject, listProject } = useContext(ProjectContext)
    const [project, setProject] = useState({} as IProductProps)
    const [img, setImg] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const project: IProductProps | undefined = listProject.find((pro) => pro.id == Idproject)
        if (project) {
            setProject(project)
        } else {
            navigate("/")
        }

    }, [project])
    
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.5
            }
        }
    };
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <StylesProjectDetails
            variants={slide}
            animate="mostrar"
            initial="inicial"
            exit="esconder"
            transition={{
                duration: 1,
            }}
        >
            <div className="containerDiv">
                <div>
                    <StyledTypography tag="h2" classText="Heading3">
                        {project.name}
                    </StyledTypography>
                    <StyledTypography tag="p" classText="Body">
                        {project.description}
                    </StyledTypography>
                    <div className="links">
                        {project.linkRepo && <a href={project.linkRepo} target="_blank">
                            <img src={github} alt="" />
                            Repositorio
                        </a>}
                        {project.linkSite && <a href={project.linkSite} target="_blank">
                            <img src={word} alt="" />
                            Demo Do Projeto
                        </a>}
                    </div>
                </div>
                <motion.figure
                    className="container"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {project.images && <motion.img src={project.images[img].img} className="apresentationImg" />}
                    <div className="apresentation">
                        {project?.images?.map((img, i) =>
                            <motion.img
                                key={img.page}
                                src={img.img}
                                variants={item}
                                whileHover={{ scale: [null, 1.5, 1.4] }}
                                transition={{ duration: 0.3 }}
                                onClick={() => { setImg(i) }}
                            />
                        )}
                    </div>
                </motion.figure>
            </div>
            <Link to="/Projects" className="home">
                <img src={home} alt="" />
            </Link>
        </StylesProjectDetails >
    )

}