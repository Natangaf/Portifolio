
import { StylesProjects } from "./style";
import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IProductProps } from "../../interface";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { ProjectContext } from "../../context/ProjectContext";
import { CardProject } from '../../components/cardProject/index';
import { ProjectsList } from "../../base/BaseProjects";

export function Projects() {
    const { slide } = useContext(ProjectContext)

    return (
        <StylesProjects
            variants={slide}
            animate="mostrar"
            initial="inicial"
            exit="esconder"
            transition={{
                duration: 1,
            }}
        >
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    //clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {
                    ProjectsList.map((project: IProductProps) =>
                        <SwiperSlide key={project.id} >
                            <CardProject project={project} />
                        </SwiperSlide>)
                }
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <AiOutlineArrowLeft />
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next slider-arrow">
                        <AiOutlineArrowRight />
                    </div>
                </div>
            </Swiper>
        </StylesProjects>
    )
}
