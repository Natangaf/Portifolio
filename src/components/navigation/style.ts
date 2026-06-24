import styled from "styled-components";

export const StylesNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

  .navigation {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
  }

  button, a {
    cursor: pointer;
    font-family: var(--font-mono);
    text-decoration: none;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 0.05em;
    background-color: transparent;
    border: transparent;
    color: var(--text-subtle);
    padding: 8px 14px;
    border-radius: 5px;
    transition: color 0.2s, background 0.2s;

    &:hover {
      color: var(--text);
      background: rgba(255, 255, 255, 0.06);
      animation: none;
      text-shadow: none;
    }
  }

  .selected {
    color: #fff;
    background: var(--accent-dim);
  }

  .selected:hover {
    color: #fff;
    background: rgba(232, 121, 249, 0.22);
    animation: none;
  }

  .bntMenu {
    visibility: hidden;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bntMenu > img {
    width: 20px;
    height: 20px;
    filter: brightness(0) invert(1);
    opacity: 0.6;
  }

  @media (max-width: 1000px) {
    .navigation {
      display: none;
    }

    .bntMenu {
      visibility: visible;
      position: absolute;
      right: 24px;
      background-color: transparent;
      border: 0;
    }

    .navegationReponsiv {
      width: 100vw;
      height: auto;
      background-color: var(--bg-elevated);
      border-bottom: 1px solid var(--border);
      position: absolute;
      top: 64px;
      right: 0;
      z-index: 3;
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 12px 16px;
    }

    .navegationReponsiv button {
      width: 100%;
      text-align: left;
      border-radius: 6px;
    }
  }
`
