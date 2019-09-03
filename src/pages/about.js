import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <h1>About Me</h1>
    <p>
      I am a software developer that specializes in frontend development and UX
      design.
    </p>
    <Link to="/">&larr; Go Home</Link>
  </Layout>
)

export default AboutPage
