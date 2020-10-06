import React, { useState, memo } from "react"
import { m as motion } from "framer-motion"
import styled from "styled-components"

import { Flex } from "components/box"

import Arrow from "../images/arrow.svg"

const ItemsContainer = styled(motion.div)`
  height: 170px;
  overflow: hidden;
`

const SvgContainer = styled(Flex)`
  cursor: pointer;
  transform: rotate(-90deg);

  svg {
    height: 25px;

    fill: #fff;
  }
`

export const Items: React.FC = memo(({ children }) => {
  const [showMore, setShowMore] = useState(false)

  const toggle = () => setShowMore(state => !state)
  const height = showMore ? "100%" : "170px"

  return (
    <>
      <ItemsContainer animate={{ height }}>{children}</ItemsContainer>
      <SvgContainer mt={4} justifyContent="center" onClick={toggle}>
        <Arrow />
      </SvgContainer>
    </>
  )
})
