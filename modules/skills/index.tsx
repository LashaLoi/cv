import styled from "styled-components"
import { m as motion } from "framer-motion"

import { Grid, Col } from "components/grid"

import { Card } from "./components/card"
import { Items } from "./components/items"

import { Text } from "components/text"

import reactUrl from "./images/react.png"
import vueUrl from "./images/vue.png"
import jsUrl from "./images/js.png"

const Item = styled(Text)`
  font-size: 20px;
  margin-bottom: ${props => props.theme.space[3]};
`

export const Skills = () => (
  <Grid mt={7} rowProps={{ alignItems: "flex-start" }}>
    <Col mt={6} cols={[4, 4, 6, 4]}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: 100
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3
            }
          }
        }}
      >
        <Card imgUrl={reactUrl} imgAlt="react">
          <Items>
            <Item>- v16.13.1</Item>
            <Item>- Fiber</Item>
            <Item>- Reconciler</Item>
            <Item>- Suspense, Context, Hooks</Item>
            <Item>- Concurrent mode</Item>
            <Item>- Redux</Item>
            <Item>- Thunk, Sagas, Symbiote, Actions</Item>
            <Item>- Mobx</Item>
            <Item>- Styled-components</Item>
            <Item>- Recoil</Item>
            <Item>- Emotion</Item>
            <Item>- Next.js</Item>
            <Item>- SSR</Item>
            <Item>- Enzyme</Item>
            <Item>- react/testing-library</Item>
            <Item>- Apollo</Item>
          </Items>
        </Card>
      </motion.div>
    </Col>
    <Col mt={6} cols={[4, 4, 6, 4]}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: 100
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5
            }
          }
        }}
      >
        <Card imgUrl={vueUrl} imgAlt="vue">
          <Items>
            <Item>- v2</Item>
            <Item>- Vuex</Item>
            <Item>- Vue-Router</Item>
            <Item>- Vue-Apollo</Item>
            <Item>- Reactivity</Item>
            <Item>- Vuetify</Item>
          </Items>
        </Card>
      </motion.div>
    </Col>
    <Col mt={6} cols={[4, 4, 6, 4]}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: 100
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.7
            }
          }
        }}
      >
        <Card imgUrl={jsUrl} imgAlt="js">
          <Items>
            <Item>- ES6-11</Item>
            <Item>- Jest</Item>
            <Item>- Cypress</Item>
            <Item>- gRPC</Item>
            <Item>- Effector</Item>
            <Item>- Storybook</Item>
            <Item>- Webpack</Item>
            <Item>- Babel</Item>
            <Item>- Prettier</Item>
            <Item>- Eslint</Item>
            <Item>- GraphQL</Item>
            <Item>- Docker</Item>
            <Item>- Node</Item>
            <Item>- Nest</Item>
            <Item>- Express</Item>
            <Item>- Koa</Item>
          </Items>
        </Card>
      </motion.div>
    </Col>
  </Grid>
)
