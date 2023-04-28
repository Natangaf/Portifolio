import { useContext } from "react"
import { StylesHome } from "./style";
import { TypeAnimation } from "react-type-animation"
import { ProjectContext } from "../../context/ProjectContext";
import eu from "../../assets/img/perfil/eu.png"
import { StyledTypography } from "../../components/baseTypography/style";


export function Home() {
  const { slide } = useContext(ProjectContext)

  return (
    <StylesHome
      variants={slide}
      animate="mostrar"
      initial="inicial"
      exit="esconder"
      transition={{
        duration: 1,
      }}
    >
      <div className="container">
        <div className="descripition">
          <div className="person">
            <StyledTypography tag="h2" classText="Heading1">NATÃ FERNANDES</StyledTypography>
            <StyledTypography tag="h2" classText="Heading1" className="primary">
              Developer
            </StyledTypography>
            <div className="me">
              <TypeAnimation
                sequence={[`Front-end`, 2000, `Back-end`, 1000]}
                speed={10}
                wrapper="p"
                repeat={Infinity}
                className="body" />
            </div>
          </div>
          <div className="natangaImage" >
            <img src={eu} alt=""/>
          </div>
      </div>
    </div >
    </StylesHome >
  )
}