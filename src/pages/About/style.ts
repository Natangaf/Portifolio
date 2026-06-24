import styled from "styled-components";
import { motion } from "framer-motion";

export const StylesAbout = styled(motion.section)`
  background-color: var(--bg);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 64px;

  @media (max-width: 700px) {
    overflow-y: auto;
    height: 100vh;
    align-items: flex-start;
  }
`;

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: 700px) {
    padding: 32px 24px 60px;
    gap: 36px;
  }
`;

export const SectionLabel = styled.p`
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;

  &::before { content: '// '; }
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 62px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 0.95;
  text-transform: uppercase;
  color: var(--text);
  margin-bottom: 40px;
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const BioText = styled.p`
  font-size: 18px;
  color: var(--text-subtle);
  line-height: 1.8;
  font-weight: 400;

  strong { color: var(--text); font-weight: 600; }
  em { font-style: normal; color: var(--accent-2); }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;

  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 500px) { grid-template-columns: 1fr; }
`;

export const SkillChip = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: border-color 0.2s, transform 0.2s, background 0.2s;

  img {
    width: 26px;
    height: 26px;
    object-fit: contain;
    display: block;
  }

  &:hover {
    border-color: rgba(232, 121, 249, 0.4);
    background: rgba(232, 121, 249, 0.06);
    transform: translateY(-2px);
  }
`;

export const SkillDot = styled.span<{ color?: string }>`
  width: 9px; height: 9px;
  border-radius: 50%;
  background: ${({ color }) => color || 'var(--accent)'};
  flex-shrink: 0;
`;

export const SkillName = styled.span`
  font-size: 14.5px;
  font-weight: 600;
  color: var(--text);
`;

export const SkillLevel = styled.span`
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  margin-left: auto;
`;

export const PracticingValue = styled.div``;
export const PracticingTime = styled.div``;
export const Expertises = styled.div``;
export const HeaderExpertises = styled.div``;
export const ListExpertises = styled.ul``;
export const CardExpertises = styled.li``;
export const FrontCard = styled.div<{ flipped: boolean }>``;
export const BackCard = styled.div<{ flipped: boolean }>``;
export const InfoLanguage = styled.div``;
export const ExperienceDescription = styled.p``;
