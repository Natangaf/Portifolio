import React from "react"
import { StyledTypography } from "../baseTypography/style";

interface ILanguage {
  typelanguage: String;
  value: String;
  className?: string;
}

export function Language({ typelanguage, value, className }: ILanguage) {
  return (
    <li className={className}>
      <StyledTypography tag="h4" classText="Heading4">
        {typelanguage}
        <span>
          {value} %
        </span>
      </StyledTypography>
      <div className="value-typelanguage">
        <div className="bar"></div>
      </div>
    </li>
  );
}
