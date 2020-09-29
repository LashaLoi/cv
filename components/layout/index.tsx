import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Header } from "modules/header";

import { Box, Flex } from "components/box";

const NavHeader = styled(Box)`
  position: fixed;
  width: 100%;
`;

const Container = styled(Flex)`
  justify-content: stretch;
  flex-direction: column;
  overflow-x: hidden;
  height: 100vh;
`;

export const Layout: React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const height = headerRef.current?.clientHeight;

    height && setHeaderHeight(height);
  }, [headerRef]);

  return (
    <Container>
      <NavHeader ref={headerRef}>
        <Header />
      </NavHeader>
      <Box minHeight="100vh" mt={headerHeight}>
        <Box height={2000}>Hello</Box>
      </Box>
    </Container>
  );
};
