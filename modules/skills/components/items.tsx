import React, { useState, memo } from "react"
import styled from "styled-components"

import { m as motion } from "framer-motion"

import Arrow from "../images/arrow.svg"

const ItemsContainer = styled(motion.div)`
  height: 170px;
  overflow: hidden;
`

const SvgContainer = styled(motion.div)`
  margin-top: ${props => props.theme.space[4]};

  cursor: pointer;
  display: flex;
  justify-content: center;

  transform: rotate(-90deg);
  svg {
    height: 30px;

    fill: #fff;
  }
`

export const Items: React.FC = memo(({ children }) => {
  const [showMore, setShowMore] = useState(false)

  const toggle = () => setShowMore(state => !state)

  return (
    <>
      <ItemsContainer animate={{ height: showMore ? "100%" : "170px" }}>{children}</ItemsContainer>
      <SvgContainer
        animate={{
          transform: `rotate(${showMore ? 90 : -90}deg)`
        }}
        onClick={toggle}
      >
        <Arrow />
      </SvgContainer>
    </>
  )
})
