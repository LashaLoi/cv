import { Flex, Box } from "components/box";
import { H3 } from "components/headers";

import { theme } from "theme";

export const Header = () => (
  <Flex
    justifyContent="space-between"
    height={theme.space[7]}
    alignItems="center"
    bg="darkSecondary"
    px={9}
  >
    <H3>AL</H3>
    <Flex>
      <Box>github</Box> <Box>linkedin</Box> <Box>toggle</Box>
    </Flex>
  </Flex>
);
