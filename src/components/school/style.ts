import styled from "styled-components";



export const StylesSchool = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-bottom: 30px;
    border-bottom: 2px solid var(--Color-grey-50);
    div{
        width: 30%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    }
     div{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
`