import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div<{ mobile: boolean }>`
  margin-top: 4em;
  padding-top: 4px;
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  min-height: 64px;
  background-color: #111;
  color: #fdfcff;
  a {
    color: #fdfcff;
  }
  div {
    padding: ${({ mobile }) => (mobile ? "0" : "8px")};
  }
`

const FooterDevider: React.FC<{ mobile: boolean }> = ({ mobile }) => (mobile ? null : <div>|</div>)

const Footer: React.FC<{ mobile: boolean }> = ({ mobile }) => {
  return (
    <FooterWrapper mobile={mobile}>
      <div>© {new Date().getFullYear()}, Whitewater Foundry, Ltd. Co.</div>
      <FooterDevider mobile={mobile} />
      <div>Developed Worldwide</div>
      <FooterDevider mobile={mobile} />
      <div>Headquartered Columbus, Georgia, USA</div>
      <FooterDevider mobile={mobile} />
      <div>contact@whitewaterfoundry.com</div>
      <FooterDevider mobile={mobile} />
      <div>
        <a href="#">Legal </a>
      </div>
    </FooterWrapper>
  )
}

export default Footer
