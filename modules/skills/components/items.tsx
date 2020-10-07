import React, { useState, memo } from "react"
import { m as motion } from "framer-motion"
import styled from "styled-components"

import { Flex } from "components/box"

import { getColorByThemeMode } from "lib/getColorByThemeMode"

import Arrow from "../images/arrow.svg"

const ItemsContainer = styled(motion.div)`
  color: ${() => getColorByThemeMode("font")};

  height: 170px;
  overflow: hidden;
`

const SvgContainer = styled(Flex)<{ showMore: boolean }>`
  cursor: pointer;

  transform: rotate(${props => (props.showMore ? 90 : -90)}deg);

  svg {
    height: 25px;

    fill: ${() => getColorByThemeMode("font")};
  }
`

export const Items: React.FC = memo(({ children }) => {
  const [showMore, setShowMore] = useState(false)

  const toggle = () => setShowMore(state => !state)
  const height = showMore ? "100%" : "170px"

  return (
    <>
      <ItemsContainer animate={{ height }}>{children}</ItemsContainer>
      <SvgContainer mt={4} justifyContent="center" showMore={showMore} onClick={toggle}>
        <Arrow />
      </SvgContainer>
    </>
  )
})
