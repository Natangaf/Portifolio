import React from "react";
import { LogoSchool, StylesSchool } from "./style";
import { StyledTypography } from "../baseTypography/style";
import { ISchoolelement } from "../../interface";

export function School({ element }: ISchoolelement) {
  const { img, name, year, resume, descripition } = element;

  return (
    <StylesSchool>
      <LogoSchool >
        <img src={img} alt={name} />
      </LogoSchool>
      <div className="schooDetails">
        <StyledTypography classText="Body" tag="p">
          {resume}
        </StyledTypography>
        <StyledTypography classText="BodyColor" tag="p">
          {year}
        </StyledTypography>
      </div>
      <div className="schooDetails">
        <p></p>
        <StyledTypography classText="BodyColor" tag="p">
          {descripition}
        </StyledTypography>
      </div>
    </StylesSchool>
  );
}
