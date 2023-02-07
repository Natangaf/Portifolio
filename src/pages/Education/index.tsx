import { useContext, useEffect } from "react"
import { StylesEducation } from "./style";
import { StyledTypography } from "../../components/baseTypography/style";
import { StyledButtons } from "../../styles/Buttons";
import { BaseEducation } from "../../base/baseEducation";
import { ISchool } from "../../interface";
import { School } from "../../components/school";
import { ProjectContext } from "../../context/ProjectContext";

export function Education() {
    const { slide } = useContext(ProjectContext)

    return (
        <StylesEducation
            variants={slide}
            animate="mostrar"
            initial="inicial"
            exit="esconder"
            transition={{
                type: "just"
            }}
        >
            <div>
                <StyledTypography classText="Heading2" tag="h4">
                    Educação
                </StyledTypography>
                <StyledButtons nameButtons="buttonsections">
                    Dowload Resume
                </StyledButtons>
            </div>
            <ul>
                {BaseEducation?.map((element: ISchool) =>
                    <School element={element} key={element.id} />
                )}
            </ul>
        </StylesEducation>
    )
}