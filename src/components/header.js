import PropTypes from "prop-types"
import React from "react"
import MainMenu from "./MainMenu/MainMenu"
const Header = () => (
  <header
    style={{
      background: `#FFF`,
      height: "70px",
    }}
  >
    <MainMenu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
