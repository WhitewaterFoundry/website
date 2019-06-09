import React, { useContext } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { usePengwinLogo } from "./usePengwinLogo"
import { MediaContext } from "../MediaContext"

const InfoItemWrapper = styled.div<{ mobile: boolean }>`
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

const InfoContainer: React.FC = () => {
  const pengwinLogo = usePengwinLogo()
  const { media, portrait } = useContext(MediaContext)
  const mobile = media === "mobile" || media === "small" || portrait

  return (
    <div style={{ marginBottom: "2em" }}>
      <InfoItemWrapper style={{ marginBottom: "1em" }} mobile={mobile}>
        <div style={{ width: "22em" }}>
          <Img fluid={pengwinLogo} />
        </div>
        <h3 style={{ margin: "0" }}>
          Pengwin is the easiest to use Linux distribution on Windows Subsystem for Linux (WSL)
        </h3>
      </InfoItemWrapper>
      <InfoItemWrapper mobile={mobile}>
        <Link to="/what-is-wsl">What is WSL?</Link>
      </InfoItemWrapper>
    </div>
  )
}

export default InfoContainer
