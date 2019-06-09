import React from "react"
import Img from "gatsby-image"
import MainMenu from "./MainMenu/MainMenu"
import { useWebsiteLogo } from "../components/MainMenu/useWebsiteLogo"
import MenuItem from "./MainMenu/MenuItem"

const Header: React.FC<{ menuItems: MenuItem[]; mobile: boolean }> = ({ menuItems, mobile }) => (
  <header
    style={{
      background: `#FFF`,
      height: "70px",
    }}
  >
    <MainMenu
      menuItems={menuItems}
      renderIcon={() => <Img fluid={useWebsiteLogo()} />}
      mobile={mobile}
    />
  </header>
)

export default Header
