import styled from "styled-components"

import { Grid as _Grid, Col } from "components/grid"
import { Flex, Box } from "components/box"
import { FadeIn } from "components/fade/in"
import { motion } from "framer-motion"
import { Text } from "components/text"

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

const Grid = styled(_Grid)`
  @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    margin-top: ${props => props.theme.space[9]};
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    margin-top: ${props => props.theme.space[7]};
  }
`

const Name = styled(Text)`
  font-size: 40px;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    font-size: 30px;
  }
`

const Desc = styled(Text)`
  font-size: 30px;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    font-size: 20px;
  }
`

const Line = styled(motion.div)`
  background-color: ${props => props.theme.colors.pink};

  height: 3px;

  width: 0;
`

const MainFlex = styled(Flex)`
  flex-direction: row;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    flex-direction: column;
  }
`

const NestedFlex = styled(Flex)`
  margin-left: ${props => props.theme.space[7]};

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    margin-left: ${props => props.theme.space[4]};
  }
`

export const Home = () => (
  <Grid>
    <Col cols={[4, 4, 12, 12]}>
      <FadeIn>
        <HomeContainer>
          <MainFlex alignItems="center">
            <MainPhoto src="/assets/images/main-photo.jpg" alt="main-photo" />
            <NestedFlex ml={7} flexDirection="column" my={7}>
              <FadeIn delayMs={0.2}>
                <Name bold>Aliaksei Loi</Name>
              </FadeIn>
              <FadeIn delayMs={0.3}>
                <Desc mt={4} width="110%">
                  Frontend Software Engineer
                </Desc>
              </FadeIn>
              <Box mt={4}>
                <Line animate={{ width: "90%" }} transition={{ delay: 0.6 }} />
              </Box>
            </NestedFlex>
          </MainFlex>
        </HomeContainer>
      </FadeIn>
    </Col>
  </Grid>
)
