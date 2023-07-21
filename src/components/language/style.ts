import styled, { css } from "styled-components";
import { Language } from ".";

interface Ivalue {
    value: string
}

export const StylesLanguage = styled(Language)`
   li{
       height: 40px;
       background-color:red;
    } 
    h4{
        width: 100%;
        display: flex;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    div {
        width: 100%;
        flex-direction: row;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .value-typelanguage{
        margin-top: 10px;
        background-color: var(--Color-grey-0);
        width: 100%;
        height: 10px;
        border-radius: 4px;
        transition:ease-in 1s;
    }
    .bar{
        animation: wipe-in-right 1.5s ;
        ${({ value }: Ivalue) => {
        return css`
            width: ${value}%;
            `
    }}
        height: 10px;
        background-color: var(--colorPrimary);
        border-radius: 3px;
    }
     @media (max-width: 600px) {
        margin-top: 5px;
    }

`