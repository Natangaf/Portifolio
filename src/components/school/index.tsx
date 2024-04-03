import React from "react";
import {
  CourseDescripition,
  CourseDetails,
  LogoSchool,
  StylesSchool,
} from "./style";
import { StyledTypography } from "../baseTypography/style";
import { ISchoolelement } from "../../interface";

export function School({ element }: ISchoolelement) {
  const { img, name, year, resume, descripition } = element;

  return (
    <StylesSchool>
      <LogoSchool>
        <img src={img} alt={name} />
      </LogoSchool>
      <CourseDetails>
        <StyledTypography classText="Body" tag="p">
          {resume}
        </StyledTypography>
        <StyledTypography classText="BodyColor" tag="p">
          {year}
        </StyledTypography>
      </CourseDetails>
      <CourseDescripition>
        <StyledTypography classText="BodyColor" tag="p">
          {descripition}
        </StyledTypography>
      </CourseDescripition>
    </StylesSchool>
  );
}
