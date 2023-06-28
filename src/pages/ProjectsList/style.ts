
import { motion } from "framer-motion";
import styled from "styled-components";

export const StylesProjectsList = styled(motion.main)`
    width: 100vw;
    height: 105vh;
    background-color: var(--bgcolor2);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

.swiper_container {
  padding: 2rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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
.swiper-slide{
  width: 37rem;
  height: 42rem;
  position: relative;
  border-radius:3%;
  border: rgba(0,0,0,0.75) 1px;
  -webkit-box-shadow: 0px 0px 29px 0px rgba(0,0,0,0.75);
}
.slider-controler{
    width: 50%;
    height: 3.5rem;
    margin: 0 auto;
    position: absolute;
    bottom: 2rem;
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
    height: 70%;
  }
  .swiper-slide {
    height: 30rem;
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
  .swiper-slide {
    height: 30rem;
    width: 19rem;
  }
  .slider-controler{
    width: 90%;
    bottom: 4.6rem;
  }

}
`