import { useStaticQuery, graphql } from "gatsby"

export const usePartnerImages = () => {
  const data = useStaticQuery(graphql`
    {
      microsoftPartner: file(relativePath: { regex: "/microsoft_partner.png/" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      redhatPartner: file(relativePath: { regex: "/redhat_partner.png/" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return {
    microsoftPartner: data.microsoftPartner.childImageSharp.fluid,
    redhatPartner: data.redhatPartner.childImageSharp.fluid,
  }
}
