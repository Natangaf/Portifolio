import styled from "styled-components";
import { motion } from 'framer-motion';


export const StylesAbout = styled(motion.main)`
    background-color: var(--bgsecond);
    width: 100%;
    height: 105vh;
    display: flex;
    align-items: center;
.container{
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.practicingValue{
    height: 50%;
    width:40%;
    text-align: right;
    border: 1px solid var(--Color-grey-50);
    border-right: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
    width: 70%;
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
    height: 30%;
    width: 80%;
    text-align: right;
    border: 1px solid var(--Color-grey-50);
    border-right: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start
}
.experience {
    height: 50%;
    width: 80%;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end
}

}
`