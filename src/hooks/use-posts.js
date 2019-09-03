import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          excerpt
          frontmatter {
            title
            slug
            author
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(
    ({ frontmatter: { title, author, slug }, excerpt }) => ({
      title,
      author,
      slug,
      excerpt,
    })
  )
}

export default usePosts
