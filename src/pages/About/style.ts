import styled from "styled-components";
import { motion } from "framer-motion";

export const StylesAbout = styled(motion.section).attrs({
  "data-com": "StylesAbout",
})`
  background-color: var(--bgsecond);
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  @media (max-width: 700px) {
    overflow-y: auto;
    height: 100vh;
  }
`;

export const Container = styled.section.attrs({ "data-com": "Container" })`
  height: 89vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 70px;

  @media (max-width: 1000px) {
    margin: 0 auto;
    width: 90%;
  }

  @media (max-width: 700px) {
    height: 100vh;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 200px;
  }
`;

export const PracticingValue = styled.div.attrs({
  "data-com": "PracticingValue",
})`
  height: 70%;
  width: 40%;
  text-align: right;
  border: 1px solid var(--Color-grey-50);
  border-right: none;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  padding: 10px 20px 10px 0px;

  @media (max-width: 1000px) {
    height: 55%;
    width: 80%;
    text-align: right;
    border: 1px solid var(--Color-grey-50);
    border-right: none;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    padding: 0px;
  }

  @media (max-width: 700px) {
    height: 60%;
    width: 90%;
    padding: 0px;
  }
`;

export const PracticingTime = styled.div.attrs({
  "data-com": "PracticingTime",
})`
  display: flex;
  height: auto;

  .color {
    color: var(--colorPrimary);
  }

  @media (max-width: 1000px) {
    align-items: baseline;
  }
  
`;

export const ExperienceDescription = styled.p.attrs({
  "data-com": "ExperienceDescription",
})`
  padding-left: 10px;
  color: var(--Color-grey-50);
`;

export const Expertises = styled.div.attrs({ "data-com": "Expertises" })`
  height: 70%;
  width: 50%;
  text-align: right;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;

  @media (max-width: 1000px) {
    width: 80%;
    padding-bottom: 30px;
  }
  @media (max-width: 400px) {
    width: 90%;
  }
`;
export const HeaderExpertises = styled.div.attrs({
  "data-com": "HeaderExpertises",
})`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  justify-content: flex-end;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
export const ListExpertises = styled.ul.attrs({
  "data-com": "ListExpertises",
})`
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  justify-content: center;
  align-items: center;
  gap: 20px;

  list-style: none;
`;
export const CardExpertises = styled.li.attrs({
  "data-com": "CardExpertises",
})`
  width: 110px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  perspective: 1000px;
  cursor: pointer;
`;

interface IflippedCard {
  flipped: boolean;
}

export const FrontCard = styled.div<IflippedCard>`
  background-color: rgb(255 255 255 / 11%);

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  position: absolute;

  padding: 5px;

  border-radius: 5%;

  backface-visibility: hidden;
  transform: ${({ flipped }) =>
    flipped ? "rotateY(-180deg)" : "rotateY(0deg)"};
  transition: transform 0.5s;
`;

export const BackCard = styled.div<IflippedCard>`
  background-color: rgb(255 255 255 / 11%);

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;
  position: absolute;

  padding: 5px;

  border-radius: 5%;

  backface-visibility: hidden;
  transform: ${({ flipped }) =>
    flipped ? "rotateY(0deg)" : "rotateY(180deg)"};
  transition: transform 0.5s;
  p {
    z-index: 2;
  }
  Img {
    width: 90%;
    height: 80%;
    object-fit: contain;

    filter: blur(4px) brightness(0.3);

    position: absolute;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    z-index: 1;
  }
`;
export const InfoLanguage = styled.div.attrs({
  "data-com": "InfoLanguage",
})`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;

  span {
    display: flex;
    align-items: center;
    gap: px;
  }
`;
