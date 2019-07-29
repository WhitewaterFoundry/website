import React from "react"
//@ts-ignore
import SEO from "../components/seo"
//@ts-ignore
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useStaticQuery, graphql } from "gatsby"
import WhatIsWSLHero from "../svg/what-is-wsl-hero"

const WhatIsWSL = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { base: { eq: "WhatIsWLSCopy.mdx" } }) {
        edges {
          node {
            childMdx {
              rawBody
              body
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Pengwin Enterprise" />
      <WhatIsWSLHero width={"100%"} height={""} />
      <MDXRenderer>{data.allFile.edges[0].node.childMdx.body}</MDXRenderer>
    </>
  )
}

export default WhatIsWSL
