import Link from "next/link"
import styled from "styled-components"

import { Flex, Box } from "components/box"
import { H3 } from "components/headers"
import { Switch } from "components/switch"
import { FadeIn } from "components/fade/in"

import { useTheme } from "hooks/useTheme"

import GithubIcon from "./icons/github.svg"
import TwitterIcon from "./icons/twitter.svg"
import LinkedInIcon from "./icons/linkedin.svg"

const HeaderContainer = styled(Flex)`
  color: white;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    padding-left: ${props => props.theme.space[5]};
    padding-right: ${props => props.theme.space[5]};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    padding-left: ${props => props.theme.space[9]};
    padding-right: ${props => props.theme.space[9]};
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

export const Header = () => {
  const theme = useTheme()

  return (
    <HeaderContainer justifyContent="space-between" height={theme.space[7]} alignItems="center" bg="secondary" py={5}>
      <FadeIn>
        <H3>AL</H3>
      </FadeIn>
      <Flex mt={1}>
        <FadeIn delayMs={0.2}>
          <a href="https://github.com/LashaLoi" target="_blank">
            <IconContainer>
              <GithubIcon />
            </IconContainer>
          </a>
        </FadeIn>
        <FadeIn delayMs={0.3}>
          <a href="https://twitter.com/sideswipeloi" target="_blank">
            <IconContainer ml={5}>
              <TwitterIcon />
            </IconContainer>
          </a>
        </FadeIn>
        <FadeIn delayMs={0.4}>
          <a href="https://www.linkedin.com/in/alexey-loi-82b670185/" target="_blank">
            <IconContainer ml={5}>
              <LinkedInIcon />
            </IconContainer>
          </a>
        </FadeIn>
        <FadeIn delayMs={0.5}>
          <Box ml={5}>
            <Switch />
          </Box>
        </FadeIn>
      </Flex>
    </HeaderContainer>
  )
}
