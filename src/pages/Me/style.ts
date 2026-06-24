import { motion } from "framer-motion";
import styled from "styled-components";

export const StylesMe = styled(motion.section)`
  width: 100vw;
  height: 100%;
  background: var(--grad-bold);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .grid-overlay {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
    background-size: 56px 56px;
    animation: gridPan 6s linear infinite;
    pointer-events: none;
  }

  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(70px);
    pointer-events: none;
  }
  .blob-a {
    right: -120px; top: -120px;
    width: 560px; height: 560px;
    background: radial-gradient(circle, #f0abfc 0%, transparent 65%);
    opacity: 0.5;
    animation: auroraB 18s ease-in-out infinite;
  }
  .blob-b {
    left: -100px; bottom: -140px;
    width: 520px; height: 520px;
    background: radial-gradient(circle, #818cf8 0%, transparent 65%);
    opacity: 0.45;
    animation: auroraA 20s ease-in-out infinite;
  }

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 64px;
    position: relative;
    z-index: 2;
  }

  .hero-grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 40px;
    align-items: center;
  }

  .hero-left {
    display: flex;
    flex-direction: column;
  }

  .hero-eyebrow {
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #f5d0fe;
  }

  .hero-title {
    font-family: var(--font-display);
    font-size: 92px;
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 0.9;
    text-transform: uppercase;
    color: #fff;
    margin: 18px 0 0;
  }

  .hero-title .outline {
    -webkit-text-stroke: 2px #fff;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  .hero-title .accent {
    color: #f0abfc;
  }

  .hero-body {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.6;
    max-width: 480px;
    margin: 26px 0 0;
  }

  .hero-stats {
    display: flex;
    gap: 44px;
    margin-top: 40px;
  }

  .stat-num {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 46px;
    color: #fff;
    line-height: 1;
  }

  .stat-label {
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 0.1em;
    color: #f5d0fe;
    text-transform: uppercase;
    margin-top: 6px;
  }

  .hero-actions {
    display: flex;
    gap: 14px;
    margin-top: 38px;
    flex-wrap: wrap;
  }

  .btn-fill {
    font-size: 16px;
    font-weight: 700;
    color: #6d28d9;
    padding: 16px 28px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.25);
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s;

    &:hover {
      transform: translate(-2px, -2px);
      box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.25);
    }
  }

  .btn-outline {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    padding: 16px 28px;
    border-radius: 4px;
    border: 2px solid rgba(255, 255, 255, 0.7);
    background: transparent;
    text-decoration: none;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: #fff;
    }
  }

  .hero-right {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .photo-card {
    position: relative;
    animation: floaty 7s ease-in-out infinite;
  }

  .photo-inner {
    position: relative;
    width: 380px;
    height: 480px;
    border-radius: 8px;
    background: linear-gradient(160deg, #fde68a, #f0abfc 60%, #818cf8);
    box-shadow: 14px 18px 0 rgba(0, 0, 0, 0.28);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
  }

  .photo-inner::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 40%, rgba(59, 10, 99, 0.55));
  }

  .photo-inner img {
    position: relative;
    width: 380px;
    height: auto;
    filter: drop-shadow(0 16px 26px rgba(0, 0, 0, 0.4));
  }

  .sticker {
    position: absolute;
    font-family: var(--font-mono);
    font-weight: 600;
    font-size: 13px;
    padding: 8px 14px;
    border-radius: 4px;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.25);
  }

  .sticker-code {
    top: -18px; left: -22px;
    transform: rotate(-8deg);
    color: #3b0a63;
    background: #fde68a;
  }

  .sticker-online {
    bottom: 24px; right: -26px;
    transform: rotate(6deg);
    color: #fff;
    background: #3b0a63;
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .sticker-online i {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--green);
    display: inline-block;
  }

  @media (max-width: 1100px) {
    .hero-grid { grid-template-columns: 1fr; text-align: center; gap: 48px; }
    .hero-title { font-size: 60px; }
    .hero-body { max-width: 100%; }
    .hero-actions, .hero-stats { justify-content: center; }
    .hero-eyebrow { text-align: center; }
    .hero-right { order: -1; }
  }

  @media (max-width: 600px) {
    .hero-title { font-size: 40px; }
    .photo-inner { width: 280px; height: 360px; }
    .photo-inner img { width: 280px; }
    .hero-stats { gap: 28px; }
    .stat-num { font-size: 34px; }
  }
`;
