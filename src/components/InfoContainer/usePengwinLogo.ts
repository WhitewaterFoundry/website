import { useStaticQuery, graphql } from "gatsby"

export const usePengwinLogo = () => {
  const data = useStaticQuery(graphql`
    {
      pengwinLogo: file(relativePath: { regex: "/pengwin/taskbar-icon.png/" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return data.pengwinLogo.childImageSharp.fluid
}
