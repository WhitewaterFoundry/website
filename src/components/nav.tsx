import React, { CSSProperties } from "react"
import Img from "gatsby-image"
import MainMenu from "./MainMenu/MainMenu"
import { useWebsiteLogo } from "./MainMenu/useWebsiteLogo"
import MenuItem from "./MainMenu/MenuItem"

const Nav: React.FC<{ menuItems: MenuItem[]; mobile: boolean; style: CSSProperties }> = ({
  menuItems,
  mobile,
  style,
}) => (
  <nav
    style={{
      background: `#FFF`,
      height: "70px",
      ...style,
    }}
  >
    <MainMenu
      menuItems={menuItems}
      renderIcon={() => <Img fluid={useWebsiteLogo()} />}
      mobile={mobile}
    />
  </nav>
)

export default Nav
