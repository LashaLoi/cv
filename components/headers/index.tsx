import React from "react";
import styled from "styled-components";

import { TextProps } from "components/text";
import { Box } from "components/box";

import {
  typography,
  textTransform,
  FontConfigurations as FConf,
  textDecoration
} from "theme";

const Header = styled(Box)`
  ${typography}
  ${textTransform}
  ${textDecoration}
`;

export const H1: React.FC<TextProps> = ({ children, as = "h1", ...props }) => (
  <Header as={as} {...FConf.h1} {...props}>
    {children}
  </Header>
);

export const H2: React.FC<TextProps> = ({ children, as = "h2", ...props }) => (
  <Header as={as} {...FConf.h2} {...props}>
    {children}
  </Header>
);

export const H3: React.FC<TextProps> = ({ children, as = "h3", ...props }) => (
  <Header as={as} {...FConf.h3} {...props}>
    {children}
  </Header>
);

export const H4: React.FC<TextProps> = ({ children, as = "h4", ...props }) => (
  <Header as={as} {...FConf.h4} {...props}>
    {children}
  </Header>
);

export const H5: React.FC<TextProps> = ({ children, as = "h5", ...props }) => (
  <Header as={as} {...FConf.h5} {...props}>
    {children}
  </Header>
);
