import styled from "styled-components";
import { motion } from 'framer-motion';


export const StylesAbout = styled(motion.section)`
    background-color: var(--bgsecond);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position :relative;
.container{
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.practicingValue{
    height: 70%;
    width:40%;
    text-align: right;
    border: 1px solid var(--Color-grey-50);
    border-right: none;
    display: flex;
    flex-direction:column-reverse;
    align-items: flex-end;
    gap:20px;
}
.practicingTime{
    display: flex;
    height: auto;
}
.color {
    color: var(--colorPrimary);
}
.experience {
    height: 70%;
    width: 50%;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end
}
.experience>div {
    height: 20%;
    width: 90%;
    text-align: right;
    display: flex;
    flex-direction: column;
    gap:10px;
    
}
.experienceDescripition {
    color: var(--Color-grey-50);
}


@media (max-width: 1000px) {
.container{
    height: 90%;
    flex-direction: column;
    flex-wrap: nowrap
}
.practicingValue{
    height: 55%;
    width: 80%;
    text-align: right;
    border: 1px solid var(--Color-grey-50);
    border-right: none;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
}
.experience {
    height: 40%;
    width: 80%;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end
}
.practicingTime{
    align-items: baseline
}
.experienceDescripition {
    width: 100%;
}
}
`