import { motion } from "framer-motion";
import styled from "styled-components";

export const StylesContact = styled(motion.section)`
  padding-top: 64px;
  height: 100%;
  width: 100%;
  background: var(--grad-bold);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
    background-size: 56px 56px;
    animation: gridPan 6s linear infinite;
    pointer-events: none;
  }

  & > div {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 56px;
    align-items: center;
    z-index: 1;
    width: 100%;
    max-width: 1200px;
    padding: 0 40px;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .section-label {
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #f5d0fe;

    &::before { content: '// '; }
  }

  .contact-title {
    font-family: var(--font-display);
    font-size: 64px;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: #fff;
    line-height: 0.92;
    text-transform: uppercase;
  }

  .contact-sub {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.6;
    max-width: 420px;
  }

  .contact-email {
    font-family: var(--font-mono);
    font-size: 18px;
    color: #fff;
    font-weight: 600;
    border-bottom: 2px solid rgba(255, 255, 255, 0.4);
    padding-bottom: 4px;
    width: fit-content;
  }

  .contact-links {
    display: flex;
    gap: 12px;
    margin-top: 12px;
    flex-wrap: wrap;
  }

  .c-link {
    font-family: var(--font-mono);
    font-weight: 600;
    font-size: 14px;
    border-radius: 4px;
    padding: 12px 20px;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s;

    &:first-child {
      color: #3b0a63;
      background: #fff;
      box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.25);
    }

    &:not(:first-child) {
      color: #fff;
      border: 2px solid rgba(255, 255, 255, 0.7);
    }

    &:hover { transform: translate(-2px, -2px); }
  }

  & > div > section:last-child {
    background: rgba(11, 7, 20, 0.35);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 12px;
    padding: 32px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  span { color: #fde68a; }

  .error {
    height: 20px;
    font-size: 11px;
    color: #fde68a;
  }

  @media (max-width: 900px) {
    & > div { grid-template-columns: 1fr; gap: 32px; }
    .contact-title { font-size: 44px; }
  }

  @media (max-width: 700px) {
    overflow-y: auto;
    height: auto;
    min-height: 100vh;
    align-items: flex-start;
    & > div { padding: 32px 24px 60px; }
  }
`;
