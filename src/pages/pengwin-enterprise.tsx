import React, { useContext, createRef } from "react"
import styled from "styled-components"
// @ts-ignore
import SEO from "../components/seo"
import CTAHero from "../components/CTAHero/CTAHero"
import CTAButton from "../components/CTAHero/CTAButton"
import EnterpriseFeature from "../components/PengwinEnterprise/EnterpriseFeature"
import LinuxSoftwareIllistration from "../components/PengwinEnterprise/LinuxSoftwareIllistration"
import { MediaContext } from "../components/MediaContext"
import WindowsPengwinlinuxIllistration from "../components/PengwinEnterprise/WindowsPengwinLinuxIllistration"
import WindowsAutomationIllistration from "../components/PengwinEnterprise/WindowsAutomationIllistration"
import EnterpriseLinuxDistros from "../components/PengwinEnterprise/EnterpriseLinuxDistros"
import ContactForm from "../components/ContactForm/ContactForm"
import PengwinWebsiteLogo from "../svg/pengwin-website-logo"
import LiveTileIcon from "../svg/live-tile-icon"

const FeatureTextWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.2fr 0.8fr;
  height: 100%;
  p {
    line-height: 1.2em;
  }
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

const formSubmitHandler = e => {
  e.preventDefault()
  console.error("Form submittion not yet implemented")
}

const PengwinEnterprise = () => {
  const { media } = useContext(MediaContext)
  const mobile = media === "mobile" || media === "small" || media === "medium"
  const formRef = createRef<HTMLDivElement>()

  const scrollToRFQ = () => {
    if (formRef.current) {
      if (formRef.current.scrollIntoView) {
        formRef.current.scrollIntoView({ behavior: "smooth" })
      } else {
        window.location.hash = "rfq-form"
      }
    }
  }

  return (
    <>
      <SEO title="Pengwin Enterprise" />
      <CTAHero
        renderButton={() => (
          <CTAButton onClick={scrollToRFQ} fontSize={".9em"}>
            Request a Quote
          </CTAButton>
        )}
        renderText={() => "Unleash your organization’s developers and IT staff"}
        renderLogo={() => <PengwinWebsiteLogo width={mobile ? "300" : "40vw"} height="85%" />}
        renderHero={() => <LiveTileIcon width="130%" height="130%" />}
      />
      <h3 style={{ marginTop: "3em", marginBottom: "2em", textAlign: "center", color: "#929292" }}>
        Compatible Linux Distros
      </h3>
      <EnterpriseLinuxDistros maxImageWidth={"200px"} mobile={media === "mobile"} />
      <EnterpriseFeature
        position="left"
        renderIllistration={() => <LinuxSoftwareIllistration width={mobile ? "300px" : "450px"} />}
      >
        <EnterpriseFeaturChild heading={"Unlock Linux Software on Windows"}>
          <p>
            Unlock powerful Linux software on Windows 10 and Windows 10 Server, including: Azure and
            Amazon cloud tools, Apache, Docker, Git, Go, Node.js, OpenJDK, Ruby on Rails, and Rust.
          </p>
        </EnterpriseFeaturChild>
      </EnterpriseFeature>
      <EnterpriseFeature
        style={{ marginTop: "1em" }}
        position="right"
        renderIllistration={() => (
          <WindowsPengwinlinuxIllistration width={mobile ? "300px" : "400px"} />
        )}
      >
        <EnterpriseFeaturChild heading={"Administer Linux/BSD Servers from Windows"}>
          <p>
            Securely connect to and administer Linux/BSD servers, both on-site and cloud, from
            Windows 10 devices, such as a Surface Pro.
          </p>
        </EnterpriseFeaturChild>
      </EnterpriseFeature>
      <EnterpriseFeature
        position="left"
        renderIllistration={() => (
          <WindowsAutomationIllistration width={mobile ? "300px" : "450px"} />
        )}
      >
        <EnterpriseFeaturChild heading={"Automate Windows and Linux"}>
          <p>
            Automate routine Windows and Linux tasks with Bash, Python, PowerShell, and other
            scripting languages, weaving tools from both platforms together.
          </p>
        </EnterpriseFeaturChild>
      </EnterpriseFeature>
      <br />
      <EnterpriseFeature
        position="right"
        renderIllistration={() => <EnterpriseLinuxDistros maxImageWidth={"250px"} mobile={true} />}
      >
        <EnterpriseFeaturChild heading={"Use Existing Infrastructure"}>
          <p>
            Leverage your organization’s existing enterprise Linux subscriptions and infrastructure,
            including Red Hat Satellite, Ansible, and Space Walk.
          </p>
        </EnterpriseFeaturChild>
      </EnterpriseFeature>

      <div
        style={{ marginTop: "8em", display: "flex", justifyContent: "center" }}
        className={"rfq-form"}
      >
        <ContactForm
          onSubmit={formSubmitHandler}
          containerId="request-quote-form"
          headingText="Request a quote"
          style={{ width: mobile ? "100%" : "80%" }}
          ref={formRef}
        />
      </div>
    </>
  )
}

export default PengwinEnterprise
