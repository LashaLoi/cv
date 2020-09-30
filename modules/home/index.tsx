import styled from "styled-components"

import { Grid, Col } from "components/grid"
import { Flex, Box } from "components/box"
import { FadeIn } from "components/fade/in"

const MainPhoto = styled.img`
  @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    height: 300px;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    height: 250px;
  }

  border-radius: 50%;

  border: 5px solid ${props => props.theme.colors.font};
`

const HomeContainer = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    margin-left: ${props => props.theme.space[0]};
    align-items: center;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    margin-left: ${props => props.theme.space[9]};
  }
`

const Bar = styled(Box)`
  @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    margin-top: ${props => props.theme.space[9]};
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    margin-top: ${props => props.theme.space[7]};
  }
`

export const Home = () => (
  <Bar>
    <Grid>
      <Col cols={[4, 4, 12, 12]}>
        <FadeIn>
          <HomeContainer>
            <MainPhoto src="/assets/images/main-photo.jpg" alt="main-photo" />
          </HomeContainer>
        </FadeIn>
      </Col>
    </Grid>
  </Bar>
)
