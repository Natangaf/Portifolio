
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
      height: 80%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around
    }
   .infomation{
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    figure{
      padding: 20px;
      width: 60%;
      height: 70%;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 24px -1px;
      display: flex;
      flex-flow: row wrap;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: space-around;
    }
    .img{
      height: 100%;
      border-radius:3%;
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
   .infomation>img{
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
    .swiper_container {
      height: 100%;
      display: flex;
      flex-direction: column;
      -webkit-box-align: center;
      align-items: center;
      justify-content: center;
    }
    .swiper-wrapper {
      height: 10+0%;
    }

    .swiper-slide {
      width:auto;
      height: 80%;
    }
    .swiper-pagination .swiper-pagination-bullet {
      filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
    }

    .swiper-pagination .swiper-pagination-bullet-active {
      background: var(--colorPrimary);
    }
    .swiper-slide-active{
      border-radius:3%;
      border: rgba(0,0,0,0.75) 1px;
      -webkit-box-shadow: 0px 0px 29px 0px rgba(0,0,0,0.75);
    }
    .slider-controler{
        width: 50%;
        height: 3.5rem;
        margin: 0 auto;
        position: absolute;
        z-index:1;
        bottom: 30px;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    }

.slider-arrow::after {
  content: '';
}
.slider-arrow {
  background: var(--colorSecond);
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
}
.swiper-pagination {
  bottom: 1rem;
  z-index: 1;
}
@media (max-width: 900px) {
  .swiper_container {
    height: 100%;
    justify-content: center;
  }
  .swiper-wrapper {
    height: 100%;
  }
  .swiper-slide {
    width: 30rem;
  }
  .slider-controler{
    width: 90%;
    bottom: 4.6rem;
  }

}
@media (max-width: 600px) {
  .swiper_container {
    height: 100%;
    justify-content: center;
  }
  .swiper-wrapper {
    height: 70%;
  }
  .slider-controler{
    width: 90%;
    bottom: 4.6rem;
  }

}

  @media (max-width:1000px) {
    .containerDiv{
      margin-top: 180px;
      height: 100%;
      flex-direction: column;
      align-items: center;
    }
    .infomation{
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
