import React, { useContext } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { MediaContext } from "../MediaContext"
import { usePartnerImages } from "./usePartnerImages"

const PartnerImagesWrapper = styled.div<{ mobile: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${({ mobile }) => (mobile ? "60vw" : "44vw")};
  min-width: 320px;
  margin-bottom: 1em;
  a {
    text-decoration: none;
    font-weight: 900;
    font-size: 1.5em;
    margin-top: 16px;
  }
`

const PartnerImages: React.FC = () => {
  const partnerImages = usePartnerImages()
  const { media } = useContext(MediaContext)
  const mobile = media === "mobile" || media === "small"

  return (
    <>
      <div style={{ marginBottom: "2em" }}>
        <PartnerImagesWrapper mobile={mobile}>
          <div style={{ width: "128px", marginRight: "8px" }}>
            <Img fluid={partnerImages.redhatPartner} />
          </div>

          <div style={{ width: "164px" }}>
            <img srcSet={partnerImages.microsoftPartner.srcSet} />
          </div>
        </PartnerImagesWrapper>
      </div>
    </>
  )
}

export default PartnerImages
