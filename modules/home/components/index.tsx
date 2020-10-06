import styled from "styled-components"
import { m as motion } from "framer-motion"

import { Grid as _Grid } from "components/grid"
import { Flex } from "components/box"
import { Text } from "components/text"

import { getColorByThemeMode } from "lib/getColorByThemeMode"

export const MainPhoto = styled.img`
  @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    height: 300px;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    height: 250px;
  }

  border-radius: 50%;

  border: 5px solid ${() => getColorByThemeMode("primary", true)};
`

export const HomeContainer = styled(Flex)`
  flex-direction: column;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    margin-left: ${props => props.theme.space[0]};
    align-items: center;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    margin-left: ${props => props.theme.space[9]};
  }
`

export const Grid = styled(_Grid)`
  @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    padding-top: ${props => props.theme.space[9]};
    padding-bottom: ${props => props.theme.space[9]};
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    padding-top: ${props => props.theme.space[7]};
    padding-bottom: ${props => props.theme.space[9]};
  }
`

export const Name = styled(Text)`
  font-size: 40px;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    font-size: 30px;
  }
`

export const Desc = styled(Text)`
  font-size: 30px;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    font-size: 20px;
  }
`

export const Line = styled(motion.div)`
  background-color: ${props => props.theme.colors.pink};

  height: 3px;

  width: 0;
`

export const MainFlex = styled(Flex)`
  flex-direction: row;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    flex-direction: column;
  }
`

export const NestedFlex = styled(Flex)`
  margin-left: ${props => props.theme.space[7]};

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    margin-left: ${props => props.theme.space[4]};
  }
`
