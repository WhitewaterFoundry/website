import React, { useState } from "react"
//@ts-ignore
import SEO from "../components/seo"
import FedoraRemixForWSLHero from "../svg/fedora-remix-for-wsl"
import CopyContainer from "../components/Common/CopyContainer"
//@ts-ignore
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQueries } from "../hooks/useMediaQueries"
import MicrosoftStoreLink from "../components/Common/MicrosoftStoreLink"
import ChocolateyLink from "../components/Common/ChocolateyLink"
import styled from "styled-components"

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FedoraRemixForWSL = () => {
  const [mediaSize, setMediaSize] = useState("normal")
  useMediaQueries(
    [["normal", "(max-width: 1400px)"], ["oversize", "(min-width: 900px)"]],
    setMediaSize
  )
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { base: { eq: "FedoraRemixForWSLCopy.mdx" } }) {
        edges {
          node {
            childMdx {
              body
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Fedora Remix for WSL" />
      <div
        style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <FedoraRemixForWSLHero width={mediaSize === "normal" ? "100%" : "1400px"} height={""} />
      </div>
      <div
        style={{
          padding: "2em",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "320px", margin: "auto" }}>
          <MicrosoftStoreLink href="//www.microsoft.com/store/apps/9n6gdm4k2hnc?cid=storebadge&ocid=badge" />
        </div>
        <div style={{ width: "256px", margin: "auto" }}>
          <ChocolateyLink href="https://chocolatey.org/packages/wsl-fedoraremix" />
        </div>
      </div>
      <CopyContainer>
        <MDXRenderer>{data.allFile.edges[0].node.childMdx.body}</MDXRenderer>
      </CopyContainer>
    </>
  )
}

export default FedoraRemixForWSL
