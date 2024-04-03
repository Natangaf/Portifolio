import { BaseTypography } from ".";
import styled, { css } from "styled-components";
interface IStyledTypography {
  classText:
    | "Number"
    | "Title"
    | "Title1.2"
    | "Heading1"
    | "Heading1.2"
    | "Heading2"
    | "Heading3"
    | "Heading4"
    | "Heading"
    | "HeadingColorTwo"
    | "Body"
    | "BodyColor"
    | "BodyError"
    | "Caption"
    | "practicing"
    | "Descripition"
    | "DescripitionSecundary"
    | "DescripitionColor";
}

export const StyledTypography = styled(BaseTypography)`
  font-family: "Poppins", sans-serif;
  color: var(--colorSecond);
  margin: 0;

  ${({ classText }: IStyledTypography) => {
    switch (classText) {
      case "Number":
        return css`
          font-weight: 400;
          font-size: 16rem;

          @media (max-width: 1000px) {
            font-size: 8rem;
          }

          @media (max-width: 600px) {
            font-size: 10rem;
          }
          @media (max-width: 400px) {
            font-size: 8rem;
          }
        `;
      case "Title":
        return css`
          font-weight: 700;
          font-size: 1.625rem;
        `;
      case "Title1.2":
        return css`
          font-weight: 600;
          font-size: 1.3125rem;
        `;
      case "Heading1":
        return css`
          font-weight: 400;
          font-size: 7rem;

          @media (max-width: 600px) {
            font-size: 3rem;
          }
        `;
      case "Heading2":
        return css`
          font-weight: 400;
          font-size: 3.125rem;

          @media (max-width: 600px) {
            font-size: 1.7rem;
          }
        `;
      case "Heading3":
        return css`
          color: var(--colorPrimary);
          font-size: 5rem;
          font-weight: 500;
        `;
      case "Heading4":
        return css`
          font-weight: 500;
          font-size: 0.8rem;
        `;
      case "Heading":
        return css`
          font-weight: 400;
          font-size: 1rem;
        `;
      case "HeadingColorTwo":
        return css`
          color: var(--colorPrimary);
          font-weight: 500;
          font-size: 1.25rem;
        `;
      case "Body":
        return css`
          font-size: 1.675rem;
          font-weight: 400;
        `;
      case "BodyColor":
        return css`
          color: var(--Color-grey-50);
          font-weight: 200;
          font-size: 0.8rem;
          line-height: 1.25rem;
          @media (max-width: 600px) {
            font-size: 0.8rem;
          }
        `;
      case "BodyError":
        return css`
          color: red;
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 1.25rem;
        `;
      case "Descripition":
        return css`
          color: var(--colorSecond);
          font-weight: 200;
          font-size: 0.8rem;
          line-height: 1.25rem;
          @media (max-width: 600px) {
            font-size: 0.8rem;
          }
        `;
      case "DescripitionSecundary":
        return css`
          color: var(--Color-grey-50);
          font-weight: 200;
          font-size: 0.8rem;
          line-height: 1.25rem;
          @media (max-width: 600px) {
            font-size: 0.8rem;
          }
        `;
      case "DescripitionColor":
        return css`
          color: var(--colorPrimary);
          font-weight: 200;
          font-size: 0.8rem;
          line-height: 1.25rem;
          @media (max-width: 600px) {
            font-size: 0.8rem;
          }
        `;
      default:
        return css``;
    }
  }}
`;
