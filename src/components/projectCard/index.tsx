import { StylesProjectCard } from "./style";
import { StyledTypography } from "../baseTypography/style";
import { iProjectCard } from "../../interface";


export function ProjectCard({ imagesProject }: iProjectCard) {

    return (
        <StylesProjectCard >
            <div>
                <img src={imagesProject.img} alt={imagesProject.page} />
                <StyledTypography tag="p" classText="BodyColor">
                    {imagesProject.page}
                </StyledTypography>
            </div>
        </ StylesProjectCard>
    )
}