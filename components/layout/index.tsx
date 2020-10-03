import React from "react"
import styled from "styled-components"

import { useHeight } from "hooks/useHeight"
import { theme } from "theme"

import { Header } from "modules/header"

import { Box, Flex } from "components/box"

import { getColorByThemeMode } from "lib/getColorByThemeMode"

const NavHeader = styled(Box)`
  position: fixed;
  width: 100%;
  z-index: ${props => props.theme.layers.navigation};
`

const Container = styled(Flex)`
  justify-content: stretch;
  flex-direction: column;
  overflow-x: hidden;

  background: ${() => getColorByThemeMode("primary")};
`

export const Layout: React.FC = ({ children }) => {
  const { headerRef, headerHeight } = useHeight()

  return (
    <Container>
      <NavHeader ref={headerRef}>
        <Header />
      </NavHeader>
      <Box minHeight="200vh" mt={headerHeight} zIndex={theme.layers.default}>
        {children}
      </Box>
    </Container>
  )
}
