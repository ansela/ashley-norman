import React from "react"
import styled from "@emotion/styled"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  /* background-position: top 20% center; */
  background-size: cover;
  height: 100vh;

  /* override default margin for sibiling elements */
  + * {
    margin-top: 0;
  }
`

const TextBox = styled("div")`
  background-image: linear-gradient(to top #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 75%;
  /* justify-content: center; */
  align-items: center;
  padding: 5rem 2rem;
  width: 100%;
  color: white;
  text-align: center;

  h1 {
    /* text-shadow: 1px 1px 3px #eeddff66; */
    font-size: 5rem;
    color: #eee;
  }

  p,
  a {
    color: #eee;
    margin-top: 0.5rem;
  }

  a {
    margin-top: 0.5rem;
  }
`

const ArrowButton = styled.button`
  background-color: purple;
  color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin: 1em auto;
`

const Hero = ({ onClickArrow }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero2.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>UI/UX Developer</h1>
        <p>
          Designing beautiful and functional web applications.{" "}
          <Link to="/about/">Learn More</Link>
        </p>
      </TextBox>
      <ArrowButton onClick={onClickArrow}>&darr;</ArrowButton>
    </ImageBackground>
  )
}

export default Hero
