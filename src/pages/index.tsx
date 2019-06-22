import React, { useContext } from "react"
//@ts-ignore
import SEO from "../components/seo"
import CTABanner from "../components/CTABanner/CTABanner"
import RunsIcons from "../components/RunsIcons/RunsIcons"
import InfoContainer from "../components/InfoContainer/InfoContainer"
import { MediaContext } from "../components/MediaContext"

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

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <CTABanner />
      <UnderBanner>
        <InfoContainer />
        <RunsIcons />
      </UnderBanner>
    </>
  )
}

export default IndexPage
