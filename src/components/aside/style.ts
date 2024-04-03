import styled from "styled-components";
import { motion } from "framer-motion";

export const StylesAside = styled(motion.aside)`
  height: 100vh;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: sticky;
  top: 0;
  z-index: 2;
  left: 20px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Link = styled.a.attrs({ "data-com": "Link" })`
  height: 20px;
  width: 20px;
`;

export const Logo = styled.img.attrs({ "data-com": "Logo" })`
  height: 20px;
  width: 20px;
`;
