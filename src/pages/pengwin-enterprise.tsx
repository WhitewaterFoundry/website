import React, { useContext, Children } from "react"
import styled from "styled-components"
// @ts-ignore
import SEO from "../components/seo"
import EnterpriseCTAHero from "../components/PengwinEnterprise/EnterpriseCTAHero"
import EnterpriseFeature from "../components/PengwinEnterprise/EnterpriseFeature"
import LinuxSoftwareIllistration from "../components/PengwinEnterprise/LinuxSoftwareIllistration"
import { MediaContext } from "../components/MediaContext"
import WindowsPengwinlinuxIllistration from "../components/PengwinEnterprise/WindowsPengwinLinuxIllistration"
import WindowsAutomationIllistration from "../components/PengwinEnterprise/WindowsAutomationIllistration"
import EnterpriseLinuxDistros from "../components/PengwinEnterprise/EnterpriseLinuxDistros"

const FeatureTextWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.2fr 0.8fr;
  height: 100%;
`

const EnterpriseFeaturChild: React.FC<{ heading: string }> = ({ heading, children }) => {
  return (
    <FeatureTextWrapper>
      <h1>{heading}</h1>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderTop: "2px solid #555555",
        }}
      >
        {children}
      </div>
    </FeatureTextWrapper>
  )
}

const PengwinEnterprise = () => {
  const { media } = useContext(MediaContext)
  const mobile = media === "mobile"

  return (
    <>
      <SEO title="Pengwin Enterprise" />
      <EnterpriseCTAHero />
      <h3 style={{ marginTop: "3em", marginBottom: "2em", textAlign: "center", color: "#929292" }}>
        Compatible Linux Distros
      </h3>
      <EnterpriseLinuxDistros
        maxImageWidth={"200px"}
        mobile={media === "mobile" || media === "small"}
      />
      <EnterpriseFeature
        position="left"
        renderIllistration={() => <LinuxSoftwareIllistration width={mobile ? "300px" : "450px"} />}
      >
        <EnterpriseFeaturChild heading={"Test"}>
          <h1>Unlock powerful Linux software on Windows 10 and Windows 10 Server</h1>
        </EnterpriseFeaturChild>
      </EnterpriseFeature>
      <EnterpriseFeature
        style={{ marginTop: "1em" }}
        position="right"
        renderIllistration={() => (
          <WindowsPengwinlinuxIllistration width={mobile ? "300px" : "400px"} />
        )}
      >
        <h1>Securely connect to and administer Linux/BSD servers from Windows 10 devices</h1>
      </EnterpriseFeature>
      <EnterpriseFeature
        position="left"
        renderIllistration={() => (
          <WindowsAutomationIllistration width={mobile ? "300px" : "450px"} />
        )}
      >
        <h1>Automate routine Windows and Linux tasks weaving tools from both platforms together</h1>
      </EnterpriseFeature>
      <br />
      <EnterpriseFeature
        position="right"
        renderIllistration={() => <EnterpriseLinuxDistros maxImageWidth={"250px"} mobile={true} />}
      >
        <h1>
          Leverage your organization’s existing enterprise Linux subscriptions and infrastructure
        </h1>
      </EnterpriseFeature>
    </>
  )
}

export default PengwinEnterprise
