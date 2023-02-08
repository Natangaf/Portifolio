import styled from "styled-components";

export const StylesHeader = styled.header`
  background-color: var(--bgcolor2);
    width: 100vw;
    height:80px;
    position: fixed; 
    top: 0;
    left: 0;
    z-index: 9;

.head {
    height: 70px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.name {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    width: 90px;
}
.name >h1{
  color: var(--colorPrimary);
}
.name >h2{
  color: var(--colorSecond);
}
.navegation {
    min-width: 200px;
    height: 70px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
}

button {
color: var(--Color-grey-0);
}
button :hover{
color: var(--colorPrimary);
}
a{
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  font-weight: 500px;
  font-size: medium;
  max-width: 150px;
  background-color: transparent;
  border: transparent;
  color: var(--colorSecond); 
}


a:hover {
    margin: 1rem auto;
    animation: neon 1s ease infinite;
}
@keyframes neon {
    0%,
    100% {
        text-shadow: 0 0 10px #1f4e70, 0 0 20px #1f4e70, 0 0 20px #1f4e70, 0 0 20px #1f4e70, 0 0 2px #1d7819c7, 2px 2px 2px #1d7819c7;
        color: #f5efcb;
    }
    50% {
        text-shadow: 0 0 2px #0068b3, 0 0 5px #0068b3, 0 0 5px #0068b3, 0 0 5px #0068b3, 0 0 2px #0068b3, 4px 4px 2px #082207c7;
        color: #f5efcb;
    }
}
.selected{
  color:  var(--colorPrimary);
}
.selected:hover{
  color:  var(--colorPrimary);
  animation: none;
}
`