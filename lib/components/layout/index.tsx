import React from "react"
import styled from "styled-components"

import { m as motion } from "framer-motion"

import { Header } from "modules/header"

import { Box } from "lib/components/box"

import { useHeight } from "lib/hooks/useHeight"

import { getColorByThemeMode } from "lib/getColorByThemeMode"

import { theme } from "theme"

const LayoutContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  overflow-x: hidden;
`

export const Layout: React.FC = ({ children }) => {
  const { headerRef, headerHeight } = useHeight()

  return (
    <LayoutContainer animate={{ backgroundColor: getColorByThemeMode("primary") }} transition={{ duration: 0.2 }}>
      <Box position="fixed" width="100%" zIndex={theme.layers.navigation} ref={headerRef}>
        <Header />
      </Box>
      <Box mt={headerHeight} zIndex={theme.layers.default}>
        {children}
      </Box>
    </LayoutContainer>
  )
}
