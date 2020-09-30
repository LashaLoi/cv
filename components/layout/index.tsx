import React from "react"
import styled from "styled-components"

import { useHeight } from "hooks/useHeight"
import { useTheme } from "hooks/useTheme"

import { Header } from "modules/header"

import { Box, Flex } from "components/box"

const NavHeader = styled(Box)`
  position: fixed;
  width: 100%;
  z-index: ${props => props.theme.layers.navigation};
`

const Container = styled(Flex)`
  justify-content: stretch;
  flex-direction: column;
  overflow-x: hidden;
  height: 100vh;
`

export const Layout: React.FC = ({ children }) => {
  const { headerRef, headerHeight } = useHeight()
  const theme = useTheme()

  return (
    <Container>
      <NavHeader ref={headerRef}>
        <Header />
      </NavHeader>
      <Box mt={headerHeight} zIndex={theme.layers.default}>
        {children}
      </Box>
    </Container>
  )
}
