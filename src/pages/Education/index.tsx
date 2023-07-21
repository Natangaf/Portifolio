import { useContext } from "react"
import { StylesEducation } from "./style";
import { StyledTypography } from "../../components/baseTypography/style";
import { StyledButtons } from "../../styles/Buttons";
import { ISchool } from "../../interface";
import { School } from "../../components/school";
import { BaseEducation } from "../../base/BaseEducation";
import { ProjectContext } from "../../context/ProjectContext";


export function Education() {

    return (
        <StylesEducation>
            <div className="container">
                <div className="title">
                    <StyledTypography classText="Heading1" tag="h4">
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
            </div>
        </StylesEducation>
    )
}