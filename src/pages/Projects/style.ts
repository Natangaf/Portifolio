
import { motion } from "framer-motion";
import styled from "styled-components";

export const StylesProjects = styled(motion.main)`
    width: 100vw;
    height: 105vh;
    background-color: var(--Color-gray-100);
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    position: absolute;

    .alice-carousel{
         box-shadow: 0px 0px 20px 43px var(--Color-gray-150);
    }
    .alice-carousel__dots{
        position: absolute;
        bottom: 30px;
        left: 45%;
    }
  
`