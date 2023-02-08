import { motion } from "framer-motion";
import styled from "styled-components";
import contact from "../../assets/img/background/contact.jpg"

export const StylesContact = styled(motion.main)`
    padding-top: 80px;
    height: 100vh;
    width: 100%;
    background-image: url(${contact});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    h2{
        max-width: 60%;
    }
    &>div{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-around;
    }
    section{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 23px;
        text-align: left;
    }
    span{
        color: var(--colorPrimary);
    }
    
    @media (max-width: 1000px) {
    .container{
        display: flex;
        flex-direction: column;
    }
    section{
        margin: 0 auto;
        width: 80%;
    }
    }
    ` 