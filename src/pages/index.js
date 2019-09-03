import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"

export default () => (
  <>
    <Hero />
    <Layout>
      <h1>Welcome</h1>
      <h3>Ashley Norman</h3>
      <p>email: ashley.ansell@gmail.com</p>
      Read more about me <Link to="/about/">here &rarr;</Link>
    </Layout>
  </>
)
