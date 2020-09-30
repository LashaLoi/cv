import styled from "styled-components"

import { Grid as _Grid, Col } from "components/grid"
import { Flex, Box } from "components/box"
import { FadeIn } from "components/fade/in"
import { motion } from "framer-motion"

const MainPhoto = styled.img`
  border-radius: 50%;
  border: 5px solid ${props => props.theme.colors.font};

  height: 300px;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    height: 230px;
  }
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
  margin-top: ${props => props.theme.space[9]};

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    margin-top: ${props => props.theme.space[7]};
  }
`

const Name = styled(Box)`
  font-size: 40px;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    font-size: 30px;
  }
`

const Desc = styled(Box)`
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

const HomeFlex = styled(Flex)`
  flex-direction: row;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    flex-direction: column;
  }
`

const DataContainer = styled(Flex)`
  margin-left: ${props => props.theme.space[7]};

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    margin-left: ${props => props.theme.space[3]};
  }
`

export const Home = () => (
  <Grid>
    <Col cols={[4, 4, 12, 12]}>
      <FadeIn>
        <HomeContainer>
          <HomeFlex alignItems="center">
            <MainPhoto src="/assets/images/main-photo.jpg" alt="main-photo" />
            <DataContainer flexDirection="column" my={7}>
              <FadeIn delayMs={0.2}>
                <Name as="p">Aliaksei Loi</Name>
              </FadeIn>
              <FadeIn delayMs={0.3}>
                <Desc as="p" mt={4}>
                  Frontend Software Engineer
                </Desc>

                <Box mt={4}>
                  <Line animate={{ width: "100%" }} transition={{ delay: 0.6 }} />
                </Box>
              </FadeIn>
            </DataContainer>
          </HomeFlex>
        </HomeContainer>
      </FadeIn>
    </Col>
  </Grid>
)
