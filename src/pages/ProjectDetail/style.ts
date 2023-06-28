
import styled from "styled-components";
import { motion } from 'framer-motion';

export const StylesProjectDetails = styled(motion.main)`
    height: 100vh;
    width: 100vw;
    background-color: var(--Color-gray-100);
    display: flex;
    flex-direction: column;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .containerDiv{
      width: 90%;
      height: 500px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around
    }
    div{
      width: 25%;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    figure{
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.1);
      width:60%;
      height: auto;
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      overflow-x: auto;
      overflow-y: hidden;
      align-items: center;
      box-shadow: 0px 0px 24px -1px rgba(0,0,0,0.75);
    }
    figure>img{
      position: relative;
      top:-50px;
      transition: 0.5s ease-in;
      max-height: 280px;
      border-radius: 5px;
      box-shadow: 0px 0px 24px -1px rgba(0,0,0,0.75);
    }
    .apresentation{
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: row;
      overflow: hidden;
    }
    div>img{
      max-height: 70%;
      width: 20%;
      background-color: red;
      border-radius: 5px;
      box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.75);
    }
    .links{
      margin: 0 auto;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    a{
      padding: 20px 0;
      text-decoration: none;
      width: 50%;
      background-color: var(--colorPrimary);
      color: var(--colorSecond);
      font-size: 18px;
      border: transparent;
      display: flex ;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap:5px;
    }
    a>img{
      height: 20px;
      width: 20px;
      background-color: transparent;
      box-shadow:none;
    }
    a:hover{
      transition: 0.5s ease-in;
     box-shadow: 0px 0px 24px -1px rgba(0,0,0,0.75);
    }
    .home{
      width: 60px;
      height: 30px;
      border-radius: 50%;
      position: absolute;
      bottom: 5%;
      right: 10%;
    }
  @media (max-width:1000px) {
    .containerDiv{
      margin-top: 180px;
      height: 100%;
      flex-direction: column;
      align-items: center;
    }
     div{
      width: 100%;
      height: 40%;
    }
    figure{
      width: 100%;
      height: 600px;
    }
    .apresentation{
      height: 60px;
    }
    .home{
      bottom: 0%;
      right: 10%;
    }
  }
`
