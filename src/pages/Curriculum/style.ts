import { motion } from "framer-motion";
import styled from "styled-components";

export const StylesCurriculum = styled(motion.section)`
  margin-top: 100px;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 1000px) {
    .container {
      width: 90%;
    }
  }
`;
