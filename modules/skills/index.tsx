import styled from "styled-components"

import { SwipeUp } from "components/swipe/up"
import { Grid, Col } from "components/grid"
import { Text } from "components/text"

import { Card } from "./components/card"
import { Items } from "./components/items"

import { cards } from "./data"

const Item = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: ${props => props.theme.space[3]};
`

export const Skills = () => (
  <Grid my={7} rowProps={{ alignItems: "flex-start" }} overflow="hidden">
    {cards.map(({ id, image, delay, items }) => (
      <Col mt={6} cols={[4, 4, 6, 4]} key={id}>
        <SwipeUp delayMs={delay}>
          <Card imgUrl={{ normal: image.normal, small: image.small }} imgAlt={image.alt}>
            <Items>
              {items.map(item => (
                <Item key={id + item}>- {item}</Item>
              ))}
            </Items>
          </Card>
        </SwipeUp>
      </Col>
    ))}
  </Grid>
)
