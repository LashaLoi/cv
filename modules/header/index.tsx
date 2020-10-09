import { memo } from "react"
import styled from "styled-components"

import { TargetLink } from "lib/components/link"
import { FadeIn } from "lib/components/fade/in"
import { Flex, Box } from "lib/components/box"
import { Switch } from "lib/components/switch"

import { isServer } from "lib/utils/isServer"

import { theme } from "theme"

import LinkedInIcon from "./icons/linkedin.svg"
import TwitterIcon from "./icons/twitter.svg"
import GithubIcon from "./icons/github.svg"
import Logo from "./icons/logo.svg"

const HeaderContainer = styled(Flex).attrs({
  justifyContent: "space-between",
  alignItems: "center",
  bg: "secondaryDark",
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

export const Header = memo(() => {
  const handleScrollTop = () => {
    if (isServer()) return

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <HeaderContainer height={theme.space[7]}>
      <FadeIn>
        <IconContainer onClick={handleScrollTop}>
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
})
