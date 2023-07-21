import styled from "styled-components";
import { motion } from 'framer-motion';

export const StylesAside = styled(motion.aside)`
    height: 100vh;
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: sticky;
    top: 0;
    z-index: 2;
    left: 20px;
    a{
        height: 20px;
        width: 20px;
    }
    a>img{
        height: 20px;
        width: 20px;
    }
    @media (max-width: 600px) {
    display: none;
}
`