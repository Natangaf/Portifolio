import styled from "styled-components";
import { motion } from 'framer-motion';

export const StylesHeader = styled(motion.header)`
  width: 100vw;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  background: rgba(11, 7, 20, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  .head {
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .name {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 8px;
  }

  .name h1 {
    font-family: var(--font-display);
    font-size: 18px;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.4px;
  }

  .name h2 {
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 400;
    color: var(--text-muted);
    letter-spacing: 0.04em;
  }

  .name h1 span {
    color: var(--accent);
  }
`
