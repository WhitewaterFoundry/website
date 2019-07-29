import React, { useContext } from "react"
import styled from "styled-components"
import { MediaContext } from "../MediaContext"

const PengwinCTA = styled.div<{ fontSize: string }>`
  width: 100%;
  font-family: Ubuntu;
  height: 90vh;
  font-size: ${({ fontSize }) => fontSize};
`
const BGContainer = styled.div`
  position: absolute;
  top: 70px;
  width: 100%;
  height: 95vh;
  z-index: -2;
  background-color: #212121;
`
const BGLogoContainer = styled.div`
  width: 100%;
  height: 120%;
  overflow: hidden;
  position: relative;
  top: -20%;
  z-index: -1;
  opacity: 0.05;
`

const CTALayout = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
`

interface EnterpriseCTAHeroProps {
  renderButton: Function
  renderText: Function
  renderLogo: Function
  renderHero: Function
}

const CTAHero: React.FC<EnterpriseCTAHeroProps> = ({
  renderButton,
  renderText,
  renderLogo,
  renderHero,
}) => {
  const { media } = useContext(MediaContext)
  const mobile = media === "mobile" || media === "small" || media === "medium"

  return (
    <PengwinCTA fontSize={mobile ? "1.6em" : "2.1em"} style={{ minWidth: mobile ? "" : "1100px" }}>
      <BGContainer style={{ minHeight: mobile ? "" : "600px" }}>
        <BGLogoContainer>{renderHero()}</BGLogoContainer>
      </BGContainer>
      <CTALayout direction={mobile ? "column" : "row"}>
        <div style={{ paddingTop: "5%", width: "100%" }}>{renderLogo()}</div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1
              style={{
                color: "#9A54BB",
                paddingTop: mobile ? "0" : "3em",
                transform: mobile ? "" : "translateX(-5%)",
                marginLeft: "0.7em",
              }}
            >
              {renderText()}
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: mobile ? "0.5em" : "3em",
            }}
          >
            {renderButton()}
          </div>
        </div>
      </CTALayout>
    </PengwinCTA>
  )
}

export default CTAHero
