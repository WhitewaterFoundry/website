import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const useMicrosoftImage = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: { regex: "/English_get-it-from-MS_InvariantCulture_Default.png/" }
      ) {
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

const MicrosoftStoreLink: React.FC<{ href: string }> = ({ href }) => {
  return (
    <a href={href}>
      <Img fluid={useMicrosoftImage()} alt="English badge" />
    </a>
  )
}

export default MicrosoftStoreLink
