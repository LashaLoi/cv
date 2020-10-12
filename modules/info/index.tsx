import styled from "styled-components"

import Grid, { Col } from "lib/components/grid"
import { Box, Flex } from "lib/components/box"

import { getColorByThemeMode } from "lib/utils/getColorByThemeMode"

const BG = styled(Box)`
  position: absolute;

  margin-right: -100px;
  margin-left: -100px;

  width: 200%;
  height: 600px;

  background: ${() => getColorByThemeMode("secondary")};
  transform: rotate(-5deg);
`

const InfoContainer = styled(Box)`
  position: relative;

  height: 800px;

  color: ${() => getColorByThemeMode("font")};
`

const InfoContext = styled(Flex)`
  font-size: 30px;
`

export const Info = () => (
  <InfoContainer mt={9}>
    <BG />
    <Grid>
      <Col push={[1, 1, 4, 4]} cols={[2, 2, 4, 4]}>
        <Box mt={7}>
          <InfoContext mt={9} ml={4} position="absolute">
            Info
          </InfoContext>
        </Box>
      </Col>
    </Grid>
  </InfoContainer>
)
