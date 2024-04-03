import styled from "styled-components";

export const StylesSchool = styled.li`
  width: 100%;
  /* height: 100px; */

  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
  border-bottom: 2px solid var(--Color-grey-50);

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 10px;
  }
  @media (max-width: 400px) {
    flex-direction: row;
  }
`;

export const CourseDetails = styled.div.attrs({ "data-com": "SchooDetails" })`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  p {
    text-align: center;
    max-width: 70%;
  }
  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;
export const CourseDescripition = styled.div.attrs({
  "data-com": "CourseDescripition",
})`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;

export const LogoSchool = styled.figure.attrs({ "data-com": "LogoSchool" })`
  width: 20%;
  max-height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
