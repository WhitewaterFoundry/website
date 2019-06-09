import { useStaticQuery, graphql } from "gatsby"

export const useWebsiteLogo = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { regex: "/website-logo.png/" }) {
        childImageSharp {
          fluid(quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return data.placeholderImage.childImageSharp.fluid
}
