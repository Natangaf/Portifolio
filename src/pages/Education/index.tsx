import React from "react"
import { StylesEducation } from "./style";
import { StyledTypography } from "../../components/baseTypography/style";
import { StyledButtons } from "../../styles/Buttons";
import { BaseEducation } from "../../base/BaseEducation";
import { ISchool } from "../../interface";
import { School } from "../../components/school";

export function Education() {
    return (
        <StylesEducation>
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