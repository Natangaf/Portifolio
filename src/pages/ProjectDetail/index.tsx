import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import { StylesProjectDetails } from './style';
import { ProjectContext } from '../../context/ProjectContext';
import { IProductProps } from '../../interface';
import { StyledTypography } from '../../components/baseTypography/style';
import github from '../../assets/icons/github.svg';
import word from '../../assets/icons/word.svg';
import { Header } from '../../components/header';

export function ProjectDetails() {
    const { Idproject, listProject } = useContext(ProjectContext);
    const [project, setProject] = useState({} as IProductProps);
    const navigate = useNavigate();

    useEffect(() => {
        const foundProject = listProject.find((pro) => pro.id == Idproject);
        if (foundProject) {
            setProject(foundProject);
        } else {
            navigate('/');
        }
    }, [Idproject, listProject, navigate]);

    const swiperConfig = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto' as 'auto', 
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
        },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            // clickable: true,
        },
        modules: [EffectCoverflow, Pagination, Navigation],
        className: 'swiper_container',
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
                            {project.linkRepo && (
                                <a href={project.linkRepo} target="_blank">
                                    <img src={github} alt="" />
                                    Repositorio
                                </a>
                            )}
                            {project.linkSite && (
                                <a href={project.linkSite} target="_blank">
                                    <img src={word} alt="" />
                                    Demo Do Projeto
                                </a>
                            )}
                        </div>
                    </div>
                    <figure>
                        <Swiper {...swiperConfig}>
                            {project?.images?.map((img, i) => (
                                <SwiperSlide key={i} style={{}}>
                                    <img className={`img`} key={img.page} src={img.img} />
                                </SwiperSlide>
                            ))}
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
            </StylesProjectDetails>
        </>
    );
}

