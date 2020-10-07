import { Parallax, Background } from "react-parallax"
import ProgressiveImage from "react-progressive-image"

import { FadeIn } from "lib/components/fade/in"
import { Col } from "lib/components/grid"
import { Box } from "lib/components/box"

import { Grid, HomeContainer, MainFlex, MainPhoto, Name, Desc, NestedFlex, Line } from "./components"

export const Home = () => (
  <Parallax strength={300}>
    <Background>
      <ProgressiveImage src="/assets/images/main-bg-dark.jpg" placeholder="/assets/images/main-bg-dark-min.jpg">
        {(src: string) => <img src={src} alt="header bg" />}
      </ProgressiveImage>
    </Background>
    <Grid>
      <Col cols={[4, 4, 12, 12]}>
        <FadeIn>
          <HomeContainer>
            <MainFlex alignItems="center">
              <ProgressiveImage src="/assets/images/main-photo.jpg" placeholder="/assets/images/main-photo-min.jpg">
                {(src: string) => <MainPhoto src={src} alt="main-photo" />}
              </ProgressiveImage>
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
  </Parallax>
)
