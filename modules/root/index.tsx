import styled from "styled-components";

import { Layout } from "components/layout";
import { Box } from "components/box";

const Item = styled(Box)`
  width: 100%;
  background: ${props => props.theme.colors.evergreen};
`;

export const Root = () => (
  <>
    <Item>Hello World</Item>
    <Layout />
  </>
);
