
import { StylesProjects } from "./style";
import { useContext } from 'react';
import { ProjectContext } from "../../context/ProjectContext";
import { useNavigate } from "react-router-dom";
import Backend from "../../assets/img/projects/Backend.png"
import Frontend from "../../assets/img/projects/Frontend.png"
import { motion } from 'framer-motion';
import { StyledTypography } from "../../components/baseTypography/style";

export function Projects() {
    const navigate = useNavigate()

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <StylesProjects

        >
            <section className="header">
                <StyledTypography classText="Heading2" tag="h3">
                    Que Projetos você que mais ver?
                </StyledTypography>
            </section>
            <section className="codes">
                <div>
                    <button onClick={() => navigate('/ProjectsFront')}>
                        <motion.img
                            src={Frontend}
                            variants={item}
                            whileHover={{ scale: [null, 1.3, 1.2] }}
                            transition={{ duration: 0.3 }}
                        />
                    </button>
                </div>
                <div>
                    <button onClick={() => navigate('/ProjectsBack')}>
                        <motion.img
                            src={Backend}
                            variants={item}
                            whileHover={{ scale: [null, 1.3, 1.2] }}
                            transition={{ duration: 0.3 }}
                        />
                    </button>
                </div>
            </section>
        </StylesProjects>
    )
}
