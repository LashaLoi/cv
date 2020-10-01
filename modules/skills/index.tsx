import styled from "styled-components"

import { Grid, Col } from "components/grid"
import { Box, Flex } from "components/box"
import { Text } from "components/text"
import { FadeIn } from "components/fade/in"

const Line = styled(Box)`
  width: 40%;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    width: 20%;
    margin-right: ${props => props.theme.space[7]};
    margin-left: ${props => props.theme.space[7]};
  }

  height: 3px;

  background: ${props => props.theme.colors.font};
`

const Title = styled(Text)`
  font-size: 30px;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    font-size: 20px;
  }
`

export const Skills = () => (
  <Grid mt={9}>
    <Col mt={7} cols={[4, 4, 12, 12]}>
      <FadeIn delayMs={0.5}>
        <Flex alignItems="center" justifyContent="space-between">
          <Line />
          <FadeIn delayMs={0.7}>
            <Title fontSize={30} bold>
              Skills
            </Title>
          </FadeIn>
          <Line />
        </Flex>
      </FadeIn>
    </Col>
  </Grid>
)
