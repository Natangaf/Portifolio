import styled from "styled-components";

export const StylesAside = styled.aside`
    height: 100vh;
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: absolute;
    top: 0;
    z-index: 2;
    left: 20px;
    a{
        height: 20px;
        width: 20px;
    }
    a>img{
        height: 20px;
        width: 20px;
    }
`