import React, { memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AnimatedButton = styled(motion.button)`
  padding: 8px;
  display: inline-flex;
  cursor: pointer;
`;

const Button = ({ children, onClick }) => {
  return (
    <AnimatedButton type="button" whileTap={{ scale: 0.9 }} onClick={onClick}>
      {children}
    </AnimatedButton>
  );
};

export default memo(Button);
