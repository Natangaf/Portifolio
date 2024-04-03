import styled from "styled-components";

export const StylesSchool = styled.li`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
  border-bottom: 2px solid var(--Color-grey-50);

  .logo {
    width: 20%;
    max-height: 100px;
    img {
      width: 100%;
      max-height: 100px;
      object-fit: fill;
    }
  }

  .schooDetails {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    p:nth-child(1) {
      text-align: center;
      max-width: 70%;
    }
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .schooDetails {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
  }
`;

export const LogoSchool = styled.figure.attrs({ "data-com": "LogoSchool" })`
  width: 20%;
  max-height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
