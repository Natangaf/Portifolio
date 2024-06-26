import { motion } from "framer-motion";
import styled from "styled-components";
import principal from "../../assets/img/background/principal.jpg";

export const StylesMe = styled(motion.section)`
  width: 100vw;
  height: 100%;
  background-image: url(${principal});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--Color-grey-0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .descripition {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 30px;
  }
  .natangaImage {
    height: 250px;
    width: 400px;
    background-color: red;
    border-radius: 71% 29% 46% 54% / 84% 74% 26% 16%;
  }
  .natangaImage > img {
    width: 100%;
    //filter:drop-shadow(2px 0px 3px gray);
  }
  .person {
    width: 60%;
    height: 100%;
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .body {
    font-size: 1.675rem;
    font-weight: 400;
  }
  .primary {
    color: var(--colorPrimary);
  }
  .me {
    display: flex;
    gap: 5px;
  }
  .teste {
    position: absolute;
    top: 20;
    left: 0;
    right: 0;
    height: 10px;
    background: var(--red);
    transform-origin: 0%;
  }

  @media (max-width: 1000px) {
    .descripition {
      width: 100%;
      height: 100%;
      flex-wrap: wrap;
      gap: 30px;
    }
    .descripition > img {
      width: 300px;
      height: 300px;
    }
    .person {
      width: 80%;
      height: auto;
      display: flex;
      align-items: center;
      text-align: center;
    }
  }
  @media (max-width: 600px) {
    .person {
      width: 90%;
      height: auto;
    }
    .descripition {
      justify-content: center;
    }
    .natangaImage {
      height: 188px;
      width: 270px;
      background-color: red;
      border-radius: 71% 29% 46% 54% / 84% 74% 26% 16%;
    }
    .natangaImage > img {
      width: 100%;
    }
  }
`;
