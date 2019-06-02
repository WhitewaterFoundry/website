import { useStaticQuery, graphql } from "gatsby"

export const useBannerImage = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { regex: "/Super-Art.png/" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 3840, maxHeight: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return data.placeholderImage.childImageSharp.fluid
}
