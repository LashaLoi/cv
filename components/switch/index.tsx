import { memo } from "react"
import { m as motion } from "framer-motion"
import styled from "styled-components"

import { useLocalStorage } from "hooks/useLocalStorage"
import { useThemeModeContext } from "context/theme-mode"

import { Box } from "components/box"

const MotionBox = styled(motion.div)`
  width: 18px;
  height: 18px;
  background-color: ${props => props.theme.colors.primaryDark};
  border-radius: 40px;
`

type SwitchBoxProps = { isOn: boolean; darkMode: boolean }

const SwitchBox = styled(Box)<SwitchBoxProps>`
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
  const { setItem } = useLocalStorage()
  const { lightMode, toggleMode } = useThemeModeContext()

  const handleToggle = () => {
    setItem("mode", lightMode ? "dark" : "light")
    toggleMode()
  }

  return (
    <SwitchBox isOn={lightMode} darkMode={!lightMode} onClick={handleToggle}>
      <MotionBox layout transition={transition} />
    </SwitchBox>
  )
})
