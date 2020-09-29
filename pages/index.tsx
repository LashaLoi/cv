import { GlobalStyles } from "theme/global-styles";
import { Root } from "modules/root";
import { ThemeProvider } from "styled-components";

import { theme } from "theme";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Root />
  </ThemeProvider>
);

export default IndexPage;
