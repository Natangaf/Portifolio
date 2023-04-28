import { BaseTypography } from ".";
import styled, { css } from "styled-components";
interface IStyledTypography {
  classText: "Number" | "Title" | "Title1.2" | "Heading1" | "Heading1.2" | "Heading2" | "Heading3" | "Heading4" | "Heading" | "HeadingColorTwo" | "Body" | "BodyColor" | "BodyError" | "Caption" | "practicing"
}

export const StyledTypography = styled(BaseTypography)`
  color: var(--colorSecond);
  margin: 0;
${({ classText }: IStyledTypography) => {
    switch (classText) {
      case "Number":
        return css`
      font-weight: 400;
      font-size: 22rem;
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
    `;
      case "Heading2":
        return css`
      font-weight: 400;
      font-size: 3.125rem;
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
      font-size: 1rem;
      line-height: 1.25rem;
    `;
      case "BodyError":
        return css`
      color: red;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.25rem;
    `;
    }
  }}
  @media (max-width: 1000px) {
${({ classText }: IStyledTypography) => {
    switch (classText) {
      case "Number":
        return css`
      font-weight: 400;
      font-size: 8rem;
    `;
    }
  }
  }}
  @media (max-width: 600px) {
${({ classText }: IStyledTypography) => {
    switch (classText) {
      case "Number":
        return css`
      font-weight: 400;
      font-size: 10rem;
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
          font-size: 4rem;
        `;
      case "Heading2":
        return css`
          font-weight: 400;
          font-size: 2.125rem;
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
        font-size: 1rem;
        font-weight: 400;
      `;
      case "BodyColor":
        return css`
        color: var(--Color-grey-50);
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.25rem;
      `;
    }
  }
  }
    }
    `;
