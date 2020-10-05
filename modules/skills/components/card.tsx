import React from "react"

import styled from "styled-components"

import { Flex, Box } from "components/box"
import { getColorByThemeMode } from "lib/getColorByThemeMode"

const CardContainer = styled(Flex).attrs({
  alignItems: "center",
  flexDirection: "column"
})`
  border-radius: 10px;

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

type CardProps = {
  imgUrl?: string
  imgAlt?: string
}

export const Card: React.FC<CardProps> = ({ imgUrl, imgAlt, children }) => (
  <CardContainer mx={4}>
    <CardIconContainer src={imgUrl} alt={imgAlt} />
    <CardBody p={5}>{children}</CardBody>
  </CardContainer>
)
