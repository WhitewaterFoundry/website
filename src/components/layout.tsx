import React, { useState } from "react"
import styled from "styled-components"
import { useMediaQueries } from "../hooks/useMediaQueries"
import { MediaContext } from "./MediaContext"
import Header from "./header"
import Footer from "./footer"
import { useMenuItems } from "./MainMenu/useMenuItems"
import "./layout.css"

const HeaderWrapper = styled.div<{ mobile: boolean }>`
  ${({ mobile }) => (mobile ? "position: fixed; top: 0;" : "position: absolute; top: 0;")}
  width: 100%;
`

const Layout: React.FC = ({ children }) => {
  const [media, setCurrentMedia] = useState("none")
  const [portrait, setPortrait] = useState("none")

  useMediaQueries(
    [
      ["mobile", "(max-width: 480px)"],
      ["small", "(min-width: 480px)"],
      ["medium", "(min-width: 800px)"],
      ["large", "(min-width: 900px)"],
    ],
    setCurrentMedia
  )

  useMediaQueries([["portrait", "(orientation: portrait)"]], setPortrait)

  const menuItems = useMenuItems()
  const mobile = media === "mobile" || media === "small"

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          padding: `0`,
          paddingTop: "72px",
        }}
      >
        <main>
          <MediaContext.Provider value={{ media: media, portrait: portrait === "portrait" }}>
            {children}
          </MediaContext.Provider>
        </main>
        <footer>
          <Footer mobile={mobile} />
        </footer>
        <HeaderWrapper mobile={mobile}>
          <Header menuItems={menuItems} mobile={mobile} />
        </HeaderWrapper>
      </div>
    </>
  )
}

export default Layout
