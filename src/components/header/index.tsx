import React from "react"
import { Link } from "react-router-dom";
import { StyledTypography } from "../baseTypography/style"
import { StylesHeader } from "./style";

export function Header() {
  return (
    <StylesHeader>
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
          <Link to="/">HOME</Link>
          <Link to="/About">SOBRE</Link>
          <Link to="/Projects">PROJETOS</Link>
          <Link to="/Education">EDUCAÇÃO</Link>
          <Link to="/Contact">CONTATO</Link>
        </nav>
      </div>
    </StylesHeader>
  );
}
