import React from "react"
import styled from "styled-components"

import { Box, Flex, BoxProps, FlexContainerProps, FlexItemProps } from "lib/components/box"

import { theme } from "theme"

type GridProps = {
  rowProps?: {}
  children: React.ReactNode
  noGutter?: boolean
} & BoxProps &
  FlexContainerProps

type ColProps = {
  cols?: Array<number>
  push?: Array<number>
  noGutter?: boolean
} & BoxProps &
  FlexItemProps

const prioritizedPadding = ({ p, px, pr, pl, paddingRight, paddingLeft }: ColProps) => {
  const left = pl || paddingLeft || px || p
  const right = pr || paddingRight || px || p
  const paddingLeftResponsive = Array.isArray(left) ? left : [left]
  const paddingRightResponsive = Array.isArray(right) ? right : [right]

  return `
    ${prioritizedPaddingCss("padding-left", paddingLeftResponsive[0], theme.space[5])}
    ${prioritizedPaddingCss("padding-right", paddingRightResponsive[0], theme.space[5])}

    @media screen and (min-width: ${theme.breakpoints.sm}px) {
      ${prioritizedPaddingCss("padding-left", paddingLeftResponsive[1], theme.space[6])}
      ${prioritizedPaddingCss("padding-right", paddingRightResponsive[1], theme.space[6])}
    }

    @media screen and (min-width: ${theme.breakpoints.md}px) {
      ${prioritizedPaddingCss("padding-left", paddingLeftResponsive[2], theme.space[7])}
      ${prioritizedPaddingCss("padding-right", paddingRightResponsive[2], theme.space[7])}
    }

    @media screen and (min-width: ${theme.breakpoints.lg}px) {
      ${prioritizedPaddingCss("padding-left", paddingLeftResponsive[3], theme.space[8])}
      ${prioritizedPaddingCss("padding-right", paddingRightResponsive[3], theme.space[8])}
  `
}

const prioritizedPaddingCss = (direction: "padding-left" | "padding-right", setSpaceIndex: any, defaultSpace: string) =>
  setSpaceIndex != undefined && !isNaN(parseInt(setSpaceIndex))
    ? `${direction}: ${theme.space[setSpaceIndex]};`
    : `${direction}: ${defaultSpace};`

// Default padding is <Col px={['0.75rem', '0.75rem', '1.125rem', '1.125rem']} />
export const Col = styled(Box)<ColProps>`
  box-sizing: border-box;
  width: ${props => (props.cols![0] / 4) * 100}%;

  padding-left: calc(${props => props.theme.space[5]} / 2);
  padding-right: calc(${props => props.theme.space[5]} / 2);

  @media screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
    padding-left: calc(${props => props.theme.space[5]} / 2);
    padding-right: calc(${props => props.theme.space[5]} / 2);
    width: ${props => (props.cols![1] / 4) * 100}%;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    padding-left: calc(${props => props.theme.space[6]} / 2);
    padding-right: calc(${props => props.theme.space[6]} / 2);
    width: ${props => (props.cols![2] / 12) * 100}%;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
    padding-left: calc(${props => props.theme.space[6]} / 2);
    padding-right: calc(${props => props.theme.space[6]} / 2);
    width: ${props => (props.cols![3] / 12) * 100}%;
  }

  ${({ push, theme }) =>
    push &&
    `
    margin-left: ${(push![0] / 4) * 100}%;

    @media screen and (min-width: ${theme.breakpoints.sm}px) {
      margin-left: ${(push![1] / 4) * 100}%;
    }

    @media screen and (min-width: ${theme.breakpoints.md}px) {
      margin-left: ${(push![2] / 12) * 100}%;
    }

    @media screen and (min-width: ${theme.breakpoints.lg}px) {
      margin-left: ${(push![3] / 12) * 100}%;
    }
  `}

  ${({ noGutter }) =>
    noGutter &&
    `
    padding-left: 0 !important;
    padding-right: 0 !important;
  `}
`

Col.defaultProps = {
  cols: [1, 1, 1, 1]
}

export const Row = styled(Flex)`
  flex-wrap: wrap;
  margin-left: calc(-${props => props.theme.space[5]} / 2);
  margin-right: calc(-${props => props.theme.space[5]} / 2);

  @media screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
    margin-left: calc(-${props => props.theme.space[5]} / 2);
    margin-right: calc(-${props => props.theme.space[5]} / 2);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    margin-left: calc(-${props => props.theme.space[6]} / 2);
    margin-right: calc(-${props => props.theme.space[6]} / 2);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
    margin-left: calc(-${props => props.theme.space[6]} / 2);
    margin-right: calc(-${props => props.theme.space[6]} / 2);
  }
`

Row.defaultProps = {
  alignItems: "center"
}

export const RowNoGutter = styled(Row)`
  margin-left: 0 !important;
  margin-right: 0 !important;

  ${Col} {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`

// All Grids are effectively
// <Container><Row>{child</Row></Container>
// Default spacing is <Container px={[5, 6, 7, 8]} />
export const Container = styled(Box)`
  max-width: 1440px; /* This is the same as lg breakpoint + left/right padding */
  margin-left: auto;
  margin-right: auto;
  background-clip: content-box;

  ${props => prioritizedPadding(props)}
`

export const Grid: React.FC<GridProps> = ({ rowProps, noGutter, children, alignItems, ...gridProps }) => {
  const row = noGutter ? (
    <RowNoGutter alignItems={alignItems} {...rowProps}>
      {children}
    </RowNoGutter>
  ) : (
    <Row alignItems={alignItems} {...rowProps}>
      {children}
    </Row>
  )
  return <Container {...gridProps}>{row}</Container>
}

export default Grid
