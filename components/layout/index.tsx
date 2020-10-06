import React from "react"

import { Header } from "modules/header"

import { Box, Flex } from "components/box"

import { useHeight } from "hooks/useHeight"

import { getColorByThemeMode } from "lib/getColorByThemeMode"

import { theme } from "theme"

export const Layout: React.FC = ({ children }) => {
  const { headerRef, headerHeight } = useHeight()

  return (
    <Flex flexDirection="column" overflowX="hidden" bg={getColorByThemeMode("primary")}>
      <Box position="fixed" width="100%" zIndex={theme.layers.navigation} ref={headerRef}>
        <Header />
      </Box>
      <Box mt={headerHeight} zIndex={theme.layers.default}>
        {children}
      </Box>
    </Flex>
  )
}
