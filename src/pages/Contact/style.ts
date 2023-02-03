import styled from "styled-components";
import contact from "../../assets/img/background/contact.jpg"

export const StylesContact = styled.main`
    padding-top: 80px;
    height: 89.3vh;
    width: 100%;
    background-image: url(${contact});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .container{
        width: 80%;
        height: 90%;
    }
    h2{
        max-width: 60%;
    }
    &>div{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-around;
    }
    section{
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 23px;
        text-align: left;
    }
    span{
        color: var(--colorPrimary);
    }
    ` 