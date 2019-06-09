import React, { useContext } from "react"
import Layout from "../components/layout"
//@ts-ignore
import SEO from "../components/seo"
import CTABanner from "../components/CTABanner/CTABanner"
import RunsIcons from "../components/RunsIcons/RunsIcons"
import InfoContainer from "../components/InfoContainer/InfoContainer"
import { MediaContext } from "../components/MediaContext"
import styled from "styled-components"

const UnderBanner: React.FC = ({ children }) => {
  const { media, portrait } = useContext(MediaContext)
  const mobile = media === "mobile" || media === "small"
  return (
    <div
      style={{
        display: "flex",
        flexDirection: mobile || portrait ? "column" : "row",
        justifyContent: "space-around",
        alignItems: mobile || portrait ? "center" : "",
      }}
    >
      {children}
    </div>
  )
}

const getFontSize = (fontSize: string | null) => {
  switch (fontSize) {
    case "mobile":
      return "1.1em"
    case "small":
      return "1.1em"
    case "medium":
      return "1.2em"
    case "large":
      return "1.3em"
    default:
      return "1.1em"
  }
}

const WrapContext: React.FC = ({ children }) => {
  const mediaContext = useContext<{ media: string | null; portrait: boolean }>(MediaContext)
  return (
    <PageWrapper media={mediaContext.media} getFontSize={getFontSize}>
      {children}
    </PageWrapper>
  )
}

const PageWrapper = styled.div<{ media: string | null; getFontSize: Function }>`
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  code {
    font-size: ${({ media, getFontSize }) => getFontSize(media)};
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <WrapContext>
        <CTABanner />
        <UnderBanner>
          <InfoContainer />
          <RunsIcons />
        </UnderBanner>
      </WrapContext>
    </Layout>
  )
}

export default IndexPage
