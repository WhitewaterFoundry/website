///<reference path="../../../typings/ImageQueryEdge.d.ts" />
import { useStaticQuery, graphql } from "gatsby"

const useEnterpriseLinuxImages = (): { id: string; fluid: Fluid }[] => {
  const data = useStaticQuery(graphql`
    {
      enterpriseLinuxImages: allFile(
        filter: { relativePath: { regex: "/^enterprise-linux-distros/" } }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return data.enterpriseLinuxImages.edges.map((edge: ImageQueryEdge) => {
    return { id: edge.node.id, fluid: edge.node.childImageSharp.fluid }
  })
}

export default useEnterpriseLinuxImages
