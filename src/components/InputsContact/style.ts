import styled from "styled-components";

export const StylesInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-bottom: 1px solid var(--border);
  padding: 10px 0;
  transition: border-color 0.15s;

  &:focus-within {
    border-color: var(--accent);
  }

  label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: var(--text-muted);
    font-family: 'Inter', sans-serif;
  }

  input, textarea {
    height: 36px;
    background-color: transparent;
    outline: none;
    border: none;
    color: var(--text);
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    resize: none;
  }

  input::placeholder, textarea::placeholder {
    color: var(--text-muted);
  }
`;
