import React, { useContext } from "react"
import styled from "styled-components"
import { MediaContext } from "../MediaContext"

const PengwinCTA = styled.div<{ fontSize: string }>`
  width: 100%;
  font-family: Ubuntu;
  min-height: 95vh;
  font-size: ${({ fontSize }) => fontSize};
`
const BGContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 115%;
  z-index: -2;
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

const CTALayout = styled.div<{ direction: "row" | "column" }>`
  display: grid;
  ${({ direction }) =>
    direction === "row" ? "grid-template-columns: 1fr 1fr;" : "grid-template-columns : auto;"}
`

interface EnterpriseCTAHeroProps {
  renderButton: Function
  renderText: Function
  renderLogo: Function
  renderHero: Function
  backgroundColor: string
}

const CTAHero: React.FC<EnterpriseCTAHeroProps> = ({
  renderButton,
  renderText,
  renderLogo,
  renderHero,
  backgroundColor,
}) => {
  const { media } = useContext(MediaContext)
  const mobile = media === "mobile" || media === "small" || media === "medium"

  return (
    <PengwinCTA fontSize={mobile ? "1.6em" : "2.1em"} style={{ overflow: "hidden" }}>
      <BGContainer style={{ minHeight: mobile ? "600px" : "", backgroundColor: backgroundColor }}>
        <BGLogoContainer>{renderHero()}</BGLogoContainer>
      </BGContainer>
      <CTALayout direction={mobile ? "column" : "row"}>
        <div style={{ paddingTop: "5%", width: "100%" }}>{renderLogo()}</div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1
              style={{
                color: "#9A54BB",
                paddingTop: mobile ? "0" : "2.8em",
                maxWidth: mobile ? "480px" : "1200px",
                transform: mobile ? "" : "translateX(-5%)",
              }}
            >
              {renderText()}
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: mobile ? "center" : "flex-start",
              paddingTop: mobile ? "0.5em" : "8%",
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
