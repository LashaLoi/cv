import { Layout } from "lib/components/layout"

import { Home } from "modules/home"
import { Skills } from "modules/skills"

export const Root = () => (
  <Layout>
    <Home />
    <Skills />
  </Layout>
)
