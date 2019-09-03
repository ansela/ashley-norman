import React, { useRef } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"

export default () => {
  const layoutRef = useRef()

  const viewContent = () => {
    if (layoutRef && layoutRef.current)
      layoutRef.current.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <>
      <Hero onClickArrow={viewContent} />
      <Layout ref={layoutRef}>
        <h1>Welcome</h1>
        <h3>Ashley Norman</h3>
        <p style={{ height: 1000 }}>email: ashley.ansell@gmail.com</p>
        Read more about me <Link to="/about/">here &rarr;</Link>
      </Layout>
    </>
  )
}
