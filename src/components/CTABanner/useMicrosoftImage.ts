import { useStaticQuery, graphql } from "gatsby"

export const useMicrosoftImage = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: { regex: "/English_get-it-from-MS_InvariantCulture_Default.png/" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return data.placeholderImage.childImageSharp.fluid
}
