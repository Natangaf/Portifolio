import styled, { css } from "styled-components";

interface PropTypeBg {
    background: string;
};

export const StylesCardProject = styled.div`
    ${({ background }: PropTypeBg) => {
        return css`
            background-image:url(${background});
    `}}
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    :hover{
        width:70%
    }
    .background{
        background-color:var(--Color-gray-150);
        width:100%;
        height: 100%;
        display: flex;

    }
    .projectContainer{
        visibility: hidden;
    }
    .projectContainer:hover{
        visibility: visible;
        margin:0 auto;
        width:70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap:40px;
    }
    figure{
        height: 4
        0px;
        display:flex;
        flex-direction:row;
        gap:10px;
    }
    img{
           height: 40px;
    }
    p{
        width: 40%;
    }
@media (max-width: 1000px) {
.container{
  margin: 0 auto;
  width: 100vw;
}

}
`