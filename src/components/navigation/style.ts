import styled from "styled-components";

export const StylesNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  .navigation {
    position: relative;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
  }
  button, a {
    cursor: pointer;
    font-family: 'Jost', sans-serif;
    text-decoration: none;
    font-weight: 500;
    font-size: 17px;
    max-width: 150px;
    background-color: transparent;
    border: transparent;
    color: var(--colorSecond);
    margin: 0.5rem auto;

    &:hover {
      margin: 0.5rem auto;
      animation: neon 1s ease infinite;
    }
  }
  .bntMenu {
    visibility: hidden;
    height: 100%;
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
    .navigation {
      visibility: hidden;
    }
    .bntMenu{
      visibility: visible;
      position:absolute;
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