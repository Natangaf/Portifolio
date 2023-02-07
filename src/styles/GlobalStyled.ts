import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
:root{
  --colorPrimary:#1f4e70;
  --colorSecond:#f5f5f5;
  --bgcolor:rgba(0, 0, 0, 0.678);
  --bgcolor2:rgba(0, 0, 0, 0.10);
  --bgsecond:#161616;
  --Color-gray-150:#333333e6;
  --Color-gray-100:#333333;
  --Color-grey-50:rgba(255, 255, 255, .4);
  --Color-grey-20:#E0E0E0;
  --Color-grey-05:#F5F5F5;
  --Color-grey-0:#FFFFFF;
  --Color-Negative:#E60000;
  --Color-Warning:#FFCD07;
  --Color-Sucess:#168821;
--Color-Information:#155BCB;
}
body{
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
  /* overflow-y: scroll; */
  background-color: var(--Color-gray-100);
}
::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background-color: var(--colorSecond);
}

::-webkit-scrollbar-thumb {
  background-color: var(--colorPrimary);
}

`;
