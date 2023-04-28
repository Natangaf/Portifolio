import styled from "styled-components";

export const StylesLanguages = styled.ul`
    height: 80%;
    width: 90%;
    text-align: left;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;

  @media (max-width:600px) {
    justify-content: space-evenly
  } 
`