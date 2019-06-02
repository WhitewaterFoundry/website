import React from "react"
import MainMenu from "./MainMenu/MainMenu"
import MenuItem from "./MainMenu/MenuItem"

const Header: React.FC<{ menuItems: MenuItem[]; mobile: boolean }> = ({ menuItems, mobile }) => (
  <header
    style={{
      background: `#FFF`,
      height: "70px",
    }}
  >
    <MainMenu menuItems={menuItems} renderIcon={() => <p>icon</p>} mobile={mobile} />
  </header>
)

export default Header
