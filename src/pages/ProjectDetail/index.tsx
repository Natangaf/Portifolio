import { StylesProjectDetails } from "./style";
import { useContext, useEffect } from 'react';
import { ProjectContext } from "../../context/ProjectContext"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IProductProps } from "../../interface"
import { StyledTypography } from '../../components/baseTypography/style';
import { Link } from 'react-router-dom';
import github from '../../assets/icons/github.svg'
import word from '../../assets/icons/word.svg'
import home from '../../assets/icons/home.svg'
import { Header } from "../../components/header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export function ProjectDetails() {
    const { Idproject, listProject } = useContext(ProjectContext)
    const [project, setProject] = useState({} as IProductProps)
    const [img, setImg] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const project: IProductProps | undefined = listProject.find((pro) => pro.id == Idproject)
        if (project) {
            setProject(project)
        } else {
            navigate("/")
        }

    }, [project])

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.5
            }
        }
    };
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <>
            <Header />
            <StylesProjectDetails>
                <div className="containerDiv">
                    <div className="infomation">
                        <StyledTypography tag="h2" classText="Heading3">
                            {project.name}
                        </StyledTypography>
                        <StyledTypography tag="p" classText="Body">
                            {project.description}
                        </StyledTypography>
                        <div className="links">
                            {project.linkRepo && <a href={project.linkRepo} target="_blank">
                                <img src={github} alt="" />
                                Repositorio
                            </a>}
                            {project.linkSite && <a href={project.linkSite} target="_blank">
                                <img src={word} alt="" />
                                Demo Do Projeto
                            </a>}
                        </div>
                    </div>
                    <figure>
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
                            {project?.images?.map((img, i) =>
                                <SwiperSlide key={i} style={{

                                }}>
                                    <img
                                        className={`img`}
                                        key={img.page}
                                        src={img.img}
                                    />
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
                    </figure>
                </div>
            </StylesProjectDetails >
        </>
    )

}