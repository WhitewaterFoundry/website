import React, { useContext } from "react"
import styled from "styled-components"
import PengwinWebsiteLogo from "../../svg/pengwin-website-logo"
import LiveTileIcon from "../../svg/live-tile-icon"
import { MediaContext } from "../MediaContext"

const PengwinEnterpriseCTA = styled.div<{ fontSize: string }>`
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

const EnterpriseCTAButton = styled.button<{ fontSize: string }>`
  background: linear-gradient(256.8deg, #9755b7 -8.63%, #5c2d72 105.85%);
  border-radius: 2px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: none;
  min-width: 300px;
  height: 82px;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ fontSize }) => fontSize};
  line-height: 41px;
  display: flex;
  color: #fefbff;
`

const EnterpriseCTALayout = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
`
const EnterpriseCTAHero: React.FC = () => {
  const { media } = useContext(MediaContext)
  const mobile = media === "mobile" || media === "small"

  return (
    <PengwinEnterpriseCTA fontSize={mobile ? "1.6em" : "2.2em"}>
      <BGContainer>
        <BGLogoContainer>
          <LiveTileIcon width="130%" height="130%" />
        </BGLogoContainer>
      </BGContainer>
      <EnterpriseCTALayout direction={mobile ? "column" : "row"}>
        <div style={{ paddingTop: "5%" }}>
          <PengwinWebsiteLogo width={mobile ? "300" : "50vw"} height="100%" />
        </div>
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
              Unleash your organization’s developers and IT staff
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: mobile ? "0.5em" : "3em",
            }}
          >
            <EnterpriseCTAButton fontSize=".9em">Request a Quote</EnterpriseCTAButton>
          </div>
        </div>
      </EnterpriseCTALayout>
    </PengwinEnterpriseCTA>
  )
}

export default EnterpriseCTAHero
