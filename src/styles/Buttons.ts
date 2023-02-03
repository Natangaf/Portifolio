import styled, { css } from "styled-components";

interface InameButtons {
    nameButtons: "buttonsections" | "buttonSend"
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
            `;
        }
    }
    }`