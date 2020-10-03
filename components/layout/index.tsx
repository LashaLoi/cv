// import React, { useEffect } from "react"
import styled from "styled-components"
import React from "react"

import { useHeight } from "hooks/useHeight"
import { useTheme } from "hooks/useTheme"

import { Header } from "modules/header"

import { Box, Flex } from "components/box"
// import { useStoreContext } from "store"

const NavHeader = styled(Box)`
  position: fixed;
  width: 100%;
  z-index: ${props => props.theme.layers.navigation};
`

const Container = styled(Flex)`
  justify-content: stretch;
  flex-direction: column;
  overflow-x: hidden;
`

export const Layout: React.FC = ({ children }) => {
  // const { setOffset } = useStoreContext()
  const { headerRef, headerHeight } = useHeight()
  const theme = useTheme()

  // useEffect(() => {
  //   const handleScroll = () => setOffset(window.pageYOffset)

  //   window?.addEventListener("scroll", handleScroll)
  //   return () => window?.removeEventListener("scroll", handleScroll)
  // }, [])

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
