import React, { useContext } from "react"
import { MediaContext } from "../MediaContext"
import styled from "styled-components"

const PageWrapper = styled.div<{ media: string; getFontSize: Function }>`
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

const getFontSize = (media: string) => {
  switch (media) {
    case "mobile":
      console.log("mobile: 1.1")
      return "1.1em"
    case "small":
      console.log("small: 1.1")
      return "1.1em"
    case "medium":
      console.log("med: 1.3")
      return "1.2em"
    case "large":
      console.log("large: 1.5")
      return "1.3em"
    default:
      console.log("default: 1.1")
      return "1.1em"
  }
}

const MediaWrapper: React.FC = ({ children }) => {
  const mediaContext = useContext(MediaContext)
  return (
    <PageWrapper media={mediaContext.media || "none"} getFontSize={getFontSize}>
      {children}
    </PageWrapper>
  )
}

export default MediaWrapper
