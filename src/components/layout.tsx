import React, { useState, useContext } from "react"
import { useMediaQueries } from "../hooks/useMediaQueries"
import { MediaContext } from "./MediaContext"
import Header from "./header"
import { useMenuItems } from "./MainMenu/useMenuItems"
import "./layout.css"

const Layout: React.FC = ({ children }) => {
  const [media, setCurrentMedia] = useState("none")

  useMediaQueries(
    [
      ["mobile", "(max-width: 480px)"],
      ["small", "(min-width: 480px)"],
      ["medium", "(min-width: 800px)"],
      ["large", "(min-width: 1200px)"],
    ],
    setCurrentMedia
  )

  const menuItems = useMenuItems()

  return (
    <>
      <Header menuItems={menuItems} mobile={media === "mobile" || media === "small"} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0`,
          paddingTop: 0,
        }}
      >
        <main>
          <MediaContext.Provider value={{ media: media }}>{children}</MediaContext.Provider>
        </main>
        <footer>© {new Date().getFullYear()}, Whitewater Foundry</footer>
      </div>
    </>
  )
}

export default Layout
