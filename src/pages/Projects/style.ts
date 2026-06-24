import { motion } from "framer-motion";
import styled from "styled-components";

export const StylesProjects = styled(motion.section)`
  width: 100vw;
  max-width: 100vw;
  height: 100%;
  background: var(--bg-surface);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 80px;
  padding-bottom: 40px;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);

  .proj-container {
    width: 100%;
    max-width: 1200px;
    padding: 0 40px;
  }

  .proj-header { margin-bottom: 40px; }

  .proj-label {
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 16px;
    &::before { content: '// '; }
  }

  .proj-title {
    font-family: var(--font-display);
    font-size: 62px;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 0.95;
    text-transform: uppercase;
    color: var(--text);
    margin-bottom: 12px;
  }

  .proj-sub {
    font-size: 17px;
    color: var(--text-subtle);
  }

  .proj-tabs {
    display: inline-flex;
    gap: 8px;
    margin-bottom: 32px;
    padding: 6px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--border);
  }

  .proj-tab {
    background: transparent;
    border: none;
    border-radius: 5px;
    padding: 11px 22px;
    font-family: var(--font-mono);
    font-size: 14px;
    font-weight: 600;
    color: var(--text-subtle);
    cursor: pointer;
    transition: all 0.2s;

    &:hover { color: var(--text); }
    &.active { background: #fff; color: #6d28d9; }
  }

  .proj-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 600px) { grid-template-columns: 1fr; }
  }

  .proj-card {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;

    &:hover {
      border-color: rgba(232, 121, 249, 0.4);
      transform: translateY(-8px);
      box-shadow: 0 18px 40px -16px rgba(232, 121, 249, 0.4);
    }
  }

  .proj-card-img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    object-position: top;
    display: block;
    background: var(--bg);
  }

  .proj-card-body { padding: 22px; }

  .proj-card-name {
    font-family: var(--font-display);
    font-size: 21px;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 8px;
  }

  .proj-card-desc {
    font-size: 14px;
    color: var(--text-subtle);
    line-height: 1.6;
    margin-bottom: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .proj-card-chips {
    display: flex;
    gap: 7px;
    flex-wrap: wrap;
    margin-bottom: 14px;
  }

  .proj-card-chip {
    font-family: var(--font-mono);
    font-size: 11.5px;
    color: var(--accent-2);
    background: rgba(167, 139, 250, 0.1);
    border-radius: 5px;
    padding: 5px 10px;
  }

  .proj-card-links { display: flex; gap: 8px; }

  .proj-card-link {
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 600;
    color: var(--accent);
    text-decoration: none;
    border: 1px solid rgba(232, 121, 249, 0.3);
    border-radius: 5px;
    padding: 6px 12px;
    transition: background 0.2s;

    &:hover { background: var(--accent-dim); }
  }

  @media (max-width: 700px) {
    overflow-y: auto;
    height: auto;
    min-height: 100vh;
    align-items: flex-start;
  }
`;
