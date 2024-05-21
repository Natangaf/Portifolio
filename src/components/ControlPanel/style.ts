import { motion } from "framer-motion";
import styled from "styled-components";

export const ControlPanelContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  width: 55%;
  background-color: var(--Color-grey-20);

  border-radius: 12px;
`;

export const ControlSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Icon = styled.img`
  margin: 0 0.75rem;
  cursor: pointer;

  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &.clickable {
    cursor: pointer;
  }
`;

export const PageInput = styled.input`
  padding: 0;
  padding-left: 0.25rem;
  margin: 0 0.5rem;
  width: 3rem;
  text-align: center;
`;

export const ZoomLabel = styled.span`
  margin: 0 0.75rem;
`;
