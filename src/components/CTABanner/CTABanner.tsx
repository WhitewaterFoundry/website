import React, { useContext } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import MicrosoftStoreLink from "../Common/MicrosoftStoreLink"
import { MediaContext } from "../MediaContext"
import { useBannerImage } from "./useBannerImage"

const StoreLinkWrapper = styled.div<{ mobile: boolean }>`
  ${({ mobile }) =>
    mobile
      ? "margin: 2em; width: 14em;"
      : "position: relative; top: -15vh; left: 70vw; width: 200px;"}
`

const CTABanner: React.FC<{}> = () => {
  const imageFluid = useBannerImage()
  const { media } = useContext(MediaContext)
  const mobile = media === "mobile" || media === "small"

  return (
    <div
      style={{
        width: "100%",
        marginBottom: "16px",
        overflow: "hidden",
      }}
    >
      <div
        className="image-container"
        style={{
          width: "100%",
          maxHeight: "60vh",
          overflow: "hidden",
        }}
      >
        <Img
          fluid={mobile ? imageFluid.mobile : imageFluid.desktop}
          style={{ minHeight: "100%" }}
        />
      </div>
      <div
        style={mobile ? { display: "flex", justifyContent: "center", alignItems: "center" } : {}}
      >
        <StoreLinkWrapper mobile={mobile}>
          <MicrosoftStoreLink href="//www.microsoft.com/store/apps/9nv1gv1pxz6p?cid=storebadge&ocid=badge" />
        </StoreLinkWrapper>
      </div>
    </div>
  )
}

export default CTABanner
