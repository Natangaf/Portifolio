import React from "react"
import { StylesEducation } from "./style";
import { StyledTypography } from "../../components/baseTypography/style";
import { StyledButtons } from "../../styles/Buttons";
import { BaseEducation } from "../../base/baseEducation";
import { ISchool } from "../../interface";
import { School } from "../../components/school";
import { motion } from 'framer-motion';

export function Education() {
    return (
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
                type: "just"
            }}
        >
            <StylesEducation>
                <div>
                    <StyledTypography classText="Heading2" tag="h4">
                        Educação
                    </StyledTypography>
                    <StyledButtons nameButtons="buttonsections">
                        Dowload Resume
                    </StyledButtons>
                </div>
                <ul>
                    {BaseEducation?.map((element: ISchool) =>
                        <School element={element} key={element.id} />
                    )}
                </ul>
            </StylesEducation>
        </motion.div >
    )
}