import { useStaticQuery, graphql } from "gatsby"

export const useBannerImage = () => {
  const data = useStaticQuery(graphql`
    {
      mobile: file(relativePath: { regex: "/box-art_cropped.jpg/" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktop: file(relativePath: { regex: "/Super-Art.png/" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth: 3840, maxHeight: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return { mobile: data.mobile.childImageSharp.fluid, desktop: data.desktop.childImageSharp.fluid }
}
