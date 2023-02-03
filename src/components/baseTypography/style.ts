import { BaseTypography } from ".";
import styled, { css } from "styled-components";

interface IStyledTypography {
  classText: "Title" | "Title1.2" | "Heading1" | "Heading1.2" | "Heading2" | "Heading3" | "Heading4" | "Heading" | "HeadingColorTwo" | "Body"  | "BodyColor" | "Caption" | "practicing"
}

export const StyledTypography = styled(BaseTypography)`
  color: var(--colorSecond);
  margin: 0;
  font-family: 'Roboto', sans-serif;
  ${({ classText }: IStyledTypography) => {
    switch (classText) {
      case "Title":
        return css`
          font-weight: 700;
          font-size: 26px;
      `;
      case "Title1.2":
        return css`
          font-weight: 600;
          font-size: 21px;
        `;
      case "Heading1":
        return css`
          font-weight: 400;
          font-size: 7rem;
        `;
      case "Heading2":
        return css`
          font-weight: 400;
          font-size:3.125rem;
        `;
      case "Heading3":
        return css`
            font-size: 12rem;
            font-weight: 500;
            margin-right: -0.25rem;
            margin-bottom: 3.125rem;
        `;
      case "Heading4":
        return css`
          font-weight: 500;
          font-size: 0.8rem;
        `;
      case "Heading":
        return css`
          font-weight: 400;
          font-size: 16px;
        `;
      case "HeadingColorTwo":
        return css`
          color:var(--colorPrimary);
           font-weight: 500;
          font-size: 20px;
        `;
      case "Body":
        return css`
          font-size: 1.675rem;
          font-weight: 400;
        `;
      case "BodyColor":
        return css`
          color:var(--Color-grey-50);
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
        `;
      
    }
  }}
`;
