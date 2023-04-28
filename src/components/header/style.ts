import styled from "styled-components";
import { motion } from 'framer-motion';

export const StylesHeader = styled(motion.header)`
  background-color: var(--bgcolor2);
    width: 100vw;
    height:80px;
    position: fixed; 
    top: 0;
    left: 0;
    z-index: 9;

.head {
    width: 90%;
    height: 70px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.name {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    width: 90px;
}
.name >h1{
  color: var(--colorPrimary);
}
.name >h2{
  color: var(--colorSecond);
}
.navegation {
  position: relative;
  width: 60%;
  height: 70px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
}
.bntMenu{
   visibility: hidden;
  }

a{
  font-family: 'Jost', sans-serif;
  text-decoration: none;
  font-weight: 500px;
  font-size: 17px;
  max-width: 150px;
  background-color: transparent;
  border: transparent;
  color: var(--colorSecond); 
  margin:0.5rem auto;
}

a:hover {
    margin: 0.5rem auto;
    animation: neon 1s ease infinite;
}

@keyframes neon {
    0%,
    100% {
        text-shadow: 0 0 10px #1f4e70, 0 0 20px #1f4e70, 0 0 20px #1f4e70, 0 0 20px #1f4e70, 0 0 2px #1d7819c7, 2px 2px 2px #1d7819c7;
        color: #f5efcb;
    }
    50% {
        text-shadow: 0 0 2px #0068b3, 0 0 5px #0068b3, 0 0 5px #0068b3, 0 0 5px #0068b3, 0 0 2px #0068b3, 4px 4px 2px #082207c7;
        color: #f5efcb;
    }
}
.selected{
  color:  var(--colorPrimary);
}
.selected:hover{
  color:  var(--colorPrimary);
  animation: none;
}

@media (max-width: 1000px) {
  .navegation {
    visibility: hidden;
  }
  .bntMenu{
      visibility: visible;
    cursor: pointer;
    position:absolute;
    top: 20px;
    right: 30px;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: 0;
  }
  .bntMenu>img{
    width: 100%;
    height: 100%;
  }
  .navegationReponsiv{
    width: 100vw;
    height: 55vh;
    background-color: var(--bgsecond);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
}

`