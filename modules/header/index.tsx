import styled from "styled-components"

import { TargetLink } from "components/link"
import { FadeIn } from "components/fade/in"
import { Switch } from "components/switch"
import { Flex, Box } from "components/box"

import { theme } from "theme"

import GithubIcon from "./icons/github.svg"
import TwitterIcon from "./icons/twitter.svg"
import LinkedInIcon from "./icons/linkedin.svg"
import Logo from "./icons/logo.svg"

const HeaderContainer = styled(Flex).attrs({
  justifyContent: "space-between",
  alignItems: "center",
  bg: "secondary",
  py: 5
})`
  color: white;
  padding-left: ${props => props.theme.space[9]};
  padding-right: ${props => props.theme.space[9]};

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    padding-left: ${props => props.theme.space[5]};
    padding-right: ${props => props.theme.space[5]};
  }
`

const IconContainer = styled(Box)`
  cursor: pointer;

  svg {
    fill: white;

    height: ${props => props.theme.space[5]};
    width: auto;
  }

  :hover {
    svg {
      fill: ${props => props.theme.colors.grey};
    }
  }
`

export const Header = () => (
  <HeaderContainer height={theme.space[7]}>
    <FadeIn>
      <IconContainer>
        <Logo />
      </IconContainer>
    </FadeIn>
    <Flex mt={1}>
      <FadeIn delayMs={0.2}>
        <TargetLink href="https://github.com/LashaLoi">
          <IconContainer>
            <GithubIcon />
          </IconContainer>
        </TargetLink>
      </FadeIn>
      <FadeIn delayMs={0.3}>
        <TargetLink href="https://twitter.com/sideswipeloi">
          <IconContainer ml={5}>
            <TwitterIcon />
          </IconContainer>
        </TargetLink>
      </FadeIn>
      <FadeIn delayMs={0.4}>
        <TargetLink href="https://www.linkedin.com/in/alexey-loi-82b670185/">
          <IconContainer ml={5}>
            <LinkedInIcon />
          </IconContainer>
        </TargetLink>
      </FadeIn>
      <FadeIn delayMs={0.5}>
        <Box ml={5}>
          <Switch />
        </Box>
      </FadeIn>
    </Flex>
  </HeaderContainer>
)
