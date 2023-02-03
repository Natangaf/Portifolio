import styled from "styled-components";
import principal from "../../assets/img/background/principal.jpg"


export const StylesHome = styled.main`
    width: 100%;
    height: 100vh;
    background-image: url(${principal});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: var( --Color-grey-0) ;
    display: flex;
    align-items: center;
    justify-content: center;
    .descripition{
        width:70% ;
        height: 40%;
        display: flex;
        gap:40px;
        justify-content: space-between;
    }
     .descripition > img{
        animation: circle-in-hesitate 2s;
        height: 100%;
        border-radius: 50%;
        border: 5px solid var(--colorSecond);
    }
    .person{
        height: 100%;
        display: flex;
        gap: 5px;
        flex-direction: column;
        align-items: flex-start;
    }
    .body{ 
        font-size: 1.675rem;
        font-weight: 400;
    }
          
    .Heading1{
          font-weight: 400;
          font-size: 7rem;
        }
    .primary{
        color: var(--colorPrimary);
    }
    .me{
        display: flex; 
        gap: 5px;
    }
   
`