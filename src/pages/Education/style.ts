import styled from "styled-components";
import { motion } from "framer-motion";

export const StylesEducation = styled(motion.section)`
  background: var(--bg);
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 40px;
  position: relative;
`;

export const EduContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;

  @media (max-width: 700px) { padding: 32px 24px 60px; }
`;

export const EduHeader = styled.div`
  margin-bottom: 48px;
`;

export const EduLabel = styled.p`
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;

  &::before { content: '// '; }
`;

export const EduTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 62px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 0.95;
  text-transform: uppercase;
  color: var(--text);

  em { font-style: normal; color: var(--accent); }
`;

export const EduGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;

  @media (max-width: 900px) { grid-template-columns: 1fr; gap: 40px; }
`;

export const EduCol = styled.div``;

export const ColLabel = styled.div`
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-2);
  margin-bottom: 22px;
`;

export const TlItem = styled.div`
  position: relative;
  padding: 0 0 28px 24px;
  border-left: 2px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    left: -6px; top: 4px;
    width: 10px; height: 10px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 4px rgba(232, 121, 249, 0.15);
  }

  &:last-child { padding-bottom: 0; }
`;

export const TlPeriod = styled.div`
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent);
  margin-bottom: 5px;
`;

export const TlOrgRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 3px;
`;

export const TlOrgLogo = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
  border-radius: 4px;
  filter: brightness(0) saturate(100%) invert(47%) sepia(76%) saturate(600%) hue-rotate(224deg) brightness(1.2);
  flex-shrink: 0;
`;

export const TlOrg = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
`;

export const TlRole = styled.div`
  font-size: 14px;
  color: var(--accent-2);
  font-weight: 500;
  margin-bottom: 10px;
`;

export const TlDesc = styled.p`
  font-size: 14px;
  color: var(--text-subtle);
  line-height: 1.6;
  margin-bottom: 12px;
`;

export const TlChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export const TlChip = styled.span`
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent-2);
  background: rgba(167, 139, 250, 0.1);
  border-radius: 5px;
  padding: 4px 9px;
  font-weight: 500;
`;

export const BadgeCurrent = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  background: var(--green);
  color: #0b0714;
  border-radius: 4px;
  padding: 3px 9px;
  margin-bottom: 8px;
  text-transform: uppercase;
`;
