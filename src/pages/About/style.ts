import styled from "styled-components";
import { motion } from "framer-motion";

export const StylesAbout = styled(motion.section)`
  background-color: var(--bgsecond);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  .container {
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .practicingValue {
    height: 70%;
    width: 40%;
    text-align: right;
    border: 1px solid var(--Color-grey-50);
    border-right: none;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    padding: 10px 20px 10px 0px;
  }
  .practicingTime {
    display: flex;
    height: auto;
  }
  .color {
    color: var(--colorPrimary);
  }

  .experienceDescripition {
    padding-left: 10px;
    color: var(--Color-grey-50);
  }

  @media (max-width: 1000px) {
    .container {
      margin-top: 60px;
      height: 90%;
      flex-direction: column;
      flex-wrap: nowrap;
    }
    .practicingValue {
      height: 55%;
      width: 80%;
      text-align: right;
      border: 1px solid var(--Color-grey-50);
      border-right: none;
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-evenly;
    }
    .practicingTime {
      align-items: baseline;
    }
    .experienceDescripition {
      width: 100%;
    }
  }
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
    height: 45%;
    width: 80%;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
