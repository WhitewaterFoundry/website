import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const useChocolateyImage = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { regex: "/chocolatey.png/" }) {
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

const ChocolateyLink: React.FC<{ href: string }> = ({ href }) => {
  return (
    <a href={href}>
      <Img fluid={useChocolateyImage()} alt="English badge" />
    </a>
  )
}

export default ChocolateyLink
