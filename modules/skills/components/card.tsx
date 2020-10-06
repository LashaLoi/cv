import React from "react"
import styled from "styled-components"
import ProgressiveImage from "react-progressive-image"

import { Flex, Box } from "components/box"

import { getColorByThemeMode } from "lib/getColorByThemeMode"

const CardContainer = styled(Flex).attrs({
  alignItems: "center",
  flexDirection: "column"
})`
  border-radius: 10px 10px 0 0;

  background-color: ${() => getColorByThemeMode("secondary")};
`

const CardIconContainer = styled.img`
  margin-top: ${props => props.theme.space[6]};
  margin-bottom: ${props => props.theme.space[5]};

  height: 80px;
`

const CardBody = styled(Box)`
  width: 100%;
  color: ${props => props.theme.colors.white};
`

const Line = styled(Box)`
  background-color: ${props => props.theme.colors.pink};
  height: ${props => props.theme.space[1]};

  width: 100%;
`

type CardProps = {
  imgUrl: {
    normal: string
    small: string
  }
  imgAlt?: string
}

export const Card: React.FC<CardProps> = ({ imgUrl, imgAlt, children }) => (
  <CardContainer mx={4}>
    <ProgressiveImage src={imgUrl.normal} placeholder={imgUrl.small}>
      {(src: string) => <CardIconContainer src={src} alt={imgAlt} />}
    </ProgressiveImage>
    <CardBody p={5}>{children}</CardBody>
    <Line />
  </CardContainer>
)
