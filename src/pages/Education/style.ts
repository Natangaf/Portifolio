import { motion } from "framer-motion";
import styled from "styled-components";

export const StylesEducation = styled(motion.section)`
  padding-top: 80px;
  height: 90vh;
  width: 100%;
  background-color: var(--bgsecond);
  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }
  .title {
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  ul {
    width: 90%;
  }
  .cv {
    text-decoration: none;
    height: 40px;
    width: 200px;
    background-color: var(--colorPrimary);
    color: var(--colorSecond);
    font-size: 18px;
    border: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1000px) {
    .container {
      width: 90%;
    }
    .title {
      flex-direction: column;
      gap: 20px;
      justify-content: flex-start;
    }
  }
`;
