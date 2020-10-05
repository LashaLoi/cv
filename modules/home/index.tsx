import { Parallax } from "react-parallax"

import { Col } from "components/grid"
import { Box } from "components/box"
import { FadeIn } from "components/fade/in"

import { useThemeModeContext } from "theme/context"

import { Grid, HomeContainer, MainFlex, MainPhoto, Name, Desc, NestedFlex, Line } from "./components"

export const Home = () => {
  const { darkMode } = useThemeModeContext()

  return (
    <Parallax bgImage={`/assets/images/main-bg${darkMode ? "-dark" : ""}.jpg`} bgImageAlt="header bg" strength={300}>
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
    </Parallax>
  )
}
