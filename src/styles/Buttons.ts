import styled, { css } from "styled-components";

interface InameButtons {
  nameButtons: "buttonsections" | "buttonSend" | "selectTab";
}

export const StyledButtons = styled.button`
  cursor: pointer;
  font-family: 'Inter', -apple-system, sans-serif;
  border-radius: 6px;
  transition: background 0.15s, border-color 0.15s;

  ${({ nameButtons }: InameButtons) => {
    switch (nameButtons) {
      case "buttonsections":
        return css`
          height: 40px;
          width: 200px;
          background-color: var(--accent);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          border: none;

          &:hover {
            background-color: var(--accent-hover);
          }
        `;
      case "buttonSend":
        return css`
          height: 42px;
          width: 160px;
          background-color: var(--accent);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 8px;

          &:hover {
            background-color: var(--accent-hover);
          }
        `;
      case "selectTab":
        return css`
          background-color: transparent;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 13px;
          border: 1px solid var(--border);
          padding: 6px 16px;

          &.select {
            color: var(--text);
            background: var(--accent-dim);
            border-color: rgba(124,106,247,0.3);
          }

          &:hover {
            color: var(--text);
            background: rgba(255,255,255,0.05);
          }
        `;
    }
  }}
`;
