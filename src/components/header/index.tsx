
import { Link, useLocation } from "react-router-dom";
import { StyledTypography } from "../baseTypography/style"
import { StylesHeader } from "./style";

export function Header() {
  const location = useLocation()
  return (
    <StylesHeader>
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
          <nav className="navegation">
            <Link to="/" className={location.pathname == "/" ? "selected" : ""} >HOME</Link>
            <Link to="/About" className={location.pathname == "/About" ? "selected" : ""}>SOBRE</Link>
            <Link to="/Projects" className={location.pathname == "/Projects" ? "selected" : ""}>PROJETOS</Link>
            <Link to="/Education" className={location.pathname == "/Education" ? "selected" : ""}>EDUCAÇÃO</Link>
            <Link to="/Contact" className={location.pathname == "/Contact" ? "selected" : ""}>CONTATO</Link>
          </nav>
        </div>
      </div>
    </StylesHeader>
  );
}
