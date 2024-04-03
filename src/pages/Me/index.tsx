import { StylesMe } from "./style";
import { TypeAnimation } from "react-type-animation";
import eu from "../../assets/img/perfil/eu.png";
import { StyledTypography } from "../../components/baseTypography/style";

export function Me({ ref }: any) {

  return (
    <StylesMe>
      <div className="container">
        <div className="descripition">
          <div className="person">
            <StyledTypography tag="h2" classText="Heading1">
              NATÃ FERNANDES
            </StyledTypography>
            <StyledTypography tag="h2" classText="Heading1" className="primary">
              Developer
            </StyledTypography>
            <TypeAnimation
              style={{ marginLeft: 10 }}
              sequence={[`Front-end`, 2000, `Back-end`, 1000]}
              speed={10}
              wrapper="p"
              repeat={Infinity}
              className="body"
            />
          </div>
          <div className="natangaImage">
            <img src={eu} alt="" />
          </div>
        </div>
      </div>
    </StylesMe>
  );
}
