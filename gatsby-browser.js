import React, { useContext } from "react"
import Layout from "./src/components/layout"
import { MediaContext } from "./src/components/MediaContext"
import styled from "styled-components"

const PageWrapper = styled.div`
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

const getFontSize = fontSize => {
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

const WrapContext = ({ children }) => {
  const mediaContext = useContext(MediaContext)
  return (
    <PageWrapper media={mediaContext.media} getFontSize={getFontSize}>
      {children}
    </PageWrapper>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      <WrapContext>{element}</WrapContext>
    </Layout>
  )
}
