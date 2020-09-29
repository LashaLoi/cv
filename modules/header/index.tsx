import styled from "styled-components";

import { Flex, Box } from "components/box";
import { H3 } from "components/headers";

import { theme } from "theme";

import GithubIcon from "./icons/github.svg";
import TwitterIcon from "./icons/twitter.svg";
import LinkedInIcon from "./icons/linkedin.svg";

const HeaderContainer = styled(Flex)`
  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    padding-left: ${props => props.theme.space[5]};
    padding-right: ${props => props.theme.space[5]};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    padding-left: ${props => props.theme.space[9]};
    padding-right: ${props => props.theme.space[9]};
  }
`;

const IconContainer = styled(Box)`
  cursor: pointer;

  svg {
    fill: #fff;

    height: ${props => props.theme.space[5]};
    width: auto;
  }

  :hover {
    svg {
      fill: ${props => props.theme.colors.grey};
    }
  }
`;

export const Header = () => (
  <HeaderContainer
    justifyContent="space-between"
    height={theme.space[7]}
    alignItems="center"
    bg="darkSecondary"
    py={5}
  >
    <H3>AL</H3>
    <Flex>
      <IconContainer mt={1}>
        <GithubIcon />
      </IconContainer>
      <IconContainer mt={1} ml={5}>
        <TwitterIcon />
      </IconContainer>
      <IconContainer mt={1} ml={5}>
        <LinkedInIcon />
      </IconContainer>
    </Flex>
  </HeaderContainer>
);
