import React from "react"
import { StyledTypography } from "../../components/baseTypography/style";
import { Languages } from "../../components/languages";
import { StylesAbout } from "./style";
import { motion } from 'framer-motion';

export function About() {
    return (
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
                type: "just"
            }}
                >
                <StylesAbout>
                    <div className="practicingValue">
                        <div className="practicingTime">
                            <StyledTypography tag="p" classText="Heading3">1320</StyledTypography>
                            <StyledTypography tag="p" classText="Heading3" className="color">.</StyledTypography>
                        </div>
                        <StyledTypography tag="p" classText="Body">
                            Horas de pratica</StyledTypography>
                    </div>
                    <div className="experience">
                        <div>
                            <StyledTypography tag="h2" classText="Heading2" className="experienceTitle">Experiencia</StyledTypography>
                            <StyledTypography tag="p" classText="BodyColor" className="experienceDescripition"> Ja preatiquei mais de 1000 horas entre front-end e back-end para me tornar im programador Full Stack  </StyledTypography>
                        </div>
                        <Languages />
                    </div>
                </StylesAbout>
        </ motion.div>
            )
}