import styled from "styled-components";

import { Box } from "components/box";

const HeaderContainer = styled(Box)`
  position: relative;
  background: red;
  height: 50px;
`;

export const Header = () => <HeaderContainer>Header</HeaderContainer>;
