import styled, { css } from "styled-components";

interface InameButtons {
  nameButtons: "buttonsections" | "buttonSend" | "selectTab";
}

export const StyledButtons = styled.button`
  cursor: pointer;
  ${({ nameButtons }: InameButtons) => {
    switch (nameButtons) {
      case "buttonsections":
        return css`
          height: 40px;
          width: 200px;

          background-color: var(--colorPrimary);

          color: var(--colorSecond);
          font-size: 18px;

          border: transparent;
        `;
      case "buttonSend":
        return css`
          height: 40px;
          width: 200px;
          background-color: var(--colorPrimary);
          color: var(--colorSecond);

          font-size: 14px;
          border: transparent;

          display: flex;
          align-items: center;
          justify-content: center;
        `;
      case "selectTab":
        return css`
          background-color: transparent;
          color: var(--colorSecond);

          font-weight: 700;
          font-size: 1.25rem;

          border: transparent;

          display: flex;
          align-items: center;
          justify-content: center;

          &.select {
            color: var(--colorPrimary);
          }
        `;
    }
  }}
`;
