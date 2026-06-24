import styled from "styled-components";
import { motion } from "framer-motion";

export const StylesAside = styled(motion.aside)`
  position: fixed;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 55;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  @media (max-width: 900px) { display: none; }
`;

export const SocialLink = styled(motion.a)`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.25s, background 0.25s, border-color 0.25s, transform 0.25s, box-shadow 0.25s;

  &:hover {
    color: #fff;
    background: rgba(232, 121, 249, 0.18);
    border-color: rgba(232, 121, 249, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px -6px rgba(232, 121, 249, 0.6);
  }

  svg { display: block; }
`;

export const Divider = styled.div`
  width: 1px;
  height: 60px;
  margin-top: 4px;
  background: linear-gradient(rgba(255, 255, 255, 0.25), transparent);
`;
