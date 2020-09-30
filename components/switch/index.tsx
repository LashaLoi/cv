import { memo } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import { useThemeModeContext } from "theme/context"

import { Box } from "components/box"

const MotionBox = styled(motion.div)`
  width: 18px;
  height: 18px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 40px;
`

const SwitchBox = styled(Box)<{ isOn: boolean; darkMode: boolean }>`
  justify-content: ${props => (props.isOn ? "flex-end" : "flex-start")};
  background-color: ${props => (props.darkMode ? "white" : "#536390")};

  width: 40px;
  height: 25px;
  display: flex;

  border-radius: 50px;
  padding: 4px;
  cursor: pointer;
`

const transition = {
  type: "spring",
  stiffness: 700,
  damping: 30
}

export const Switch = memo(() => {
  const { lightMode, darkMode, toggleMode } = useThemeModeContext()

  return (
    <SwitchBox isOn={lightMode} darkMode={darkMode} onClick={toggleMode}>
      <MotionBox layout transition={transition} />
    </SwitchBox>
  )
})
