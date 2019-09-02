import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>Welcome</h1>
    <h3>Ashley Norman</h3>
    <p>email: ashley.ansell@gmail.com</p>
    Read more about me <Link to="/about/">here &rarr;</Link>
  </Layout>
)
