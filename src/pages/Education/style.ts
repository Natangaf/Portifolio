import { motion } from "framer-motion";
import styled from "styled-components";

export const StylesEducation = styled(motion.main)`
    padding-top: 80px;
    height: 100vh;
    width: 100%;
    background-color: var(--bgsecond);
    position: absolute; 
    .container{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    }
    .title{
        width: 90%;
        display: flex;
        
    }
    div{
        height:30%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }
    ul{
        width: 90%;
    }
    
    @media (max-width: 1000px) {
    .title{
        flex-direction: column;
        gap: 20px;
        justify-content: flex-start;
    }
    }
`
