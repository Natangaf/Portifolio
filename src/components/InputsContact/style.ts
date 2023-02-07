import styled from "styled-components";

export const StylesInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
  border-bottom: 1px solid var(--Color-grey-50);
  padding: 10px 0;
  label{
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--colorSecond);
  }
  input{
    height: 38px;
    background-color: transparent;
    outline: none;
    border: 0px solid transparent;
    color: var(--colorSecond);
  }
`