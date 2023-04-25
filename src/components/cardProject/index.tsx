import { useContext, ReactElement, useState } from "react"
import { useNavigate } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { StylesCardProject } from "./style";
import { StyledTypography } from "../baseTypography/style";
import { StyledButtons } from "../../styles/Buttons";
import { ProjectsList } from "../../base/BaseProjects";
import { ProjectContext } from "../../context/ProjectContext";
import { ImgLanguages } from './../imgLanguages/imgLanguages';



export function CardProject() {
    const navigate = useNavigate()
    const { setIdproject } = useContext(ProjectContext)
    const productElement: ReactElement[] = [];

    function pageProject(id: number) {
        setIdproject(id)
        return navigate("/Project")
    }

    ProjectsList.map((project) =>
        productElement.push(
            <StylesCardProject background={project.background} key={project.id} >
                <div className="background">
                    <div className="projectContainer">
                        <StyledTypography tag="h2" classText="Heading1">
                            {project.name}
                        </StyledTypography>
                        <StyledTypography tag="p" classText="BodyColor">
                            {project.description}
                        </StyledTypography>
                        <figure>
                            {project.usedLanguages.map(language =>
                                <ImgLanguages language={language} key={language} />
                            )}
                        </figure>
                        <StyledButtons
                            nameButtons="buttonsections"
                            onClick={() => pageProject(project.id)}
                        >
                            Ver Projeto
                        </StyledButtons>
                    </div>
                </div>
            </ StylesCardProject>
        )
    )
    const thumbItems = (items: any, [setThumbIndex, , setThumbAnimation]: any,) => {
        return items.map((item: any, i: number,) => (
            <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
                {item}
            </div>
        ));
    };
    const [mainIndex, setMainIndex] = useState(0);
    const [mainAnimation, setMainAnimation] = useState(false);
    const [thumbIndex, setThumbIndex] = useState(0);
    const [thumbAnimation, setThumbAnimation] = useState(false);
    const [thumbs] = useState(thumbItems(productElement, [setThumbIndex, setThumbAnimation]));

    const slideNext = () => {
        if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex + 1);
        }
    };

    const slidePrev = () => {
        if (!thumbAnimation && thumbIndex > 0) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex - 1);
        }
    };

    const syncMainBeforeChange = (e: any) => {
        setMainAnimation(true);
    };

    const syncMainAfterChange = (e: any) => {
        setMainAnimation(false);

        if (e.type === 'action') {
            setThumbIndex(e.item);
            setThumbAnimation(false);
        } else {
            setMainIndex(thumbIndex);
        }
    };

    const syncThumbs = (e: any) => {
        setThumbIndex(e.item);
        setThumbAnimation(false);

        if (!mainAnimation) {
            setMainIndex(e.item);
        }
    };

    return [
        <AliceCarousel
            activeIndex={mainIndex}
            animationType="fadeout"
            animationDuration={800}
            disableDotsControls
            disableButtonsControls
            items={productElement}
            mouseTracking={!thumbAnimation}
            onSlideChange={syncMainBeforeChange}
            onSlideChanged={syncMainAfterChange}
            touchTracking={!thumbAnimation}
        />,
        <div className="thumbs">
            <AliceCarousel
                activeIndex={thumbIndex}
                autoWidth
                disableDotsControls
                disableButtonsControls
                items={thumbs}
                mouseTracking={false}
                onSlideChanged={syncThumbs}
                touchTracking={!mainAnimation}
            />
            <div className="btn-prev" onClick={slidePrev}>&lang;</div>
            <div className="btn-next" onClick={slideNext}>&rang;</div>
        </div>
    ]
}