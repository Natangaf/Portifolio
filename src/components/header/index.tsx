import { StyledTypography } from "../baseTypography/style"
import { StylesHeader } from "./style";
import {Navigation} from "../navigation/index"

export function Header() {

  return (
    <StylesHeader >
      <div className="container">
        <div className="head">
          <div className="name">
            <StyledTypography tag="h1" classText="Title">
              Natã
            </StyledTypography>
            <StyledTypography tag="h2" classText="Title1.2">
              Fernades
            </StyledTypography>
          </div>
          <Navigation/>
        </div>
      </div>
    </StylesHeader>
  );
}
