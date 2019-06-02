import React, { useContext } from "react"
import Img from "gatsby-image"
import MicrosoftStoreLink from "./MicrosoftStoreLink"
import { MediaContext } from "../MediaContext"
import { useBannerImage } from "./useBannerImage"

const CTABanner: React.FC<{}> = () => {
  const mediaContext = useContext<{ media: string | null }>(MediaContext)
  const imageFluid = useBannerImage()
  return (
    <div style={{ width: "100%" }}>
      <div
        className="image-container"
        style={{ width: "100%", maxHeight: "60vh", overflow: "hidden" }}
      >
        <Img fluid={imageFluid} style={{ zIndex: "-2" }} />
      </div>
      <div style={{ position: "relative", top: "-15vh", left: "70vw", width: "200px" }}>
        <MicrosoftStoreLink />
      </div>
    </div>
  )
}

export default CTABanner
