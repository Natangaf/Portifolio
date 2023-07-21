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
`

