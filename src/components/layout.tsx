import React, { useState } from "react"
import { useMediaQueries } from "../hooks/useMediaQueries"
import { MediaContext } from "./MediaContext"
import Nav from "./nav"
import Footer from "./footer"
import { useMenuItems } from "./MainMenu/useMenuItems"
import "./layout.css"
import MediaWrapper from "./Common/MediaWrapper"

const Layout: React.FC = ({ children }) => {
  const [media, setCurrentMedia] = useState("none")

  useMediaQueries(
    [
      ["mobile", "(max-width: 480px)"],
      ["small", "(min-width: 480px)"],
      ["medium", "(min-width: 800px)"],
      ["large", "(min-width: 900px)"],
    ],
    setCurrentMedia
  )

  const menuItems = useMenuItems()
  const mobile = media === "mobile" || media === "small"

  return (
    <>
      <MediaContext.Provider value={{ media: media }}>
        <div
          style={{
            margin: `0 auto`,
            padding: `0`,
          }}
        >
          <main>
            <MediaWrapper>{children}</MediaWrapper>
          </main>
          <footer>
            <Footer mobile={mobile} />
          </footer>
          <Nav
            style={{ position: mobile ? "fixed" : "absolute", top: "0", width: "100%" }}
            menuItems={menuItems}
            mobile={mobile}
          />
        </div>
      </MediaContext.Provider>
    </>
  )
}

export default Layout
