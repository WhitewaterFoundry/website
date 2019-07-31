import React, { useContext } from "react"
//@ts-ignore
import SEO from "../components/seo"
import { Link } from "gatsby"
import PengwinWebsiteLogo from "../svg/pengwin-website-logo"
import RunsIcons from "../components/RunsIcons/RunsIcons"
import PartnerImages from "../components/InfoContainer/PartnerImages"
import { MediaContext } from "../components/MediaContext"
import CTAHero from "../components/CTAHero/CTAHero"
import MicrosoftStoreLink from "../components/Common/MicrosoftStoreLink"
import LiveTileIcon from "../svg/live-tile-icon"

const UnderBanner: React.FC = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  )
}

const IndexPage = () => {
  const { media } = useContext(MediaContext)
  const mobile = media === "mobile" || media === "small" || media === "medium"

  return (
    <>
      <SEO title="Home" />
      <CTAHero
        renderButton={() => (
          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <div style={{ width: "256px", height: "110px", marginBottom: ".7em" }}>
              <MicrosoftStoreLink href="//www.microsoft.com/store/apps/9nv1gv1pxz6p?cid=storebadge&ocid=badge" />
            </div>
            <Link
              to="/what-is-wsl"
              style={{
                backgroundColor: "#111",
                padding: "8px",
                borderRadius: "2px",
                color: "#fdfcff",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              What is WSL?
            </Link>
          </div>
        )}
        renderText={() => "Linux Optimized for WSL"}
        renderLogo={() => <PengwinWebsiteLogo width={mobile ? "300" : "100%"} height="85%" />}
        renderHero={() => <LiveTileIcon width="130%" height="130%" />}
        backgroundColor="#9a54bba8"
      />
      <UnderBanner>
        <div
          style={{
            width: "100%",
            background: "linear-gradient(97.83deg, #B926EC -2.05%, #8A00CB 100%)",
            paddingTop: "2.5em",
            paddingBottom: "2.5em",
            paddingLeft: "3em",
            paddingRight: "3em",
            margin: "0",
            marginBottom: "1em",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "1.4em",
          }}
        >
          <h2 style={{ margin: 0 }}>
            Pengwin is the easiest to use Linux distribution on Windows Subsystem for Linux (WSL)
          </h2>
        </div>

        <RunsIcons />
        <hr
          style={{
            border: "none",
            background: "linear-gradient(256.8deg, #9755b7 -8.63%, #5c2d72 105.85%)",
            height: "3px",
            borderRadius: "1.5px",
            width: "60vw",
            opacity: 0.7,
            marginBottom: "3em",
          }}
        />
        <PartnerImages />
      </UnderBanner>
    </>
  )
}

export default IndexPage
