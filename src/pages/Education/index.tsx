import { StylesEducation } from "./style";
import { StyledTypography } from "../../components/baseTypography/style";
import { ISchool } from "../../interface";
import { School } from "../../components/school";
import { BaseEducation } from "../../base/BaseEducation";
import curriculo from "../../base/Natã-Fernandes-full-stack.pdf";

export function Education() {



    return (
        <StylesEducation>
            <div className="container">
                <div className="title">
                    <StyledTypography classText="Heading2" tag="h4">
                        Educação
                    </StyledTypography>
                    <a target="_blank" href={curriculo} className="cv">
                        Dowload Resume
                    </a>
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