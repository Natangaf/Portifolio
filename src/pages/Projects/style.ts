
import { motion } from "framer-motion";
import styled from "styled-components";
import projects from "../../assets/img/background/projects.png"

export const StylesProjects = styled(motion.section)`
    width: 100vw;
    height: 100vh;
    background-color: var(--bgcolor2);
    background-image: url(${projects});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:80px; 
    position: absolute;
    .header{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .codes{
        display: flex;
        align-items: center;
        justify-content: center;
        gap:60px;
    }
    img{
        width: 256px;
        height: 300px;
        border-radius: 5%;
    }
    button{
        background:none;
        border:none;
    }

@media (max-width: 900px) {
    .codes{
        gap:30px;
    }
}
@media (max-width: 600px) {
    gap:30px;
    .codes{
        flex-direction: column;
        gap:0px;
    }
    img{
        width: 60%;
        height: auto;
    }
}
`