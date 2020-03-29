import React, { memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

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

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default memo(Button);
