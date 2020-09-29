import { useState, memo } from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

import { Box } from "components/box";

const MotionBox = styled(motion.div)`
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 40px;
`;

const SwitchBox = styled(Box)<{ isOn: boolean }>`
  ${props =>
    props.isOn
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: flex-start;
        `};

  width: 40px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;

  border-radius: 50px;
  padding: 4px;
  cursor: pointer;
`;

export const Switch = memo(() => {
  const [toggle, setToggle] = useState(false);

  return (
    <SwitchBox isOn={toggle} onClick={() => setToggle(state => !state)}>
      <MotionBox
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30
        }}
      />
    </SwitchBox>
  );
});
