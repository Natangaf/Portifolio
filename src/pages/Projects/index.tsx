import React from "react"
import { CardProject } from "../../components/cardProject";
import { StylesProjects } from "./style";
import { motion } from 'framer-motion';

export function Projects() {
    
    return (
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
                type: "just"
            }}
        >

        <StylesProjects>
            <CardProject/>
        </StylesProjects>
        </motion.div>
    )
}