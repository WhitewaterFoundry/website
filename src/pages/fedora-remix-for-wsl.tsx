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
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#5E9FFB",
        }}
      >
        <FedoraRemixForWSLHero width={mediaSize === "normal" ? "100%" : "1400px"} height={""} />
      </div>
      <div
        style={{
          width: "100%",
          background:
            "linear-gradient(123.03deg, #B9D6FF -20.62%, #9AB2D5 -20.62%, #000000 144.87%)",

          paddingTop: "1.8em",
          paddingBottom: "1em",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: 0,
            fontWeight: "bolder",
            color: "#fff",
          }}
        >
          Where to get it
        </h2>
        <div
          style={{
            padding: "2em",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "320px", marginLeft: "auto", marginRight: "16px" }}>
            <MicrosoftStoreLink href="//www.microsoft.com/store/apps/9n6gdm4k2hnc?cid=storebadge&ocid=badge" />
          </div>
          <div style={{ width: "169.9px", marginRight: "auto", marginLeft: "16px" }}>
            <ChocolateyLink href="https://chocolatey.org/packages/wsl-fedoraremix" />
          </div>
        </div>
      </div>
      <CopyContainer>
        <MDXRenderer>{data.allFile.edges[0].node.childMdx.body}</MDXRenderer>
      </CopyContainer>
    </>
  )
}

export default FedoraRemixForWSL
