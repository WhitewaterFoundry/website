import { useStaticQuery, graphql } from "gatsby"

export const useRunsIcons = () => {
  const data = useStaticQuery(graphql`
    query bannerImageQuery {
      allFile(filter: { dir: { regex: "/runs-icons/" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                srcSet
              }
            }
          }
        }
      }
    }
  `)
  return data.allFile.edges.map(
    (edge: { node: { id: string; childImageSharp: { fluid: { srcSet: string } } } }) => {
      return {
        id: edge.node.id,
        srcSet: edge.node.childImageSharp.fluid.srcSet,
      }
    }
  )
}
